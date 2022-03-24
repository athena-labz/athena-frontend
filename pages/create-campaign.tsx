import React from "react";
import {
  chakra,
  Box,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SimpleGrid,
  GridItem,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Tooltip,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Select,
  Flex,
  Link,
  Textarea,
} from "@chakra-ui/react";
import DatePicker from "../components/DatePicker";

import Head from "next/head";
import MultiSelectMenu from "../components/MutipleSelect";
import AuthenticationRequired from "../components/AuthenticationRequired";
import {
  AddIcon,
  DeleteIcon,
  InfoOutlineIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import hash_generator from "../utils/hash";
import { useUser } from "../contexts/UserContext";
import Router from "next/router";
import axios from 'axios';

export interface Item {
  label: string;
  value: string;
}

interface GenericObject {
  [key: string]: any;
}

interface Deliverable {
  deliverable: string;
  days: number;
  tokens: number;
}

export default function Component() {
  const { isSignedIn, getUser } = useUser();
  if (isSignedIn() === false) {
    return <AuthenticationRequired />;
  }

  const [title, setTitle] = useState<string>("");
  const [collateral, setCollateral] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [judges, setJudges] = useState<string[]>([""]);
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    {
      deliverable: "",
      days: 0,
      tokens: 0,
    },
  ]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [apiBeingUsed, setApiBeingUsed] = useState(false);

  const options = [
    "Noa.Rahman@email.com",
    "Julie.Molina@email.com",
    "Leonidas.Browning@email.com",
    "Qiang.He@email.com",
    "Dong.Liu@email.com",
    "Zack.Jacobs@email.com",
  ];

  const createNewJudge = (e: any) => {
    setJudges([...judges, ""]);
  };

  const removeJudge = (idx: number) => {
    let judgesCopy = JSON.parse(JSON.stringify(judges));
    judgesCopy.splice(idx, 1);

    setJudges(judgesCopy);
  };

  const setJudge = (idx: number, val: string) => {
    let judgesCopy = JSON.parse(JSON.stringify(judges));
    judgesCopy[idx] = val;

    setJudges(judgesCopy);
  };

  const createNewDeliverable = (e: any) => {
    setDeliverables([
      ...deliverables,
      {
        deliverable: "",
        days: 0,
        tokens: 0,
      },
    ]);
  };

  const removeDeliverable = (idx: number) => {
    let deliverablesCopy = JSON.parse(JSON.stringify(deliverables));
    deliverablesCopy.splice(idx, 1);

    setDeliverables(deliverablesCopy);
  };

  const setDeliverable = (idx: number, val: string) => {
    let deliverablesCopy = JSON.parse(JSON.stringify(deliverables));
    deliverablesCopy[idx] = {
      ...deliverablesCopy[idx],
      deliverable: val,
    };

    setDeliverables(deliverablesCopy);
  };

  const setDays = (idx: number, val: number) => {
    let deliverablesCopy = JSON.parse(JSON.stringify(deliverables));
    deliverablesCopy[idx] = {
      ...deliverablesCopy[idx],
      days: val,
    };

    setDeliverables(deliverablesCopy);
  };

  const setTokens = (idx: number, val: number) => {
    let deliverablesCopy = JSON.parse(JSON.stringify(deliverables));
    deliverablesCopy[idx] = {
      ...deliverablesCopy[idx],
      tokens: val,
    };

    setDeliverables(deliverablesCopy);
  };

  const createProject = () => {
    const backend = axios.create({
      baseURL: "http://127.0.0.1:5000/",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    setApiBeingUsed(true);
    backend.post('/create-project', {
      name: title,
      description: description,
      collateral: collateral,
      judges: judges,
      deliverables: deliverables,
      token: getUser()
    }).then(res => {
      console.log("cool")
      console.log(res)
      setApiBeingUsed(false);
    }).catch(err => {
      console.error(err)
      setApiBeingUsed(false);
    })
  }

  return (
    <Box bg={"gray.50"} p={12}>
      <Head>
        <title>Create a Contract</title>
      </Head>
      <Heading
        fontSize="lg"
        fontWeight="medium"
        lineHeight="6"
        color="blue.600"
      >
        Create a Project {"  "}
        <Tooltip label="Article about contracts" aria-label="A tooltip">
          <Link
            isExternal
            href="https://github.com/athena-labz/athena-frontend"
          >
            <InfoOutlineIcon as={"a"} />
          </Link>
        </Tooltip>
      </Heading>

      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box borderTop="solid 1px" borderTopColor={"blue.200"}></Box>
        </Box>
      </Box>

      <Box mt={[10, 0]}>
        <chakra.form
          shadow="base"
          rounded={[null, "md"]}
          overflow={{ sm: "hidden" }}
        >
          <Stack px={4} py={5} p={[null, 6]} bg={"white"} spacing={6}>
            <SimpleGrid columns={2} spacing={6}>
              <FormControl as={GridItem} colSpan={[1, 0]}>
                <FormLabel
                  htmlFor="service_title"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Project name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Brief description for your contract"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  id="service_title"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="blue.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                  value={title}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[1, 0]}>
                <FormLabel
                  htmlFor="service_title"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Collateral
                </FormLabel>
                <NumberInput
                  step={1}
                  min={0}
                  value={collateral}
                  onChange={(_, num) => setCollateral(num)}
                  name="collateral"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={1} spacing={6}>
              <FormControl as={GridItem} colSpan={[1, 0]}>
                <FormLabel
                  htmlFor="service_title"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Project Description
                </FormLabel>
                <Textarea
                  type="text"
                  placeholder="Brief description for your contract"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="blue.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={1} spacing={6}>
              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Judges
                </FormLabel>

                <Stack direction="column" width="100%" alignItems="center">
                  {judges.map((val, idx) => (
                    <Stack direction="row" width="100%" alignItems="center">
                      <AutoComplete rollNavigation>
                        <AutoCompleteInput
                          variant="outline"
                          placeholder="Search judge..."
                          value={val}
                          onChange={(e) => setJudge(idx, e.target.value)}
                          autoFocus
                        />
                        <AutoCompleteList>
                          {options.map((option, oid) => (
                            <AutoCompleteItem
                              key={`option-${oid}`}
                              value={option}
                              label={option}
                              textTransform="capitalize"
                            >
                              {option}
                            </AutoCompleteItem>
                          ))}
                        </AutoCompleteList>
                      </AutoComplete>
                      {idx === judges.length - 1 ? (
                        <Button
                          ml="0"
                          mr="0"
                          mb="0.5rem"
                          bg="blue.500"
                          colorScheme="brand"
                          fontWeight="sm"
                          size="sm"
                          _hover={{
                            bg: "blue.400",
                          }}
                          onClick={createNewJudge}
                        >
                          <AddIcon />
                        </Button>
                      ) : (
                        <Button
                          ml="0"
                          mr="0"
                          mb="0.5rem"
                          bg="red.500"
                          colorScheme="brand"
                          fontWeight="sm"
                          size="sm"
                          _hover={{
                            bg: "red.400",
                          }}
                          onClick={() => removeJudge(idx)}
                        >
                          <DeleteIcon />
                        </Button>
                      )}
                    </Stack>
                  ))}
                </Stack>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={1} spacing={6}>
              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Deliverables
                </FormLabel>

                <Stack direction="column" width="100%" alignItems="center">
                  {deliverables.map(({ deliverable, days, tokens }, idx) => (
                    <Stack direction="row" width="100%" alignItems="center">
                      <SimpleGrid
                        columns={3}
                        spacing={6}
                        width="100%"
                        alignItems="center"
                      >
                        <Input
                          type="text"
                          placeholder="I will complete X..."
                          name="deliverable"
                          id="deliverable"
                          value={deliverable}
                          onChange={(e) => setDeliverable(idx, e.target.value)}
                          mt={1}
                          focusBorderColor="blue.400"
                          shadow="sm"
                          size="md"
                          w="full"
                          rounded="md"
                        />
                        <Input
                          type="number"
                          placeholder="In Y days..."
                          name="days"
                          id="days"
                          value={days === 0 ? "" : days}
                          onChange={(e) => setDays(idx, Number(e.target.value))}
                          mt={1}
                          focusBorderColor="blue.400"
                          shadow="sm"
                          size="md"
                          w="full"
                          rounded="md"
                        />
                        <Input
                          type="number"
                          placeholder="For Z tokens..."
                          name="tokens"
                          id="tokens"
                          value={tokens === 0 ? "" : tokens}
                          onChange={(e) =>
                            setTokens(idx, Number(e.target.value))
                          }
                          mt={1}
                          focusBorderColor="blue.400"
                          shadow="sm"
                          size="md"
                          w="full"
                          rounded="md"
                        />
                      </SimpleGrid>
                      {idx === deliverables.length - 1 ? (
                        <Button
                          ml="0"
                          mr="0"
                          mb="0.5rem"
                          bg="blue.500"
                          colorScheme="brand"
                          fontWeight="sm"
                          size="sm"
                          _hover={{
                            bg: "blue.400",
                          }}
                          onClick={createNewDeliverable}
                        >
                          <AddIcon />
                        </Button>
                      ) : (
                        <Button
                          ml="0"
                          mr="0"
                          mb="0.5rem"
                          bg="red.500"
                          colorScheme="brand"
                          fontWeight="sm"
                          size="sm"
                          _hover={{
                            bg: "red.400",
                          }}
                          onClick={() => removeDeliverable(idx)}
                        >
                          <DeleteIcon />
                        </Button>
                      )}
                    </Stack>
                  ))}
                </Stack>
              </FormControl>
            </SimpleGrid>
          </Stack>

          <Box px={{ base: 4, sm: 6 }} py={3} bg={"white"} textAlign="right">
            <Button
              type="submit"
              bg="#38b6ff"
              colorScheme="blue"
              _focus={{ shadow: "" }}
              fontWeight="md"
              _hover={{
                bg: "blue.400",
              }}
              disabled={apiBeingUsed}
              onClick={createProject}
            >
              Create
            </Button>
          </Box>
        </chakra.form>
      </Box>
    </Box>
  );
}
