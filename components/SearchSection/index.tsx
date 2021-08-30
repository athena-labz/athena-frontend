import type { NextPage } from 'next'
import {
    Container,
    Button,
    InputRightElement,
    InputGroup,
    Input,
    Divider,
    Center,
  } from '@chakra-ui/react';
  import { extendTheme } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';
  
export default function SearchSection() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
      <Container maxW={'6xl'} p="2rem">

        <InputGroup size="lg">
            <Input
                pr="4.5rem"  
                placeholder="Search"
                _placeholder={{ color: 'gray.600' }}
            />
            <InputRightElement width="5.75rem" >
                <Button h="2rem" size="lg" onClick={handleClick} bg="blue.500">
                    <Search2Icon color="white" />
                </Button>
            </InputRightElement>
        </InputGroup>

        <Divider orientation="horizontal" marginTop="2rem" />
       

     </Container>
    );
  }
  