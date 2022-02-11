import type { GetStaticProps, NextPage } from 'next'
import { useState, useCallback, useRef, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ServiceCard from '../components/ServiceCard'
import { contracts } from './api/contract'
import SearchSection from '../components/SearchSection'
import {
  Box,
  Flex,
  chakra,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Progress,
  Icon,
} from '@chakra-ui/react'
import type Contract from '../types/contract'

// https://react-icons.github.io/react-icons
import { FiUsers, FiMapPin,FiCalendar } from 'react-icons/fi';

type Discoverprops = {
  contracts: Contract[]
}


const Discover = ({ contracts }: Discoverprops) => {
  const [filtered, setFiltered] = useState(contracts);


  return (
    <div >
      <Head>
        <title>ATHENA - Campaigns</title>
      </Head>


      <section>

        <SearchSection contracts={contracts} filterServ={filtered} setfilter={setFiltered} />

        <Flex
          w="full"
          bg={useColorModeValue("#F9FAFB", "gray.600")}
          p={50}
          alignItems="center"
          justifyContent="center"
        >
          <SimpleGrid
            columns={[1, 2, 3]}
            gap="34px"
            mx="auto"
            textAlign={["left", "center"]}
          >
            <Box
              bg={useColorModeValue("white", "gray.800")}
              px={0}
              py={0}
              pb={5}
              shadow="base"
              rounded="md"
              as={"a"}
              href={"www.google.com"}
              _hover={{ border: "0.08rem solid", borderColor: "blue.400" }}
            >
              <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://ksr-ugc.imgix.net/assets/036/035/134/ecbcb6ddcfa08dd62970f1ae6a2ff127_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641873036&auto=format&frame=1&q=92&s=546af219201b90d69bbf60ecb3002776"
                alt="Article"
              />
              <Flex justifyContent="right" alignItems="flex-end" pt={3} pr={3}>
                <Link
                  px={3}
                  py={0}
                  bg="gray.600"
                  color="gray.100"
                  fontSize="md"
                  fontWeight="700"
                  rounded="md"
                  _hover={{ bg: "gray.500" }}
                >
                  GAMES
                </Link>
              </Flex>
              <chakra.span
                fontSize="2xl"
                mt={3}
                fontWeight="medium"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Floating Floors
              </chakra.span>
              <chakra.p
                mb={6}
                p={2}
                fontSize="md"
                color={useColorModeValue("gray.600", "gray.500")}
                class="mb-6 text-lg text-gray-600"

              >
                One plan for any organization—from startups to Fortune 500s
              </chakra.p>

              <Stack px={2} pb={2}>
                <Flex justify={"space-between"}>
                  <Box>
                    <Icon as={FiUsers} w={4} h={4} color="gray.500" />
                    {" "}
                    <chakra.span
                      fontSize="13px"
                      mt={3}
                      mr={6}
                      fontWeight="medium"
                      color={useColorModeValue("gray.600", "gray.400")}
                    >
                      by Santos Drumond
                    </chakra.span>
                  </Box>

                  <Box>
                    <Icon as={FiMapPin} w={4} h={4} color="gray.500" />
                    {" "}
                    <chakra.span
                      fontSize="13px"
                      mt={3}
                      mr={6}
                      fontWeight="medium"
                      color={useColorModeValue("gray.600", "gray.400")}
                    >
                      Dublin, Irlanda
                    </chakra.span>
                  </Box>
                </Flex>
                <Progress colorScheme='blue' size='md' value={20} />

                <chakra.span
                  fontSize="13px"
                  mt={3}
                  mr={6}
                  fontWeight="medium"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  20% funded - 10,197 ADA pledged
                </chakra.span>

                <Box p={0} m={0} pl={4}>
                  <Icon as={FiCalendar} w={4} h={4} color="gray.500" />
                  {" "}
                  <chakra.span
                    fontSize="13px"
                    mt={3}
                    mr={6}
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    15 days to go
                  </chakra.span>
                </Box>
              </Stack>
            </Box>

            <Box
              bg={useColorModeValue("white", "gray.800")}
              px={4}
              py={24}
              shadow="base"
              rounded="md"
            >
              <chakra.p
                mb={1}
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="wide"
                textTransform="uppercase"
                color={useColorModeValue("gray.500", "gray.400")}
              >
                For Designers
              </chakra.p>
              <Text
                mb={2}
                fontSize="5xl"
                fontWeight={["bold", "extrabold"]}
                color={useColorModeValue("gray.900", "gray.50")}
                lineHeight="tight"
              >
                $19
                <chakra.span
                  fontSize="2xl"
                  fontWeight="medium"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  {" "}
                  per month
                </chakra.span>
              </Text>
              <chakra.p
                mb={6}
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.500")}
                class="mb-6 text-lg text-gray-600"
              >
                One plan for any organization—from startups to Fortune 500s. We
                offer 50% off of for all students and universities. Please get in
                touch with us and provide proof of your status.
              </chakra.p>
              <Stack
                display={["block", "flex"]}
                spacing={2}
                justifyContent="center"
                direction={["column", "row"]}
              >
                <Link
                  w={["full", "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={"white"}
                  bg={useColorModeValue("brand.600", "brand.500")}
                  _hover={{
                    bg: useColorModeValue("brand.700", "brand.600"),
                  }}
                >
                  Get started
                </Link>
                <Link
                  w={["full", "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color="brand.600"
                  bg="white"
                  _hover={{
                    bg: "brand.50",
                  }}
                >
                  Contact Us
                </Link>
              </Stack>
            </Box>
          </SimpleGrid>
        </Flex>
      </section >

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  //const {data} =  await api("services",{});
  const data = contracts();

  return {
    props: {
      contracts: data.contracts

    },
    revalidate: 60 * 60 * 24// 24 hours
  }
}

export default Discover
