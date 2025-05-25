import Button from "@/_components/Assets/Button"
import Section from "@/_components/Assets/Section"
import Container from "@/_components/Assets/Container"
import Image from "next/image"
const Showcase_3 = () => {
  return (
    <Section>
        <Container className="grid gird-cols-1 grid-rows-2 gap-y-[24px] md:grid-cols-[0.9fr_0.9fr] md:grid-rows-1 md:content-between md:gap-x-[11px] lg:gap-x-[30px] lg:h-[303px]">
            <div className="media rounded-[8px] overflow-hidden">
                <picture>
                    <source sizes="( min-width: 1024px)" srcSet="/home/desktop/image-earphones-yx1.jpg" />
                    <source sizes="( min-width: 768px)" srcSet="/home/tablet/image-earphones-yx1.jpg" />
                    <Image src="/home/mobile/image-earphones-yx1.jpg" alt="YX1 Earphones" width={540} height={560} className="w-full h-full object-cover" />
                </picture>
            </div>
            <div className="content flex flex-col justify-center rounded-[8px] bg-light-100 px-[24px] py-[41px] md:px-[62px] lg:px-[96.5px] lg:py-[101px]">
                <h2 className="heading__3  mb-[32px] ">YX1 EARPHONES</h2>
                <Button variant="border" text="See Product" href="/speakers/zx7" className="block w-fit" />
            </div>
        </Container>
    </Section>
  )
}

export default Showcase_3
