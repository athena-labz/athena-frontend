import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../components/HomeSection'
import FeaturesSection from '../components/FeatureSection'
import { judges } from './api/judges'
import ProblemSection from '../components/ProblemSection'
import RoadmapSection from '../components/RoadmapSection'
import GoToMarketSection from '../components/GoToMarketSection'
import FaqSection from '../components/FaqSection'
import CrowdfundingSection from '../components/CrowdfundingSection'
import TeamSection from '../components/TeamSection'

type Judge = {
  name: string;
  description: string;
  trust: number;
  price: number;
  image?: string;
}

type Homeprops = {
  judges: Judge[]
}


const Home = ({ judges }: Homeprops) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>ATHENA</title>
      </Head>


      <section >

        <HomeSection />

        <FeaturesSection />

        <CrowdfundingSection />

       {/* <RoadmapSection />*/}

       {/* <GoToMarketSection />*/}

        <TeamSection />

        <FaqSection />

      </section >

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  //const {data} =  await api("services",{});
  const data = judges();

  return {
    props: {
      judges: data.judges

    },

  }
}

export default Home
