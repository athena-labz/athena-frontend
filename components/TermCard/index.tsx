import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,Icon
} from "@chakra-ui/react";


import { MdPriorityHigh } from "react-icons/md";


type TermCardProps ={
  input_name:string,
  question:string,
  type:string,
  roles:number[]
  triggers:any[]
}
  
  export default function TermCard({input_name,type,roles,question,triggers}:TermCardProps) {
    const myTrigger =  triggers.filter(trigger => trigger.input_name === input_name)

    return (
      <Flex
        p={25}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg={useColorModeValue("white", "gray.800")}
          maxW="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
            Roles: {" "} {roles}
            </chakra.span>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: "gray.500" }}
            >
              {type}
            </Link>
          </Flex>
  
          <Box mt={2}>
            <chakra.h4
              fontSize="2xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"       
            >
              {input_name}
            </chakra.h4>
            <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
             {question}
            </chakra.p>
          </Box>

          <Box py={4}>
        

         {myTrigger && myTrigger.map( q => <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdPriorityHigh}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h3 px={2} fontSize="0.85rem" textTransform="uppercase">
              IF {q.operator} {q.value} THEN {q.action_selector}  {q.action}
            </chakra.h3>
          </Flex>)}
        </Box>
        </Box>       
      </Flex>
    );
  }