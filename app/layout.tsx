import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Gradinita Busy Bee Ramnicu Valcea',
  description: "Oferim un mediu sigur, cald și stimulativ pentru dezvoltarea armonioasă a copilului tău. Cu educatori dedicați și programe inovatoare.",
  keywords: ["Gradinita Valcea", "Gradinita Busy Bee", "Gradinita Busy Bee Valcea", "Gradinita Rm Valcea", "Gradinita Busy Bee Ramnicu Valcea", "Cresa Valcea", "Gradinita acreditata Valcea", "Gradinita privata", "Gradinita Ramnicu Valcea"],
  
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
        {children}
      </body>
    </html>
  );
}
