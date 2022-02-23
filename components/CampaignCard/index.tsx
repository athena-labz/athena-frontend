import type { GetStaticProps, NextPage } from 'next'
import { useState, useCallback, useRef, useEffect } from 'react';
import {
    Box,
    Flex,
    chakra,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Progress,
    Icon,
} from '@chakra-ui/react'
import type Campaign from '../../types/campaign'
import NextLink from 'next/link'
// https://react-icons.github.io/react-icons
import { FiUsers, FiMapPin, FiCalendar } from 'react-icons/fi';


const Discover = ({id, name, description, category, img, owner, place, expiration, total_value, current_value, currency }: Campaign) => {
    return (
        <NextLink  href={`/campaign/${id}`}>
            <Box
                bg={useColorModeValue("white", "gray.800")}
                px={0}
                py={0}
                pb={5}
                shadow="base"
                rounded="md"
                as={"a"}
                _hover={{ border: "0.08rem solid", borderColor: "blue.400" }}
            >
                <Image
                    roundedTop="lg"
                    w="full"
                    h={64}
                    fit="cover"
                    src={img}
                    alt="Article"
                />
                <Flex justifyContent="right" alignItems="flex-end" pt={3} pr={3}>
                    <chakra.a
                        px={3}
                        py={0}
                        bg="gray.600"
                        color="gray.100"
                        fontSize="md"
                        fontWeight="700"
                        rounded="md"
                        _hover={{ bg: "gray.500" }}
                    >
                        {category}
                    </chakra.a>
                </Flex>
                <chakra.span
                    fontSize="2xl"
                    mt={3}
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {name}
                </chakra.span>
                <chakra.p
                    mb={2}
                    p={2}
                    fontSize="md"
                    color={useColorModeValue("gray.600", "gray.500")}
                    class="mb-6 text-lg text-gray-600"
                    isTruncated
                >
                    {description}
                </chakra.p>

                <Stack px={6} pb={2}>
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
                                by {owner}
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
                                {place}
                            </chakra.span>
                        </Box>
                    </Flex>
                    <Progress colorScheme='blue' size='md' value={Math.round((current_value / total_value) * 100)} />

                    <chakra.span
                        fontSize="13px"
                        mt={3}
                        mr={6}
                        fontWeight="medium"
                        color={useColorModeValue("gray.600", "gray.400")}
                    >
                        {Math.round((current_value / total_value) * 100)}% funded - {current_value} {currency} pledged
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
                            {expiration} days to go
                        </chakra.span>
                    </Box>
                </Stack>
            </Box>
        </NextLink>
    )
}


export default Discover