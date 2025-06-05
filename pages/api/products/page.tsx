// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { shopwareFetch } from '@/Tools/shop';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  categoryId?:string
) {
    const accessKey = process.env.SHOPWARE_ACCESS_KEY;
  try {
     const data = await shopwareFetch('product',{
      body:JSON.stringify({
        filter:[
          {
            type:'equals',
            field:'categories.id',
            value:categoryId,
          },
        ],
        includes:{
          product:['id','name','productNumber', 'price']
        }

      })
     })
     res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message })
  }
}
