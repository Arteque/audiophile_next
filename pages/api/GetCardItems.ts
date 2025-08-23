import type { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const response = await shopwareFetch(`checkout/cart`, "GET");
    const cart = await reponse.json();

    if (!cart.length) {
      return res.status(404).json({ error: "Cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
}
