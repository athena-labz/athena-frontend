import {
  Box,
  Text,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { GiTwoCoins } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'} >
        <Box pl={{ base: 2, md: 4 }} flexWrap="wrap">
          <Text fontWeight={'medium'} >
            {title}
          </Text>
         <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Box>
        
      </Flex>
    </Stat>
  );
}

export default function GoToMarketSection() {
  return (
    <Box maxW="4xl" mx={'auto'} pt={4} px={{ base: 2, sm: 12, md: 17 }} marginTop={2} marginBottom={10}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'3xl'}
        py={6}
        fontWeight={'bold'}>
       Go-to-Market Strategy
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 2}} spacing={{ base: 5, lg: 8 }}>
      <StatsCard
          title={'Initial funding secured'}
        />
        <StatsCard
          title={'Social/Blockchain platforms channels selection'}
        />
        <StatsCard
          title={'Marketing partner selection'}
        />
        <StatsCard
          title={'First Stage Members enrollment June 2022'}
          
        />
      </SimpleGrid>
    </Box>
  );
}