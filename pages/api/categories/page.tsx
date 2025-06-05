// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessKey = process.env.SHOPWARE_ACCESS_KEY;
  try {
    const data = await shopwareFetch("category");
    res.status(200).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
