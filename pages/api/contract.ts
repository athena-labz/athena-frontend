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
            publisherCAS:20000,
            publisher_name:"Carlos Augusto",
            "relation_type": "distributed",
            "privacy_type": "PUBLIC",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed05fc",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"True/False",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Pay",
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
        //2
        {
            "nft": {
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            "relation_type": "distributed",
            "privacy_type": "PRIVATE",
            "publisher": "fcea920f7412b5da7be0cf42b8c93759",
            "publisher_name": "Johny Bravo",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 3 // 5 ADA
                }
            ],
            title:"Write a book",
            publisherCAS:20000,
            "terms_hash": "a9ac6733cce5c65e4ff26e6bf312c27f",
            terms:[
                {
                    input_name:"expectations",
                    question:"Please provide content main target in terms of customers description and expectations",
                    type:"True/False",
                    roles:[1]
                },
                {
                    input_name:"deadline",
                    question:"Please inform a deadline from deal date ",
                    type:"Quantity",
                    roles:[1]
                },
                {
                    input_name:"languages",
                    question:"Please inform number of languages you plan to translate the book into ",
                    type:"Quantity",
                    roles:[0]
                },
            ],
            triggers:[
                {
                    input_name:"languages",
                    value:"3",
                    operator:"LESS THEN",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:" 10% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"deadline",
                    value:"1943689924",
                    operator:"GREATER THEN",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"expectations",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"13% points of CAS"
                }
            ],
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
            title:"Mountain Bike For Sale",
            publisherCAS:200000,
            publisher_name:"Mark Lavosier",
            "relation_type": "one-time",
            "privacy_type": "PUBLIC",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 1.45 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdaa2d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"pick-up the bike",
                    question:"Please confirm availability to pick-up the bike at the indicated address Company Performance Policy ",
                    type:"True/False",
                    roles:[1]
                }
            ],
            triggers:[
                {
                    input_name:"pick-up the bike",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" -20% points of CAS"
                },
                {
                    input_name:"pick-up the bike",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"100% of collateral to be severed (to be paid)"
                }
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
            title:"Employer-employees to regulate bonus compensation",
            publisherCAS:20000,
            publisher_name:"Yelena Kamado",
            "relation_type": "distributed",
            "privacy_type": "PRIVATE",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 2.15 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8r3ed055",
            terms:[
                {
                    input_name:"yearly turnover",
                    question:"Are you committing to achieve yearly turnover > 10 mio USD ?",
                    type:"True/False",
                    roles:[1]
                },
                {
                    input_name:"availability over the week-ends",
                    question:"Are you available to assure availability over the week-ends ?",
                    type:"True/False",
                    roles:[1]
                },
                {
                    input_name:"travel weekly",
                    question:"Are you ready to travel weekly over regions at distances > 200 km  ?",
                    type:"True/False",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Pay",
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
            title:"Holiday House for rent",
            publisherCAS:3456522,
            publisher_name:"Edward Elric",
            "relation_type": "distributed",
            "privacy_type": "PUBLIC",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 0.48 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313ed055",
            terms:[
                {
                    input_name:"leave the house in the same way",
                    question:" Are you committing to leave the house in the same way you find as you enter it, proving it with pictures of the indicated locations in the attach ed file (no need to show any file at present)  ?",
                    type:"True/False",
                    roles:[1]
                },
                {
                    input_name:"more than 4 people",
                    question:"Are you available to assure that not more than 4 people will be leaving in the house ? ",
                    type:"True/False",
                    roles:[1]
                }
            ],
            triggers:[
                {
                    input_name:"leave the house in the same way",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 12% points of CAS"
                },
                {
                    input_name:"more than 4 people",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 12% points of CAS"
                }
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
            title:"Website development",
            publisherCAS:20000,
            publisher_name:"Aphonse Elric",
            "relation_type": "distributed",
            "privacy_type": "PRIVATE",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 8 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc40036dbd8313ed055",
            terms:[
                {
                    input_name:"retains the services",
                    question:"The Clients hereby retains the services of the Developer for the Web Design Project to be publisheon an Internet Service Provider or provided on disk at the Client’s option.",
                    type:"True/False",
                    roles:[0,1]
                },
                {
                    input_name:"deadline",
                    question:"Please inform a deadline from deal date ",
                    type:"Quantity",
                    roles:[0,1]
                },
                {
                    input_name:"notify delay",
                    question:"DEVELOPER agrees to notify promptly of anyfactor, occurrence, or event coming to its attention that may affect DEVELOPER’s ability to meet the requirements of this Agreement, or that is likely to occasion any material delay in the Schedule",
                    type:"True/False",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"notify delay",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 12% points of CAS"
                },
                {
                    input_name:"notify delay",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"8% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"deadline",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"15% points of CAS"
                },
                {
                    input_name:"retains the services",
                    value:"FALSE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Pay",
                    action:"23% of collateral to be severed (to be paid)"
                }
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
       /* {
            "nft": {
                "currency_symbol": "ADA",
                "token_name": "ADA"
            },
            title:"Bipede robot crowd-funding",
            publisherCAS:20000,
            publisher_name:"Eren Yeagar",
            "relation_type": "distributed",
            "privacy_type": "PUBLIC",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd83177d055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"True/False",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Pay",
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
            publisherCAS:20000,
            publisher_name:"Mikasa Ackerman",
            "relation_type": "distributed",
            "privacy_type": "PUBLIC",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313hu055",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"True/False",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Pay",
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
            publisherCAS:20000,
            publisher_name:"Levi Ackerman",
            "relation_type": "distributed",
            "privacy_type": "PUBLIC",
            "publisher": "202cb962ac59075b964b07152d234b70",
            "collateral": [
                {
                    "currency_symbol": "ADA", // This is ADA's currency_symbol
                    "value": 5 // 5 ADA
                }
            ],
            "terms_hash": "81dc9bdb52d04dc20036dbd8313edyu5",
            terms:[
                {
                    input_name:"vision tracking",
                    question:"Is the robot able to track-following a moving object ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"battery cycle",
                    question:"Is the battery cycle before re-charging longer than 30’ under continuous walking condition ?",
                    type:"True/False",
                    roles:[0]
                },
                {
                    input_name:"Advanced payment",
                    question:"Is advanced payment done before early bird terms expiration ?",
                    type:"True/False",
                    roles:[1]
                },
            ],
            triggers:[
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:" 10% points of CAS"
                },
                {
                    input_name:"battery cycle",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Pay",
                    action:"50% of collateral to be severed (to be paid)"
                },
                {
                    input_name:"vision tracking",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[0] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Decrease",
                    action:"10% points of CAS"
                },
                {
                    input_name:"Advanced payment",
                    value:"TRUE",
                    operator:"EQUALS",
                    roles:[1] ,
                    action_selector: "Pay",
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
        }*/
    ]
}

export function contracts() {
    return contracts_data
}


export function contract(hash: any) {
    try {
        let filtered = contracts_data.contracts.filter(contract => contract.terms_hash === hash)

        if(filtered.length > 0 )
            return filtered[0]
        else
            return null
    } catch (error) {
        console.log(error)
    }
}



