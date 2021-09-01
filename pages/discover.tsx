import type { GetStaticProps, NextPage } from 'next'
import {useState, useCallback} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ServiceCard from '../components/ServiceCard'
import { services } from './api/services'
import SearchSection from '../components/SearchSection'
import { 
  Box, 
  Text,
  WrapItem,
  Wrap,
  Container,
  Select ,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Badge
 } from '@chakra-ui/react'


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
  const [value, setValue] = useState(50);

  // Create state
  const [state,setState] = useState({
    xoffset: 91,
    yoffset: 25,
  })

  const onChange = (new_value) => {
    const new_coordenada = state.xoffset-(value-new_value)*2
      setState({ xoffset:new_coordenada});
   

    setValue(new_value)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>DigiServices</title>
      </Head>

     
      <section >

        <SearchSection/>

        <Wrap w="100%">
          <WrapItem p={2} display="flex" flexDirection='row'>
             
              <Box w="100%" h="10" h="100%" >

                <Box w="100%" p={2} marginTop={'0.5rem'}>

                   <FormControl >
                      <FormLabel 
                            color="gray.600" 
                            fontWeight='bold'
                            style={{textTransform:'uppercase'}}>
                        trust token range
                      </FormLabel>
                      
                      <Badge 
                            variant="solid" 
                            p={1}
                            borderRadius={"0.8rem"}                           
                            style={{
                                    position: "absolute",
                                    left: `${state.xoffset}px`,
                                     top: `${state.yoffset}px`
                            }}
                          
                        >
                          {value}
                        </Badge>
                      <Slider 
                          aria-label="slider-ex-2" 
                          colorScheme="blue" 
                          defaultValue={50} 
                          marginTop={6}
                          value={value}
                          onChange={onChange}
                      >
                        
                          
                          <SliderTrack >
                            <SliderFilledTrack />  
                          </SliderTrack>

                          <SliderThumb  />

                      </Slider>
                      

                     
                                          
                    </FormControl>

                 </Box>


                 <Box w="100%" p={2} marginTop={'0.5rem'}>

                   <FormControl >
                      <FormLabel color="gray.600" fontWeight='bold' style={{textTransform:'uppercase'}}>
                        Filter 1
                      </FormLabel>

                      <Select
                        name="options"
                        placeholder="Select some colors..."
                        size="md"
                      >
                        <option value="option1" >option 1</option>
                        <option value="option2">option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </FormControl>

                 </Box>

                 <Box w="100%" p={2} marginTop={'0.5rem'}>

                   <FormControl >
                      <FormLabel color="gray.600" fontWeight='bold' style={{textTransform:'uppercase'}}>
                        Filter 3
                      </FormLabel>
                      <Select
                        isMulti
                        name="colors"
                        placeholder="Select some options..."
                        size="md"
                      >
                        <option value="option1">option 1</option>
                        <option value="option2">option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </FormControl>

                 </Box>

                <Box w="100%" p={2} marginTop={'0.5rem'}>

                   <FormControl >
                      <FormLabel color="gray.600" fontWeight='bold' style={{textTransform:'uppercase'}}>
                        Filter 3
                      </FormLabel>
                      <Select
                        isMulti
                        name="options"
                        placeholder="Select some options..."
                        size="md"
                      >
                        <option value="option1">option 1</option>
                        <option value="option2">option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </FormControl>

                 </Box>


                 

              </Box>

          </WrapItem>


          <WrapItem  bg="green.200">
            <Text w="180px" h="80px" >
              services
            </Text>
          </WrapItem>

        </Wrap>



        
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
