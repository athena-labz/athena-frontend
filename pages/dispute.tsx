import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Text,
    Stack,
    SimpleGrid,
    Icon,
    Button,
} from "@chakra-ui/react";

import { MdNotificationsActive, MdCheck } from "react-icons/md";
import { ReactElement } from 'react';
import { FcCalendar } from 'react-icons/fc';
import { GiChessKnight, GiChessRook, GiChessQueen } from 'react-icons/gi';

interface FeatureProps {
    title: string;
    name: string;
    email: string;
    address: string;
    icon: ReactElement;
}

function ParticipantsSection() {
    const Feature = ({ title, name, email, address, icon }: FeatureProps) => {
        return (
            <Stack>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'#38b6ff'}
                    rounded={'full'}
                    bg={'gray.100'}
                    mb={1}>
                    {icon}
                </Flex>
                <Text fontWeight={600}>{title}</Text>
                <Text color={'gray.600'}>{name}</Text>
                <Text color={'gray.600'}>{email}</Text>
                <Text color={'gray.600'}>{address}</Text>
            </Stack>
        );
    };
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={GiChessKnight} w={10} h={10} />}
                    title={'Accuser'}
                    name='Alice Jones'
                    email="alice@email.com"
                    address="addr_16aasd23...."

                />
                <Feature
                    icon={<Icon as={GiChessRook} w={10} h={10} />}
                    title={'Judge'}
                    name='Alice Jones'
                    email="alice@email.com"
                    address="addr_16aasd23...."
                />
                <Feature
                    icon={<Icon as={GiChessQueen} w={10} h={10} />}
                    title={'Owner'}
                    name='Alice Jones'
                    email="alice@email.com"
                    address="addr_16aasd23...."
                />
            </SimpleGrid>
        </Box>
    );
}

export default function Component() {
    const topBg = useColorModeValue("gray.100", "gray.700");
    const bottomBg = useColorModeValue("white", "gray.800");
    const Feature = ({ Icon, children }: any) => {
        return (
            <Flex align="center">
                <Flex shrink={0}>
                    <Icon
                        boxSize={5}
                        mt={1}
                        mr={2}
                        color={'#38b6ff'}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    />
                </Flex>
                <Box ml={4}>
                    <chakra.span mt={2} color={useColorModeValue("gray.500", "gray.400")}>
                        {children}
                    </chakra.span>
                </Box>
            </Flex>
        );
    };
    return (
        <Flex
            boxSize="full"
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={2}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
                rounded="md"
                shadow="base"
                w="full"
                bg={bottomBg}
            >
                <Box pt={10} rounded="md" bg={topBg}>
                    <Box w="full" px={[6, 4]} mx="auto">
                        <Text
                            mb={5}
                        
                            fontSize="3xl"
                            fontWeight="bold"
                            lineHeight="tight"
                            bgGradient="linear(to-r, blue.300, blue.600)"
                            bgClip="text"
                        >
                            {"Lifetime Membership".toUpperCase()}
                        </Text>
                    </Box>
                    <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
                        <Flex
                            rounded="md"
                            mx={10}
                            bg={bottomBg}
                            shadow="xl"
                            mb="100px"
                            textAlign="left"
                            direction={{ base: "column", lg: "row" }}
                        >
                            <Stack spacing={8} p="45px" flex="0.7">
                                <ParticipantsSection />
                                <Flex align="center">
                                    <Text
                                        fontFamily="body"
                                        whiteSpace="nowrap"
                                        fontWeight="semibold"
                                        textTransform="uppercase"
                                        color="blue.400"
                                    >
                                        Inputs
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>
                                <SimpleGrid columns={[1, 2, 1, 2]} spacingY={4}>
                                    <Feature Icon={MdCheck}>Unlimited Projects</Feature>
                                    <Feature Icon={MdCheck}>Email Tracking and Analytics </Feature>
                                    <Feature Icon={MdCheck}>Email APIs, SMTP Relay, and Webhooks</Feature>
                                    <Feature Icon={MdCheck}>1 Dedicated IP (Foundation 100k and up)</Feature>
                                </SimpleGrid>

                                <Flex align="center">
                                    <Text
                                        fontFamily="body"
                                        whiteSpace="nowrap"
                                        fontWeight="semibold"
                                        textTransform="uppercase"
                                        color="blue.400"
                                    >
                                        Triggers
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>
                                <SimpleGrid columns={[1, 2, 1, 2]} spacingY={4}>
                                    <Feature Icon={MdNotificationsActive}>Unlimited Projects</Feature>
                                    <Feature Icon={MdNotificationsActive}>Email Tracking and Analytics </Feature>
                                    <Feature Icon={MdNotificationsActive}>Email APIs, SMTP Relay, and Webhooks</Feature>
                                    <Feature Icon={MdNotificationsActive}>1 Dedicated IP (Foundation 100k and up)</Feature>
                                </SimpleGrid>
                            </Stack>
                            <Stack
                                p="45px"
                                flex="0.3"
                                justify="center"
                                align="center"
                                bg={useColorModeValue("#F9FAFB", "gray.900")}
                                borderRightRadius="md"
                            >
                                <Flex
                                    align="center"
                                    fontSize="5xl"
                                    fontWeight={["bold", "extrabold"]}
                                    lineHeight="tight"
                                >
                                    <FcCalendar size={"30"} style={{marginRight:10}} />
                                    <Text fontSize="xl" fontWeight="semibold">
                                        Apr 24 2022
                                    </Text>

                                </Flex>


                                <Flex
                                    align="center"
                                    fontSize="5xl"
                                    fontWeight={["bold", "extrabold"]}
                                    lineHeight="tight"
                                >
                                    500
                                    <chakra.span
                                        ml={2}
                                        fontSize="2xl"
                                        fontWeight="medium"
                                        color={useColorModeValue("gray.500", "gray.400")}
                                    >
                                        {" "}
                                        ADA
                                    </chakra.span>
                                </Flex>
                                <Stack spacing={6}>
                                    <Button w="300px" colorScheme="blue" py={6}>
                                        Send Proof
                                    </Button>
                                    <Text align="center" fontWeight="semibold">
                                        Max file size
                                        <chakra.span
                                            ml={2}
                                            color={useColorModeValue("gray.500", "gray.400")}
                                            fontWeight="medium"
                                        >
                                            (50MB)
                                        </chakra.span>
                                    </Text>
                                </Stack>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}