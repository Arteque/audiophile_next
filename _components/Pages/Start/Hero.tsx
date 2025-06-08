import Subhead from "@/_components/Assets/Subhead";
import Button from "@/_components/Assets/Button";
import Paragraph from "@/_components/Assets/Paragraph";
import Container from "@/_components/Assets/Container";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      className="heroSection relative py-[10svh] bg-[#191919] "
      id="heroSection"
    >
      <Container className="relative lg:flex lg:justify-between">
        <div
          className="relative z-10 mx-auto text-center lg:text-left max-w-[379px] lg:max-w-[398px] lg:mx-[unset]
         
        "
        >
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
            href="/products/headphones/xx99-mark-ii"
            text="See Product"
            className="block w-fit mx-auto lg:mx-[unset]"
          />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] lg:right-0">
          <Image
            src="/home/desktop/image-hero.jpg"
            alt="xx99 mark ii headphones"
            width={1000}
            height={1000}
            className="w-full h-auto block"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
