import { useState } from 'react';
import Router from 'next/router'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function WalletSelector() {
  return (
    <Stack spacing={5} mx={'auto'} maxW={'md'} py={4} px={3} width='100%'>
      <Stack align={'center'}>
        <Heading fontSize={'5xl'}>Select Wallet</Heading>
      </Stack>

      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>

        <Stack spacing={8}>
          <Stack spacing={4} direction='column'>
            <Button
              size={"lg"}
              bgGradient='linear(to-r, #139687, #dce58b)'
              _hover={{ bgGradient: 'linear(to-l, #139687, #dce58b)', transitionDelay: '500ms' }}
              onClick={() => {Router.push('/login')}}
            >
              Nami Wallet
            </Button>
            <Button
              size={"lg"}
              bgGradient='linear(to-r, #7b127c, #c9488b)'
              _hover={{ bgGradient: 'linear(to-l, #7b127c, #c9488b)', transitionDelay: '500ms' }}
              onClick={() => {Router.push('/login')}}
            >
              CC Vault
            </Button>
            <Button
              size={"lg"}
              bgGradient='linear(to-r, #0e2093, #09877e)'
              _hover={{ bgGradient: 'linear(to-l, #0e2093, #09877e)', transitionDelay: '500ms' }}
              onClick={() => {Router.push('/login')}}
            >
              Gero Wallet
            </Button>
          </Stack>

          <Stack direction='row' spacing={4} justify='end'>
            <Button variant='outline' colorScheme={"red"}>Cancel</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}