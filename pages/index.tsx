import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../components/HomeSection'
import FeaturesSection from '../components/FeatureSection'
import { judges } from './api/judges'
import BestJudgesSection from '../components/BestJudgesSection'
import ProblemSection from '../components/ProblemSection'
import { GiSpellBook,GiShare,GiSpanner,GiRocketThruster } from "react-icons/gi";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {
  Heading,
  Divider,
} from '@chakra-ui/react';

type Judge= {
  name: string;
  description: string;
  trust: number;
  price: number;
  image?:string;
}

type Homeprops ={
  judges: Judge[]
}


const Home = ({judges}:Homeprops) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>DigiServices</title>
      </Head>

     
      <section >

        <HomeSection />

        <ProblemSection id="section1"/>

        <FeaturesSection id="section2"/>

        <Heading as="h1">Project’s Development Road Map</Heading>  

      <Divider marginTop="2" marginBottom="3"/>

        <VerticalTimeline className={styles.custom_line}>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September – November 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiSpellBook />}
          >
            <h2>
             Overall Proof-of-Concept
            </h2>
            <p>
              
              Demonstration to verify that certain concepts or theories have the potential for real-world application
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="December 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiSpanner />}
          >
            <h2>
              Techinical model and solution details
            </h2>
            <p>
                The purpose is to design, develop, and implement solutions to evaluating and selecting solutions that potentially satisfy an appropriate set of allocated requirements. 
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="June 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiShare />}
          >
            <p>
              Prototype roll out and marketing partner selection
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="July 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiRocketThruster />}
          >
            <p>
             First go-live V1,10’000 members enrollment
            </p>
          </VerticalTimelineElement>
          


        </VerticalTimeline>

        
       </section >
 
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  
  //const {data} =  await api("services",{});
  const data = judges();

  return {
    props:{
      judges:data.judges
      
    },
   
  }
}

export default Home
