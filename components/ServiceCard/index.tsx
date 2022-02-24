import { chakra, Box, Flex, useColorModeValue, HStack, Image, Text, Center } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ArrowBackIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons'

type ServiceCardProps = {
  nft: {
    currency_symbol: string,
    token_name: string
  },
  relation_type: string,
  privacy_type: string,
  publisher_name?: string,
  collateral: {
    currency_symbol: string, // This is ADA's currency_symbol
    value: number // 5 ADA
  }
  ,
  title: string,
  terms_hash: string,
}

interface RatingProps {
  rating: number;
  numReviews: number;
}


export default function ServiceCard(props: ServiceCardProps) {

  return (
    <Flex
      p={2}
      w="full"
      alignItems="center"
      justifyContent="center"
      width={"23rem"}
    >
      <Box
        width={"100%"}
        mx="auto"
        py={3}
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="1xl"
            textTransform="uppercase"
            isTruncated
          >
            {props.title}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            style={{ display: "block", overflow: "hidden", wordWrap: "break-word", lineHeight: "1.4em", maxHeight: "3.6em" }}

            color={"gray.600"}
          >
            Publisher: {props.publisher_name}
            <br />

          </chakra.p>

        </Box>

        <Center
          align="center"
          fontSize="1xl"
          fontWeight={["bold", "extrabold"]}
          lineHeight="tight"
        >
          {props.privacy_type == "PRIVATE" ? <LockIcon mx={2} color="#42A5F5" /> : <UnlockIcon mx={2} color="#42A5F5" />}

          {props.collateral.value}
          <chakra.span
            ml={2}
            fontSize="sm"
            fontWeight="medium"
            color={"gray.500"}
          >
            {" "}
            {props.collateral.currency_symbol}
          </chakra.span>
        </Center>



        <Flex
          alignItems="center"
          justifyContent="flex-end"
          px={4}
          py={2}

          roundedBottom="lg"
        >
          <NextLink  href={`/contract/${props.terms_hash}`}>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              See details
            </chakra.button>
          </NextLink>
        </Flex>
      </Box>
    </Flex>
  );
}