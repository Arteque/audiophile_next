"use client";
import { useCartStore } from "@/store/cartStore";
import Currency from "@/Tools/Currency";

interface PriceSummaryProps {
  showShipping?: boolean;
  showTax?: boolean;
  showGrandTotal?: boolean;
  taxRate?: number;
  className?: string;
}

const PriceSummary = ({
  showShipping = false,
  showTax = false,
  showGrandTotal = true,
  taxRate = 0.20,
  className = "",
}: PriceSummaryProps) => {
  const { totalPrice } = useCartStore();

  if (totalPrice === 0) {
    return (
      <div className={`text-center text-dark-100/50 p-4 ${className}`}>
        <p>No items in cart</p>
      </div>
    );
  }

  return (
    <div className={`price-summary ${className}`}>
      {/* Only show Total */}
      <div className="flex justify-between items-center pt-2">
        <p className="text-dark-100 uppercase text-base font-bold">Total</p>
        <p>
          <strong className="text-xl text-prime-100">{Currency(totalPrice, "USD")}</strong>
        </p>
      </div>
    </div>
  );
};

export default PriceSummary;
