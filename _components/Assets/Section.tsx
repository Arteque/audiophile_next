import { ReactNode } from "react"
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  marginTop ?: "full";
}

const Section = ({children, className="", marginTop,...props}: SectionProps) => {
  return (
    <section className={`${marginTop ==='full'?'mt-[127px]':'mt-[24px]'} ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
