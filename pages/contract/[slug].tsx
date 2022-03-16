import { contract } from '../api/contract'
import { GetStaticPaths, GetStaticProps } from 'next'
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
  Link, Image,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons'
import type Contract from '../../types/contract'
import TermCard from '../../components/TermCard';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface RatingProps {
  rating: number;
  numReviews: number;
}


function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center"  >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? '#004aad' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} color={'#004aad'} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} color={'#004aad'} />;
        })}

    </Box>
  );
}

export default function Component({ service }: { service: Contract }) {
  const topBg = useColorModeValue("gray.200", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");

  const Feature = (props: any) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}

            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} >
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg={"#F9FAFB"}
      p={4}
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

        <Box pt={15} rounded="md" bg={topBg}>

          <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
            <Flex alignItens="left">
              <Button
                leftIcon={<ArrowBackIcon />}
                _focus={{ boxShadow: "none" }}
                marginTop={0}
                variant="outline"
                as={'a'}
                href={'/jobs'}>
                Back
              </Button>

            </Flex>
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
                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                  {service.title}
                </Text>

                <Flex align="center">

                  <Text
                    fontFamily="body"
                    whiteSpace="nowrap"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="brand.400"
                  >
                    Terms
                  </Text>
                  <Flex
                    ml="15px"
                    w="full"
                    borderTopWidth="1px"
                    h="3px"
                    borderTopColor={topBg}
                  />
                </Flex>

                {service.terms && <SimpleGrid columns={[1, 2, 1, 2]} spacingY={4}>
                  {service.terms.map(q => (
                    <TermCard
                      key={q.input_name+Math.random()}
                      input_name={q.input_name}
                      type={q.type}
                      roles={q.roles}
                      question={q.question}
                      triggers={service.triggers} />
                  )
                  )}
                </SimpleGrid>}

              </Stack>
              <Stack
                p="45px"
                flex="0.3"
                justify="center"
                align="center"
                bg={"#edeff5"}
                borderRightRadius="md"
              >

                {service.collateral[0].value && <Flex
                  align="center"
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  lineHeight="tight"
                >
                  {service.collateral[0].value}
                  <chakra.span
                    ml={2}
                    fontSize="2xl"
                    fontWeight="medium"
                    color={"gray.500"}
                  >
                    {" "}
                    {service.collateral[0].currency_symbol}
                  </chakra.span>
                </Flex>}


                <Flex
                  align="center"
                  fontSize="1xl"
                  fontWeight={["bold", "extrabold"]}
                  lineHeight="tight"
                >
                  {service.privacy_type == "PRIVATE" ? <LockIcon mx={2} color="#42A5F5" /> : <UnlockIcon mx={2} color="#42A5F5" />}


                  {service.privacy_type.toUpperCase()}
                </Flex>

                <Stack spacing={6} alignItems="center">
                  <Box mt={4}>
                    <Flex alignItems="center">
                      <Flex alignItems="center">
                        <Image
                          h={10}
                          fit="cover"
                          rounded="full"
                          src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                          alt="Avatar"
                        />
                        <Link
                          mx={2}
                          fontWeight="bold"
                          color={"gray.700"}

                        >
                          {service.publisher_name}
                        </Link>
                      </Flex>
                      <chakra.span
                        mx={1}
                        fontSize="sm"
                        color={"gray.600"}
                      >
                        <Rating rating={(service.publisherCAS ? service.publisherCAS : 1) / 1000 / 12} numReviews={service.publisherCAS || 1} />
                      </chakra.span>
                    </Flex>
                  </Box>
                  <Button w="300px" colorScheme="blue" py={6}>
                  AGREE AND SIGN
                  </Button>

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

  const data = contract(slug);

  if (data == null)
    return { notFound: true }

  return {
    props: {
      service: data

    },
    revalidate: 60 * 60 * 24// 24 hours
  }
}
