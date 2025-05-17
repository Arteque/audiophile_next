
type SubheadProps = {
    children: React.ReactNode;
    className?: string;
}

const Subhead = ({children, className, ...props}:SubheadProps) => {

  return (
    <span className={`heading_sub ${className}` } {...props}>
        {children}
    </span>
  )
}

export default Subhead
