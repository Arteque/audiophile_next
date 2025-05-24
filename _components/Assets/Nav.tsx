"use client";
import Classes from "./Nav.module.scss";
import Link from "next/link";
import NavCats from "./NavCats";
import { usePathname } from "next/navigation";

const Nav = () => {

  const pathname = usePathname();
  
  return (
    <>
      <nav
        className={`${Classes.mainNav} mainNav absolute top-full text-dark-100 bg-light-100 opacity-0 
        lg:opacity-100 lg:relative lg:top-0 lg:bg-transparent lg:[pointer-events:auto_!important]
        `}
      >
       
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
           <NavCats />
          </ul>
       
      </nav>
    </>
  );
};

export default Nav;
