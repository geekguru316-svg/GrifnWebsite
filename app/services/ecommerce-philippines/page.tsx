import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../services.css';

export const metadata: Metadata = {
  title: 'E-Commerce Development Philippines | Online Stores | GRIFN',
  description:
    'Custom e-commerce development in the Philippines. GRIFN builds high-converting online stores with secure payments, inventory management, and local logistics integration.',
  alternates: { canonical: '/services/ecommerce-philippines' },
};

export default function EcommercePhilippines() {
  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/#services">Services</Link> <span>/</span>
            <span>E-Commerce Philippines</span>
          </div>
          <h1>E-Commerce Development <span className="gradient-text">Philippines</span></h1>
          <p className="hero-desc">
            The Philippine e-commerce market is projected to reach $24 billion by 2028. GRIFN builds
            custom online stores that capture your share — with seamless checkout flows, secure payment
            gateways, and conversion-optimized product pages built for Filipino shoppers.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
            <Link href="/portfolio/cebu-artisan-collective" className="btn btn-secondary">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-body">
            <h2>Custom E-Commerce for the <span className="gradient-text">Philippine Market</span></h2>
            <p>Filipino consumers are increasingly shopping online, with mobile commerce accounting for over 70% of all e-commerce transactions. Yet most Philippine businesses still rely on generic templates or marketplace listings on Lazada and Shopee — paying high commission fees and losing brand control.</p>
            <p>GRIFN builds custom e-commerce platforms that give you full ownership of your online sales channel. We integrate with local payment gateways like GCash, Maya (PayMaya), and major Philippine banks, while supporting international payment methods for global customers.</p>
            <p>Our checkout flows are optimized specifically for Filipino buying habits — including cash-on-delivery options, installment plans, and social commerce integrations. Every store we build is engineered for speed and SEO performance with server-side rendering and structured data markup.</p>
            <h2>Built for Filipino <span className="gradient-text">Shoppers</span></h2>
            <p>We understand the nuances of selling in the Philippines. From peso-based pricing with proper localization to shipping integration with J&T Express, LBC, and local couriers across Cebu and Metro Manila — we handle the logistics complexity so you can focus on growing your brand.</p>
            <p>Our inventory management systems support multi-channel selling, automated stock updates, and real-time analytics so you always know what&apos;s selling, where, and to whom.</p>
          </div>

          <div className="who-card">
            <h2>Who Is This For?</h2>
            <ul>
              <li>Philippine retailers and brands wanting their own online storefront</li>
              <li>Businesses paying high commissions on Lazada, Shopee, or other marketplaces</li>
              <li>Cebu-based artisan and craft brands targeting national/global markets</li>
              <li>Wholesale businesses needing B2B ordering portals</li>
              <li>Food, fashion, and lifestyle brands scaling beyond social media selling</li>
              <li>Existing stores needing redesign for better conversion rates</li>
            </ul>
          </div>

          <div className="deliverables">
            <h2>What You Get</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item"><div className="icon">🛒</div><h3>Custom Storefront</h3><p>Unique, brand-aligned design — no generic templates.</p></div>
              <div className="deliverable-item"><div className="icon">💳</div><h3>Local Payment Integration</h3><p>GCash, Maya, bank transfers, credit cards, and COD.</p></div>
              <div className="deliverable-item"><div className="icon">📦</div><h3>Shipping & Logistics</h3><p>Integration with J&T, LBC, Grab Express, and Philippine couriers.</p></div>
              <div className="deliverable-item"><div className="icon">📊</div><h3>Inventory Management</h3><p>Real-time stock tracking, alerts, and multi-channel sync.</p></div>
              <div className="deliverable-item"><div className="icon">📈</div><h3>Analytics & Reporting</h3><p>Sales dashboards, conversion funnels, and customer insights.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Launch Your Online Store <span className="gradient-text">Today</span></h2>
          <p>Stop paying marketplace commissions. Own your sales channel with a custom e-commerce platform.</p>
          <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="container">
          <h2>Related Services</h2>
          <div className="related-grid">
            <Link href="/services/web-design-cebu" className="related-card"><div className="card-icon">🎨</div><h3>Web Design Cebu</h3><p>Premium websites that convert visitors into customers.</p></Link>
            <Link href="/services/seo-cebu" className="related-card"><div className="card-icon">🔍</div><h3>SEO Services Cebu</h3><p>Get your products found on Google Search and Shopping.</p></Link>
            <Link href="/services/mobile-optimization" className="related-card"><div className="card-icon">📱</div><h3>Mobile Optimization</h3><p>Perfect mobile shopping experiences for Filipino consumers.</p></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
