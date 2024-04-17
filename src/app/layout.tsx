import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Shared/Container/Container";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skartner",
  description:
    "We provide education solutions with Software and AI. Our goal is to democratize education and make it more accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <div className="min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-88px)]">
          <Container>
            <Navbar />
            {children}
          </Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
