import { useState } from 'react';

import {
    Box,
    FormControl,
    FormLabel,
    Input,
    RadioGroup ,
    Radio ,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Center,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useUser } from '../../contexts/UserContext';
  
  export default function LoginCard() {
    const [value, setValue] = useState("1")
    const [loginData, setLogin] = useState({user:"",password:"",name:""})
    const {login} = useUser(); 

    return (
        <Stack spacing={1} mx={'auto'} maxW={'md'} py={4} px={3}>
          <Stack align={'center'}>
            <Heading fontSize={'5xl'}>Sign in to your account</Heading>           
          </Stack> 
          <Center>
          <RadioGroup defaultValue="2" onChange={setValue} value={value}>
              <Stack spacing={5} direction="row" >             
                  <Radio size="md" name="1" value="1" colorScheme="blue" >
                    User
                  </Radio>
                  <Radio size="md" name="2" value="2" colorScheme="blue">
                    Judge
                  </Radio>
              </Stack>
            </RadioGroup></Center>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            
            <Stack spacing={4}>
            <FormControl id="email">
                <FormLabel>Name</FormLabel>
                <Input value={loginData.name} onChange={evt => setLogin({user:loginData.user,password:loginData.password,name:evt.target.value})} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={loginData.user} onChange={evt => setLogin({user:evt.target.value,password:loginData.password,name:loginData.name})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={loginData.password} onChange={evt => setLogin({user:loginData.user,password:evt.target.value,name:loginData.name})} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link href="/forgot-password" color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={e => login(loginData.name,loginData.password)}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
    );
  }