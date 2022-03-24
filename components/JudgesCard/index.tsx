import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  Icon,
} from "@chakra-ui/react";

import { MdPriorityHigh } from "react-icons/md";

import { Judge } from "../../types/project";

type JudgeCardProps = {
  judges: Judge[];
};

export default function JudgesCard({ judges }: JudgeCardProps) {
  return (
    <Stack
      direction="column"
      spacing={8}
      style={{ backgroundColor: "#EEEEEE", padding: "1rem" }}
    >
      {judges.map(({ name, email, address }) => (
        <Stack direction="column">
          <chakra.span
            fontSize="1xl"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            <b>Name:</b> {name}
          </chakra.span>
          <chakra.span
            fontSize="1xl"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            <b>Email:</b> {email}
          </chakra.span>
          <chakra.span
            fontSize="1xl"
            color={useColorModeValue("gray.600", "gray.400")}
            isTruncated
          >
            <b>Crypto Address:</b> {address}
          </chakra.span>
        </Stack>
      ))}
    </Stack>
  );
}
