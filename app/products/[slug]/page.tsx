"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import PageHero from "@/_components/shared/PageHero";
import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
import Subhead from "@/_components/Assets/Subhead";
import Paragraph from "@/_components/Assets/Paragraph";
import Button from "@/_components/Assets/Button";
import Loading from "@/Tools/Loading";

// Define the expected API response type
interface ProductApiResponse {
  elements: Product[];
}

interface Product {
  id: string;
  name: string;
  isNew?: boolean;
  cover?: {
    media?: {
      url: string;
    };
  };
  translated?: {
    name: string;
  };
  customFields?: {
    custom_text_?: string;
  };
}

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const productName = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Add artificial delay to see loading animation
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await fetch(`/api/productlisting?id=${id}`);
        const data: ProductApiResponse = await response.json();
        console.log(data);
        setProducts(
          (data.elements || []).sort((a, b) =>
            (b.name || "").localeCompare(a.name || "")
          )
        );
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  // Show loading page while fetching data
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageHero pageTitle={String(productName?.slug)} />
      <Section>
        <Container className="mt-[64px] md:mt-[120px]">
          {products.map((product, index) => (
            <Suspense key={product.id} fallback={<Loading />}>
              <div
                className={`product mb-[120px] lg:flex lg:gap-[125px] ${
                  index % 2 && "flex-row-reverse"
                }`}
              >
                <div className="media">
                  <Image
                    src={product.cover?.media?.url || "/placeholder-image.jpg"}
                    alt={product.name || "Product image"}
                    width={800}
                    height={800}
                    className="w-full lg:w-[540px] aspect-auto"
                    priority
                  />
                </div>
                <div
                  className="content text-center mt-[32px] flex flex-col gap-y-[24px] items-center mx-auto
                   md:mt-[52] md:max-w-[572px] 
                "
                >
                  <h2 className="max-w-[300px] self-start text-left">
                    {product.isNew && (
                      <Subhead className="text-prime-100">new product</Subhead>
                    )}
                    <span className="heading__3 block mt-[24px]">
                      {product.name ||
                        product.translated?.name ||
                        "Product Name"}
                    </span>
                  </h2>
                  <Paragraph className="lg:text-left mb-[0_!important]">
                    {product.customFields?.custom_text_}
                  </Paragraph>
                  <Button
                    className="lg:self-start"
                    variant="call"
                    text="See product"
                    href={`${
                      process.env.NEXT_PUBLIC_SITE_URL
                    }/singleproduct/${encodeURI(
                      product.name || product.translated?.name || "product"
                    )}/?id=${product.id}`}
                  />
                </div>
              </div>
            </Suspense>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default ProductPage;
