// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessKey = process.env.SHOPWARE_ACCESS_KEY;
  try {
    const data = await shopwareFetch("search/", {
      body: '{"search":"string","filter":[{"type":"contains","field":"string","value":"string"}],"sort":[{"field":"string","order":"ASC","naturalSorting":true,"type":"string"}],"post-filter":[{"type":"contains","field":"string","value":"string"}],"page":0,"term":"string","limit":0,"ids":["string"],"query":[{"score":0,"query":{"type":"contains","field":"string","value":"string"}}],"associations":{"property1":{"page":0,"term":"string","limit":0,"filter":[{"type":"contains","field":"string","value":"string"}],"ids":["string"],"query":[{"score":0,"query":{"type":"contains","field":"string","value":"string"}}],"associations":{},"post-filter":[{"type":"contains","field":"string","value":"string"}],"sort":[{"field":"string","order":"ASC","naturalSorting":true,"type":"string"}],"aggregations":[{"name":"string","type":"avg","field":"string"}],"fields":["string"],"grouping":["string"],"total-count-mode":"none","includes":{"property1":["string"],"property2":["string"]}},"property2":{"page":0,"term":"string","limit":0,"filter":[{"type":"contains","field":"string","value":"string"}],"ids":["string"],"query":[{"score":0,"query":{"type":"contains","field":"string","value":"string"}}],"associations":{},"post-filter":[{"type":"contains","field":"string","value":"string"}],"sort":[{"field":"string","order":"ASC","naturalSorting":true,"type":"string"}],"aggregations":[{"name":"string","type":"avg","field":"string"}],"fields":["string"],"grouping":["string"],"total-count-mode":"none","includes":{"property1":["string"],"property2":["string"]}}},"aggregations":[{"name":"string","type":"avg","field":"string"}],"fields":["string"],"grouping":["string"],"total-count-mode":"none","includes":{"property1":["string"],"property2":["string"]},"order":"string","p":1,"manufacturer":"string","min-price":0,"max-price":0,"rating":0,"shipping-free":false,"properties":"string","manufacturer-filter":true,"price-filter":true,"rating-filter":true,"shipping-free-filter":true,"property-filter":true,"property-whitelist":"string","reduce-aggregations":"string","no-aggregations":"string","only-aggregations":"string"}',
    });
    res.status(200).json(data);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
