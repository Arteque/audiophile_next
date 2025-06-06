"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import PageHero from "@/_components/shared/PageHero";
import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
import Subhead from "@/_components/Assets/Subhead";
import Paragraph from "@/_components/Assets/Paragraph";
import Button from "@/_components/Assets/Button";

// Define the expected API response type
interface ProductApiResponse {
  elements: any[];
}

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const productName = useParams();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/productlisting?id=${id}`);
        const data: ProductApiResponse = await response.json();
        setProducts(
          (data.elements || []).sort((a, b) =>
            (b.name || "").localeCompare(a.name || "")
          )
        );
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <PageHero pageTitle={String(productName?.slug)} />
      <Section marginTop="full">
        <Container>
          {products.map((product) => (
            <div className="product mb-[120px]" key={product.id}>
              <div className="media">
                <Image
                  src={product.cover?.media?.url}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full"
                  priority
                />
              </div>
              <div className="content text-center mt-[32px] flex flex-col gap-y-[24px] items-center">
                <h2>
                  {product.isNew && (
                    <Subhead className="text-prime-100">new product</Subhead>
                  )}
                  <span className="heading__3 block mt-[24px]">
                    {product.name || product.translated.name}
                  </span>
                </h2>
                <Paragraph>{product.customFields?.custom_text_}</Paragraph>
                <Button
                  variant="call"
                  text="See product"
                  href={`/singleproduct/${product.id}`}
                />
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default ProductPage;
