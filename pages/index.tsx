import type { NextPage } from 'next'
import Head from 'next/head'
import Header  from '../components/Header'
import Footer  from '../components/Footer'
import styles from '../styles/Home.module.css'
import HomeSection from '../components/HomeSection'
import FeaturesSection from '../components/FeatureSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigiServices</title>
      </Head>

     
      <section >

        <HomeSection />

        <FeaturesSection />
        
       </section >
 
    </div>
  )
}

export default Home
