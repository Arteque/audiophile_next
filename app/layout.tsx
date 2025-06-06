import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import Header from "@/_components/shared/Header";
import Footer from "@/_components/shared/Footer";

export const metadata: Metadata = {
  title: "Audiophile Online Shope",
  description: "Code By Ahmed Lemssiah",
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={manrope.className}>
      <body suppressHydrationWarning className="lg:[&::after]:hidden">
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
