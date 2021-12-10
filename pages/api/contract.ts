// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Contract = {
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
    resolutions?: [],
    roles: number,
    role_map?: [
        {
            name: string,
            address: string,
            role: 0
        },
        {
            address: string,
            role: 0
        }
    ]
}

type Data = {
    contracts: Contract[]
}

const contracts_data = {
    "contracts": [
        {
            "nft": {
                "currency_symbol": "cs_example_1",
                "token_name": "cnft"
            },
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "", // This is ADA's currency_symbol
                    "value": 5000000 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            "judges": [
                "827ccb0eea8a706c4c34a16891f84e7b",
                "e10adc3949ba59abbe56e057f20f883e"
            ],
            "accusations": [],
            "resolutions": [],
            "roles": 2,
            "role_map": [
                {
                    "address": "202cb962ac59075b964b07152d234b70",
                    "role": 0
                }
            ]
        },
        {
            "nft": {
                "currency_symbol": "cs_example_2",
                "token_name": "cnft"
            },
            "relation_type": "distributed",
            "privacy_type": "PRIVATE",
            "publisher": "fcea920f7412b5da7be0cf42b8c93759",
            "collateral": [
                {
                    "currency_symbol": "", // This is ADA's currency_symbol
                    "value": 10000000 // 5 ADA
                }
            ],
            "terms_hash": "a9ac6733cce5c65e4ff26e6bf312c27f",
            "judges": [
                "827ccb0eea8a706c4c34a16891f84e7b",
                "e10adc3949ba59abbe56e057f20f883e"
            ],
            "accusations": [
                {
                    "accuser": "202cb962ac59075b964b07152d234b70",
                    "accused": "fcea920f7412b5da7be0cf42b8c93759",
                    "time": 1638185524,
                    "deadline": 1640777524
                }
            ],
            "resolutions": [],
            "roles": 0,
            "role_map": [
                {
                    "address": "202cb962ac59075b964b07152d234b70",
                    "role": 0
                },
                {
                    "address": "fcea920f7412b5da7be0cf42b8c93759",
                    "role": 0
                }
            ]
        }
    ]
}

export function contracts() {
    return contracts_data
}


export function contract(hash: string) {
    return contracts_data.contracts.filter(contract => contract.terms_hash === hash)
}



