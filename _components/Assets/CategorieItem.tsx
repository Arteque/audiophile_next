import Image from "next/image"
import { Cat } from "@/types/cat"

import Button from "./Button"

const CategorieItemStyling = () => {
  return "flex flex-col items-center rounded-[8px] w-full mb-[1rem] max-w-[350px] relative pt-[1rem] pb-[36px] mx-auto"
}

const CategorieItem = ({cat}:{cat:Cat}) => {
  return (
    <figure className={`productCard ${CategorieItemStyling()}`}>
        <Image src={`/shared/desktop/${cat.img.src}`} alt={cat.name} width={cat.img.width} height={cat.img.height} />
        <figcaption>
            <h3 className="font-bold text-[15px] tracking-[1.07px] mb-[15px] lg:text-[18px] lg:tracking-[1.29px]">{cat.name}</h3>
            <Button href={cat.path} variant="inline" text="Shop" className="mt-2 mx-auto"/>
        </figcaption>
    </figure>
  )
}

export default CategorieItem
