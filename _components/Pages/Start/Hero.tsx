import Subhead from "@/_components/Assets/Subhead";
import Button from "@/_components/Assets/Button";
import Paragraph from "@/_components/Assets/Paragraph";

const Hero = () => {
  return (
    <section
      className="heroSection relative min-h-[100dvh] pt-[25dvh] bg-[#191919] "
      id="heroSection"
    >
      <div className="textContainer container  mx-auto max-w-[1110px] relative  z-5 px-[24px] md:px-0">
        <div className="mx-auto text-center lg:text-left max-w-[379px] lg:max-w-[398px] lg:mx-[unset]">
          <h1 className=" mb-[28px]">
            <Subhead className="text-light-100/40 mb-[24px]">
              New Product
            </Subhead>
            <span className="uppercase text-light-200 heading_main">
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
      </div>

      <div className="mediaContainer absolute inset-0 max-w-[1410px] mx-auto">
        <picture>
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
            className="block w-full mx-auto h-full object-cover translate-y-[-10%]"
          />
        </picture>
      </div>
    </section>
    
  );
};

export default Hero;
