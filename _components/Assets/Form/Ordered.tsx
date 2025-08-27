"use client";
import Image from "next/image";
import { useCartStore } from "@/store/CartStore";
import { useEffect } from "react";
import Currency from "@/Tools/Currency";
const Ordered = () => {
  const cart = useCartStore((state) => state.items);

  useEffect(() => {
    console.log("CartData", cart);
  }, [cart]);

  return (
    <div className="fixed left-[10%] right-[10%] max-w-[300px]  mx-auto z-auto top-[25dvh] bg-light-200 p-10">
      <Image
        aria-hidden="true"
        src="/assets/shared/desktop/illustration-order-confirmation.svg"
        alt="Order Confirmed check"
        width={202}
        height={202}
        className="mx-auto mb-[2rem]"
      />
      <h2 className="text-center text-dark-100">Thank you for your order!</h2>
      <p className="text-center text-dark-100/50 mt-[1rem]">
        You will receive an email confirmation shortly.
      </p>
      <ul>
        {cart.map(
          (item, index) =>
            index < 1 && (
              <li key={item.id} className=" text-dark-100 flex justify-between">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={28}
                  height={28}
                  className="mx-auto mb-[1rem]"
                />
                {item.name.split(" ").shift()}
                <span className="w-full text-right">
                  {Currency(item.price, "USD")}
                </span>
              </li>
            )
        )}
        {cart.length > 1 && (
          <li className="text-dark-100/50 text-center">
            and {cart.length - 1} other item(s)
          </li>
        )}
        <li className="bg-dark-100 p-[24px]">
          <span className="text-light-200/50 uppercase">Grand Total</span>
          <span className="text-dark-100">
            {cart.reduce((acc, item) => acc + item.price, 0)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Ordered;
