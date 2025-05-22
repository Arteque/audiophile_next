import Button from "@/_components/Assets/Button";
import Paragraph from "@/_components/Assets/Paragraph";
import Section from "@/_components/Assets/Section";
const Showcase = () => {
  return (
    <Section className="bg-[url(/home/desktop/pattern-circles.svg)] bg-no-repeat bg-contain bg-position-[center_-100px]">
      <div className="container bg-prime-100 pb-[64px] pt-[294px]
       bg-[url(/home/mobile/image-speaker-zx9.png)] bg-position-[center_55px] bg-size-[140px] bg-no-repeat
        md:bg-[url(/home/tablet/image-speaker-zx9.png)] lg:bg-[url(/home/desktop/image-speaker-zx9.png)]
      ">
        <div className="max-w-[349px] text-center mx-auto">
          <h2 className="text-center font-bold text-light-100 text-[56px] tracking-[2px] uppercase">
            ZX9 Speaker
          </h2>
          <Paragraph txtColor="light">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Paragraph>
          <Button
            href="/speakers/zx9"
            variant="dark"
            text="See Product"
            className="block w-fit mx-auto"
          />
        </div>
      </div>
    </Section>
  );
};

export default Showcase;
