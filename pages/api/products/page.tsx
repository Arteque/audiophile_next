// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const accessKey = process.env.SHOPWARE_ACCESS_KEY;
  try {
    const response = await fetch('https://shop.artecke.de/store-api/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'sw-access-key': `${accessKey}`
      },
    })

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to fetch products' })
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message })
  }
}
