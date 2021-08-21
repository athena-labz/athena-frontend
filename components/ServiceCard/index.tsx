import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Badge,
    Tooltip,
    Icon,
    chakra,
    Flex
} from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const RANDOM_IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

type ServiceCardProps ={
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
      <Box d="flex" alignItems="center">
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

  export default function ServiceCard(props:ServiceCardProps) {
    const IMAGE = props.image ? props.image :RANDOM_IMAGE;
    return (
    <Flex p={5} w="full" alignItems="center" justifyContent="center">
        <Box
          role={'group'}
          p={6}
          maxW={'sm'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Flex
            alignItems="center" 
            justifyContent="center"
            rounded={'lg'}
            mt={-10}
            pos={'relative'}
            height={'15rem'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 3,
              left: 0,
              alignSelf:'center',
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={'15rem'}
              width={'20rem'}
              alignSelf="center"
              objectFit={'cover'}
              src={IMAGE}
            />
          </Flex>

          <Stack pt={10} align={'center'}>

              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme={props.badge_color}>
                {props.type}
              </Badge>

            <Heading fontSize={'lg'} fontFamily={'body'} textAlign="center" fontWeight={500}>
              {props.title}
            </Heading>

          </Stack>

          <Flex justifyContent="space-between" alignContent="center" marginTop="0.3rem">
            <Rating rating={props.trust/1000/12} numReviews={props.trust} />

            <Box fontSize="lg" color={useColorModeValue('gray.800', 'white')}>
              {props.price && <Box as="span" color={'gray.600'} fontSize="lg">
                $ {" "}
              </Box>}
              {props.price?.toFixed(2)}
            </Box>
          </Flex>  
         
        </Box>
       
      </Flex>
    );
  }