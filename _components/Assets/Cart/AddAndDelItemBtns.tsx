"use client";
import { FaTrash } from "react-icons/fa";
import Amount from "./Amount";
import AmountBtn from "./AmountBtn";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/CartStore";
import { cartToast } from "@/lib/toast";

interface AddAndDelItemBtnsProps {
  stock: number;
  isInCart?: boolean;
  className?: string;
  productId?: string;
  productName?: string;
  onAmountChange?: (amount: number) => void;
  initialAmount?: number;
}

const AddAndDelItemBtns = ({
  stock,
  isInCart = false,
  className,
  productId,
  productName,
  onAmountChange,
  initialAmount = 1,
}: AddAndDelItemBtnsProps) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const amountBtnDelHandler = () => {
    const newAmount = amount > 0 ? amount - 1 : 0;
    setAmount(newAmount);
    
    if (isInCart && productId) {
      if (newAmount === 0) {
        removeItem(productId);
      } else {
        updateQuantity(productId, newAmount);
      }
    } else {
      onAmountChange?.(newAmount);
    }
  };

  const amoutBtnAddHandler = () => {
    if (amount < stock) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      
      if (isInCart && productId) {
        updateQuantity(productId, newAmount);
      } else {
        onAmountChange?.(newAmount);
      }
    } else {
      // Show toast notification for stock limitation
      if (productName) {
        cartToast.stockLimitReached(productName, stock);
      }
    }
  };

  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount]);

  return (
    <>
      <div className="items">
        <div className="flex flex-row flex-nowrap gap-1 items-center bg-dark-100/10 w-fit">
          <AmountBtn
            children={
              isInCart && amount == 0 ? (
                <FaTrash className="block w-3 h-3 fill-current" />
              ) : (
                "-"
              )
            }
            onClick={amountBtnDelHandler}
            disabled={amount < 0 ? true : false}
            className={`${className}`}
          />
          <p
            className={`w-[30px] text-[13px] font-bold tracking-[1px] flex items-center justify-center ${
              amount >= stock || amount <= 0
                ? "text-red-600"
                : "text-dark-100/50"
            } ${className}`}
          >
            {<Amount amount={amount} />}{" "}
          </p>
          <AmountBtn
            children="+"
            onClick={amoutBtnAddHandler}
            disabled={amount >= stock ? true : false}
            className={`${className}`}
          />
        </div>
        <p>
          <small className="text-dark-100/50">
            {isInCart ? `Qty: ${amount}/${stock}` : `Stock: ${amount}/${stock}`}
          </small>
        </p>
      </div>
    </>
  );
};

export default AddAndDelItemBtns;
