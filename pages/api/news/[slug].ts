import { NextApiRequest, NextApiResponse } from "next";

// https://vercel.com/guides/nextjs-prisma-postgres

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug: string = req.query.slug as string;

  if (req.method === "GET") {
  } else if (req.method === "DELETE") {
  }
}
