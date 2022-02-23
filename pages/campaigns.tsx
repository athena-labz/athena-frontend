import type { GetStaticProps, NextPage } from 'next'
import { useState, useCallback, useRef, useEffect } from 'react';
import Head from 'next/head'
import { campaigns_resume } from './api/campaingns'
import SearchSection from '../components/SearchSection'
import CampaignCard from '../components/CampaignCard'
import {
  Flex,
  SimpleGrid,
  useColorModeValue,
  Link, Stack, Button
} from '@chakra-ui/react'
import type Campaign from '../types/campaign'
import NextLink from 'next/link'
import { useUser } from '../contexts/UserContext';

// https://react-icons.github.io/react-icons

type Discoverprops = {
  campaigns: Campaign[]
}


const Discover = ({ campaigns }: Discoverprops) => {
  const [filtered, setFiltered] = useState(campaigns);
  const {isLogged} = useUser(); 
  return (
    <div >
      <Head>
        <title>ATHENA - Campaigns</title>
      </Head>


      <section>

        <Flex width={"100%"} style={{  justifyContent: "space-between" }}>
          <SearchSection contracts={[]} filterServ={[]} setfilter={setFiltered} isCampaign={true} />

          {isLogged && 
          <Flex maxW={'6xl'} p="2rem" ml="1.1rem" alignItems="start" >
            <NextLink href={"/create-campaign"}>
              <Button
                bg={'#38b6ff'}
                color={'white'}
                p={6}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create a project
              </Button>
            </NextLink>
          </Flex>}
        </Flex>


        <Flex
          w="full"
          bg={useColorModeValue("#F9FAFB", "gray.600")}
          p={50}
          alignItems="center"
          justifyContent="center"
        >
          <SimpleGrid
            columns={[1, 2, 3]}
            gap="34px"
            mx="auto"
            textAlign={["left", "center"]}
          >
            {filtered.map((campaign, index) => (
              <CampaignCard
                id={campaign.id}
                key={campaign.name}
                name={campaign.name}
                description={campaign.description}
                category={campaign.category}
                img={campaign.img}
                owner={campaign.owner}
                place={campaign.place}
                expiration={campaign.expiration}
                total_value={campaign.total_value}
                current_value={campaign.current_value}
                currency={campaign.currency}
              />
            ))}

          </SimpleGrid>
        </Flex>
      </section >

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  //const {data} =  await api("services"
  const data = campaigns_resume();

  // console.log("REQST CAMP: ",data)

  return {
    props: {
      campaigns: data.campaigns

    },
    revalidate: 60 * 60 * 80// 24 hours
  }
}

export default Discover
