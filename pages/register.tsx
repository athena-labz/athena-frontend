import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
    Flex
} from '@chakra-ui/react';
import RegisterCard from '../components/RegisterCard';



const Register: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>

     
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}>
        
        <RegisterCard />

      </Flex>
    </div>
  )
}

export default Register