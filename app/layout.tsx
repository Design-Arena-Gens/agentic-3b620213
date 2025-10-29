import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "H&H Fragrances - Premium Luxury Perfumes",
  description: "Discover our exclusive collection of premium fragrances crafted with the finest ingredients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-lato antialiased bg-offwhite text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
