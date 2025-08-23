import { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await shopwareFetch("checkout/cart", "GET");
    res.status(200).json(data);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res
      .status(500)
      .json({ message: "Internal Server Error", error: errorMessage });
  }
}
