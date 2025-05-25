import { ReactNode } from "react"

type ContainerProps = {
    className?: string;
    children: ReactNode;
}

const Container = ({ className="", children }: ContainerProps) => {
  return (
    <div className={`container rounded-[8px] mx-auto max-w-[90%] md:max-w-full lg:max-w-[1110px] ${className}`}>
      {children}
    </div>
  )
}

export default Container
