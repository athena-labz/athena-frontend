import type Campaign from '../../types/campaign'

const campaigns =  [
  {
    name:"Floating Floors",
    id:"27b4039a42d9d632a5e791b166127c42",
    description:" A tactical game of balance and cunning 🐱‍👤 ⛩️ . Competitive game for 2-4 players with physics ...",
    category:"GAMES",
    img:"https://ksr-ugc.imgix.net/assets/036/035/134/ecbcb6ddcfa08dd62970f1ae6a2ff127_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641873036&auto=format&frame=1&q=92&s=546af219201b90d69bbf60ecb3002776",
    owner:"Santos Drumond",
    place:"Dublin, Irlanda",
    expiration:"15",
    total_value:2000,
    current_value:400,
    currency:"ADA"
  },
  {
    id:"259bf04f526341c498ebf1ce582d1291",
    name:"Thunder Road: Vendetta",
    description:"The classic 1986 game about the world's most lethal car race is revved up and reloaded!  In 1986, Thunder Road unleashed carnage. Today we’re bringing back this dusty, blood-spattered tribute to post-apocalyptic mayhem — with a thorough redesign from David Chalker and Brett Myers and a fresh coat of paint from artist Marie Bergeron. Run. Gun. Survive. The rest are details.",
    category:"GAMES",
    img:"https://ksr-ugc.imgix.net/assets/036/185/798/82ef59f2af9675c976c561c95d21957b_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1643292181&auto=format&frame=1&q=92&s=bd4ab1ba81a22e151703331c23272628" ,
    owner:"Edward Elric",
    place:"Tokyo, Japan",
    expiration:"35",
    total_value:3500,
    current_value:850,
    currency:"ADA"
  },
  {
    id:"93fb9a3456f9f955908f6092a6c58057",
    name:"Bipede robot crowd-funding",
    description:"Humanoid robots conceived with the final objective to have a human-like behavior abd composed of rigid bodies linked by simple kinematic connections. ",
    category:"TECH",
    img:"https://www.researchgate.net/profile/Klaus-Strobl/publication/4041244/figure/fig5/AS:668899829882890@1536489555349/Biped-robot-with-camera-reference-frame-S-C-and-foot-reference.png",
    owner:"Edward Elric",
    place:"Tokyo, Japan",
    expiration:"45",
    total_value:4500,
    current_value:2350,
    currency:"ADA"
  },
]

export function campaigns_resume(){
    return {
      "campaigns":campaigns
    }
  }


export function campaign(hash: any) {
    try {
        let filtered = campaigns.filter(campaign => campaign.id === hash)

        if(filtered.length > 0 )
            return filtered[0]
        else
            return null

    } catch (error) {
        console.log(error)
    }
}