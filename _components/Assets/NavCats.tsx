"use client";

import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Section from "./Section";
import Container from "./Container";

const NavCats = () => {
  const path = useParams();
  const slug = String(path?.slug).toLowerCase().trim();
  const [navigation, setNavigation] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/navigation")
      .then((res) => res.json())
      .then((data) => {
        setNavigation(data || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(slug);
  }, []);

  if (loading)
    return (
      <Section>
        <Container>
          <p className="text-center">Loading</p>
        </Container>
      </Section>
    );
  return (
    <>
      {navigation.map((item, index) => (
        <li key={index} className={`mainNav__item`}>
          <Link
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/products/${encodeURI(
              item.name
            )
              .toLocaleLowerCase()
              .trim()}?id=${item.id}`}
            className={`${
              slug === String(item.name).toLowerCase() ? "active" : ""
            } text-center  w-full text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
          >
            <span className="icon lg:hidden">
              {
                <Image
                  src={`/shared/desktop/image-category-thumbnail-${item.name
                    .trim()
                    .toLocaleLowerCase()}.png`}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="block mx-auto"
                />
              }
            </span>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavCats;
