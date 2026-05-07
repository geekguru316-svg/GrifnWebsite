import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../services.css';

export const metadata: Metadata = {
  title: 'Web Design Cebu | Premium Websites for SMEs | GRIFN',
  description:
    'Professional web design in Cebu for SMEs and growing businesses. GRIFN builds conversion-focused, mobile-first websites that drive real revenue. Get your free quote today.',
  alternates: { canonical: '/services/web-design-cebu' },
};

export default function WebDesignCebu() {
  return (
    <div className="service-page">
      <Navbar />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/#services">Services</Link> <span>/</span>
            <span>Web Design Cebu</span>
          </div>
          <h1>
            Web Design Cebu | <span className="gradient-text">Premium Websites for SMEs</span>
          </h1>
          <p className="hero-desc">
            Your website is your hardest-working salesperson. We design premium, conversion-focused
            websites for Cebu&apos;s growing SMEs — sites that don&apos;t just look stunning but
            actually generate leads, build trust, and drive revenue 24/7.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">
              Get My Free Quote →
            </Link>
            <Link href="/portfolio/cebu-artisan-collective" className="btn btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Long-form Content */}
      <section className="service-content">
        <div className="container">
          <div className="service-body">
            <h2>
              Why Cebu Businesses Need <span className="gradient-text">Professional Web Design</span>
            </h2>
            <p>
              The digital landscape in Cebu is evolving faster than ever. With over 80% of Filipino consumers
              researching products online before making a purchase, your website isn&apos;t just a digital brochure —
              it&apos;s your primary revenue channel. Yet most Cebu-based SMEs still operate with outdated,
              template-based websites that fail to convert visitors into customers.
            </p>
            <p>
              At GRIFN, we approach web design as a strategic investment, not an expense. Every pixel, every
              interaction, and every piece of copy is engineered to guide your visitors toward a specific action —
              whether that&apos;s filling out a contact form, making a purchase, or booking a consultation. Our
              conversion-focused methodology has helped Cebu businesses increase their online leads by an
              average of 150% within the first three months of launch.
            </p>
            <p>
              We specialize in designing for the Philippine market. That means understanding local buying
              behavior, mobile-first browsing habits (over 95% of Filipino internet users access the web
              via mobile), and the cultural nuances that influence trust and purchasing decisions in Cebu
              and across the Visayas region. A website that works in the US may not work in Cebu — we bridge
              that gap with localized UX research and data-driven design.
            </p>
            <p>
              Furthermore, professional web design is the foundation of your Local SEO. Google rewards websites
              that provide a superior user experience, fast load speeds, and high-quality content. By investing
              in a premium design today, you&apos;re setting your business up for long-term visibility in the 
              Cebuano and national Philippine markets.
            </p>

            <h2>
              Our Web Design <span className="gradient-text">Process</span>
            </h2>
            <p>
              Every project begins with a deep-dive discovery session where we learn about your business goals,
              target audience, and competitive landscape. We then craft a custom design strategy that aligns
              your brand identity with proven conversion principles — from strategic color psychology to
              intentional information architecture that mirrors how your Cebu customers actually browse and buy.
            </p>
            <p>
              Our design process is collaborative and transparent. You&apos;ll see wireframes, prototypes, and
              design concepts before a single line of code is written. We iterate based on your feedback until
              the design perfectly represents your brand and business objectives. We don&apos;t just hand over a site; 
              we ensure it&apos;s a high-performance tool that grows with your business.
            </p>
            <p>
              Finally, we conduct rigorous testing across all devices and browsers, ensuring that whether your 
              customer is on a flagship iPhone in IT Park or a budget Android in Mactan, they have a seamless, 
              fast experience that reflects your business&apos;s professionalism.
            </p>
          </div>

          {/* Who is this for? */}
          <div className="who-card">
            <h2>Who Is This For?</h2>
            <ul>
              <li>Cebu-based SMEs looking to establish or upgrade their online presence</li>
              <li>Local businesses losing customers to competitors with better websites</li>
              <li>Startups in Cebu IT Park and the Visayas region needing a professional launch</li>
              <li>Established companies ready to modernize their outdated website design</li>
              <li>Businesses targeting both local Cebu and national Philippine markets</li>
              <li>E-commerce brands wanting a custom storefront that converts</li>
            </ul>
          </div>

          {/* Deliverables */}
          <div className="deliverables">
            <h2>What You Get</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item">
                <div className="icon">🎨</div>
                <h3>Custom UI/UX Design</h3>
                <p>Pixel-perfect, brand-aligned designs crafted in Figma — no templates, no shortcuts.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">📱</div>
                <h3>Mobile-First Responsive</h3>
                <p>Flawless experience across all devices, optimized for how Filipinos actually browse.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">⚡</div>
                <h3>Performance Optimized</h3>
                <p>Lightning-fast load times with Core Web Vitals optimization for SEO advantage.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">🔍</div>
                <h3>SEO Foundation</h3>
                <p>Built-in semantic HTML, structured data, and on-page SEO best practices.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">📊</div>
                <h3>Analytics Integration</h3>
                <p>Google Analytics and conversion tracking set up from day one to measure ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <h2>
            Ready to Upgrade Your <span className="gradient-text">Web Design?</span>
          </h2>
          <p>
            Let&apos;s discuss how a premium website can transform your Cebu business. Free consultation, no obligations.
          </p>
          <Link href="/quote" className="btn btn-primary">
            Get My Free Quote →
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="container">
          <h2>Related Services</h2>
          <div className="related-grid">
            <Link href="/services/ecommerce-philippines" className="related-card">
              <div className="card-icon">🛒</div>
              <h3>E-Commerce Development</h3>
              <p>Custom online stores that convert browsers into buyers.</p>
            </Link>
            <Link href="/services/seo-cebu" className="related-card">
              <div className="card-icon">🔍</div>
              <h3>SEO Services Cebu</h3>
              <p>Outrank your competitors in local and national search results.</p>
            </Link>
            <Link href="/services/ui-ux-design" className="related-card">
              <div className="card-icon">🎯</div>
              <h3>UI/UX Design Philippines</h3>
              <p>User-centered design backed by research and data.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
