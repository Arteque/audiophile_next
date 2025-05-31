"use client";

import Container from "@/_components/Assets/Container";
import Section from "@/_components/Assets/Section";
import { useEffect, useState } from "react";
import AboutSection from "@/_components/shared/AboutSection";
import PageHero from "@/_components/shared/PageHero";

const Page = () => {
  const [shopData, setShopData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/products/page");
        const data = await res.json();
        console.log("Fetched data:", data);
        setShopData(data.elements || []); // Make sure to access the correct field
      } catch (err) {
        console.error("OOPS", err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <PageHero pageTitle="Shop" />

      {shopData && shopData.length > 0 ? (
        <div className="flex justify-center gap-10 md:grid md:grid-cols-2 lg:block">
          {shopData.map((product, index) => (
            <Section marginTop="full">
              <Container>
                <AboutSection
                  key={product.id}
                  img={{
                    desktop: product.cover.media.url,
                    tablet: product.cover.media.url,
                    mobile: product.cover.media.url,
                  }}
                  title={product.name}
                  text={product.customFields.custom_text_}
                  call
                  slug={encodeURI(product.name)}
                  reverse={index % 2 ? true : false}
                />
              </Container>
            </Section>
          ))}
        </div>
      ) : (
        <p>Loading or no products found.</p>
      )}
    </>
  );
};

export default Page;
