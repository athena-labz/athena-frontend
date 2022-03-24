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

import { Deliverable } from '../../types/project';

type DeliverableCardProps = {
  deliverables: Deliverable[]
};

export default function DeliverablesCard({
  deliverables,
}: DeliverableCardProps) {

  return (
    <Stack style={{ backgroundColor: "#EEEEEE", padding: "1rem" }}>
      {deliverables.map(({promise, deadline, reward}, index) => (
        <Stack direction="row" style={{justifyContent: "space-between"}}>
          <chakra.span
            fontSize="1xl"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {index+1}. {promise} by {deadline}
          </chakra.span>
          <chakra.span
            fontSize="1xl"
          >
            <b>{reward} ADA</b>
          </chakra.span>
        </Stack>
      ))}
    </Stack>
  );
}
