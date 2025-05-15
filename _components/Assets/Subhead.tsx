
type SubheadProps = {
    children: React.ReactNode;
    className?: string;
}

const Subhead = ({children, className, ...props}:SubheadProps) => {

  return (
    <span className={`block uppercase text-[14px] tracking-[10px] font-normal ${className}` } {...props}>
        {children}
    </span>
  )
}

export default Subhead
