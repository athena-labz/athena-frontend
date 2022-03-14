import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
    Flex
} from '@chakra-ui/react';
import WalletSelector from '../components/WalletSelector';



const SelectWallet: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Select Wallet</title>
      </Head>

     
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}>
        
        <WalletSelector />

      </Flex>
    </div>
  )
}

export default SelectWallet