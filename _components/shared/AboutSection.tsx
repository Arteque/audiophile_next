import Section from "../Assets/Section";
import Container from "../Assets/Container";
import Image from "next/image";
import Paragraph from "../Assets/Paragraph";

const AboutSection = () => {
  return (
    <Section className="mt-[96px]">
      <Container className="lg:flex lg:flex-row-reverse lg:gap-[125px] lg:items-center">
        <div className="media rounded-[8px] overflow-hidden lg:w-[50%] lg:h-[588px]">
          <picture>
            <source
              sizes="(min-width: 768px)"
              srcSet="/shared/tablet/image-best-gear.jpg"
            />
            <source
              sizes="(min-width: 1024px)"
              srcSet="/shared/desktop/image-best-gear.jpg"
            />
            <Image
              src="/shared/mobile/image-best-gear.jpg"
              alt="Best Gear"
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </div>
        <div className="content text-center lg:w-[50%] lg:text-left">
          <h2 className="heading__3 my-[40px_32px]">
            Bringing you the <span className="text-prime-100">best</span> audio
            gear
          </h2>
          <Paragraph txtColor="text-light-200">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
