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
              "image": "https://grifn-website.vercel.app/logo.png",
              "url": "https://grifn-website.vercel.app/",
              "telephone": "+63-32-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "IT Park, Lahug",
                "addressLocality": "Cebu City",
                "addressRegion": "Central Visayas",
                "postalCode": "6000",
                "addressCountry": "PH"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.facebook.com/grifnsoftware",
                "https://www.linkedin.com/company/grifnsoftware"
              ],
              "serviceProvided": {
                "@type": "Service",
                "serviceType": "Web Design Cebu, Software Solutions Philippines, E-commerce Development",
                "areaServed": {
                  "@type": "Place",
                  "name": "Philippines"
                },
                "provider": {
                  "@type": "Organization",
                  "name": "GRIFN Software Solutions"
                }
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}