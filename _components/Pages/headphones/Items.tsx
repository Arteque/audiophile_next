"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import AboutSection from "@/_components/shared/AboutSection";

const Items = () => {
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((items: Product[]) => {
        const filterd = items.filter((item) => item.category === "headphones");
        setData(filterd);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    console.log("Filtered data: ", data);
  }, [data]);

  return (
    data &&
    data.map((item, index) => (
      <AboutSection
        key={index}
        reverse={index % 2 ? true : false}
        title={item.name}
        text={item.description}
        img={{
          desktop: item.image.desktop,
          tablet: item.image.tablet,
          mobile: item.image.mobile,
        }}
        call
        href={`/products:[${item.name}]`}
      />
    ))
  );
};

export default Items;
