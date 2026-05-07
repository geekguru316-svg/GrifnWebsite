import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../services.css';

export const metadata: Metadata = {
  title: 'SEO Services Cebu & Philippines | GRIFN',
  description:
    'Expert SEO services in Cebu and the Philippines. GRIFN helps businesses rank higher on Google with technical SEO, local SEO, content strategy, and Core Web Vitals optimization.',
  alternates: { canonical: '/services/seo-cebu' },
};

export default function SeoCebu() {
  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/#services">Services</Link> <span>/</span>
            <span>SEO Cebu</span>
          </div>
          <h1>SEO Services Cebu <span className="gradient-text">& Philippines</span></h1>
          <p className="hero-desc">
            Ranking on Google isn&apos;t optional — it&apos;s survival. GRIFN provides expert SEO services
            for Cebu and Philippine businesses, combining technical optimization, local search strategy,
            and content marketing to drive organic traffic that converts.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
            <a href="#deliverables" className="btn btn-secondary">See What&apos;s Included</a>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-body">
            <h2>Why SEO Matters for <span className="gradient-text">Cebu Businesses</span></h2>
            <p>Over 93% of online experiences begin with a search engine. If your Cebu business doesn&apos;t appear on the first page of Google for your target keywords, you&apos;re invisible to the majority of potential customers. Paid ads can get you traffic, but SEO delivers compounding returns — every month your rankings improve, your cost per acquisition drops.</p>
            <p>Local SEO is especially critical for Cebu-based businesses. When someone searches &ldquo;web design Cebu&rdquo; or &ldquo;restaurant near IT Park,&rdquo; Google prioritizes local results. We optimize your Google Business Profile, build local citations, and ensure your NAP (Name, Address, Phone) consistency across the web — so you dominate the local map pack and organic results.</p>
            <p>Our SEO approach is data-driven and transparent. We start with a comprehensive audit of your current site, identify technical issues hurting your rankings, research the keywords your competitors are winning, and build a prioritized roadmap to outrank them. No black-hat tactics, no empty promises — just proven strategies that compound over time.</p>
            <h2>Technical SEO & <span className="gradient-text">Core Web Vitals</span></h2>
            <p>Google&apos;s ranking algorithm heavily weighs technical performance. We optimize your Core Web Vitals (LCP, FID, CLS), implement proper structured data markup, fix crawl errors, optimize site architecture, and ensure your site loads blazing fast on Philippine mobile networks. Every technical fix we make is documented and measured.</p>
            <p>We also handle the often-overlooked fundamentals: proper canonical tags to prevent duplicate content, XML sitemaps, robots.txt optimization, internal linking strategy, and schema markup for rich snippets in search results.</p>
          </div>

          <div className="who-card">
            <h2>Who Is This For?</h2>
            <ul>
              <li>Cebu businesses not appearing on the first page of Google</li>
              <li>Companies spending heavily on ads but wanting organic traffic instead</li>
              <li>Local businesses wanting to dominate Google Maps and local search</li>
              <li>E-commerce stores needing product pages to rank in Google Shopping</li>
              <li>Businesses with websites that load slowly or have technical issues</li>
              <li>Companies wanting to outrank specific competitors in their niche</li>
            </ul>
          </div>

          <div className="deliverables" id="deliverables">
            <h2>What You Get</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item"><div className="icon">🔍</div><h3>Technical SEO Audit</h3><p>Comprehensive analysis of your site&apos;s technical health and ranking factors.</p></div>
              <div className="deliverable-item"><div className="icon">📍</div><h3>Local SEO Optimization</h3><p>Google Business Profile, local citations, and map pack domination.</p></div>
              <div className="deliverable-item"><div className="icon">📝</div><h3>Content Strategy</h3><p>Keyword research, content calendar, and SEO-optimized blog content.</p></div>
              <div className="deliverable-item"><div className="icon">⚡</div><h3>Core Web Vitals</h3><p>Speed optimization, performance tuning, and technical fixes.</p></div>
              <div className="deliverable-item"><div className="icon">📊</div><h3>Monthly Reporting</h3><p>Transparent ranking reports, traffic analytics, and ROI tracking.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Start Ranking Higher <span className="gradient-text">Today</span></h2>
          <p>Get a free SEO audit and discover exactly what&apos;s holding your Cebu business back from page one.</p>
          <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="container">
          <h2>Related Services</h2>
          <div className="related-grid">
            <Link href="/services/web-design-cebu" className="related-card"><div className="card-icon">🎨</div><h3>Web Design Cebu</h3><p>SEO-ready websites built for performance and conversions.</p></Link>
            <Link href="/services/web-development-philippines" className="related-card"><div className="card-icon">💻</div><h3>Web Development</h3><p>Custom applications with built-in SEO architecture.</p></Link>
            <Link href="/services/ecommerce-philippines" className="related-card"><div className="card-icon">🛒</div><h3>E-Commerce Development</h3><p>Product pages optimized for Google Shopping and organic search.</p></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
