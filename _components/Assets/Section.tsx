import { ReactNode } from "react"
type SectionProps = {
  children: React.ReactNode;
  className?: string;
}

const Section = ({children, className="", ...props}: SectionProps) => {
  return (
    <section className={`mt-[127px] mb-[168px] ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
