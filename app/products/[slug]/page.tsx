import { notFound } from "next/navigation";

const productPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  console.log(slug);
  const URL = `https://shop.artecke.de/store-api/category/`;

  const accessKey = process.env.SHOPWARE_ACCESS_KEY;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "sw-access-key": accessKey || "",
    },
  };

  const resp = await fetch(URL, options);
  const data = await resp.json();
  const categories = data.elements;
  const matchedCategory = categories.find(
    (cat: any) =>
      cat.translated?.name?.toLowerCase().trim() ===
        slug.trim().toLowerCase() ||
      cat.name?.toLowerCase() === slug.trim().toLowerCase()
  );
  if (!matchedCategory) return notFound;

  const categoryId = matchedCategory.id;

  // Fetching the products

  const productResp = await fetch(
    "https://shop.artecke.de/store-api/search/product",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "sw-access-key": accessKey || "",
      },
      body: JSON.stringify({
        filter: [
          {
            type: "equals",
            field: "product.categoriesRo.id",
            value: categoryId,
          },
        ],
      }),
    }
  );

  const productData = await productResp.json();
  const products = productData.elements;

  console.log(products);

  return <h1>Test</h1>;
};

export default productPage;
