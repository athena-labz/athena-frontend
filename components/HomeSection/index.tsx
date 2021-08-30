import type { NextPage } from 'next'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
import Image from 'next/image';
  
export default function HomeSection() {
    return (
      <Container maxW={'5xl'} >
         <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Provide reliable services {' '}
          <Text as={'span'} color={'blue.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        Building trust among peers through blockchain technology
        </Text>
        <Stack spacing={6} direction={'row'}>
          {/*<Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            Get started
          </Button>*/}
          <Button 
            as={'a'} 
            rounded={'full'} px={6}
                href={'/solution'} >
            Learn more
          </Button>
        </Stack>

        <Image src="/Digiservices.png" width="540rem" height="350rem" />
      </Stack>

        

      </Container>
    );
  }
  