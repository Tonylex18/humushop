import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { GlobalState } from "./context";
import { Providers } from "@/context/Redux/Provider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Humu Shop",
  description: "Shop it us!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {/* <ToastContainer /> */}
    <html lang="en">
      <body className={barlow.className}>
        <Providers>
          <GlobalState>
            {children}
            {/* <Footer /> */}
          </GlobalState>
        </Providers>
      </body>
    </html>
    </>
  );
}
