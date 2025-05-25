import Section from "../Assets/Section";
import Container from "../Assets/Container";
import Image from "next/image";
import Paragraph from "../Assets/Paragraph";
import Logo from "../Assets/Logo";
import Nav from "../Assets/Nav";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Section className="mt-[96px]">
        <Container>
          <div className="media rounded-[8px] overflow-hidden">
            <picture>
              <source sizes="(min-width: 768px)" srcSet="/shared/tablet/image-best-gear.jpg" />
              <source sizes="(min-width: 1024px)" srcSet="/shared/desktop/image-best-gear.jpg" />
              <Image src="/shared/mobile/image-best-gear.jpg" alt="Best Gear" width={100} height={100} className="w-full h-full object-cover object-center"/>
            </picture>
          </div>
          <div className="content text-center">
              <h2 className="heading__3 my-[40px_32px]">Bringing you the <span className="text-prime-100">best</span> audio gear</h2>
              <Paragraph txtColor="text-light-200">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </Paragraph>
          </div>
        </Container>
      </Section>
      <footer className="mt-[120px] bg-dark-100">
        <Container className="text-center py-[52px_38px] md:px[40px]">
          <Logo className="block mx-auto w-fit md:w-auto py-[52px]"/>
          <Nav variant="footer" className="mb-[48px]"/>
          <Paragraph className="text-light-100/50 font-medium">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </Paragraph>
          <Paragraph className="my-[52px_48px] text-light-100/50">
            <strong>
              Copyright 2021. All Rights Reserved
            </strong>
          </Paragraph>
          <ul className="social flex gap-5 justify-center items-center">
              <li>
                <Link href="#" target="_blank">
                  <span className="icon">
                    <Image src="/shared/desktop/icon-facebook.svg" alt="Facebook Icon" width={24} height={24} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <span className="icon">
                    <Image src="/shared/desktop/icon-instagram.svg" alt="Instagram Icon" width={24} height={24} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <span className="icon">
                    <Image src="/shared/desktop/icon-twitter.svg" alt="Twitter Icon" width={24} height={24} />
                  </span>
                </Link>
              </li>
          </ul>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
