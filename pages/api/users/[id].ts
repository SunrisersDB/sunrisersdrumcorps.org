import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// https://vercel.com/guides/nextjs-prisma-postgres

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
  }
}
