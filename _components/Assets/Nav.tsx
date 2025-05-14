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
      <nav className={`${Classes.mainNav} absolute`}>
        <ul className="mainNav__Items">
          {navigation.map(({ id, path, name }) => (
            <li
              key={id}
              className={`mainNav__item ${pathname === path ? "active" : ""}`}
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
