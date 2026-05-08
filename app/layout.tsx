import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GRIFN Software Solutions",
  image: "https://grifn.dev/logo.png",
  url: "https://grifn.dev/",
  telephone: "+639178396962",
  address: {
    "@type": "PostalAddress",
    streetAddress: "IT Park, Lahug",
    addressLocality: "Cebu City",
    addressRegion: "Central Visayas",
    postalCode: "6000",
    addressCountry: "PH",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://www.linkedin.com/company/grifn-software-solutions/",
    "https://www.facebook.com/profile.php?id=61588838560417",
  ],
  serviceProvided: {
    "@type": "Service",
    serviceType: "Web Design Cebu, Software Solutions Philippines, E-commerce Development",
    areaServed: {
      "@type": "Place",
      name: "Philippines",
    },
    provider: {
      "@type": "Organization",
      name: "GRIFN Software Solutions",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GRIFN Software Solutions",
  url: "https://grifn-website.vercel.app",
  logo: "https://grifn-website.vercel.app/logo.png",
  description:
    "GRIFN Software Solutions is a premium software studio crafting high-performance websites, web apps, and digital experiences that drive real business results.",
  email: "hello@grifn.dev",
  telephone: "+639178396962",
  foundingDate: "2024",
  sameAs: [
    "https://www.linkedin.com/company/grifn-software-solutions/",
    "https://www.facebook.com/profile.php?id=61588838560417",
  ],
  serviceArea: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design & Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Performance Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Responsive Design" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does GRIFN Software Solutions offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GRIFN Software Solutions offers a full suite of digital services including web design, web development, responsive design, e-commerce development, UI/UX strategy, and SEO & performance optimization. We build premium digital experiences tailored to your business goals.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost at GRIFN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website pricing varies based on project scope, complexity, and features required. GRIFN offers custom quotes for every project — from landing pages to full-scale web applications. You can request a free quote directly on our website at grifn.dev.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical project timeline at GRIFN ranges from 2 to 8 weeks depending on the scope. Simple landing pages can be delivered in 1–2 weeks, while complex web applications or e-commerce platforms may take 6–10 weeks. We provide a detailed timeline after the discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Does GRIFN build e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GRIFN specializes in custom e-commerce development with seamless checkout flows, payment gateway integration, inventory management, and conversion-optimized product pages. We build stores that are fast, secure, and built to sell.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does GRIFN use to build websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GRIFN uses modern, industry-leading technologies including Next.js, React, TypeScript, and Node.js for web development. For design, we rely on Figma and custom CSS. Our stack is chosen for performance, scalability, and SEO-friendliness.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every website GRIFN builds is fully responsive and optimized for all screen sizes — desktop, tablet, and mobile. Mobile performance and usability are a core part of our development process, not an afterthought.",
      },
    },
    {
      "@type": "Question",
      name: "Does GRIFN provide SEO optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GRIFN includes foundational SEO best practices in every project: semantic HTML, fast load times, meta tags, structured data (JSON-LD), and Core Web Vitals optimization. We also offer dedicated SEO strategy and performance tuning as a standalone service.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with GRIFN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is simple. You can request a free quote or book a discovery call directly on our website at grifn.dev. We'll discuss your goals, timeline, and budget to create a custom proposal for your project.",
      },
    },
  ],
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Software Solutions & Web Design Cebu | GRIFN Philippines",
  description:
    "Premium software solutions and web design in Cebu. GRIFN crafts high-performance UI/UX design, web apps, and digital case studies that drive real business results in the Philippines. Get your free quote today.",
  metadataBase: new URL("https://grifn-website.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Solutions & Web Design Cebu | GRIFN Philippines",
    description:
      "Premium software solutions, web design, and UI/UX strategy for ambitious brands in Cebu and the Philippines. We build websites and digital case studies that convert.",
    url: "https://grifn.dev",
    siteName: "GRIFN Software Solutions",
    images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: "GRIFN Software Solutions — Web Design Cebu Philippines" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions & Web Design Cebu | GRIFN Philippines",
    description:
      "Premium software solutions, web design, and UI/UX strategy for ambitious brands in Cebu and the Philippines. Expert digital case studies.",
    images: ["/og-banner.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "cAw0SeUoGVv0Hq8Yf9qTnflX8uaiTn0WbxlyUuoxzUs",
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness — Cebu-specific local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Organization — global brand identity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* FAQPage — AEO for AI search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <GoogleAnalytics gaId="G-7W1TVY00LK" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}