"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import posts from "@/_data/cats.json";

const NavCats = () => {
  const pathname = usePathname();

  return (
    <>
      {posts.map(({ id, path, name, img }) => (
        <li key={id} className={`mainNav__item`}>
          <Link
            href={`/${path}`}
            className={`${
              pathname === `/${path}` ? "active" : ""
            } text-center  w-full text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
          >
            <span className="icon lg:hidden">
              <Image
                src={`/shared/desktop/${img.src}`}
                alt={name}
                width={img.width}
                height={img.height}
                className="block mx-auto"
              />
            </span>
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavCats;
