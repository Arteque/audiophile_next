import Image from "next/image";
import Subhead from "@/_components/Assets/Subhead";
import Button from "@/_components/Assets/Button";

const Hero = () => {
  return (
    <section
      className="heroSection relative min-h-[100dvh] pt-[20dvh] bg-dark-100"
      id="heroSection"
    >
      <div className="textContainer container relative z-5 px-[24px] max-w-[379px] mx-auto md:px-0">
        <h1 className="text-center">
          <Subhead className="text-light-100/40">New Product</Subhead>
          <span className="uppercase text-light-200 font-bold text-[36px] tracking-[1.29px] leading-[40px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            xx99 mark ii headphones
          </span>
        </h1>
        <p className="text-center text-light-100/75 text-[15px] leading-[25px] my-[28px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          variant="call"
          href="/products/headphones/xx99-mark-ii"
          text="See Product"
          className="block w-fit mx-auto"
        />
      </div>

      <div className="mediaContainer absolute inset-0">
        <picture className="block">
          <source
            media="(min-width:1024px)"
            srcSet="/home/desktop/image-hero.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/home/tablet/image-header.jpg"
          />
          <img
            src="/home/mobile/image-header.jpg"
            alt="xx99 mark ii headphones"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
