/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

function TablesTableRow(props) {
  const {
    logo,
    name,
    email,
    subdomain,
    domain,
    status,
    date,
    lastItem,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const get_status_bg = (status) =>  {
    switch (status) {
      case "Progress":
          return "green.400" 
      case "Finished":
        return "#38b6ff"
      case "Dispute":
        return "yellow.500"
    
      default:
        return "transparent"

    }
  }

  const get_status_border = (status) =>  {
    switch (status) {
      case "Progress":
          return "none" 
      case "Finished":
        return "1px solid #fff"
      case "Dispute":
        return "none"
    
      default:
        return "none"

    }
  }

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        border={lastItem ? "none" : null}
        borderBottomColor='#56577A'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Flex direction='column'>
            <Text
              fontSize='sm'
              color='blue.500'
              fontWeight='normal'
              minWidth='100%'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal' isTruncated >
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td
        border={lastItem ? "none" : null}
        borderBottomColor='#56577A'
        minW='150px'>
        <Flex direction='column'>
          <Text fontSize='sm' color='blue.500' fontWeight='normal'>
            {domain}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='normal'>
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Badge
          bg={get_status_bg(status)}
          color={status === "Finished" ? "white" : colorStatus}
          fontSize='sm'
          p='3px 10px'
          borderRadius='8px'
          border={get_status_border(status)}
          fontWeight='normal'>
          {status}
        </Badge>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='blue.500' fontWeight='normal'>
          {date}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Button p='0px' bg='transparent' variant='no-hover'>
         <AiOutlineInfoCircle size={29} color="#38b6ff" />
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
