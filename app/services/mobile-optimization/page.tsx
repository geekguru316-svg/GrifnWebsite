import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../services.css';

export const metadata: Metadata = {
  title: 'Mobile Optimization for Cebu Businesses | GRIFN',
  description:
    'Mobile optimization services for Cebu and Philippine businesses. GRIFN ensures your website delivers flawless, fast experiences on every device Filipino users prefer.',
  alternates: { canonical: '/services/mobile-optimization' },
};

export default function MobileOptimization() {
  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/#services">Services</Link> <span>/</span>
            <span>Mobile Optimization</span>
          </div>
          <h1>Mobile Optimization for <span className="gradient-text">Cebu Businesses</span></h1>
          <p className="hero-desc">
            Over 95% of Filipino internet users browse on mobile. If your website doesn&apos;t deliver
            a flawless mobile experience, you&apos;re losing customers every single day. GRIFN optimizes
            your site for speed, usability, and conversions on every device.
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
            <h2>Mobile-First Design for the <span className="gradient-text">Philippine Market</span></h2>
            <p>The Philippines is a mobile-first country. With over 80 million smartphone users and growing, mobile internet is how Filipinos discover businesses, compare products, and make purchasing decisions. Google&apos;s mobile-first indexing means your mobile experience directly impacts your search rankings.</p>
            <p>Yet most Cebu businesses still have websites designed primarily for desktop, with mobile treated as an afterthought. The result? Slow load times on Philippine mobile networks, tiny text that requires pinch-to-zoom, buttons too small to tap, and checkout flows that frustrate mobile shoppers into abandoning their carts.</p>
            <p>GRIFN takes a mobile-first approach to every project. We design for the smallest screen first, then progressively enhance for tablets and desktops. This ensures your most important users — mobile visitors — always get the best possible experience, while desktop users enjoy an enhanced version of that same great design.</p>
            <h2>Performance on <span className="gradient-text">Philippine Networks</span></h2>
            <p>We optimize specifically for Philippine mobile network conditions. That means aggressive image optimization, code splitting, lazy loading, and caching strategies that ensure your site loads fast even on 3G connections common in provincial areas outside Metro Cebu. We target sub-3-second load times on average Philippine mobile connections.</p>
            <p>Our performance optimization includes Core Web Vitals tuning (LCP, FID, CLS), responsive image serving with modern formats like WebP and AVIF, and progressive web app (PWA) capabilities for offline access and app-like experiences.</p>
          </div>

          <div className="who-card">
            <h2>Who Is This For?</h2>
            <ul>
              <li>Cebu businesses with websites that load slowly on mobile devices</li>
              <li>Companies with high mobile bounce rates and low mobile conversion rates</li>
              <li>E-commerce stores losing sales from mobile cart abandonment</li>
              <li>Businesses targeting younger Filipino demographics who are mobile-native</li>
              <li>Companies wanting to improve their Google mobile search rankings</li>
              <li>Restaurants, retail, and service businesses relying on local mobile search</li>
            </ul>
          </div>

          <div className="deliverables" id="deliverables">
            <h2>What You Get</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item"><div className="icon">📱</div><h3>Mobile-First Redesign</h3><p>Complete responsive redesign optimized for thumb-friendly mobile interaction.</p></div>
              <div className="deliverable-item"><div className="icon">⚡</div><h3>Speed Optimization</h3><p>Sub-3-second load times on Philippine mobile networks with lazy loading and code splitting.</p></div>
              <div className="deliverable-item"><div className="icon">🖼️</div><h3>Image Optimization</h3><p>Responsive images in modern formats (WebP, AVIF) with automatic quality adaptation.</p></div>
              <div className="deliverable-item"><div className="icon">📊</div><h3>Core Web Vitals</h3><p>LCP, FID, and CLS optimization for better Google mobile rankings.</p></div>
              <div className="deliverable-item"><div className="icon">🔄</div><h3>PWA Capabilities</h3><p>Offline access, home screen install, and app-like experience without app store submission.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Fix Your Mobile <span className="gradient-text">Experience Today</span></h2>
          <p>Get a free mobile audit and see exactly how your site performs for Filipino mobile users.</p>
          <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="container">
          <h2>Related Services</h2>
          <div className="related-grid">
            <Link href="/services/web-design-cebu" className="related-card"><div className="card-icon">🎨</div><h3>Web Design Cebu</h3><p>Premium mobile-first websites for Cebu SMEs.</p></Link>
            <Link href="/services/seo-cebu" className="related-card"><div className="card-icon">🔍</div><h3>SEO Services Cebu</h3><p>Mobile performance directly impacts your search rankings.</p></Link>
            <Link href="/services/ui-ux-design" className="related-card"><div className="card-icon">🎯</div><h3>UI/UX Design</h3><p>User research-driven mobile interface design.</p></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
