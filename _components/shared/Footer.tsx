import Section from "../Assets/Section";
import Container from "../Assets/Container";
import Image from "next/image";
import Paragraph from "../Assets/Paragraph";
import Logo from "../Assets/Logo";
import Nav from "../Assets/Nav";
import Link from "next/link";
import AboutSection from "./AboutSection";

const Footer = () => {
  return (
    <>
      <AboutSection />
      <footer className=" bg-dark-100 mt-[120px] md:mt-[96px] lg:mt-[200px]">
        <Container className="footerContainer text-center relative py-[52px_38px] md:text-left">
          <Logo className="block mx-auto w-fit md:mx-[unset] py-[52px]"/>
          <Nav variant="footer" className="mb-[48px]"/>
          <Paragraph className="text-light-100/50 font-medium">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </Paragraph>
          <div className="md:flex md:justify-between md:items-center">
            <Paragraph className="my-[52px_48px] text-light-100/50">
            <strong>
              Copyright 2021. All Rights Reserved
            </strong>
          </Paragraph>
          <ul className="social flex gap-5 justify-center items-center md:w-fit">
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
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
