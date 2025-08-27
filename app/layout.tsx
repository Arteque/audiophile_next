import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import "../styles/toast.css";
import Header from "@/_components/shared/Header";
import Footer from "@/_components/shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
