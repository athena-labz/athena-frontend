import {
    Divider,
    Heading,
    Container,
    Text,
  } from "@chakra-ui/react"

import AccordionComponent from '../AccordionComponent'

export default function FaqSection() {
  const faq  = [
        {
            key:"A",
            question:"How shall I offer a service?",
            answer:"You set a new contract and add the features of the service you intend to offer. You can add description and if possible make the service performance measurable to assure transparency and understanding"
        },
        {
            key:"B",
            question:"How shall I sign a services?",
            answer:"Submitting the acceptance of a smart contract you are signing and agreeing the terms of the provided service. During the contract setting you are allowed to add inputs related to the performance you expect and it is your interest to make it in a undertandable and measurable way"
        },
        {
            key:"C",
            question:"How shall I raise a mediation request ?",
            answer:"If you deem that the service provided does not match expectations or if your customer did not meet requests you set, you can ask for a mediation through the previously selected jurors. This is done by selecting the Mediation button located at the bottom of the signed contract window"
        },
        {
            key:"D",
            question:"How does I assess reliability of service publisher or client through CAS (Credit Assessment Score) ?",
            answer:" CAS (Credit Assessment Score) is a dynamic score which upates periodically and wrap up the whole social and business reliability of each platform member by reviewing the past history of transactions, service success rates as customer or service provider. Additionally it measures,rewards and penalizes members who achieve or not set year targets. CAS measurement rules, rewards and penalty are set under CAS window "
        },
        {
            key:"E",
            question:"What are TrustToken (TT), as collateral?",
            answer:" TrustToken (TT) are tokens set as guarantee by both sides, the service provider and customer during the contract negotiation. It is an escrow which is opened at contract execution and distributed to both parties according to a logic accounting for the transaction performance. In case of arbitration a juror is involved and he will be rewarded through TT as well for his performance. At present ADA will be used as TT."
        },
        {
            key:"F",
            question:"What I can use DSET for?",
            answer:" DSET is the utility token of the platform and will be minted at a second development stage to allow for new functions and rewards"
        },
        {
            key:"G",
            question:"Where can I purchase DSET?",
            answer:"Many cryptocurrency exchanges will be able to operate after DSET launch"
        },
        {
            key:"H",
            question:"What is Accumulated Review Credit ARC?",
            answer:"Reviews are one of the factor affecting CAS. After each service completion, the parties will be able to review to counterpart performance. Also in case of mediatiation juror is assessed. ARC represents the cumulate score over a period"
        },
        {
            key:"I",
            question:"Why is DigiServices a trustful platform?",
            answer:"Integrating mediation into smart contracts deters scammers from acting because of the intrinsic loss. Additionally well-minded members add a relevant layer of carefulness knowing that any misunderstanding or misbehavior will be accounted thrugh immediate penalties and a reduced CAS. A reduced CAS will undermine a successful participation on the platform because reputation and reliability are essential ingredient for success."
        },
        {
            key:"J",
            question:"How can I become a juror ?",
            answer:"Every member is allowed to be selected as juror for categories he or she is knowledeable about. For further details please refer to Juror tag on the bottom of the home page"
        },
        {
            key:"K",
            question:"What is juror compensation?",
            answer:"Becoming a reliable juror assures a continuous income stream on occasion of every mediation act."
        },
        {
            key:"L",
            question:" What services can be offered on DigiServices?",
            answer:"Every kind of service and sales can be offered on the platfrom  as long as it is legal, moral and does not offend any human being"
        },
        {
            key:"M",
            question:"What is EUTxO?",
            answer:"EUtxO is Extended Unspent Transaction Output and is the protocol adopted by Cardano blockchain to maximize safety, speed, reliability through a environment-friendly energy use"
        },
        {
            key:"N",
            question:"What is Cardano?",
            answer:"Cardano is a blockchain platform, pioneering Proof-of-Stake validation protocol and swiftly rising to be a prominent player in the blockchain industry"
        },
        {
            key:"O",
            question:"What is the relationship DSET with ADA?",
            answer:"DSET is a token minted through Cardano blockchain whose token is ADA"
        },
        {
            key:"P",
            question:"What are rewards and penalties?",
            answer:"A gain or loss in tokens holding can be triggered by virtuous behaviours or misbehavious, excellent feed-back or insufficient performance, matching or missing set targets. Dateils are set into CAS, Rewards, Penalties tag"
        },
        
    ]

  return (
    <Container maxW={'6xl'} marginBottom={10} id="faq" style={{scrollMarginTop:120}}>
     <Heading
        lineHeight={1.1}
        fontWeight={600}
        textAlign={'center'} 
        fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: '#38b6ff',
            zIndex: -1,
          }}>
          Frequently Asked Questions (FAQ)
        </Text>
                    
      </Heading>

      <Divider marginTop="5" />
      
      <AccordionComponent itens={faq}/>

    </Container>
    
  );
}
