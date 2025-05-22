import Button from "@/_components/Assets/Button"
import Paragraph from "@/_components/Assets/Paragraph"
import Section from "@/_components/Assets/Section"
const Showcase = () => {
  return (
    <Section>
      <div className="container bg-prime-100 pb-[64px]">
         <div className="max-w-[349px] text-center mx-auto">
            <h2 className="text-center text-light-100 text-[56px] tracking-[2px] uppercase">ZX9 <br /> Speaker</h2>
         <Paragraph txtColor="light">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Paragraph>
         <Button href="/speakers/zx9" variant="dark" text="See Product" className="block w-fit mx-auto" />
         </div>
      </div>
    </Section>
  )
}

export default Showcase
