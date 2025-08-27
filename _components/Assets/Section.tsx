import { ReactNode } from "react";
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  marginTop?: "full" | "small" | "none";
};

const Section = ({
  children,
  className,
  marginTop,
  ...props
}: SectionProps) => {
  return (
    <section
      className={`
      ${marginTop === "full" && "mt-[127px]"}
      ${marginTop === "small" && "mt-[24px]"}
      ${(marginTop === "none" || !marginTop) && "mt-0"}
      ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
