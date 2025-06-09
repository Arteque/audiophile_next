import Subhead from "@/_components/Assets/Subhead";
import Button from "@/_components/Assets/Button";
import Paragraph from "@/_components/Assets/Paragraph";
import Container from "@/_components/Assets/Container";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      className="heroSection bg-[#191919]  overflow-hidden"
      id="heroSection"
    >
      <Container className="relative flex items-center max-h-[768px] py-[15svh_20svh]">
        <div className="z-10 mx-auto text-center lg:text-left max-w-[379px] lg:max-w-[398px] lg:mx-[unset]">
          <h1 className="mb-[28px]">
            <Subhead className="text-light-100/40 mb-[24px]">
              New Product
            </Subhead>
            <span className="heading_main text-light-100">
              xx99 mark ii headphones
            </span>
          </h1>
          <Paragraph txtColor="light">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Paragraph>
          <Button
            variant="call"
            href={`/singleproduct/${encodeURI(
              "xx99 mark ii headphones"
            )}?id=019722b863f377a49c3b0532375b6e0c`}
            text="See Product"
            className="block w-fit mx-auto lg:mx-[unset]"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <picture>
            <source
              media="(min-width:1025px)"
              srcSet="/home/tablet/image-hero.jpg"
            />
            <source
              media="(min-width:768px)"
              srcSet="/home/tablet/image-hero.jpg"
            />
            <img
              src="/home/mobile/image-hero.jpg"
              alt="XX99 Mark II Headphones"
              className="lg:w-[70%] lg:ml-auto lg:translate-x-[130px] lg:translate-y-[-60px]"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
