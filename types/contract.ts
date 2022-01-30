
type Contract = {
    contract_name:string,
    nft: {
        currency_symbol: string,
        token_name: string
    },
    relation_type: string,
    privacy_type: string,
    publisher: string,
    publisherCAS?: number,
    collateral: [
        {
            currency_symbol: string, // This is ADA's currency_symbol
            value: number // 5 ADA
        }
    ],
    terms_hash: string,
    terms:{
        input_name:string,
        question:string,
        type:string,
        roles:number[]
    }[],
    triggers:{
        input_name:string,
        operator:string,
        action_selector:string,
        action:string,
        roles:string,
        value:string
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
    title:string,
    publisher_name:string;
    resolutions?: string[ ],
    roles: number,
    role_map?: [
        {
            name: string,
            address: string,
            role: number
        }
    ]
}

export default Contract;