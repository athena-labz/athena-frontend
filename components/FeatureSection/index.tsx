import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';

import { FiBriefcase, FiLock, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack  
      align={'center'}
      textAlign={'center'}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};


export default function FeaturesSection() {
  return (
    <Box p={10} id="solution" style={{scrollMarginTop:150}} >
      <Stack spacing={3} as={Container} maxW={'8xl'} textAlign={'center'} >
       
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#38b6ff',
                zIndex: -1,
              }}>
              Solution 
            </Text>
                        
          </Heading>
         
          
        </Stack>
        <Text color={'gray.600'} fontSize={'xl'} textAlign={'justify'}>
        Smart contracts assure that dishonest behavior is penalized and virtuos dealing rewarded. The platform works also as escrow: both parties deposit Trust Tokens (TT) as collateral. All service provider can arbitrarly set an amount: the higher it is, the higher the confidence and reliability they show. 
        Both parties' collaterals act as commitment as well as pledge in case of a mediation event.
       
        </Text>
      </Stack>

      <Box p={10} marginTop="0.5rem">
      <SimpleGrid columns={{ base: 1, md: 4}} spacing={10}>
        <Feature
          icon={<Icon as={FiBriefcase} w={10} h={10} color="gray.500"/>}
          title={'Services'}
          text={
            'Services are offered and signed through a unique contract: a NFT is issued for identifying contract terms agreement'
          }
        />
        <Feature
          icon={<Icon as={FiTrendingUp} w={10} h={10} color="green.500" />}
          title={'Rewards'}
          text={
            'A deep-learning based  algorythm calculates periodically rewards: services, performances and reviews all contributes to the the outcome'
          }
        />
        <Feature
          icon={<Icon as={FiTrendingDown} w={10} h={10} color="red.500" />}
          title={'Penalties'}
          text={
            'Parties breaking the rules pre-defined in the contract will be penalized by losing tokens proportionally to the severity of their misbehavior'
          }
        />
        <Feature
          icon={<Icon as={FiLock} w={10} h={10} color="#38b6ff"/>}
          title={'Reliability'}
          text={
            'Credit Assessment Score (CAS) describes the reliability of a service provider. A CAS above 50 shows a reliable member. A CAS above 95 assure trustwothiness through excellent performances'
          }
        />
        </SimpleGrid>
      </Box>

     
    </Box>
  );
}
