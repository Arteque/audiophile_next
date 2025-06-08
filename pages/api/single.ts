// pages/api/productlisting.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: productId } = req.query;

  if (!productId || typeof productId !== "string") {
    return res.status(400).json({ message: "Missing category ID" });
  }

  try {
    const data = await shopwareFetch(`product/${productId}`, "POST");

    if (!data) {
      return res
        .status(500)
        .json({ message: "No data returned from Shopware" });
    }

    res.status(200).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
