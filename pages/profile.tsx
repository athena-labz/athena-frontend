import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  Link,
  Badge,
  Grid,
  SimpleGrid,
  GridItem,
  useColorModeValue,
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
  Tabs, 
  TabList,
  Flex,
  TabPanels,
  Tab, 
  TabPanel
} from '@chakra-ui/react';
import { AiOutlineGlobal } from "react-icons/ai";
import { CopyIcon } from '@chakra-ui/icons';
import UserCard from '../components/UserCard';


const ProfilePage = () => {
  return (
    <Flex maxW={'90%'} px="24" py="8" alignItems='row'>
        <UserCard/>
        <Tabs variant="soft-rounded" colorScheme="blue" size="sm" mt={6} ml={16}>
          <TabList>
            <Tab>My contracts</Tab>
            <Tab>Created</Tab>
            <Tab>Reviews</Tab>
            <Tab>Following</Tab>
            <Tab>Followers</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
    </Flex>
  );
};

export default ProfilePage;


