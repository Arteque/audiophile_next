import Button from "@/_components/Assets/Button";
import Paragraph from "@/_components/Assets/Paragraph";
import Section from "@/_components/Assets/Section";
import Image from "next/image";
const Showcase = () => {
  return (
    <Section>
      <div className="container bg-prime-100 py-[55px]  bg-[url('/home/desktop/pattern-circles.svg')] bg-no-repeat bg-cover bg-position-[center_-200px]
      lg:flex lg:items-center lg:bg-position-[-220px_133px] lg:bg-size-[90%] lg:overflow-hidden
      ">
        <div className="media-container relative w-fit mx-auto mb-[64px]">
          <picture>
            <source  srcSet="/home/desktop/image-speaker-zx9.png" sizes="(min-width: 1024px) 100vw" />
            <source srcSet="/home/tablet/image-speaker-zx9.png" sizes="(min-width: 768px) 100vw" />
            <img
              src="/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              width={197}
              height={237}
              className="lg:w-[410px] lg:translate-y-[50%]"
            />
          </picture>
        </div>
        <div className="max-w-[349px] text-center mx-auto lg:text-left lg:mx-[unset]">
          <h2 className="font-bold text-light-100 text-[56px] tracking-[2px] pb-[25px] leading-[3.8rem] uppercase">
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
            className="block w-fit mx-auto lg:mx-[unset]"
          />
        </div>
      </div>
    </Section>
  );
};

export default Showcase;