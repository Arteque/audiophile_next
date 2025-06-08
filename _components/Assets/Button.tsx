import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  text: ReactNode;
  variant: "default" | "call" | "dark" | "border" | "inline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Button = ({
  href,
  text,
  variant,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  const buttonType = () => {
    switch (variant) {
      case "default":
        return "my-[1rem_24px] text-dark-100/50 text-[15px] font-medium leading-[25px]";
      case "call":
        return "uppercase text-[13px] font-bold px-[2rem] py-[1rem] bg-prime-100 text-light-100 hover:bg-prime-200";
      case "dark":
        return "uppercase text-[13px] font-bold px-[2rem] py-[1rem] bg-dark-100 text-light-100 hover:bg-prime-200";
      case "border":
        return "uppercase text-[13px] font-bold px-[2rem] py-[1rem] bg-transparent text-dark-100 border-dark-100 border-2 hover:bg-light-200";
      case "inline":
        return "uppercase text-[13px] font-bold text-dark-100/50 flex gap-[13px] items-center hover:text-prime-100 w-fit";
      default:
        return "";
    }
  };

  return (
    <Link
      className={`${buttonType()} ${className}`}
      href={href}
      onClick={onClick}
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
