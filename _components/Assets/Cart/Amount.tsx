"use client";

import { useState, useEffect, useRef } from "react";

const Amount = ({ amount }: { amount: number }) => {
  const [amountValue, setAmountValue] = useState({ amount });

  const amountRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!amountRef.current) return;
  }, []);

  return <p ref={amountRef}>{amountValue.amount}</p>;
};

export default Amount;
