import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Image,
  Badge,
  useColorModeValue,
  AspectRatio
} from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

type ServiceCardProps ={
    id:number;
    type: string;
    publisher: string;
    title: string;
    description: string;
    trust: number;
    price?: number;
    deadline?: number;
    badge_color:string;
    image?:string;
}

interface RatingProps {
    rating: number;
    numReviews: number;
}


function Rating({ rating, numReviews }: RatingProps) {
    return (
      <Box d="flex" alignItems="center"  >
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? '#004aad' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} color={'#004aad'} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} color={'#004aad'} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} DSET{numReviews > 1 && "'s"}
        </Box>
      </Box>
    );
  }


export default function ServiceCard(props:ServiceCardProps)  {
  const RANDOM_IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  const IMAGE = props.image ? props.image :RANDOM_IMAGE;

  return (
    <Center py={6} mx={1} as={'a'} href={`/contract/${props.id}`}>
      <Box
        w={'22rem'}
        h={'28.5rem'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        overflow="hidden"
        textAlign={'center'}>

         <Box>

          <AspectRatio maxW="300px" ratio={4 / 3}>
          <Image
              rounded={'lg'}
              objectFit="cover" 
              alt={props.title}
              src={IMAGE}
            />
          </AspectRatio>

          
          
        </Box>

        
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            m={1}
            rounded="full" px="2" fontSize="0.8em" colorScheme={props.badge_color}
            fontWeight={'400'}>
            {props.type}
          </Badge>
        </Stack>

        <Heading fontSize={'lg'} fontFamily={'body'}>
            {props.title}
        </Heading>
       
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>

        

        <Stack mt={5} direction={'row'} spacing={4}>
          <Rating rating={props.trust/1000/12} numReviews={props.trust} />
          
         <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
              {props.price &&  "$  "}

              {props.price?.toFixed(2)}
            </Box>
        </Stack>
      </Box>
    </Center>
  );
}