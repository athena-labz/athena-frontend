// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Role = "freelancer" | "customer" | "mediator";

type User = {
  name: string;
  email: string;
  address: string;
  cas: number;
  role: Role;
};

type Data = {
  users: User[];
};

export function users() {
  return {
    users: [
      {
        name: "Halina Evelyn",
        cas: 60000,
        role: "mediator",
      },
      {
        name: "Gaea Micheil",
        cas: 45000,
        role: "client"
      },
      {
        name: "Iesha Ema",
        cas: 44700,
        role: "freelancer"
      },
      {
        name: "Frans Adam",
        cas: 65900,
        role: "mediator",
      },
      {
        name: "Yngvildr Amyntas",
        cas: 77800,
        role: "client"
      },
    ],
  };
}
