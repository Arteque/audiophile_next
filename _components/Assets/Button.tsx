import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  text: ReactNode;
  variant: "call" | "dark" | "border" | "inline";
  className?: string;
};

const Button = ({ href, text, variant, className="", ...props }: ButtonProps) => {
  const buttonType = () => {
    switch (variant) {
      case "call":
        return "px-[2rem] py-[1rem] bg-prime-100 text-light-100 hover:bg-prime-200";
      case "dark":
        return "px-[2rem] py-[1rem] bg-dark-100 text-light-100 hover:bg-prime-200";
      case "border":
        return "px-[2rem] py-[1rem] bg-transparent text-dark-100 border-dark-100 border-2 hover:bg-light-200";
      case "inline":
        return "text-dark-100/50 flex gap-[13px] items-center hover:text-prime-100 w-fit";
      default:
        return "";
    }
  };

  return (
    <Link
      className={`uppercase text-[13px] font-bold ${buttonType()} ${className}`}
      href={href}
      {...props}
    >
      <span className="text">{text}</span>
      {variant === "inline" && (
        <Image
          src="/shared/desktop/icon-arrow-right.svg"
          alt="arrow right"
          width={8}
          height={10}
          className="block"
        />
      )}
    </Link>
  );
};

Button.defaultProps = {
  variant: "call",
};

export default Button;
