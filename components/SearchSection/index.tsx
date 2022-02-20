import type { NextPage } from 'next'
import {
    Container,
    Button,
    InputRightElement,
    InputGroup,
    Input,
    Flex,
    Divider,
    Center,

} from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import type Contract from '../../types/contract'

type Discoverprops = {
    contracts: Contract[];
    filterServ: Contract[];
    isCampaign:boolean;
    setfilter: (contracts: any) => any;
}

const SearchSection = ({ contracts, setfilter,isCampaign }: Discoverprops) => {
    function handleChange(e: any) {
        if (e.target.value.length > 0 && !isCampaign) {
            let filteredResults = contracts.filter(p => {
                return (
                    p.title.toLowerCase().match(e.target.value.toLowerCase()) ||
                    p.terms_hash.toLowerCase().match(e.target.value.toLowerCase()) ||
                    p.publisher_name.toLowerCase().match(e.target.value.toLowerCase()) 
                )
            });
            setfilter(filteredResults);
        }
        else {
            setfilter(contracts)
        }

    }
    var handleClick = () => { }

    return (
        <Flex maxW={'6xl'} p="2rem" ml="1.1rem" alignItems="start" >
            <InputGroup size="lg">
                <Input
                    onChange={handleChange}
                    pr="30.5rem"
                    placeholder="Search"
                    _placeholder={{ color: 'gray.600' }}
                />
                <InputRightElement width="5.75rem" >
                    <Button h="2.3rem" size="lg" onClick={handleClick} bg="#38b6ff">
                        <Search2Icon color="white" />
                    </Button>
                </InputRightElement>

            </InputGroup>



        </Flex>
    );
}


export default SearchSection;