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

import { MdCheck } from "react-icons/md";
import { ReactElement } from 'react';
import { FcCalendar } from 'react-icons/fc';
import { GiChessKnight, GiChessRook, GiChessQueen } from 'react-icons/gi';
import { ArrowBackIcon, } from "@chakra-ui/icons";
import Project from "../../types/project";
import { GetStaticPaths, GetStaticProps } from "next";
import { project } from "../api/projects";

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
        <Flex p={4} justifyContent="space-between">
            <Feature
                icon={<Icon as={GiChessKnight} w={10} h={10} />}
                title={'Accuser'}
                name='Jett Jones'
                email="alice@email.com"
                address="addr_16aasd23...."

            />

            <Feature
                icon={<Icon as={GiChessQueen} w={10} h={10} />}
                title={'Owner'}
                name='Kayo Smith'
                email="bob@email.com"
                address="addr_16aasd23...."
            />
        </Flex>
    );
}

export default function DisputePage({ project }: { project: Project }) {
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
                    <chakra.span mt={2} color="gray.600" fontWeight="bold">
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
                <Flex alignItens="left">
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        _focus={{ boxShadow: "none" }}
                        marginTop={0}
                        variant="outline"
                        as={"a"}
                        href={"/jobs"}
                    >
                        Back
                    </Button>
                </Flex>
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
                            {project.title.toUpperCase()} - DISPUTE
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
                                        Deliverables
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>

                                {/* transformar em componente */}
                                <Flex
                                    w="full"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Stack
                                        direction={{ base: "column" }}
                                        w="full"
                                    >
                                        <Flex
                                            justifyContent={"space-between"}
                                            borderRadius={"18px"}
                                            w={{ base: 120, md: "full" }}
                                            textTransform="uppercase"
                                            bg={"#F9FAFB"}
                                            color={"blue.400"}
                                            py={{ base: 1, md: 1 }}
                                            px={{ base: 2, md: 10 }}
                                            fontSize="md"
                                            fontWeight="semibold"
                                        >
                                            <span>Promisse</span>
                                            <span>Deadline</span>
                                            <span style={{ marginRight: 50 }}>Reward</span>
                                        </Flex>
                                        {project.deliverables.map((project, pid) => {
                                            return (
                                                <Flex
                                                    direction={{ base: "row", md: "column" }}
                                                    bg={"#F9FAFB"}
                                                    borderRadius={"10px"}
                                                    key={pid}
                                                >

                                                    <SimpleGrid
                                                        spacingY={3}
                                                        spacingX={10}
                                                        columns={{ base: 1, md: 3 }}
                                                        w="full"
                                                        py={3}
                                                        px={6}
                                                        fontWeight="hairline"
                                                        alignItems={"center"}
                                                    >
                                                        <span>{project.promise}</span>
                                                        <chakra.span
                                                            marginLeft={16}
                                                        >
                                                            {project.deadline}
                                                        </chakra.span>
                                                        <chakra.span
                                                            textAlign={"center"}
                                                            marginLeft={10}
                                                        >
                                                            {project.reward}
                                                        </chakra.span>
                                                    </SimpleGrid>
                                                </Flex>
                                            );
                                        })}
                                    </Stack>
                                </Flex>



                                <Flex align="center">
                                    <Text
                                        fontFamily="body"
                                        whiteSpace="nowrap"
                                        fontWeight="semibold"
                                        textTransform="uppercase"
                                        color="blue.400"
                                    >
                                        Judges
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>

                                {/* transformar em componente */}
                                <Flex
                                    w="full"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Stack
                                        direction={{ base: "column" }}
                                        w="full"
                                    >
                                        <Flex
                                            justifyContent={"space-between"}
                                            borderRadius={"18px"}
                                            w={{ base: 120, md: "full" }}
                                            textTransform="uppercase"
                                            bg={"#F9FAFB"}
                                            color={"blue.400"}
                                            py={{ base: 1, md: 1 }}
                                            px={{ base: 2, md: 10 }}
                                            fontSize="md"
                                            fontWeight="semibold"
                                        >
                                            <span>Name</span>
                                            <span>Email</span>
                                            <span style={{ marginRight: 50 }}>Crypto Adress</span>
                                        </Flex>
                                        {project.judges.map((judge, pid) => {
                                            return (
                                                <Flex
                                                    direction={{ base: "row", md: "column" }}
                                                    bg={"#F9FAFB"}
                                                    borderRadius={"10px"}
                                                    key={pid}
                                                >

                                                    <SimpleGrid
                                                        spacingY={3}
                                                        spacingX={10}
                                                        columns={{ base: 1, md: 3 }}
                                                        w="full"
                                                        py={3}
                                                        px={6}
                                                        fontWeight="hairline"
                                                        alignItems={"center"}
                                                    >
                                                        <chakra.span
                                                            marginLeft={6}
                                                        >
                                                            {judge.name}
                                                        </chakra.span>
                                                        <chakra.span
                                                            marginLeft={6}
                                                        >
                                                            {judge.email}
                                                        </chakra.span>
                                                        <chakra.span
                                                            textAlign={"center"}
                                                            marginLeft={0}
                                                        >
                                                            {judge.address.slice(0,16)}...
                                                        </chakra.span>
                                                    </SimpleGrid>
                                                </Flex>
                                            );
                                        })}
                                    </Stack>
                                </Flex>

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
                                    <FcCalendar size={"30"} style={{ marginRight: 10 }} />
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



export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params!;

    if (!slug) return { notFound: true };

    const data = project(slug);

    if (data == null)
        return { notFound: true }

    return {
        props: {
            project: data

        },
        revalidate: 90 * 90 * 60// 24 hours
    }
}
