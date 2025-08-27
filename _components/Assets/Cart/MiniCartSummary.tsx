"use client";
import { useCartStore } from "@/store/CartStore";
import Currency from "@/Tools/Currency";

interface MiniCartSummaryProps {
  className?: string;
}

const MiniCartSummary = ({ className = "" }: MiniCartSummaryProps) => {
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);

  if (totalItems === 0) {
    return null;
  }

  return (
    <div className={`mini-cart-summary bg-light-100 p-3 rounded-lg ${className}`}>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 bg-prime-100 text-light-100 text-xs font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
          <span className="text-dark-100/70">
            {totalItems === 1 ? 'Item' : 'Items'}
          </span>
        </div>
        <div className="text-right">
          <p className="font-bold text-prime-100">{Currency(totalPrice, "USD")}</p>
          <p className="text-xs text-dark-100/50">Total</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCartSummary;
