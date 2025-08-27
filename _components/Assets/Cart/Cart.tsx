"use client";

import { useEffect, useState, FC, MouseEvent } from "react";
import Image from "next/image";
import Checkout from "./Checkout";
import { useCartStore } from "@/store/CartStore";



const Cart = () => {
  const [cartState, setCartState] = useState<boolean>(false);
  const [cartText, setCartText] = useState("");
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const cartHanlder = (e: MouseEvent<HTMLButtonElement>) => {
    setCartState((prev) => !prev);
  };

  const closeCart = () => {
    setCartState(false);
  };

  useEffect(() => {
    switch (totalItems) {
      case 0:
        setCartText(`Your cart is empty`);
        break;
      case 1:
        setCartText(`You have ${totalItems} item in your cart! Total: $${totalPrice.toFixed(2)}`);
        break;
      default:
        setCartText(`You have ${totalItems} items in your cart. Total: $${totalPrice.toFixed(2)}`);
        break;
    }
  }, [totalItems, totalPrice]);

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
        {totalItems > 0 && (
          <>
            <span className={`pointer-events-none items-count w-5 h-5 absolute bottom-[-10px] right-[-10px] text-xs font-bold rounded-full bg-light-100 text-dark-100 flex justify-center items-center transition-all duration-500 ${cartState ? 'top-5 opacity-0' : 'top-0 opacity-100'}`}>
              {totalItems}
            </span>
            
          </>
        )}
      </button>
      <Checkout cartState={cartState} onClose={closeCart} />
    </>
  );
};

export default Cart;
