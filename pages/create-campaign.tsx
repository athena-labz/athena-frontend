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
  Link
} from "@chakra-ui/react";
import Head from 'next/head'
import MultiSelectMenu from "../components/MutipleSelect";
import { AddIcon, InfoOutlineIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from "@choc-ui/chakra-autocomplete";


export interface Item {
  label: string;
  value: string;
}

interface GenericObject {
  [key: string]: any
}

export default function Component() {
  const [usersRoles, setUserRoles] = useState([{ user: "", role: 0 }])
  const [usersRoleValues, setUserRole] = useState([""])
  const [usersInputs, setUserInputs] = useState<GenericObject[]>([{
    input: "",
    question: "",
    type: "INT",
  }])

  const [triggers, setTriggers] = useState<GenericObject[]>([{
    "input": "",
    "operator": "",
    "value": "",
    "action": "",
    "actionSelector": ""
  }])

  const [form, setForm] = useState({
    title: "",
    collateral: 0,
    relationType: "DISTRIBUTED",
    judge: "asdasd",
    privacyType: "",
    roles: 0
  })
  const options = ["Noa Rahman", "Julie Molina", "Leonidas Browning", "Qiang He", "Dong Liu", "Zack Jacobs"];

  const createNewUserRole = (e: any) => {
    setUserInputs([...usersInputs, {
      input: "",
      question: "",
      type: "INT"
    }])
  }

  const createNewUserRoles = (e: any) => {
    setUserRoles([...usersRoles, { user: "", role: 0 }])
    console.log(triggers)
  }

  const createNewUserInput = (e: any) => {
    setUserInputs([...usersInputs, {
      input: "",
      question: "",
      type: "INT",
    }])
  }

  const chooseInputAction = (type_: string, name: string) => {
    if (type_ == "1") {
      return (
        <InputGroup>
          <InputRightElement
            pointerEvents='none'
            color='gray.400'
            fontSize='1.2em'>
            %
          </InputRightElement>
          <Input placeholder='Enter amount' />

        </InputGroup>
      )
    } else if (type_ == "2") {
      return (<NumberInput step={1} min={0} onChange={(e) => handleChangeNumber("collateral", e)} >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>)

    } else if (type_ == "3") {
      return (
        <NumberInput step={1} min={0} onChange={(e) => handleChangeNumber("collateral", e)} >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )

    } else {
      return (
        <Input
          type="text"
          name={name}
          onChange={handleChange}
          id="service_title"
          autoComplete="family-name"
          mt={1}
          focusBorderColor="blue.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
        />
      )
    }
  }

  const handleChange = (e: any) => {
    console.log(e)
    //setForm({...form,[e.target.name]:e.target.value})
  }

  const handleChangeInput = (e: any, index: number) => {
    //console.log(e.target.name, index)
    let clone = usersInputs[index]
    clone[e.target.name] = e.target.value;

    setUserInputs([
      ...usersInputs.slice(0, index),
      clone,
      ...usersInputs.slice(index + 1)
    ]
    )
  }

  const handleChangeNumber = (name: string, value: any) => {
    setForm({ ...form, [name]: value })

    if (name == "roles") {
      const value_ = parseInt(value);
      setUserRole(Array.from(Array(value_ + 1).keys()).map(e => String(e)))
    }
  }

  const handleChangeSelect = (name: string) => {
    const element = (document.getElementById(name) as HTMLInputElement);
    const value = element == null ? "" : element.value;
    setForm({ ...form, [name]: value })
  }

  const handleChangeSelectTrigger = (name: string, index: number) => {
    const element = (document.getElementById(name) as HTMLInputElement);
    const value = element == null ? "" : element.value;

    let clone = triggers[index]
    clone[name] = value;

    setTriggers([
      ...triggers.slice(0, index),
      clone,
      ...triggers.slice(index + 1)
    ]
    )
  }

  return (
    <Box bg={"gray.50"} p={12}>
      <Head>
        <title>Create a Contract</title>
      </Head>
      <Heading fontSize="lg" fontWeight="medium" lineHeight="6" color="blue.600">
        Create a Project {"  "}
        <Tooltip label="Article about contracts" aria-label='A tooltip'>
          <Link isExternal href="https://github.com/athena-labz/athena-frontend"  ><InfoOutlineIcon as={"a"} /></Link>
        </Tooltip>

      </Heading>

      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={"blue.200"}
          ></Box>
        </Box>
      </Box>

      <Box mt={[10, 0]}>
        <chakra.form
          shadow="base"
          rounded={[null, "md"]}
          overflow={{ sm: "hidden" }}
        >
          <Stack
            px={4}
            py={5}
            p={[null, 6]}
            bg={"white"}
            spacing={6}
          >
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
                  onChange={handleChange}
                  id="service_title"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="blue.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[1, 0]}>
                <FormLabel
                  htmlFor="service_title"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Project Description
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Brief description for your contract"
                  name="title"
                  onChange={handleChange}
                  id="service_title"
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

            <SimpleGrid columns={2} spacing={6}>
            <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Collateral
                </FormLabel>
                <NumberInput step={1} min={0} onChange={(e) => handleChangeNumber("collateral", e)} name="collateral">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Judge
                </FormLabel>

                <Stack direction="column">
                  <AutoComplete rollNavigation>
                    <AutoCompleteInput
                      variant="outline"
                      placeholder="Search judge..."
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
                </Stack>
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Roles
                </FormLabel>

                <Select variant="outline" onChange={e => handleChangeSelect("privacyType")} id="privacyType">
                  <option value="INT">PUBLISHER</option>
                  <option value="BOOL">ASSIGNEE</option>

                </Select>
              </FormControl>


            </SimpleGrid>


          </Stack>
          {form.privacyType === "PRIVATE" &&
            <>
              <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" p={15}>
                <Heading fontSize="md" fontWeight="medium" lineHeight="6" color="blue.600">
                  Roles Map
                </Heading>
                <Box py={3}>
                  <Box
                    borderTop="solid 1px"
                    borderTopColor={"blue.200"}
                  ></Box>
                </Box>
              </Box>

              {usersRoles.map((userRole, index) => (
                <SimpleGrid columns={3} spacing={6} px={5} key={index + "*role"} mt={index > 0 ? 3 : 0}>
                  <FormControl as={GridItem} colSpan={[1, 1]}>
                    <FormLabel
                      htmlFor="service_title"
                      fontSize="sm"
                      fontWeight="md"
                      color={"blue.700"}
                    >
                      User
                    </FormLabel>
                    <Stack direction="column">
                      <AutoComplete rollNavigation>
                        <AutoCompleteInput
                          variant="outline"
                          placeholder="Search user..."
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
                    </Stack>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[4, 1]}>
                    <FormLabel
                      htmlFor="price"
                      fontSize="sm"
                      fontWeight="md"
                      color={"blue.700"}
                    >
                      Role
                    </FormLabel>
                    <NumberInput step={1} min={0} max={form.roles} onChange={(e) => handleChangeNumber("collateral", e)} name="collateral">
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[2, 1]} display="flex" alignItems="flex-end">
                    <Button
                      ml="1rem"
                      mb="0.5rem"
                      bg="blue.500"
                      colorScheme="brand"
                      fontWeight="sm"
                      size="sm"
                      _hover={{
                        bg: 'blue.400',
                      }}
                      onClick={createNewUserRoles}
                    >
                      <AddIcon />
                    </Button>
                  </FormControl>
                </SimpleGrid>

              ))}


            </>}

          <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" p={15} pb={0}>
            <Heading fontSize="md" fontWeight="medium" lineHeight="6" color="blue.600">
              Goals
            </Heading>
            <Box py={3}>
              <Box
                borderTop="solid 1px"
                borderTopColor={"blue.200"}
              ></Box>
            </Box>
          </Box>

          <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" px={15} pt={0}>
            <Heading fontSize="sm" fontWeight="medium" lineHeight="6" color="blue.600">
              Inputs {"   "}
              <Tooltip 
                   placement='right'
                  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero velit, rhoncus n" aria-label='A tooltip'>
                <InfoOutlineIcon as={"a"} />
              </Tooltip>
            </Heading>
          </Box>

          {usersInputs.map((userInput, index) => (
            <SimpleGrid columns={6} spacing={6} p={5} key={`triggers-${index}`}>
              <FormControl as={GridItem} colSpan={[2, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Question identifier
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Question identifier"
                  name="input"
                  onChange={e => handleChangeInput(e, index)}
                  value={userInput.input}
                  id="service_input"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="blue.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 2]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Question
                </FormLabel>
                <Input
                  type="text"
                  placeholder=""
                  name="title"
                  onChange={handleChange}
                  id="service_title"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="blue.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                />

              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Type
                </FormLabel>

                <Select variant="outline" onChange={e => handleChangeSelect("privacyType")} id="privacyType">
                  <option value="INT">QUANTITY</option>
                  <option value="BOOL">TRUE/FALSE</option>

                </Select>
              </FormControl>

              {usersRoleValues.length > 0 && <FormControl as={GridItem} colSpan={[4, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  {"-"}
                </FormLabel>
                <MultiSelectMenu label="Roles" options={usersRoleValues} />
              </FormControl>}

              <FormControl as={GridItem} colSpan={[2, 1]} display="flex" alignItems="flex-end">
                <Button
                  ml="1rem"
                  mb="0.5rem"
                  bg="blue.500"
                  colorScheme="brand"
                  fontWeight="sm"
                  size="sm"
                  _hover={{
                    bg: 'blue.400',
                  }}
                  onClick={createNewUserInput}
                >
                  <AddIcon />
                </Button>
              </FormControl>

            </SimpleGrid>
          ))}

          <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" p={15}>
            <Heading fontSize="sm" fontWeight="medium" lineHeight="6" color="blue.600">
              Triggers{"   "}
              <Tooltip 
                   placement='right'
                  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero velit, rhoncus n" aria-label='A tooltip'>
                <InfoOutlineIcon as={"a"} />
              </Tooltip>
            </Heading>
          </Box>

          {triggers.map((triggger, index) => (
            <SimpleGrid columns={6} spacing={6} p={5} key={`input-${index}`}>
              <FormControl as={GridItem} colSpan={[2, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Question identifier
                </FormLabel>
                <Select variant="outline" onChange={e => handleChangeSelect("privacyType")} id="privacyType">
                  {
                    usersInputs.map((userInput, index) => (<option key={`option-inpt-${index}`} value={userInput.input}>{userInput.input}</option>))
                  }
                </Select>
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Operator
                </FormLabel>
                <Select variant="outline" onChange={e => handleChangeSelectTrigger("operator", index)} id="operator">
                  <option value="INT">EQUALS</option>
                  <option value="INT">GREATER THAN</option>
                  <option value="BOOL">LESS THAN</option>
                </Select>

              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Value
                </FormLabel>
                <Input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  id="service_title"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="blue.400"
                  shadow="sm"
                  size="md"
                  w="full"
                  rounded="md"
                />

              </FormControl>

              <FormControl as={GridItem} colSpan={[4, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Action Selector
                </FormLabel>
                <Select variant="outline" onChange={e => handleChangeSelectTrigger("actionSelector", index)} id="actionSelector">
                  <option value="1">Decrease CAS</option>
                  <option value="2">Suspend from contract</option>
                  <option value="3">Pay from collateral</option>
                  <option value="4">Do in real life</option>
                </Select>
              </FormControl>

              <FormControl as={GridItem} colSpan={[4, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Action
                </FormLabel>
                {chooseInputAction(String(triggger.actionSelector), "action")}
              </FormControl>

              <FormControl as={GridItem} colSpan={[2, 1]} display="flex" alignItems="flex-end">
                <Button
                  ml="1rem"
                  mb="0.5rem"
                  bg="blue.500"
                  colorScheme="brand"
                  fontWeight="sm"
                  size="sm"
                  _hover={{
                    bg: 'blue.400',
                  }}
                  onClick={createNewUserRoles}
                >
                  <AddIcon />
                </Button>
              </FormControl>

            </SimpleGrid>
          ))}

          <Box
            px={{ base: 4, sm: 6 }}
            py={3}
            bg={"white"}
            textAlign="right"
          >
            <Button
              type="submit"
              bg="#38b6ff"
              colorScheme="blue"
              _focus={{ shadow: "" }}
              fontWeight="md"
              _hover={{
                bg: 'blue.400',
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