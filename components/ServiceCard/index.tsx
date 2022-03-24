import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Project from "../../types/project";

type ServiceCardProps = {
  project: Project;
};

export default function ServiceCard({ project }: ServiceCardProps) {
  return (
    <NextLink href={`/job/${project.projectId}`}>
      <Flex
        p={2}
        w="full"
        alignItems="center"
        justifyContent="center"
        width={"23rem"}
        _hover={{ cursor: "pointer" }}
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
              textTransform="capitalize"
              style={{ marginBottom: "1rem" }}
              isTruncated
            >
              {project.title}
            </chakra.h1>

            <Text
              mt={1}
              fontSize="sm"
              noOfLines={3}
              textAlign="justify"
              color={"gray.600"}
            >
              {project.description}
            </Text>
          </Box>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            style={{ borderTop: "1px solid #efeff0" }}
            roundedBottom="lg"
          >
            <chakra.p
              mt={1}
              fontSize="sm"
              style={{
                display: "block",
                overflow: "hidden",
                wordWrap: "break-word",
                lineHeight: "1.4em",
                maxHeight: "3.6em",
              }}
              color={"gray.600"}
            >
              {project.publisher.name}
            </chakra.p>
            <chakra.span
              ml={2}
              fontSize="lg"
              fontWeight="bold"
              color={"#38b6ff"}
            >
              {project.budget} ADA
            </chakra.span>
          </Flex>
        </Box>
      </Flex>
    </NextLink>
  );
}
