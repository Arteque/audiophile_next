"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavCats = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/categories/page")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.elements || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <>
      {categories.slice(1).map((item, index) => (
        <li key={index} className={`mainNav__item`}>
          <Link
            href={`/${encodeURI(item.name).toLocaleLowerCase().trim()}`}
            className={`${"/"+(item.name).trim().toLocaleLowerCase() === pathname  ? "active" : ""
            } text-center  w-full text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
          >
            <span className="icon lg:hidden">
              {
                <Image
                  src={`/shared/desktop/image-category-thumbnail-${item.name.trim().toLocaleLowerCase()}.png`}
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
