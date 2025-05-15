"use client";
import Classes from "./Nav.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/headphones",
    name: "Headphones",
  },
  {
    id: 3,
    path: "/speakers",
    name: "Speakers",
  },
  {
    id: 4,
    path: "/earphones",
    name: "Earphones",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`${Classes.mainNav} mainNav absolute top-full text-dark-100 bg-light-100 opacity-0 
        lg:opacity-100 lg:relative lg:top-0 lg:bg-transparent lg:[pointer-events:auto_!important]
        `}
      >
        <ul className="mainNav__Items lg:flex lg:gap-[1rem]">
          {navigation.map(({ id, path, name }) => (
            <li
              key={id}
              className={`mainNav__item ${pathname === path ? "active" : ""}`}
            >
              <Link
                href={path}
                className="text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
