import type Campaign from '../../types/campaign'

const campaigns =  [
  {
    name:"Wander the Night Japan Album - Limited 12' Record",
    id:"27b4039a42d9d632a5e791b166127c42",
    description:"Limited-edition 12' Vinyl LP release of the Wander the Night Japan album by Simon James French (SJF), photography by Cody Ellingham.",
    category:"MUSIC",
    img:"https://ksr-ugc.imgix.net/assets/036/688/465/fc02fb3e11429523c76653d43b1638db_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1647513070&gif-q=50&lossless=true&s=8081feb00908c32822d80692099601ef",
    place:"Dublin, Irlanda",
    owner:"Simon James French",
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
    id:"93fb923456f9f955908f6092a6c58057",
    name:"Bipede robot crowd-funding",
    description:"Humanoid robots conceived with the final objective to have a human-like behavior abd composed of rigid bodies linked by simple kinematic connections. ",
    category:"TECH",
    img:"https://www.researchgate.net/profile/Klaus-Strobl/publication/4041244/figure/fig5/AS:668899829882890@1536489555349/Biped-robot-with-camera-reference-frame-S-C-and-foot-reference.png",
    owner:"Alphonse Elric",
    place:"Tokyo, Japan",
    expiration:"45",
    total_value:4500,
    current_value:2350,
    currency:"ADA"
  },
  {
    id:"93fb9a3456f9f955908f6092a6c68057",
    name:"Snow White Zombie Apocalypse: Volume 1",
    description:"Snow White awakens to Prince Charming's Kiss...28 days later. The first trade of the Ringo Award-nominated dark fantasy series.",
    category:"COMICS",
    img:"https://ksr-ugc.imgix.net/assets/036/086/121/497e45e786b7f8f8ca1af7ab94081326_original.jpeg?ixlib=rb-4.0.2&w=680&fit=max&v=1642396025&gif-q=50&q=92&s=38f8f5ad2e64244a59e1c73a6fe7e737",
    owner:"Brenton Lengel",
    place:"Fort Thomas, Kentucky",
    expiration:"45",
    total_value:18887,
    current_value:28000,
    currency:"ADA"
  },
  {
    id:"93fb9a3456f9f955945f6092a6c58057",
    name:"Snow White Zombie Apocalypse: Volume 1",
    description:"What if ONE man was TWO superheroes? An action-packed 100-page graphic novel by Nate Cosby, Jacob Edgar, Kike J. Diaz & Rus Wooton.",
    category:"COMICS",
    img:"https://ksr-ugc.imgix.net/assets/035/617/511/8a57f9b8434204e9e688fe4f70aab897_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1637184952&auto=format&frame=1&q=92&s=cc148fbcab82c36330c0d9630e2bd7a9",
    owner:"Linney Incorporated",
    place:"Brooklyn, New York",
    expiration:"45",
    total_value:22000,
    current_value:17000,
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