import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../components/HomeSection'
import FeaturesSection from '../components/FeatureSection'
import { api } from '../services/api'
import ServiceCard from '../components/ServiceCard'
import { services } from './api/services'
import BestServicesSection from '../components/BestServicesSection'


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


type Homeprops ={
  services: Service[]
}


const Home = ({services}:Homeprops) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>DigiServices</title>
      </Head>

     
      <section >

        <HomeSection />

        <FeaturesSection />

        <BestServicesSection services={services} />
        
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

export default Home
