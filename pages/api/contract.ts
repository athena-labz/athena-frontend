// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type Contract from '../../types/contract'

type Data = {
    contracts: Contract[]
}

const contracts_data = {
    "contracts": [
        {
            "nft": {
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Carlos Augusto",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
            "publisher_name": "Johny Bravo",
            "collateral": [
                {
                    "currency_symbol": "", // This is ADA's currency_symbol
                    "value": 10000000 // 5 ADA
                }
            ],
            title:"test of",
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
        },
        {
            "nft": {
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Mark Lavosier",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Yelena Kamado",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Edward Elric",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Aphonse Elric",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Eren Yeagar",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Mikasa Ackerman",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisher_name:"Levi Ackerman",
            "relation_type": "distributed",
            "privacy_type": "public",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"Boolean",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"Boolean",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:" -10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Collateral",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[0] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Decrease CAS",
                    action:"-10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"N/A",
                    operator:"Boolean",
                    roles:[1] ,
                    action_selector: "Collateral",
                    action:"20% of collateral to be severed (to be paid)"
                },
            ],
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
        }
    ]
}

export function contracts() {
    return contracts_data
}


export function contract(hash: string) {
    return contracts_data.contracts.filter(contract => contract.terms_hash === hash)
}



