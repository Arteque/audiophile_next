"use client";
import { motion } from "motion/react";
import Currency from "@/Tools/Currency";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/Tools/Loading";
import AddAndDelItemBtns from "./AddAndDelItemBtns";
import Button from "../Button";

const Checkout = ({ cartState = false }: { cartState: boolean }) => {
  const i = 0.1;
  const [itemsInCart, setItemsInCart] = useState<number>(1);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const checkoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

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

  useEffect(() => {
    document.body.dataset.cart = cartState ? "open" : "close";
    document.body.style.cssText = cartState
      ? "overflow-y:hidden"
      : "overflow-y:auto";
  }, [cartState]);

  useEffect(() => {
    console.log(cartTotal);
  }, [cartTotal]);

  return (
    <motion.div
      initial={{
        translateY: -20,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      className={`rounded-[8px] overflow-hidden bg-light-200 py-[32px] px-[28px]
    fixed top-[114px] inset-x-[24px] z-[888] md:right-[8svw] md:max-w-[500px] md:inset-x-[unset] ${
      cartState ? "visible pointer-event-none:" : "hidden pointer-events-auto"
    }`}
    >
      <div className="card_container">
        <div className="card_header flex flex-row justify-between">
          <h2 className={`${itemsInCart <= 0 ? "text-dark-100/50" : ""}`}>
            Cart {itemsInCart > 0 && `(${itemsInCart})`}
          </h2>
          <button className="underline text-dark-100/50">Remove all</button>
        </div>
        <div className="card_content  my-[31px]">
          {itemsInCart ? (
            <>
              <motion.div
                initial={{
                  translateY: -20,
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: i },
                }}
                className="item flex items-center justify-between gap-5 mb-[24px]"
              >
                <div className="flex flex-row gap-[1rem] items-center ">
                  <div className="w-[64px] h-[64px] overflow-hidden rounded-[8px]">
                    <Suspense fallback={<Loading />}>
                      <Image
                        src="/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                        width={64}
                        height={64}
                        alt="XX99MK II"
                      />
                    </Suspense>
                  </div>
                  <ul>
                    <li>
                      <span className="text-dark-100 text-[15px] font-bold leading-[25px]">
                        XX99MK II
                      </span>
                    </li>
                    <li>
                      <span className="text-dark-100/50 font-bold text-[14px] leading-[25px]">
                        {Currency(2999, "USD")}
                      </span>
                    </li>
                  </ul>
                </div>
                <AddAndDelItemBtns
                  stock={5}
                  isInCart={true}
                  className="h-[32px_!important] w-[32px_!important]"
                />
              </motion.div>
            </>
          ) : (
            <p className="text-dark-100/50 text-center p-5 bg-light-100 rounded-[8px]">
              Sorry the cart is empty!
            </p>
          )}
        </div>
        <div className="card_footer">
          <div className="_footer_total flex justify-between items-center mb-[24px]">
            <p className="text-dark-100/50 uppercase">Total</p>
            <p>
              <strong>{Currency(cartTotal, "USD")}</strong>
            </p>
          </div>
          <Button
            href="/"
            variant="call"
            text="Checkout"
            onClick={checkoutHandler}
            className="block text-center"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
