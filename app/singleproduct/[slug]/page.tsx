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
import AmountBtn from "@/_components/Assets/Cart/AmountBtn";
import Paragraph from "@/_components/Assets/Paragraph";

type ProductApiResponse = {
  product: any; //
};

const page = () => {
  const params = useParams();
  const slug = params?.slug;
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [productDetails, setProductDetails] = useState<any>([]);

  useEffect(() => {
    if (!slug) return;

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
      }
    };
    fetchProdutDetais();
  }, []);

  // Go Back
  const goBackBtnHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.go(-1);
  };

  //Amount
  const [amount, setAmount] = useState<number>(1);

  const amountBtnSubstracterHandler = () => {
    amount > 0 ? setAmount((prev) => prev - 1) : setAmount(0);
  };
  const amoutBtnAddHandler = () => {
    amount < productDetails.stock
      ? setAmount((prev) => prev + 1)
      : alert("Max Stock: " + productDetails.stock);
  };

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
                {Currency(
                  amount > 0
                    ? productDetails.price * amount
                    : productDetails.price,
                  "USD"
                )}
              </p>
              <div className="buy-container flex gap-[1rem]">
                <div className="flex flex-row flex-nowrap gap-1 items-center bg-dark-100/10 w-fit">
                  <AmountBtn
                    children="-"
                    onClick={amountBtnSubstracterHandler}
                    disabled={amount <= 0 ? true : false}
                  />
                  <p
                    className={`w-[48px] text-[13px] font-bold tracking-[1px] flex items-center justify-center ${
                      amount >= productDetails.stock || amount <= 0
                        ? "text-red-600"
                        : "text-dark-100/50"
                    }`}
                  >
                    {amount}{" "}
                  </p>
                  <AmountBtn
                    children="+"
                    onClick={amoutBtnAddHandler}
                    disabled={amount >= productDetails.stock ? true : false}
                    className=""
                  />
                </div>
                <Button variant="call" text="Add to cart" href="/" />
              </div>
              <p>
                <small className="text-dark-100/50">
                  Stock:{amount} /{productDetails.stock}
                </small>
              </p>
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
                  {productDetails.inBox?.includes.map(
                    (
                      { item, quantity }: { item: string; quantity: number },
                      index: number
                    ) => (
                      <li key={index}>
                        <span className="text-prime-100 mr-[24px] font-bold text-[15px] leading-[25px]">
                          {quantity}X
                        </span>
                        <span className="text-dark-100/50">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          {productDetails.media && (
            <div className="product-images-container mt-[88px] flex flex-col  gap-[1rem]">
              {productDetails.media.map(
                (item: any) =>
                  item.media.fileName !== productDetails.coverName && (
                    <Image
                      src={item.media.url}
                      alt={
                        item.media.alt ||
                        item.media.title ||
                        productDetails.name + " " + item.media.fileName
                      }
                      key={item.id}
                      width={item.media.metaData.width}
                      height={item.media.metaData.height}
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

export default page;
