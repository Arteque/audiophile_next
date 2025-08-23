"use client";
import Button from "@/_components/Assets/Button";
import Container from "@/_components/Assets/Container";
import Section from "@/_components/Assets/Section";
import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import Subhead from "@/_components/Assets/Subhead";
import Currency from "@/Tools/Currency";
import Paragraph from "@/_components/Assets/Paragraph";
import AddAndDelItemBtns from "@/_components/Assets/Cart/AddAndDelItemBtns";
import Loading from "@/app/loading";

interface ProductDetails {
  name: string;
  cover: string;
  coverName: string;
  media: unknown[];
  stock: number;
  teaser: string;
  description: string;
  productNumber: string;
  isNew: boolean;
  price: number;
  inBox: Array<{ item: string; quantity: number }>;
}

interface Product {
  name: string;
  cover: {
    media: {
      url: string;
      fileName: string;
    };
  };
  media: unknown[];
  availableStock: number;
  customFields: {
    custom_text_: string;
    custom_item: string;
  };
  description: string;
  productNumber: string;
  isNew: boolean;
  calculatedPrice: {
    unitPrice: number;
  };
}

type ProductApiResponse = {
  product: Product;
};

const SingleProductPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug || !id) return;

    const fetchProdutDetais = async () => {
      try {
        const resp = await fetch(`/api/single?id=${id}`);
        const data: ProductApiResponse = await resp.json();
        console.log(data);

        setProductDetails({
          name: data.product.name,
          cover: data.product.cover.media.url,
          coverName: data.product.cover.media.fileName,
          media: data.product.media,
          stock: data.product.availableStock,
          teaser: data.product.customFields.custom_text_,
          description: sanitizeHtml(data.product.description),
          productNumber: data.product.productNumber,
          isNew: data.product.isNew,
          price: data.product.calculatedPrice.unitPrice,
          inBox: JSON.parse(data.product.customFields.custom_item),
        });
      } catch (err) {
        console.log("Error :", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProdutDetais();
  }, [id, slug]);

  // Go Back
  const goBackBtnHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.go(-1);
  };

  if (isLoading) return <Loading />;
  
  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Section>
        <Container>
          <Button
            href="/"
            variant="default"
            text="Go Back"
            onClick={goBackBtnHandler}
            className="block my-[1rem_24px]"
          />

          <div className="product-view-container">
            <div className="product-view__media">
              <Image
                src={
                  productDetails.cover || "/shared/desktop/image-best-gear.jpg"
                }
                alt={productDetails.name || "Default Text"}
                width={800}
                height={800}
                className="w-full"
              />
            </div>
            <div className="product-view__text">
              <h2>
                {productDetails.isNew && (
                  <Subhead className="text-prime-100 mt-[32px] block">
                    New Product
                  </Subhead>
                )}
                <span className="heading__3 my-[24px] block">
                  {productDetails.name}
                </span>
              </h2>
              <Paragraph className="font-medium opacity-50">
                {productDetails.teaser}
              </Paragraph>
              <p className="mb-[31px] font-bold text-[18px] tracking-[1.29px]">
                {Currency(productDetails.price, "USD")}
              </p>
              <div className="buy-container flex gap-[1rem]">
                <AddAndDelItemBtns stock={productDetails.stock} />

                <Button variant="call" text="Add to cart" href="/" />
              </div>
            </div>
          </div>
          <div className="product-features-container mt-[88px]">
            <div className="product-features__features">
              <h2 className="heading__4 mb-[24px] uppercase">Features</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(productDetails.description),
                }}
                className="__features__text paragraph text-dark-100 opacity-50"
              />
            </div>
            {productDetails.inBox && (
              <div className="product-features__inBox">
                <h2 className="heading__4 mb-[24px] uppercase">In the box</h2>
                <ul className="__inBox__list">
                  {productDetails.inBox.map(
                    (
                      item: { item: string; quantity: number },
                      index: number
                    ) => (
                      <li key={index}>
                        <span className="text-prime-100 mr-[24px] font-bold text-[15px] leading-[25px]">
                          {item.quantity}X
                        </span>
                        <span className="text-dark-100/50">{item.item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          {productDetails.media && Array.isArray(productDetails.media) && (
            <div className="product-images-container mt-[88px] flex flex-col  gap-[1rem]">
              {productDetails.media.map(
                (item: any, index: number) =>
                  item.media && item.media.fileName !== productDetails.coverName && (
                    <Image
                      src={item.media.url}
                      alt={
                        item.media.alt ||
                        item.media.title ||
                        productDetails.name + " " + item.media.fileName
                      }
                      key={item.id || index}
                      width={item.media.metaData?.width || 800}
                      height={item.media.metaData?.height || 600}
                    />
                  )
              )}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default SingleProductPage;
