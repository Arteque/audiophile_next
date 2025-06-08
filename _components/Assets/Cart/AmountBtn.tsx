import { ButtonHTMLAttributes } from "react";

type AmountBtnProps = {
  children: "-" | "+";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const AmountBtn = ({
  children,
  onClick,
  disabled,
  className,
  ...props
}: AmountBtnProps) => {
  return (
    <button
      className={`h-full w-[48px] flex items-center justify-center text-dark-100 
        disabled:cursor-not-allowed disabled:text-dark-100/25
        ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default AmountBtn;
