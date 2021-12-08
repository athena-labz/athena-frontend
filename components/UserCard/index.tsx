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

type Judge = {
  name: string;
  description: string;
  trust: number;
  price: number;
  image?: string;
  isJudge: boolean;
}
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface RatingProps {
  rating: number;
  numReviews: number;
}


function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center" flexDirection="column">
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
      </Box>
      <Box as="span" ml="2" color="gray.600" fontSize="sm" mt="1.5">
        {numReviews} CAS
      </Box>
    </Box>
  );
}

export default function UserCard({ name, description, trust, price, isJudge }: Judge) {
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
          bgColor="blue.400"
          name="John Smith"
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}

        />
        <Heading fontSize={'2xl'} fontFamily={'body'} mb={4}>
          {name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          0xc4c16a645...b21a <CopyIcon w={3} h={3} color="blue.500" />
        </Text>


        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Rating rating={trust / 1000 / 4} numReviews={trust} />
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>

        </Stack>
      </Box>
    </Center>
  );
};
