import type { GetStaticProps, NextPage } from "next";
import { useState, useCallback, useRef, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ServiceCard from "../components/ServiceCard";
import SearchSection from "../components/SearchSection";
import {
  Box,
  Select,
  Stack,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  Grid,
  Flex,
  GridItem,
  Button,
  Center,
  CircularProgress,
} from "@chakra-ui/react";

import type Project from "../types/project";
import { projects } from "./api/projects";

type Discoverprops = {
  projects: Project[];
};

const Discover = ({ projects }: Discoverprops) => {
  const [value, setValue] = useState(50);
  const [filtered, setFiltered] = useState(projects);

  // Create state
  const [state, setState] = useState({
    xoffset: 5.4,
    yoffset: 1.5,
  });

  useEffect(() => {
    onChange(50);
  }, []);

  const handleChangeSelect = (name: string) => {
    const element = document.getElementById(name) as HTMLInputElement;
    const value = element == null ? "" : element.value;

    if (value != "ALL" && name == "category")
      setFiltered(projects.filter((e: Project) => e.category === value));
    else setFiltered(projects);
  };

  const onChange = (new_value: number) => {
    let test = document.querySelector("#slider-thumb-testy");
    let test_data = null;
    if (test) {
      test_data = test.getBoundingClientRect();
    }
    if (test_data) {
      let x =
        new_value.toString().length == 1
          ? test_data.x * 0.063 - 2.2
          : test_data.x * 0.063 - 2.3;
      setState({
        xoffset: x,
        yoffset: 1.5,
      });
    }

    setValue(new_value);
  };

  return (
    <div>
      <Head>
        <title>ATHENA - Jobs</title>
      </Head>

      <section>
        <SearchSection
          projects={projects}
          filterServ={filtered}
          setfilter={setFiltered}
          isCampaign={false}
        />

        <Grid templateColumns="repeat(5, 1fr)" gap={2} px={"1.56rem"}>
          <GridItem rowSpan={2} colSpan={1}>
            <Box w="100%" h="100%">
              <Box w="100%" p={2} marginTop={"0.5rem"}>
                <FormControl>
                  <FormLabel
                    color="gray.600"
                    fontWeight="bold"
                    style={{ textTransform: "uppercase" }}
                  >
                    Category
                  </FormLabel>

                  <Select
                    id="category"
                    name="category"
                    onChange={(e) => handleChangeSelect("category")}
                    size="md"
                  >
                    <option value="Graphics & Design">Graphics & Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Writing & Translation">
                      Writing & Translation
                    </option>
                    <option value="Video & Animation">Video & Animation</option>
                    <option value="Music & Audio">Music & Audio</option>
                    <option value="Programming & Tech">
                      Programming & Tech
                    </option>
                    <option value="Blockchain & Cryptocurrency">
                      Blockchain & Cryptocurrency
                    </option>
                    <option value="Business">Business</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Trending">Trending</option>
                  </Select>
                </FormControl>
              </Box>

              <Box w="100%" p={2} marginTop={"0.5rem"}>
                <FormControl>
                  <FormLabel
                    color="gray.600"
                    fontWeight="bold"
                    style={{ textTransform: "uppercase" }}
                  >
                    Budget
                  </FormLabel>
                  <Stack direction="row">
                    <Input htmlSize={4} placeholder="Min. ($)" />
                    <Input htmlSize={4} placeholder="Max. ($)" />
                  </Stack>
                </FormControl>
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={4}>
            <Flex w="full" p={2} alignItems="center" justifyContent="center">
              <SimpleGrid
                columns={[1, 3]}
                gap="4rem"
                mx="auto"
                marginBottom={0}
                textAlign={["left", "center"]}
              >
                {filtered.map((project, index) => (
                  <ServiceCard
                    project={project}
                    key={`jobs-project-${index}`}
                  />
                ))}
              </SimpleGrid>
            </Flex>
          </GridItem>
        </Grid>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = projects();

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Discover;
