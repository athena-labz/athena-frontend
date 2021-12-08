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
          w={'15rem'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'lg'}
            name="Mateus Torres"
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
          
          
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {isJudge && <Badge
              px={2}
              py={1}
              bg={'gray.400'}
              fontWeight={'400'} color='white'>
                Judge
            </Badge>} 
            
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            
          </Stack>
        </Box>
    </Center>
    );
  };
