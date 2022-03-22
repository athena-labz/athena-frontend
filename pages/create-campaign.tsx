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

export interface Item {
  label: string;
  value: string;
}

interface GenericObject {
  [key: string]: any;
}

export default function Component() {
  const { isSignedIn } = useUser();
  if (isSignedIn() === false) {
    return <AuthenticationRequired />;
  }

  const [title, setTitle] = useState<string>("");
  const [collateral, setCollateral] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [judges, setJudges] = useState<string[]>([""]);
  // TODO: Make this deliverable, deadline, funds
  const [deliverables, setDeliverables] = useState<string[]>([""]);

  const options = [
    "Noa Rahman",
    "Julie Molina",
    "Leonidas Browning",
    "Qiang He",
    "Dong Liu",
    "Zack Jacobs",
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
    setDeliverables([...deliverables, ""]);
  };

  const removeDeliverable = (idx: number) => {
    let deliverablesCopy = JSON.parse(JSON.stringify(deliverables));
    deliverablesCopy.splice(idx, 1);

    setDeliverables(deliverablesCopy);
  };

  const setDeliverable = (idx: number, val: string) => {
    let deliverablesCopy = JSON.parse(JSON.stringify(deliverables));
    deliverablesCopy[idx] = val;

    setDeliverables(deliverablesCopy);
  };

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
                  {deliverables.map((val, idx) => (
                    <Stack direction="row" width="100%" alignItems="center">
                      <Input
                        type="text"
                        placeholder="I will..."
                        name="deliverable"
                        id="deliverable"
                        value={val}
                        onChange={(e) => setDeliverable(idx, e.target.value)}
                        mt={1}
                        focusBorderColor="blue.400"
                        shadow="sm"
                        size="md"
                        w="full"
                        rounded="md"
                      />
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
            >
              Save
            </Button>
          </Box>
        </chakra.form>
      </Box>
    </Box>
  );
}
