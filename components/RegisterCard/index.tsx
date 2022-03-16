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
import { useUser } from '../../contexts/UserContext';

type Role = "freelancer" | "customer" | "mediator";

type UserData = {
  role: Role;
  name: string;
  email: string;
  password: string;
}

export default function RegisterCard() {
  const [userData, setUser] = useState<UserData>({
    email: "",
    password: "",
    name: "",
    role: "freelancer"
  })
  const { register } = useUser();

  function setName(name: string) {
    setUser({ ...userData, name: name });
  }

  function setEmail(email: string) {
    setUser({ ...userData, email: email });
  }

  function setPassword(password: string) {
    setUser({ ...userData, password: password });
  }

  function setRole(role: Role) {
    setUser({ ...userData, role: role });
  }

  return (
    <Stack spacing={1} mx={'auto'} maxW={'lg'} py={4} px={3}>
      <Stack align={'center'} py={4}>
        <Heading fontSize={'5xl'}>Create your account</Heading>
      </Stack>
      <Center>
        <RadioGroup defaultValue="2" onChange={setRole} value={userData.role}>
          <Stack spacing={5} direction="row" >
            <Radio size="md" name="freelancer" value="freelancer" colorScheme="blue" >
              Freelancer
            </Radio>
            <Radio size="md" name="customer" value="customer" colorScheme="blue">
              Customer
            </Radio>
            <Radio size="md" name="mediator" value="mediator" colorScheme="blue" >
              Mediator
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
            <Input value={userData.name} onChange={evt => setName(evt.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={userData.email} onChange={evt => setEmail(evt.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={userData.password} onChange={evt => setPassword(evt.target.value)} />
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
              onClick={e => {
                register(userData.role, userData.name, userData.email, userData.password);
                Router.push('/select-wallet');
              }}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}