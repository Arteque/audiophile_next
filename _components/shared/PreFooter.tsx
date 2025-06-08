import React from "react";
import AboutSection from "./AboutSection";

type PreFooterProps = {
  className?: string;
};

const PreFooter = ({ className }: PreFooterProps) => {
  return (
    <AboutSection
      className={className}
      reverse
      img={{
        desktop: "/shared/desktop/image-best-gear.jpg",
        tablet: "/shared/tablet/image-best-gear.jpg",
        mobile: "/shared/mobile/image-best-gear.jpg",
      }}
      title={
        <>
          Bringing you the <span className="text-prime-100">best</span>{" "}
          audiogear
        </>
      }
      text="Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment."
    />
  );
};

export default PreFooter;
