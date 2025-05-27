import { ReactNode } from "react"

type ContainerProps = {
    className?: string;
    children: ReactNode;
}

const Container = ({ className="", children }: ContainerProps) => {
  return (
    <div className={`container w-[calc(100%-24px)] mx-auto md:w-[calc(100%-40px)] lg:w-auto lg:max-w-[1110px] ${className}`}>
      {children}
    </div>
  )
}

export default Container
