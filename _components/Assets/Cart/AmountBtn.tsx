import { ButtonHTMLAttributes } from "react";

type AmountBtnProps = {
  children: "-" | "+";
  onClick?: () => void;
};

const AmountBtn = ({ children, onClick, ...props }: AmountBtnProps) => {
  return (
    <button
      className="h-full w-[48px] flex items-center justify-center text-dark-100"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default AmountBtn;
