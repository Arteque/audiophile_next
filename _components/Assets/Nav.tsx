"use client";
import Classes from "./Nav.module.scss";
import Link from "next/link";
import NavCats from "./NavCats";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavProps = {
  className?: string;
  variant: "main" | "footer";
};

const Nav = ({ className, variant }: NavProps) => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setMenuOpen(true);
    document.body.dataset.menu = menuOpen ? "close" : "open";
  }, [menuOpen]);

  const navClickHandler = (e: any) => {
    setMenuOpen(false);
  };

  return variant === "main" ? (
    <nav
      className={`${Classes.mainNav} translate-y-[-20px] mainNav absolute top-full text-dark-100 bg-light-100 opacity-0 
            lg:translate-y-[0] lg:opacity-100 lg:relative lg:top-0 lg:bg-transparent lg:[pointer-events:auto_!important]
            ${className}
            `}
    >
      <ul
        className="mainNav__Items lg:flex lg:gap-[1rem] "
        onClick={navClickHandler}
      >
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
        <NavCats />
      </ul>
    </nav>
  ) : (
    <nav
      className={`${Classes.footerNav} footerNav text-light-100 lg:text-dark-100 ${className}`}
    >
      <ul className="flex flex-col gap-5 md:flex-row">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "active" : ""
            } text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
          >
            Home
          </Link>
        </li>
        <NavCats />
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  variant: "main",
};

export default Nav;
