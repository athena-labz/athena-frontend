// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Service= {
  "type": string;
  "badge_color":string;
  "publisher": string;
  "title": string;
  "description": string;
  "trust": number;
  "price"?: number;
  "deadline"?: number;
  image?:string;
}

type Data = {
  services: Service[]
}

export function services(){
  return {
    "services": [
        {
            "type": "one-time",
            "badge_color":"red",
            "publisher": "35dedd2982a03cf39e7dce03c839994ffdec2ec6b04f1cf2d40e61a3",
            "title": "I will write a 200 pages book",
            "description": "I have 45 years of experience as I writer, having written 5 best-sellers...",
            "trust": 30000,
            "price": 200000,
            "deadline": 1629124893,
            image:"https://www.freecodecamp.org/news/content/images/2020/09/writing-cover.jpg"
           
        },
        {
            "type": "constant",
            "badge_color":"green",
            "publisher": "977efb35ab621d39dbeb7274ec7795a34708ff4d25a01a1df04c1f27",
            "title": "Company Policies",
            "description": "This serves as a way of mediating conflicts between employees",
            "trust": 10000,
            image:"https://www.pcg-services.com/wp-content/uploads/2016/08/policies-procedures-1.jpg"
        },
        {
            "type": "one-time",
            "badge_color":"red",
            "publisher": "7f8a76c0ebaa4ad20dfdcd51a5de070ab771f4bf377f2c41e6b71c0a",
            "title": "Mountain Bike For Sale",
            "description": "It was used for only 2 months, in very good state",
            "trust": 45000,
            "price": 500000,
            "deadline": 1629124893,
            image:"https://image.made-in-china.com/202f0j00zclUMRvBfCkm/MTB-Hot-Sale-21-Speed-Mountain-Bikes-Bicycle-High-Quality-Best-Price-MTB-Mountainbike-29-Inch-Adults-MTB-Bikes.jpg"
        },
        {
            "type": "one-time",
            "badge_color":"red",
            "publisher": "bcc083ade3fdd0a372cb6c43ef00ef02fcb52e9532941117d7609d6a",
            "title": "I will do your Web Site Front-End",
            "description": "50 years of experience software engineering.\n I will make you a beautiful front page website for an affordable price.",
            "trust": 73200,
            "price": 1000000,
            "deadline": 1629124893,
            image:"https://cdn.billomat.com/wp-content/uploads/2019/09/freelance-web-developer-danial1-ricaros-FCHlYvR5gJI-unsplash.jpg"
        },
        {
            "type": "constant",
            "badge_color":"green",
            "publisher": "3f96cfba6b1a10bf4dec08ea1459b87ecefa65c65a5f0899d030a214",
            "title": "If elected, I will be an excellent congressman",
            "description": "I defined a set of targets I must complete if elected",
            "trust": 100000000,
            image:"https://direitosbrasil.com/wp-content/uploads/2016/09/marketing-politico.jpg"
        }
    ]
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    "services": [
        {
            "type": "one-time",
            "badge_color":"red",
            "publisher": "35dedd2982a03cf39e7dce03c839994ffdec2ec6b04f1cf2d40e61a3",
            "title": "I will write a 200 pages book",
            "description": "I have 45 years of experience as I writer, having written 5 best-sellers...",
            "trust": 30000,
            "price": 200000,
            "deadline": 1629124893
        },
        {
            "type": "constant",
            "badge_color":"green",
            "publisher": "977efb35ab621d39dbeb7274ec7795a34708ff4d25a01a1df04c1f27",
            "title": "Company Policies",
            "description": "This serves as a way of mediating conflicts between employees",
            "trust": 10000
        },
        {
            "type": "one-time",
            "badge_color":"red",
            "publisher": "7f8a76c0ebaa4ad20dfdcd51a5de070ab771f4bf377f2c41e6b71c0a",
            "title": "Mountain Bike For Sale",
            "description": "It was used for only 2 months, in very good state",
            "trust": 45000,
            "price": 500000,
            "deadline": 1629124893
        },
        {
            "type": "one-time",
            "badge_color":"red",
            "publisher": "bcc083ade3fdd0a372cb6c43ef00ef02fcb52e9532941117d7609d6a",
            "title": "I will do your Web Site Front-End",
            "description": "50 years of experience software engineering.\n I will make you a beautiful front page website for an affordable price.",
            "trust": 73200,
            "price": 1000000,
            "deadline": 1629124893
        },
        {
            "type": "constant",
            "badge_color":"green",
            "publisher": "3f96cfba6b1a10bf4dec08ea1459b87ecefa65c65a5f0899d030a214",
            "title": "If elected, I will be an excellent congressman",
            "description": "I defined a set of targets I must complete if elected",
            "trust": 100000000
        }
    ]
})
}