import { services } from '../api/services'

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
  Link,Image,
  Button,
} from "@chakra-ui/react";

type ServiceProps= {
  id:number;
  type: string;
  publisher: string;
  title: string;
  description: string;
  trust: number;
  price?: number;
  deadline?: number;
  badge_color:string;
  image?:string;
}

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
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} DSET{numReviews > 1 && "'s"}
        </Box>
      </Box>
    );
  }

export default function Component({service}:ServiceProps) {
  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
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
          <chakra.span mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
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
        <Box pt={20} rounded="md" bg={topBg}>
          
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
                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                  {service.title}
                </Text>
                <chakra.p
                  fontSize={["sm", , "md"]}
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  {service.description}
                </chakra.p>
                <Flex align="center">
                  <Text
                    fontFamily="body"
                    whiteSpace="nowrap"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="brand.400"
                  >
                    Publisher Questions
                  </Text>
                  <Flex
                    ml="15px"
                    w="full"
                    borderTopWidth="1px"
                    h="3px"
                    borderTopColor={topBg}
                  />
                </Flex>
                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                  <Feature>Question 1 ?</Feature>
                  <Feature>Question 2 ?</Feature>
                  <Feature>Question 3 ?</Feature>
                  <Feature>Question 4 ?</Feature>
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
                <Text fontSize="xl" fontWeight="semibold">
                  {service.type.toUpperCase()}
                </Text>
                {service.price && <Flex
                  align="center"
                  fontSize="5xl"
                  fontWeight={["bold", , "extrabold"]}
                  lineHeight="tight"
                >
                  ${service.price}
                  <chakra.span
                    ml={2}
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                    {" "}
                    ADA
                  </chakra.span>
                </Flex>}
                <Stack spacing={6}>
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
                          color={useColorModeValue("gray.700", "gray.200")}
                          
                        >
                          Jone Doe
                        </Link>
                      </Flex>
                      <chakra.span
                        mx={1}
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.300")}
                      >
                        <Rating rating={service.trust/1000/12} numReviews={service.trust} />
                      </chakra.span>
                    </Flex>
                  </Box>
                  <Button w="300px" colorScheme="blue" py={6}>
                    Pucharse
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


export const getStaticPaths:GetStaticPaths = async () => {

    return {
        paths:[],
        fallback:'blocking'
    }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
    const {slug} = ctx.params;

    const data = services();

    const service = data.services.filter(service => service.id.toString() === slug.toString())[0] 
    
    console.log(service)
    return {
      props:{
        service
        
      },
      revalidate:60*60*24// 24 hours
    }
  }
  