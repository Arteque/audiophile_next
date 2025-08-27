"use client";
import { useState } from "react";
import AddAndDelItemBtns from "./AddAndDelItemBtns";
import AddItemToCartButton from "./AddItemToCartButton";
import type { Product } from "@/lib/data";

interface ProductAddToCartProps {
  product: Product;
  className?: string;
}

const ProductAddToCart = ({ product, className = "" }: ProductAddToCartProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAmountChange = (newAmount: number) => {
    setSelectedQuantity(newAmount);
  };

  return (
    <div className={`buy-container flex items-start gap-[1rem] ${className}`}>
      <AddAndDelItemBtns 
        stock={product.stock} 
        onAmountChange={handleAmountChange}
        initialAmount={selectedQuantity}
      />
      <AddItemToCartButton 
        product={product} 
        quantity={selectedQuantity}
        disabled={selectedQuantity === 0}
      />
    </div>
  );
};

export default ProductAddToCart;
