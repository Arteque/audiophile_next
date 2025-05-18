import Image from "next/image"
import { Cat } from "@/types/cat"

import Button from "./Button"

const CategorieItem = ({cat}:{cat:Cat}) => {
  return (
    <figure className="productCard pt-[1rem] pb-[36px] mx-auto">
        <Image src={`/shared/desktop/${cat.img.src}`} alt={cat.name} width={cat.img.width} height={cat.img.height} />
        <figcaption>
            <h3 className="mb-[36px] font-bold text-[15px] tracking-[1.07px]">{cat.name}</h3>
            <Button href={cat.path} variant="inline" text="Shop" className="mx-auto"/>
        </figcaption>
    </figure>
  )
}

export default CategorieItem
