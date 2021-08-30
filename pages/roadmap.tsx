import React from 'react';
import {
  Heading,
  Divider,
  Container,
} from '@chakra-ui/react';

import { Timeline, Event } from "../components/Timeline";

const Roadmap = () => {
   
  return (
    <Container maxW={'7xl'} p="15">
       <Heading as="h1">Project’s Development Road Map</Heading>  

      <Divider marginTop="2" marginBottom="3"/>

      <Timeline>
      <Event interval={"September 2021"} title={"Overall  Proof-of-Concept"} >
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>

      <Event interval={"December 2021"} title={"Techinical model and solution details"} >
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>

      <Event interval={"June 2022"} title={"Prototype roll out and marketing partner selection"} >
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>

      <Event interval={"July 2022"} title={"First go-live V1,10’000 members enrollment"} >
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
    </Timeline>


      
     
      
      
    </Container>
  );
};

export default Roadmap;
