import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ServiceCard from '../components/ServiceCard'
import { services } from './api/services'
import SearchSection from '../components/SearchSection'
import { Box, Flex, Grid, GridItem,Text } from '@chakra-ui/react'


type Service= {
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


type Discoverprops ={
  services: Service[]
}


const Discover = ({services}:Discoverprops) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>DigiServices</title>
      </Head>

     
      <section >

        <SearchSection/>

        
       </section >
 
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  
  //const {data} =  await api("services",{});
  const data = services();

  return {
    props:{
      services:data.services
      
    },
   
  }
}

export default Discover
