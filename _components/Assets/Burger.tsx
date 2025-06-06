"use client";
import { useEffect, useState } from "react";
import Class from "./Burger.module.scss";
import { usePathname } from "next/navigation";
const Burger = () => {
  const [burgerState, setBurgerState] = useState(false);
  const pathname = usePathname();
  const burgerStateHandler = () => {
    setBurgerState((prev) => !prev);
    if (document.body.dataset.menu !== "close" && !burgerState) {
      setBurgerState(false);
    }
  };

  useEffect(() => {
    document.body.dataset.menu = burgerState ? "open" : "close";
  }, [burgerState]);

  // Close menu when route changes
  useEffect(() => {
    setBurgerState(false);
  }, [pathname]);

  return (
    <button
      onClick={burgerStateHandler}
      className="burger lg:hidden"
      aria-label="Menu"
    >
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="evenodd">
          <path className={Class.line_1} d="M0 0h16v3H0z" />
          <path className={Class.line_2} d="M0 6h16v3H0z" />
          <path className={Class.line_3} d="M0 12h16v3H0z" />
        </g>
      </svg>
    </button>
  );
};

export default Burger;
