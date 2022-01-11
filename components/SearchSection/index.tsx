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
import { useState } from 'react';


type Contract = {
    contract_name: string,
    nft: {
        currency_symbol: string,
        token_name: string
    },
    relation_type: string,
    privacy_type: string,
    publisher: string,
    collateral: [
        {
            currency_symbol: string, // This is ADA's currency_symbol
            value: number // 5 ADA
        }
    ],
    terms_hash: string,
    terms: {
        input_name: string,
        question: string,
        type: string,
        roles: number[]
    }[],
    triggers: {
        input_name: string,
        operator: string,
        action_selector: string,
        action: string,
        roles: string,
        value: string
    }[],
    judges?: [
        {
            name_judge: string,
            judge: string,
        }
    ],
    accusations?: [
        {
            name_accuser: string,
            accuser: string,
            name_accused: string,
            accused: string,
            time: number,
            deadline: number
        }
    ],
    title: string,
    resolutions?: string[],
    roles: number,
    role_map?: [
        {
            name: string,
            address: string,
            role: number
        }
    ]
}


type Discoverprops = {
    contracts: Contract[];
    filterServ: Contract[];
    setfilter: (contracts: any) => any;
}

const SearchSection = ({ contracts, setfilter }: Discoverprops) => {
    function handleChange(e: any) {
        if (e.target.value.length > 0) {
            let filteredResults = contracts.filter(p => {
                return (
                    p.terms_hash.toLowerCase().match(e.target.value.toLowerCase())
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
        <Flex maxW={'3xl'} p="2rem" ml="1.5rem" alignItems="start" >
            <InputGroup size="lg">
                <Input
                    onChange={handleChange}
                    pr="4.5rem"
                    placeholder="Search"
                    _placeholder={{ color: 'gray.600' }}
                />
                <InputRightElement width="5.75rem" >
                    <Button h="2rem" size="lg" onClick={handleClick} bg="blue.500">
                        <Search2Icon color="white" />
                    </Button>
                </InputRightElement>

            </InputGroup>



        </Flex>
    );
}


export default SearchSection;