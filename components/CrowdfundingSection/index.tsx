import React from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  Stack,
} from "@chakra-ui/react";

// https://react-icons.github.io/react-icons
import { FiUsers } from 'react-icons/fi';

export default function CrowdfundingSection() {

const Feature = (props:any) => {
    return (
    <Flex>
      <Flex shrink={0}>
      <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={"brand.500"}
            color="white"
          >
              {props.icon}
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={"gray.900"}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={"gray.500"}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
  );
};
return (
    <Box mt={"1rem"} bg={"white"} rounded="xl" mb={"10rem"} id="crowdfunding" style={{scrollMarginTop:150}}>
      <Box maxW="9xl" mx="0.9rem" px={1}>
        <Box textAlign={{ lg: "center" }}>
          <chakra.h2
            color={"brand.600"}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Crowdfunding campaigns 
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={"gray.900"}
          >
            A better way to support  a idea
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={"gray.500"}
          >
            Any idea, service or physical object can be promoted
          </chakra.p>
        </Box>

        <Box mt={10}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature
              title="Competitive fees"
              icon={<Icon as={FiUsers} w={8} h={8} color="gray.500"/>}
            >
               2% of total pledged amount. For reference Kickstarter fees are 5% + 5-5% of payment transaction fees.
            </Feature>

            <Feature
              title="Cardano Catalyst relationship"
              icon={<Icon as={FiUsers} w={8} h={8} color="gray.500"/>}
              
            >
              We shall select a category suitable to this proposal as soon as Fund 8 is open
            </Feature>

            <Feature
              title="Transfers are instant"
              icon={<Icon as={FiUsers} w={8} h={8} color="gray.500"/>}
            >
              Every member or members team can promote a crowd-funding campaign 
            </Feature>

            <Feature
              title="Mobile notifications"
              icon={<Icon as={FiUsers} w={8} h={8} color="gray.500"/>}
            >
              Campaign updates will be notified over mobile app
            </Feature>
          </Stack>
        </Box>
      </Box>
    </Box>
);
}
