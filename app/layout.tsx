import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import Header from "@/_components/shared/Header";
import Footer from "@/_components/shared/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Audiophile',
    default: 'Audiophile - Premium Audio Equipment',
  },
  description: "Discover premium audio equipment including headphones, speakers, and earphones at Audiophile",
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
        <Footer />
      </body>
    </html>
  );
}
