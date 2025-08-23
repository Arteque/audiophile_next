"use client";

import { useEffect, useState, FC, MouseEvent } from "react";
import Image from "next/image";
import Checkout from "./Checkout";
import { AnimatePresence, motion } from "framer-motion";
import { filter } from "motion/react-client";

interface CartProps {
  itemsCount?: number;
}

const Cart: FC<CartProps> = ({ itemsCount = 0 }) => {
  const [cartState, setCartState] = useState<boolean>(false);
  const [cartText, setCartText] = useState("");

  const cartHanlder = (e: MouseEvent<HTMLButtonElement>) => {
    setCartState((prev) => !prev);
  };

  useEffect(() => {
    switch (itemsCount) {
      case 0:
        setCartText(`Your cart is empty`);
        break;
      case 1:
        setCartText(`You have ${itemsCount} item in your cart!`);
        break;
      default:
        setCartText(`You have ${itemsCount} items in your cart`);
        break;
    }
  }, [itemsCount]);

  useEffect(() => {
    try {
      const fetchCartItems = async () => {
        const response = await fetch("/api/GetCardItems");
        const data = await response.json();
        console.log(data);
      };
      fetchCartItems();
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, []);

  return (
    <>
      <button
        title={cartText}
        className="relative w-[24px] h-[24px] flex items-center justify-center"
        onClick={cartHanlder}
      >
        {cartState ? (
          <Image
            className="pointer-events-none"
            src="/shared/desktop/xmark.svg"
            alt="cart icon white"
            width={23}
            height={20}
          />
        ) : (
          <Image
            className="pointer-events-none"
            src="/shared/desktop/icon-cart.svg"
            alt="cart icon white"
            width={23}
            height={20}
          />
        )}
        {itemsCount > 0
          ? `<span className="pointer-events-none items-count w-5 h-5 absolute bottom-[-10px] right-[-10px] text-xs font-bold rounded-full bg-light-100 text-dark-100 flex justify-center items-center"></span>${itemsCount}</span>`
          : ""}
      </button>
      <Checkout cartState={cartState} />
    </>
  );
};

export default Cart;
