"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import AboutSection from "@/_components/shared/AboutSection";

type ItemsProps = {
  category:string;
}

const Items = ({category}:ItemsProps) => { 
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((items: Product[]) => {
        const filterd = items.filter((item) => item.category === category);
        const sorted = filterd.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
        setData(sorted);
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
      newArticle={item.new ? true : false}
      title={item.name}
      text={item.description}
      img={{
        desktop: item.image.desktop,
        tablet: item.image.tablet,
        mobile: item.image.mobile,
      }}
      call
      href={`/products:[${item.name}]`}
      className="my-[64px_120px_!important] lg:my-[160px_!important]"
      />
    ))
  );  
};

export default Items;
