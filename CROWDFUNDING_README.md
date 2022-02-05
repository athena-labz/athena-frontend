<div align="center">
  <img src="https://github.com/SamuelSSan28/athena-frontend/blob/dev/public/logo.png" alt="Podcastr logo">
  <br/>
  <br/>

[![Languages](https://img.shields.io/github/languages/count/samuelssan28/athena-frontend?color=%23004AAD&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/samuelssan28/athena-frontend?color=004AAD&style=flat-square)](https://github.com/samuelssan28/athena-frontend/stargazers)

</div>

<h4 align="center">
 Athena_Crowdfunding Process	
 Building trust among peers through blockchain technology
 
 
</h4>


<p align="justify"> 
Content
-A Cardano blockchain based projects crowd-funding platform
-Every member or members team can promote a crowd-funding campaign 
-Any idea, service, physical object can be promoted
-A Cardano-blockchain based crowd-funding platform
-ADA as a payment coin at the initial stage and DSET as bounty for early membership subscribers
-Fostering Cardano among new participants
-Athena revenue source:  2% of total pledged amount {for reference Kickstarter fees are 5% + 5-5% of payment transaction fees}

</p>

<p align="justify">
 Example Bob launches a crowdfunding action to build and deliver a new printed circuit board for makers (PCB). Bob's team include Mike and Giulia
Alice is the first Athena member who pledges. Other pledgers will follow
</p>

<p align="justify">
 Parameter of the crowd-funding action are following
-A – campaign start time  [field]  →   Bob fill in 1.May 2022
-B - end time [field]	→   Bob fill in 30.Nov. 2022
-C - campaign target amount in ADA [field]  →   Bob fill in 50,000 ADA
-D - list of offered products and their price in ADA  [ drop down field: promoter can fill in and participants can select what they want to pledge]  →   Bob fill in: 1- PCB Set Full  200 ADA/unit; 2- PCB set advanced, 150 ADA/unit;  3 -   PCB Set Basic 100 ADA/unit
-E - description of the product and the items of the list [field: promoter can fill in] →   Bob fill in { a innovative PCB, 50 mm x 15 mm size, 2 Gb RAM with integrated ML capacity }
-F - promoting team members identities (through user name)   [field: promoter can fill in] →   Bob fill in { team made up by Bob, inventor, Mike software developer, Giulia HW developer. Team has 20+ years experience in electronics}
-G – collateral deposited by the promoting team (minimum value 300 ADA or higher depending on promoting team) [field: participants must fill in] →   Bob fill in  1000 ADA
-H - list of crowd-funding subscribers, those who pledge ADA to purchase one or more items (dynamically increasing)   →   this list will keep increasing as members of Athena stepwise pledge funds
-I - total pledged amount (dynamically increasing) [display field]  → keeps growing, eventually above target of 50,000 ADA 
-J - date of products delivery start if campaign succeeds  [field: promoter has to fill in] and [display field] →   Bob fill in  1.Feb.2023
-K - CAS of promoting team members [display field] beside the name/user name  → Bob, Mike and Giulia CAS respectively, for example 60, 70, 70
-L - Juror selected for the mediation case [display field]. Jurors need to apply for Jurors jobs in another window. All members can become jurors, but they need to pledge 300 ADA, add a description of their experience and motivation to be jurors. Additionally they should select one or more category they think they are skilled to fulfill the jobs. My tentative list is:  blockchain, coding, electronics, food mechanics, management, automotive, administrative, writing, art, leisure, tooling,  finance → Juror list {Michael, Antony, Stephan}

-M – Product assesment by subscribers 3 months after product delivery (succedding or not shall affect CAS of promotion team) → subscribers need to classify 1-5 (top) the product adding an explanation about  the score
-N – Selecting if crowd-funding participants are 'private', that is promoter team accept only participants they desire to invite (exclusive Club) [field: promoter has to fill in selecting one of 2 options] 
-O – Alice subscribes : she select product 1- PCB Set Full  200 ADA/unit. She sign a transaction paying to the promoting team 200 ADA

In a crowd-funding campaign 3 parties are involved, each one holding a private key and address:
1 - Publisher (campaign promoter): sign a contract with Athena as for item A below. 
2  - User (each user sign a smart contract with Athena, accepting 'Terms of Service')
3  - Athena platform : signing a contract with each user, 'Terms of Service' contract
A - The publisher promoting a project/product(s) signs a smart contract with Athena, indicating:
    • target amount he/she targets to achieve
    • campaign starting and end date
    • delivery date if campaign is successful
    • collateral amount, at least 10% of target amount if CAS < 65
    • Split targets allowing pledged funds reception (*)
    • One or more products types promoted and corresponding required pledge in ADA
B - Each user wishing to pledge a project/product signs a smart contract with Athena (with Athena having collateral in it), indicating:
-selected product(s) to be pledged and amount pledged (transaction occurs transfering ADA to Athena)
-selecting a juror in case of mediation action
C - Athena signs a 'Terms of Service' contract with each user pleadging the project/product
Publisher will get funds released stepwise according to fulfillment of the set targets.

(*) for example a quadruped robot able of vision and speech recognition can be proposed with following step targets:
1-mechanical hardware design completed 60 days after campaign end: 30% of funds can be collected They are released by Athena through smart contract to promoter account, after promoter submits request and juror approved → a ‘accusation’ event is triggered by promoter to release the fund ratio
2-speech recognition function design completed 90 days after campaign end: 30% of funds can be collected 
They are released by Athena through smart contract to promoter account, after promoter submits request and juror approved → a ‘accusation’ event is triggered by promoter to release the fund ratio
3-vision function design completed 120 days after campaign end: 40% of funds can be collected 
They are released by Athena through smart contract to promoter account, after promoter submits request and juror approved → a ‘accusation’ event is triggered by promoter to release the fund ratio
Verification of each of the 3 steps can occur through video or any media delivered by the promoter. 

Users retain the right at each step to challenge the verification by calling a mediation and the selected juror is called to verify the promoter (publisher) statement

Jurors selection:
each user can select up to 5 jurors from the available list. The selected jurors for the campaign will be the 3  most selected ones in sequence according to received preferences

</p>




---
