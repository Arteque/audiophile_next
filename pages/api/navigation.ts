// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { shopwareFetch } from '@/Tools/shop';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
     const data = await shopwareFetch('navigation/', "POST")
     if (!data) {
      return res.status(500).json({ message: 'No data returned from Shopware' });
    }
     res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message })
  }
}