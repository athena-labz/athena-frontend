import type { GetStaticProps, NextPage } from 'next'
import { useState, useCallback, useRef, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ServiceCard from '../components/ServiceCard'
import { contracts } from './api/contract'
import SearchSection from '../components/SearchSection'
import {
  Box,
  Select,
  FormControl,
  FormLabel,
  SimpleGrid,
  Grid,
  Flex,
  GridItem,
  Button,
  Center,
  CircularProgress,
} from '@chakra-ui/react'
import type Contract from '../types/contract'

type Discoverprops = {
  contracts: Contract[]
}


const Discover = ({ contracts }: Discoverprops) => {
  const [value, setValue] = useState(50);
  const [filtered, setFiltered] = useState(contracts);
  const [isLoading, setIsLoading] = useState(false);
  const ball_ref = useRef(null)

  // Create state
  const [state, setState] = useState({
    xoffset: 5.4,
    yoffset: 1.5,
  })

  useEffect(() => {
    onChange(50)
  }, [])

  const handleChangeSelect = (name: string) => {
    const element = (document.getElementById(name) as HTMLInputElement);
    const value = element == null ? "" : element.value;

    if (value != "ALL" && name == "privacy_type")
      setFiltered(contracts.filter((e) => e.privacy_type === value))
    else if (value != "ALL" && name == "relation_type")
      setFiltered(contracts.filter((e) => e.relation_type === value))
    else
      setFiltered(contracts)

  }

  const onChange = (new_value: number) => {
    let test = document.querySelector('#slider-thumb-testy');
    let test_data = null;
    if (test) {
      test_data = test.getBoundingClientRect()
    }
    if (test_data) {
      let x = new_value.toString().length == 1 ? test_data.x * 0.063 - 2.2 : test_data.x * 0.063 - 2.3;
      setState({
        xoffset: x,
        yoffset: 1.5,
      });
    }

    setValue(new_value)
  }

  const loadMore = async () => {
    setIsLoading(true)
    await setTimeout(function () {
      setIsLoading(false)
    }, 1000);
  }


  return (
    <div >
      <Head>
        <title>ATHENA - Contracts</title>
      </Head>


      <section>

        <SearchSection contracts={contracts} filterServ={filtered} setfilter={setFiltered} isCampaign={false}/>

        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={2}
          px={"1.56rem"}
        >

          <GridItem rowSpan={2} colSpan={1} >

            <Box w="100%" h="100%" >

              <Box w="100%" p={2} marginTop={'0.5rem'}>

                <FormControl >
                  <FormLabel color="gray.600" fontWeight='bold' style={{ textTransform: 'uppercase' }}>
                    Privacy Type
                  </FormLabel>

                  <Select
                    id="privacyType"
                    name="privacyType"
                    onChange={e => handleChangeSelect("privacyType")}
                    size="md"
                  >
                    <option value="ALL">ALL</option>
                    <option value="PUBLIC" >PUBLIC</option>
                    <option value="PRIVATE">PRIVATE</option>

                  </Select>
                </FormControl>

              </Box>

              <Box w="100%" p={2} marginTop={'0.5rem'}>

                <FormControl >
                  <FormLabel color="gray.600" fontWeight='bold' style={{ textTransform: 'uppercase' }}>
                    Relation Type
                  </FormLabel>
                  <Select
                    isMulti
                    size="md"
                    id="relation_type"
                    name="relation_type"
                    onChange={e => handleChangeSelect("relation_type")}
                  >
                    <option value="ALL">ALL</option>
                    <option value="distributed"> REPEATED SERVICE </option>
                    <option value="one-time">ONE-TIME SERVICE</option>
                  </Select>
                </FormControl>

              </Box>


            </Box>

          </GridItem  >

          <GridItem colSpan={4} >
            <Flex
              w="full"
              p={2}
              alignItems="center"
              justifyContent="center"
            >
              <SimpleGrid
                columns={[1, 3]}
                gap="4rem"
                mx="auto"
                marginBottom={0}
                textAlign={["left", "center"]}
              >
                {filtered.map((contract, index) => (
                  <ServiceCard
                    key={contract.terms_hash}
                    title={contract.title}
                    nft={contract.nft}
                    relation_type={contract.relation_type}
                    privacy_type={contract.privacy_type}
                    publisher_name={contract.publisher_name}
                    collateral={contract.collateral[0]}
                    terms_hash={contract.terms_hash}
                  />
                ))}
                </SimpleGrid>
            </Flex>
            <Center my={5}>
              {
                !isLoading ?
                  <Button
                    onClick={loadMore}
                    fontSize={'md'}
                    fontWeight={400}
                    variant={'link'}
                  >
                    Load More
                  </Button>
                  :
                  <CircularProgress isIndeterminate color="blue.400" />
              }
            </Center>
          </GridItem  >


        </Grid>


      </section >

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  //const {data} =  await api("services",{});
  const data = contracts();

  return {
    props: {
      contracts: data.contracts

    },
    revalidate: 60 * 60 * 24// 24 hours
  }
}

export default Discover
