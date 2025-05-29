import { usePathname } from "next/navigation"

type ProductProps = {
    product : string;
}

const page = ({product}:ProductProps) => {

    const path = usePathname()
    
  return (
    <div>
      Single View Product Page for: {product}
    </div>
  )
}

export default page
