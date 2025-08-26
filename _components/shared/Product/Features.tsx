const Features = ({ product }:{
    product: {
        features: string;
        includes: { quantity: number; item: string }[];
    }
}) => {
  return (
      <div className="product-features-container mt-[88px] lg:flex lg:gap-[125px]">
                <div className="product-features__features lg:flex-[2]">
                  <h2 className="heading__4 mb-[24px] uppercase">Features</h2>
                  <div className="__features__text paragraph text-dark-100 opacity-50 whitespace-pre-line">
                    {product.features}
                  </div>
                </div>
                
                <div className="product-features__inBox lg:flex-1 mt-[88px] lg:mt-0">
                  <h2 className="heading__4 mb-[24px] uppercase">In the box</h2>
                  <ul className="__inBox__list">
                    {product.includes.map((item, index) => (
                      <li key={index} className="flex gap-[24px] mb-[8px]">
                        <span className="font-bold text-prime-100 min-w-[12px]">
                          {item.quantity}x
                        </span>
                        <span className="opacity-50">{item.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  )
}

export default Features