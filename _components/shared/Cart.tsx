"use client";
import { useEffect } from "react";
const Cart = () => {
  useEffect(() => {
    const requestCart = async () => {
      try {
        const cartResp = await fetch("api/cart");
        const data = await cartResp.json();
        console.log(data);
      } catch (err: any) {
        console.log(err);
      }
    };
    requestCart();
  }, []);

  return <div></div>;
};

export default Cart;
