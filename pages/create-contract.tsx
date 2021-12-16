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
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Select,
  Avatar,
  Text
} from "@chakra-ui/react";
import Head from 'next/head'
import MultiSelectMenu from "../components/MutipleSelect";
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import {
  AutoComplete,
  AutoCompleteGroup,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from "@choc-ui/chakra-autocomplete";

export interface Item {
  label: string;
  value: string;
}

export default function Component() {
  const [usersRoles, setUserRoles] = useState([{ user: "", role: 0 }])
  const [usersRoleValues, setUserRole] = useState([""])
  const [usersInputs, setUserInputs] = useState([{
    input: "",
    question: "",
    type: "INT",
    roles: 0,
    trigger: { operator: "", value: "" },
    action: ""
  }])

  const [form, setForm] = useState({
    title: "",
    collateral: 0,
    relationType: "DISTRIBUTED",
    judge: "asdasd",
    privacyType: "",
    roles: 0,

  })
  const options = ["Noa Rahman", "Julie Molina", "Leonidas Browning", "Qiang He", "Dong Liu", "Zack Jacobs"];

  const createNewUserRole = (e: any) => {
    setUserInputs([...usersInputs, {
      input: "",
      question: "",
      type: "INT",
      roles: 0,
      trigger: { operator: "", value: "" },
      action: ""
    }])
  }

  const createNewUserIput = (e: any) => {
    setUserRoles([...usersRoles, { user: "", role: 0 }])
  }

  const chooseInputAction = (type_: string, name: string) => {
    if (type_ == "1") {
      return (
        <InputGroup>
          <InputRightElement
            pointerEvents='none'
            color='gray.400'
            fontSize='1.2em'
            children='%'
          />
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

  const handleChangeNumber = (name: string, value: any) => {
    setForm({ ...form, [name]: value })

    if (name == "roles") {
      const value_ = parseInt(value);
      setUserRole(Array.from(Array(value_+1).keys()).map(e => String(e)))
    }
  }

  const handleChangeSelect = (name: string) => {
    const element = (document.getElementById(name) as HTMLInputElement);
    const value = element == null ? "" : element.value;
    setForm({ ...form, [name]: value })
  }


  return (
    <Box bg={"gray.50"} p={12}>
      <Head>
        <title>Create a Contract</title>
      </Head>
      <Heading fontSize="lg" fontWeight="medium" lineHeight="6" color="blue.600">
        Create a Contract
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
                  Contract Title
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

            </SimpleGrid>

            <SimpleGrid columns={2} spacing={6}>
              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Relation Type
                </FormLabel>
                <Select variant="outline" onChange={(e) => handleChangeNumber("relationType", e)} id="relationType" >
                  <option value='DISTRIBUTED'>DISTRIBUTED</option>
                  <option value='CONVERGENT'>CONVERGENT</option>

                </Select>
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Privacy Type
                </FormLabel>
                <Select variant="outline" onChange={e => handleChangeSelect("privacyType")} id="privacyType">
                  <option value="PUBLIC">PUBLIC</option>
                  <option value="PRIVATE">PRIVATE</option>

                </Select>
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
                <NumberInput step={1} min={0} precision={0} onChange={(e) => handleChangeNumber("roles", e)} name="roles">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
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
                      onClick={createNewUserRole}
                    >
                      <AddIcon />
                    </Button>
                  </FormControl>
                </SimpleGrid>

              ))}


            </>}

          <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" p={15} pb={0}>
            <Heading fontSize="md" fontWeight="medium" lineHeight="6" color="blue.600">
              Terms
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
              Inputs
            </Heading>
          </Box>

          {usersRoles.map((userRole, index) => (
            <SimpleGrid columns={6} spacing={6} p={5}  key={`triggers-${index}`}>
              <FormControl as={GridItem} colSpan={[2, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Input Name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Question identifier"
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
                  <option value="INT">INTEGER</option>
                  <option value="BOOL">BOOLEAN</option>

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
                  onClick={createNewUserIput}
                >
                  <AddIcon />
                </Button>
              </FormControl>

            </SimpleGrid>
          ))}

          <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" p={15}>
            <Heading fontSize="sm" fontWeight="medium" lineHeight="6" color="blue.600">
              Triggers
            </Heading>
          </Box>

          {usersInputs.map((userInput, index) => (
            <SimpleGrid columns={6} spacing={6} p={5}  key={`input-${index}`}>
              <FormControl as={GridItem} colSpan={[2, 1]}>
                <FormLabel
                  htmlFor="price"
                  fontSize="sm"
                  fontWeight="md"
                  color={"blue.700"}
                >
                  Input Name
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
                <Select variant="outline" onChange={e => handleChangeSelect("privacyType")} id="privacyType">
                  {
                    userInput.type == "INT" ?
                      <>
                        <option value="INT">EQUALS</option>
                        <option value="INT">GREATER THAN</option>
                        <option value="BOOL">LESS THAN</option>
                      </> :
                      <option value="INT">EQUALS</option>
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
                <Select variant="outline" onChange={e => handleChangeSelect("privacyType")} id="privacyType">
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
                {chooseInputAction("1", "action")}
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
                  onClick={createNewUserIput}
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