import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({subsets: ["latin"], 
weight: ["200", '300', "400", "500", "600", "700" ],
  variable: "--font-oswald",
});

const roboto = Roboto({subsets: ["latin"], 
weight: ["100", '300', "400", "500", "700", "900" ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kinetiq",
  description: `Kinetiq is a fitness and wellness platform that provides personalized workout plans, nutrition guidance,
   and community support to help individuals achieve their health and fitness goals. Our mission is to empower people to
    lead healthier lives through innovative technology and expert advice.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gray-200"
    >
      <body className={`${oswald.variable} ${roboto.variable} w-full max-w-[1920px] mx-auto bg-white`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
