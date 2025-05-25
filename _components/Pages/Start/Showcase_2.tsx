import Button from "@/_components/Assets/Button"
import Section from "@/_components/Assets/Section"
import Container from "@/_components/Assets/Container"
const Showcase_2 = () => {
  return (
    <Section className="mt-[24px_!important]">
        <Container className="py-[101px] bg-[url(/home/mobile/image-speaker-zx7.jpg)] bg-cover bg-no-repeat bg-center md:bg-[url(/home/desktop/image-speaker-zx7.jpg)] lg:bg-[url(/home/desktop/image-speaker-zx7.jpg)]">
            <div className="content px-[24px] md:px-[62px] lg:px-[96.5px]">
                <h2 className="heading__3">ZX7 Speaker</h2>
                <Button variant="border" text="See Product" href="/speakers/zx7" className="block w-fit" />
            </div>
        </Container>
    </Section>
  )
}

export default Showcase_2
