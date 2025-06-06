// pages/api/productlisting.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: catId } = req.query;

  if (!catId || typeof catId !== "string") {
    return res.status(400).json({ message: "Missing category ID" });
  }

  try {
    const data = await shopwareFetch(`product-listing/${catId}`, "POST", {
      body: JSON.stringify({
        filter: [
          {
            type: "equals",
            field: "product.categoriesRo.id",
            value: catId,
          },
        ],
      }),
    });

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
