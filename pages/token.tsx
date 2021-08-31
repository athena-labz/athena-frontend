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

const TokenPage = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Tokenomics</Heading>

      <Divider marginTop="5" />
      
      <VStack paddingTop="5px" spacing="2" alignItems="flex-start">

        <Text as="p" fontSize="lg" textAlign="justify">
            Differently from traditional currencies, such as Bitcoin, Litecoin and Ethereum, DigiServices tokens (DSET) are not deflationary. This is important in order to incentivise cooperative and honest behaviour in the platform. A fixed amount of DSET tokens is monthly minted and distributed according to a Credit Assessment System (CAS). Users receive tokens proportionally to their scores.
        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
            The token will have a total supply of 1 billion distributed as follows:
        </Text>
        <UnorderedList paddingLeft="3rem">
            <ListItem fontSize="lg">10% - Institutional investor</ListItem>
            <ListItem fontSize="lg">20% - Core Team {"&"} Marketing and Developement Partner</ListItem>
            <ListItem fontSize="lg">70% - Public Sale</ListItem>
        </UnorderedList>

        <Text as="p" fontSize="lg" textAlign="justify">
        The membership rewarding fund will be supported by 5% of transaction fees. In this way we assure
        the totally issued DSET tokens amount will be capped at 1 billion units.
        </Text>

        {/*<Image src="/tokenomics.png" width="auto" height="17rem" />*/ }
        

        <Heading  as="h4" size="md" paddingTop="1rem">Utility</Heading>
        
        <Text as="p" fontSize="lg" textAlign="justify">
        In order to de-incentive dishonest behaviour, DigiServices makes it possible for service providers to lock an arbitrary amount of tokens (Trust Token, TT) into the contract proposal in the marketplace and request from the client the same amount. In this way, there is commitment by both parties and a pledge in case of a conflict.
        </Text>

        <Text as="p" fontSize="lg" textAlign="justify">
        Thus DSET utility provides the basis for a trustworthy platform by setting a good measure of reliability through the CAS (Credit Assessment System);furthermore it is an important element for the decentralized voting mechanism about the platform development.
        </Text>


        <Heading as="h4" size="md"  paddingTop="1rem">Network</Heading>
        <Text as="p" fontSize="lg" textAlign="justify">
        Users{"'"}activiy is rewarded: inviting new members, acting as a judge, scoring a high CAS provide benefit for the member and for the platform as a whole.
        </Text>

      </VStack>
    </Container>
  );
};

export default TokenPage;
