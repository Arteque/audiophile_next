"use client";

import { useEffect, useState, FC, MouseEvent } from "react";
import Image from "next/image";
import { EventEmitterReferencingAsyncResource } from "node:events";

interface CartProps {
  itemsCount?: number;
}

const Cart: FC<CartProps> = ({ itemsCount = 0 }) => {
  const [cartText, setCartText] = useState("");

  const cartHanlder = (e:MouseEvent<HTMLButtonElement>) => {
    console.log(e.target)
  }

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


  return (
    <>
      <button title={cartText} className="relative" onClick={cartHanlder}>
        <Image
          className="pointer-events-none"
          src="/shared/desktop/icon-cart.svg"
          alt="cart icon white"
          width={23}
          height={20}
        />
        
          {itemsCount > 0 ? `<span className="pointer-events-none items-count w-5 h-5 absolute bottom-[-10px] right-[-10px] text-xs font-bold rounded-full bg-light-100 text-dark-100 flex justify-center items-center"></span>${itemsCount}</span>`: ""}
        
      </button>
    </>
  );
};

export default Cart;
