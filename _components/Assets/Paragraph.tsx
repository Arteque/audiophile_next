import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};
const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return (
    <p
      className=" text-light-100/75 text-[15px] leading-[25px] mb-[28px]"
      area-label="paragraph"
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
