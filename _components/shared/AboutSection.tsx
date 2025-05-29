import Section from "../Assets/Section";
import Container from "../Assets/Container";
import Image from "next/image";
import Paragraph from "../Assets/Paragraph";
import { ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Subhead from "../Assets/Subhead";
import Button from "../Assets/Button";

type imgProps = {
  mobile:string | StaticImport;
  tablet:string;
  desktop:string;
}

type AboutSectionProps = {
  img : imgProps; 
  title?:ReactNode;
  text?:ReactNode;
  reverse ?: boolean;
  newArticle ?: boolean;
  call ?: boolean;
  href ?: string;
  className ?: string;
}

const AboutSection = ({img, title, text, reverse, newArticle, call, href="/", className=""}:AboutSectionProps) => {
  return (
    <Section className={className}>
      <Container className={`lg:flex ${reverse ? 'lg:flex-row-reverse':'lg:flex-row'} lg:gap-[125px] lg:items-center`}>
        <div className="relative media rounded-[8px] overflow-hidden lg:w-[50%] lg:h-[588px]">
          <picture>
            {img.desktop && <source
              sizes="(min-width: 1024px)"
              srcSet={img.desktop}
            />}
            {img.tablet && <source
              sizes="(min-width: 768px)"
              srcSet={img.tablet}
            />}
            {img.mobile && <Image
              src={img.mobile}
              alt="Best Gear"
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />}
          </picture>
        </div>
        <div className="content text-center lg:w-[50%] lg:text-left">
          <h2 className="heading__3 my-[40px_32px]">
            {newArticle && <Subhead className="text-prime-100">New Product</Subhead>}
            {title}
          </h2>
          <Paragraph txtColor="text-light-200">
            {text}
          </Paragraph>
          {call && <Button href={href} variant="call" text="See product" />}
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
