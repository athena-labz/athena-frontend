import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../components/HomeSection'
import FeaturesSection from '../components/FeatureSection'
import { api } from '../services/api'
import ServiceCard from '../components/ServiceCard'


type Service= {
  type: string;
  publisher: string;
  title: string;
  description: string;
  trust: number;
  price?: number;
  deadline?: number;
  badge_color:string;
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

        <h1>-----Services: --------</h1>
        <ul>

          {services.map((service)=>(
            <li key={service.title}>
             
               <ServiceCard
                type={service.type}
                badge_color={service.badge_color}
                publisher={service.publisher}
                title={service.title}
                description={service.description}
                trust={service.trust}
                price={service.price}
                deadline={service.deadline}
               />

            </li>
          ))}

        </ul>
      
        
       </section >
 
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  
  const {data} =  await api("services",{});

  return {
    props:{
      services:data.services
      
    },
   
  }
}

export default Home
