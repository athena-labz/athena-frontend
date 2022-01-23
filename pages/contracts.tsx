import type { GetStaticProps, NextPage } from 'next'
import { useState, useCallback, useRef } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ServiceCard from '../components/ServiceCard'
import { contracts } from './api/contract'
import SearchSection from '../components/SearchSection'
import {
  Box,
  Text,
  WrapItem,
  Wrap,
  Container,
  Select,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Badge,
  Grid,
  Flex,
  GridItem,
  Button,
  Divider,
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
    xoffset: 115,
    yoffset: 1.5,
  })



  const onChange = (new_value: number) => {
    let new_coordenada = state.xoffset - (value - new_value) * 2
    let test = document.querySelector('#slider-thumb-testy');
    let test_data = null;
    if (test) {
      test_data = test.getBoundingClientRect()
    }
    if (test_data) {
      let x = new_value.toString().length == 1? test_data.x -60 : test_data.x -55;
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

        <SearchSection contracts={contracts} filterServ={filtered} setfilter={setFiltered} />

        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={2}
          px={"3rem"}
        >

          <GridItem rowSpan={2} colSpan={1} >

            <Box w="100%" h="100%" >

              <Box w="100%" p={2} marginTop={'0.5rem'}>

                <FormControl >
                  <FormLabel
                    color="gray.600"
                    fontWeight='bold'
                    style={{ textTransform: 'uppercase' }}>
                    Collateral Range
                  </FormLabel>

                  <Badge
                    variant="solid"
                    p={1}
                    id={"bolinha"}
                    borderRadius={"0.8rem"}
                    style={{
                      position: "absolute",
                      left: `${state.xoffset}px`,
                      top: `${state.yoffset}rem`
                    }}

                  >
                    {value}
                  </Badge>
                  <Slider
                    ref={ball_ref}
                    aria-label="slider-ex-2"
                    colorScheme="blue"
                    defaultValue={50}
                    id={"testy"}
                    marginTop={6}
                    value={value}
                    onChange={onChange}
                  >


                    <SliderTrack >
                      <SliderFilledTrack />
                    </SliderTrack>

                    <SliderThumb />

                  </Slider>




                </FormControl>

              </Box>


              <Box w="100%" p={2} marginTop={'0.5rem'}>

                <FormControl >
                  <FormLabel color="gray.600" fontWeight='bold' style={{ textTransform: 'uppercase' }}>
                    Privacy Type
                  </FormLabel>

                  <Select
                    name="options"

                    size="md"
                  >
                    <option value="option1" >PUBLIC</option>
                    <option value="option2">PRIVATE</option>
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
                    name="colors"
                    size="md"
                  >
                    <option value="option1">DISTRIBUTED</option>
                    <option value="option2">CONVERGENT</option>
                  </Select>
                </FormControl>

              </Box>


            </Box>

          </GridItem  >

          <GridItem colSpan={4}>
            <Flex width={"100%"} style={{ flexFlow: "row wrap", alignContent: "space-between", justifyContent: "space-between" }}>
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
