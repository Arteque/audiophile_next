"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ItemInTheCart from "./ItemInTheCart";
import Button from "../Button";
import PriceSummary from "./PriceSummary";
import { useCartStore } from "@/store/cartStore";

const Checkout = ({ cartState = false, onClose }: { cartState: boolean; onClose?: () => void }) => {
  const { 
    items, 
    totalItems, 
    clearCart
  } = useCartStore();

  const checkoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // TODO: Implement actual checkout logic
    console.log('Checkout initiated with items:', items);
  };

  const removeAllHandler = () => {
    clearCart();
  };

  const handleBackdropClick = () => {
    onClose?.();
  };

  useEffect(() => {
    document.body.dataset.cart = cartState ? "open" : "close";
    document.body.style.cssText = cartState
      ? "overflow-y: hidden"
      : "overflow-y: auto";
  }, [cartState]);

  return (
    <AnimatePresence>
      {cartState && (
        <>
          {/* Backdrop */}
          <motion.div
            key="checkout-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[887]"
            onClick={handleBackdropClick}
          />
          
          {/* Cart Modal */}
          <motion.div
            key="checkout-modal"
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20,
              transition: {
                duration: 0.2,
                ease: "easeIn"
              }
            }}
            className="rounded-[8px] overflow-hidden bg-light-200 py-[32px] px-[28px] fixed top-[114px] inset-x-[24px] z-[888] md:right-[8svw] md:max-w-[500px] md:inset-x-[unset]"
          >
            <div className="card_container">
              <div className="card_header flex flex-row justify-between">
                <h2 className={`${totalItems <= 0 ? "text-dark-100/50" : ""}`}>
                  Cart {totalItems > 0 && `(${totalItems})`}
                </h2>
                <button className="underline text-dark-100/50" onClick={removeAllHandler}>Remove all</button>
              </div>
              <div className="card_content  my-[31px]">
                <ItemInTheCart />
              </div>
              <div className="card_footer">
                {/* Use PriceSummary Component */}
                <PriceSummary className="mb-6" />
                
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
        </>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
