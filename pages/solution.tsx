import React from 'react';
import {
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SpaceProps,
  Container,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const SolutionPage = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Solution</Heading>

      <Divider marginTop="2" marginBottom="3"/>
      
      <VStack paddingTop="5px" spacing="2" alignItems="flex-start">

        <Text as="p" fontSize="lg" textAlign="justify">
        DigiServices aims to overcome the limits of physical contracts by providing a platform that enables
        parties to create contracts stored in the Cardano blockchain. The platform builds members trust
        based on token rewards and penalties, supported by a Credit Assessment System (CAS) able to
        address every platform member.        
        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
        The reward-penalty system is an algorithm that collects statistics related to the service transactions,
        user reviews, and other activities. It returns the amount of tokens that will be rewarded. Parties that
        refuse to follow the rules defined in the contract will be penalized by losing tokens proportionate to
        the severity of their violation. In extreme cases membership access to the platform will be
        suspended.
        </Text>
       
        <Text as="p" fontSize="lg" textAlign="justify">
        In such as case all membership account own assets, such as DSET are burnt. Of course the member
        can still register again to the platform. This is one of draw-backs of anonymity, but membership
        access fees can partially prevent abuses
        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
        By integrating real-world reliable inputs with strict on-chain contracts, DigiServices aims to
        mitigate the ambiguity common in natural-language written contracts, while preserving the
        flexibility needed to communicate with the real world.
        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
        DigiServices proposes an easy-to-use platform to create contract templates. This will eliminate the
        current need for expensive lawyers to write contracts. Trust between mediators, service providers,
        and clients will me measured by a review system that is powered by DSET tokens which represent a
        {'"'}trust score{'"'}. This system, when combined with other components, will be used to determine a
        user{"'"}s periodical reward.    
        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
        Along with gig-economy existing platform, DigiServices targets freelancers with a service
        marketplace, where users can market their service and attach it to an accusation contract, which is
        used to handle conflicts.

        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
        DigiServices has identified four core components to provide a mediation platform that is affordable,
        fast, fair, and provides a great user experience:
        </Text>
      

        <Heading  as="h4" size="md" paddingTop="1rem">A. Ease of Use</Heading>        
        <Text as="p" fontSize="lg" textAlign="justify">
        Users should be able to create Smart Contracts in a few clicks using an advanced interactive drag
        and drop editor. Contract templates should provide an easy way to offer services that don{"'"}t require
        much flexibility.
        </Text>

        <Heading  as="h4" size="md" paddingTop="1rem">B. Accessible prices</Heading>        
        <Text as="p" fontSize="lg" textAlign="justify">
        Everyone will have access to contract templates. These templates will enable users to create
        contracts for an affordable price, or for free. The only requirement for opening a service will be a
        one-time small fee which is used to support the platform and prevent membership spam attacks.

        </Text>

        <Heading  as="h4" size="md" paddingTop="1rem">C. All In-Platform</Heading>        
        <Text as="p" fontSize="lg" textAlign="justify">
        From the creation of smart legal contracts to the negotiation of clauses and the dispute resolution
        system, all will be handled through DigiServices using the Cardano platform, making the process
        easy and simple for the end user.

        </Text>

        <Heading  as="h4" size="md" paddingTop="1rem">D. High Customization</Heading>        
        <Text as="p" fontSize="lg" textAlign="justify">
        DigiServices will allow users to build flexible and versatile smart legal contracts for any need by
        using ready made templates, clauses and logical flows. Users can also write their own contracts and
        templates for their specific use case.
        </Text>


      </VStack>
    </Container>
  );
};

export default SolutionPage;
