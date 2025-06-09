import type { NextApiRequest, NextApiResponse } from "next";
import { shopwareFetch } from "@/Tools/shop";

// Helper to extract custom field media IDs from products
async function extractCustomMediaIds(products: any[]) {
  const ids = new Set<string>();
  for (const product of products) {
    console.log("Product customFields:", product.customFields);
    const fields = product.customFields || {};
    if (fields.custom_images_) ids.add(fields.custom_images_);
    if (fields.custom_images_tablet) ids.add(fields.custom_images_tablet);
    if (fields.custom_images_desktop) ids.add(fields.custom_images_desktop);
  }
  return Array.from(ids);
}

// Helper to fetch media by IDs
async function fetchMediaByIds(ids: string[]) {
  if (!ids.length) return {};

  const mediaResponse = await shopwareFetch("media", "POST", {
    body: JSON.stringify({
      filter: [
        {
          type: "multi",
          operator: "or",
          queries: ids.map((id) => ({
            type: "equals",
            field: "id",
            value: id,
          })),
        },
      ],
      includes: {
        media: null, // get all fields
      },
    }),
  });

  const mediaMap: Record<string, any> = {};
  for (const media of mediaResponse?.data || []) {
    mediaMap[media.id] = media;
  }
  return mediaMap;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: catId } = req.query;

  if (!catId || typeof catId !== "string") {
    return res.status(400).json({ message: "Missing category ID" });
  }

  try {
    // Step 1: Fetch product listing
    const data = await shopwareFetch(`product-listing/${catId}`, "POST", {
      body: JSON.stringify({
        includes: {
          product: null,
          media: null,
        },
        filter: [
          {
            type: "equals",
            field: "product.categoriesRo.id",
            value: catId,
          },
        ],
        associations: {
          media: {},
          cover: {
            associations: {
              media: {},
            },
          },
        },
      }),
    });

    const products = data?.elements || [];

    // Step 2: Extract custom field image IDs
    const mediaIds = await extractCustomMediaIds(products);

    // Step 3: Resolve media objects
    const mediaMap = await fetchMediaByIds(mediaIds);

    // Step 4: Merge into each product
    for (const product of products) {
      const fields = product.customFields || {};
      product.customImageData = {
        mobile: mediaMap[fields.custom_images_] || null,
        tablet: mediaMap[fields.custom_images_tablet] || null,
        desktop: mediaMap[fields.custom_images_desktop] || null,
      };
    }

    // Final response
    res.status(200).json({ ...data, elements: products });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
