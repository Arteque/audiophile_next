"use client";
import AmountBtn from "./AmountBtn";
import { useEffect, useState } from "react";
const AddAndDelItemBtns = ({
  stock,
  className,
}: {
  stock: number;
  className?: string;
}) => {
  //Amount
  const [amount, setAmount] = useState<number>(1);

  const amountBtnDelHandler = () => {
    amount > 0 ? setAmount((prev) => prev - 1) : setAmount(0);
  };
  const amoutBtnAddHandler = () => {
    amount < stock
      ? setAmount((prev) => prev + 1)
      : alert("Max Stock: " + stock);
  };

  return (
    <>
      <div className="items">
        <div className="flex flex-row flex-nowrap gap-1 items-center bg-dark-100/10 w-fit">
          <AmountBtn
            children="-"
            onClick={amountBtnDelHandler}
            disabled={amount <= 0 ? true : false}
            className={`${className}`}
          />
          <p
            className={`max-w-[48px] text-[13px] font-bold tracking-[1px] flex items-center justify-center ${
              amount >= stock || amount <= 0
                ? "text-red-600"
                : "text-dark-100/50"
            } ${className}`}
          >
            {amount}{" "}
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
            Stock:{amount} /{stock}
          </small>
        </p>
      </div>
    </>
  );
};

export default AddAndDelItemBtns;
