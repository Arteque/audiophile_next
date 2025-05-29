"use client";
import { useState, useEffect } from "react";
import Section from "../Assets/Section";
import Container from "../Assets/Container";
import Image from "next/image";
import Paragraph from "../Assets/Paragraph";
import { ReactNode } from "react";
import Subhead from "../Assets/Subhead";
import Button from "../Assets/Button";
import Currency from "@/Tools/Currency";

type imgProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type AboutSectionProps = {
  img: imgProps;
  title?: ReactNode;
  text?: ReactNode;
  reverse?: boolean;
  newArticle?: boolean;
  call?: boolean;
  className?: string;
  slug?: string;
  singleView?: boolean;
  price?: number;
  amount?: number;
};

const AboutSection = ({
  img,
  title,
  text,
  reverse,
  newArticle,
  call,
  className = "",
  slug,
  singleView,
  price,
  amount,
}: AboutSectionProps) => {
  const [productAmount, setProductAmount] = useState<number>(0);

  const addProductAmountHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProductAmount((prev) => prev + 1);
    console.log(productAmount);
  };

  const delProductAmountHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProductAmount((prev) => (prev > 0 ? prev - 1 : 0));
    console.log(productAmount);
  };

  return (
    <Section className={className}>
      <Container
        className={`lg:flex ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:gap-[125px] lg:items-center`}
      >
        <div className="relative media rounded-[8px] overflow-hidden lg:w-[50%] lg:h-[588px]">
          <picture>
            {img.desktop && (
              <source sizes="(min-width: 1024px)" srcSet={img.desktop} />
            )}
            {img.tablet && (
              <source sizes="(min-width: 768px)" srcSet={img.tablet} />
            )}
            {img.mobile && (
              <img
                src={img.mobile}
                alt="Best Gear"
                width={100}
                height={100}
                className="w-full h-full object-cover object-center"
              />
            )}
          </picture>
        </div>
        <div className="content lg:w-[50%] lg:text-left">
          <h2 className="heading__3 my-[40px_32px]">
            {newArticle && (
              <Subhead className="text-prime-100">New Product</Subhead>
            )}
            {title}
          </h2>
          <Paragraph txtColor="text-light-200">{text}</Paragraph>
          {call && (
            <Button
              href={`/product/${slug}`}
              variant="call"
              text="See product"
            />
          )}
          {singleView && price !== undefined && (
            <>
              <div className="price my-[32px] font-bold text-[18px] tracking-[1.29px]">
                <Paragraph>{Currency(price)}</Paragraph>
              </div>
              <div className="addToCart flex items-center mx-auto gap-[1rem] lg:mx-[unset]">
                <div className="amountContainer bg-light-100 w-fit flex items-center justify-center">
                 <button
                    onClick={delProductAmountHandler}
                    className="block p-[15px] text-center"
                  >
                    -
                  </button>
                  <label htmlFor="amountInput" className="block p-[15px]">
                    {productAmount}
                    <input
                      className="hidden"
                      type="number"
                      name="amountInput"
                      id="amountInput"
                      value={productAmount}
                    />
                  </label>
                   <button
                    onClick={addProductAmountHandler}
                    className="block p-[15px]"
                  >
                    +
                  </button>
                </div>
                <Button variant="call" text="Add to cart" href="/" className="text-light-200" />
              </div>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
