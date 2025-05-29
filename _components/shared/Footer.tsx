"use client";
import Container from "../Assets/Container";
import Image from "next/image";
import Paragraph from "../Assets/Paragraph";
import Logo from "../Assets/Logo";
import Nav from "../Assets/Nav";
import Link from "next/link";
import PreFooter from "./PreFooter";
import Categories from "../Pages/Start/Categories";
import { usePathname } from "next/navigation";
const Footer = () => {
  const router = usePathname();
  const notHome = router !== '/'

  return (
    <>
      {notHome && <Categories />}
      <PreFooter />
      <footer className=" bg-dark-100 mt-[120px] md:mt-[96px] lg:mt-[200px]">
        <Container
          className="footerContainer text-center relative py-[52px_38px] md:text-left
        md:grid md:grid-cols-2
        "
        >
          <Logo
            className="block mx-auto w-fit md:mx-[unset] py-[52px]
          md:col-start-1 md:-col-end-1
          lg:col-end-2 lg:py-0
          "
          />
          <Nav
            variant="footer"
            className="mb-[48px]
          md:col-start-1 md:-col-end-1 md:mb-[unset] 
          lg:col-start-2 lg:col-end-3 lg:justify-self-end lg:mb-0
          "
          />
          <Paragraph
            className="text-light-100/50 font-medium
          md:col-start-1 md:-col-end-1 md:my-[32px_80px]
          lg:col-end-2
          "
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Paragraph>

          <Paragraph
            className="my-[52px_48px] md:my-[0] text-light-100/50
          lg:row-start-3"
          >
            <strong>Copyright 2021. All Rights Reserved</strong>
          </Paragraph>
          <ul
            className="social flex gap-5 justify-center items-center
          md:col-start-2 md:-col-end-1 md:self-center md:justify-self-end"
          >
            <li>
              <Link href="#" target="_blank">
                <span className="icon">
                  <Image
                    src="/shared/desktop/icon-facebook.svg"
                    alt="Facebook Icon"
                    width={24}
                    height={24}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <span className="icon">
                  <Image
                    src="/shared/desktop/icon-instagram.svg"
                    alt="Instagram Icon"
                    width={24}
                    height={24}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <span className="icon">
                  <Image
                    src="/shared/desktop/icon-twitter.svg"
                    alt="Twitter Icon"
                    width={24}
                    height={24}
                  />
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
