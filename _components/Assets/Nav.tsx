"use client";
import Classes from "./Nav.module.scss";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { Cat } from "@/types/cat";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState<Cat[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/cats")
      .then((res) => res.json())
      .then((json) => {
        setCats(json.data as Cat[]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <>
      <nav
        className={`${Classes.mainNav} mainNav absolute top-full text-dark-100 bg-light-100 opacity-0 
        lg:opacity-100 lg:relative lg:top-0 lg:bg-transparent lg:[pointer-events:auto_!important]
        `}
      >
        {loading ? (
          <p className="text-center text-light-100/25">Loading...</p>
        ) : (
          <ul className="mainNav__Items lg:flex lg:gap-[1rem] ">
            <li className="mainNav__item hidden lg:block">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "active" : ""
                } text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
              >
                Home
              </Link>
            </li>
            {cats.map(({ id, path, name, img }) => (
              <li key={id} className={`mainNav__item`}>
                <Link
                  href={path}
                  className={`${
                    pathname === path ? "active" : ""
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
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
