import type { Metadata } from "next";
import localFont from "next/font/local";

//import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CIEM College Financial Crisis - Addressing the Issue of Corruption",
  description: "CIEM College is facing a financial crisis due to corrupt actions by some members of the college society. This platform aims to raise awareness and gather support to resolve the situation.",
  keywords: "CIEM College, financial crisis, college corruption, student awareness, education reform, support CIEM",
  authors: [
    {
      name: "CIEM Student Union",  // Author's name
    }
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
/*   og: {
    title: "CIEM College Financial Crisis - Stand Against Corruption",
    description: "Join the movement to help CIEM College overcome its financial crisis caused by corruption. Learn how you can contribute to the cause.",
    image: "/images/proof_image4.jpg", // Add a relevant image
    url: "https://www.yoursite.com", // Replace with the website's URL
    type: "website",
  }, */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
