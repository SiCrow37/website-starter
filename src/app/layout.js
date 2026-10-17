import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Website Starter",
    description: "A reusable foundation for client websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
          <Link href="/">Website Starter</Link>

          <nav aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/work">Our Work</Link>
              <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer>All rights reserved</footer>
      </body>
    </html>
  );
}
