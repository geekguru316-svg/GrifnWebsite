import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Web Design Cebu | GRIFN Software Solutions",
  description:
    "Premium web design in Cebu. Get your free quote today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GRIFN Software Solutions",
              "image": "https://grifn-website.vercel.app/portfolio-1.png",
              "@id": "https://grifn-website.vercel.app/",
              "url": "https://grifn-website.vercel.app/",
              "telephone": "09178396962",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "L. Gabuya Street, Cogon Pardo",
                "addressLocality": "Cebu City",
                "postalCode": "6000",
                "addressRegion": "Cebu",
                "addressCountry": "PH"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}