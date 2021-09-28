import {
    Heading,
    Avatar,
    Box,
    Center,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Text
  } from '@chakra-ui/react';
  import { CopyIcon } from '@chakra-ui/icons'
  import Image from 'next/image';
import { judges } from '../../pages/api/judges';
  
  type Judge= {
    name: string;
    description: string;
    trust: number;
    price: number;
    image?:string;
    isJudge: boolean;
  }

  export default function UserCard({name, description, trust, price , isJudge}:Judge) {
    return (
        <Center py={6}>
        <Box
          w={'280px'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'2xl'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
          <Heading fontSize={'2xl'} fontFamily={'body'} mb={4}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            0xc4c16a645...b21a <CopyIcon w={3} h={3} color="blue.500"/>
          </Text>
          <Text
            textAlign={'justify'}
            letterSpacing="tight"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3} mb={6}>
              {description}
          </Text>
          
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {isJudge && <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.400', 'blue.400')}
              fontWeight={'400'} color='white'>
                Judge
            </Badge>} 
            
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Share
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Box>
    </Center>
    );
  };