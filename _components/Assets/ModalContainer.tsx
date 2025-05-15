import { ReactNode, FC } from "react";

interface ModalContainerProps {
    children ?: ReactNode;
}

const ModalContainer:FC<ModalContainerProps> = ({children}) => {
  return (
    <div className="modalContainer border-[0.5rem] max-w-[33.75rem]">
      {children}
    </div>
  )
}

export default ModalContainer
