import React from "react";
import {
  chakra,
  Box,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Select,
  Avatar,
  Text
} from "@chakra-ui/react";
import { SearchIcon, AddIcon } from '@chakra-ui/icons';
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
  const [usersRoles, setUserRoles] = useState([{user:"",role:0}])
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
    setUserRoles([...usersRoles, {user:"",role:0}])
  }

  const handleChange = (e: any) => {
    console.log(e)
    //setForm({...form,[e.target.name]:e.target.value})
  }

  const handleChangeNumber = (name: string, value: any) => {
    setForm({ ...form, [name]: value })
  }

  const handleChangeSelect = (name: string) => {
    const element = document.getElementById(name);
    const value = element == null? "":element.value;
    setForm({ ...form, [name]: value })
  }


  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={12}>
      <Heading fontSize="lg" fontWeight="medium" lineHeight="6" color="blue.600">
        Create a Contract
      </Heading>
      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("blue.200", "whiteAlpha.200")}
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
            bg={useColorModeValue("white", "gray.700")}
            spacing={6}
          >
            <SimpleGrid columns={2} spacing={6}>
              <FormControl as={GridItem} colSpan={[1, 0]}>
                <FormLabel
                  htmlFor="service_title"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("blue.700", "blue.50")}
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
                  color={useColorModeValue("blue.700", "blue.50")}
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
                  color={useColorModeValue("blue.700", "blue.50")}
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
                  color={useColorModeValue("blue.700", "blue.50")}
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
                  color={useColorModeValue("blue.700", "blue.50")}
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
                  color={useColorModeValue("blue.700", "blue.50")}
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

              {usersRoles.map( (userRole,index) =>(
               <SimpleGrid columns={3} spacing={6} px={5} key={index+"AAA"} mt={index>0?3:0}>
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

          <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true" p={15}>
            <Heading fontSize="md" fontWeight="medium" lineHeight="6" color="blue.600">
              Terms
            </Heading>
            <Box py={3}>
              <Box
                borderTop="solid 1px"
                borderTopColor={useColorModeValue("blue.200", "whiteAlpha.200")}
              ></Box>
            </Box>
          </Box>

          <Box
            px={{ base: 4, sm: 6 }}
            py={3}
            bg={"white"}
            textAlign="right"
          >
            <Button
              type="submit"
              bg="blue.500"
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