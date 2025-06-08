import { text } from "node:stream/consumers";
import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  txtColor?: string;
  className?: string;
};
const Paragraph = ({
  children,
  txtColor,
  className,
  ...props
}: ParagraphProps) => {
  const textStyling = () => {
    switch (txtColor) {
      case "light":
        return "text-light-100/75";
      case "dark":
        return "text-dark-100/75";
      default:
        return "text-dark-100/75";
    }
  };

  return (
    <p
      className={`paragraph ${textStyling()} ${className}`}
      area-label="paragraph"
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
