import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../services.css';

export const metadata: Metadata = {
  title: 'UI/UX Design Philippines | User-Centered Design | GRIFN',
  description:
    'Expert UI/UX design in the Philippines. GRIFN creates user-centered digital experiences backed by research into local buyer behavior. Increase conversions with strategic design.',
  alternates: { canonical: '/services/ui-ux-design' },
};

export default function UiUxDesign() {
  return (
    <div className="service-page">
      <Navbar />
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/#services">Services</Link> <span>/</span>
            <span>UI/UX Design</span>
          </div>
          <h1>UI/UX Design Philippines | <span className="gradient-text">User-Centered Design</span></h1>
          <p className="hero-desc">
            Great design isn&apos;t just about aesthetics — it&apos;s about understanding your users.
            GRIFN delivers research-driven UI/UX design for Philippine businesses, creating digital
            experiences that reduce friction, increase engagement, and drive measurable conversions.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
            <Link href="/#portfolio" className="btn btn-secondary">See Our Work</Link>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-body">
            <h2>Why UI/UX Design <span className="gradient-text">Drives Revenue</span></h2>
            <p>Every $1 invested in UX design returns $100 in value. That&apos;s not marketing hype — it&apos;s research from Forrester. In the Philippine market, where mobile usage dominates and attention spans are short, the difference between a well-designed interface and a confusing one is the difference between a sale and a bounce.</p>
            <p>At GRIFN, our UI/UX process starts with understanding your actual users — not assumptions. We conduct user research, analyze competitor interfaces, map customer journeys, and prototype solutions before writing a single line of code. This research-first approach eliminates costly redesigns and ensures every element on screen serves a strategic purpose.</p>
            <p>We specialize in designing for Filipino digital habits. That means thumb-friendly mobile navigation, clear visual hierarchies that work on smaller screens, culturally appropriate color schemes and imagery, and checkout flows that account for local payment preferences and trust signals.</p>
            <h2>Our Design <span className="gradient-text">Methodology</span></h2>
            <p>We follow a structured 4-phase UX process: Discovery (user research & competitive audit), Definition (information architecture & user flows), Design (wireframes, prototypes & visual design), and Delivery (developer handoff with detailed specs). Each phase includes stakeholder review points so you maintain full control over the direction.</p>
            <p>All designs are created in Figma with interactive prototypes you can click through before development begins — ensuring alignment between what you envision and what gets built.</p>
          </div>

          <div className="who-card">
            <h2>Who Is This For?</h2>
            <ul>
              <li>Businesses with high website traffic but low conversion rates</li>
              <li>Startups needing to design their MVP with limited development budget</li>
              <li>Companies redesigning existing products that feel outdated or confusing</li>
              <li>E-commerce brands wanting to reduce cart abandonment rates</li>
              <li>SaaS companies needing intuitive dashboard and app interfaces</li>
              <li>Businesses that want design decisions backed by data, not opinions</li>
            </ul>
          </div>

          <div className="deliverables">
            <h2>What You Get</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item"><div className="icon">🔬</div><h3>User Research</h3><p>Interviews, surveys, and competitive analysis to understand your users.</p></div>
              <div className="deliverable-item"><div className="icon">🗺️</div><h3>Information Architecture</h3><p>Site maps, user flows, and navigation structures that make sense.</p></div>
              <div className="deliverable-item"><div className="icon">📐</div><h3>Wireframes & Prototypes</h3><p>Interactive Figma prototypes you can click through and test.</p></div>
              <div className="deliverable-item"><div className="icon">🎨</div><h3>Visual Design System</h3><p>Complete design system with components, colors, and typography.</p></div>
              <div className="deliverable-item"><div className="icon">📋</div><h3>Developer Handoff</h3><p>Detailed specs, assets, and documentation for pixel-perfect implementation.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Elevate Your <span className="gradient-text">User Experience</span></h2>
          <p>Let&apos;s design digital experiences that your users love and your business profits from.</p>
          <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="container">
          <h2>Related Services</h2>
          <div className="related-grid">
            <Link href="/services/web-design-cebu" className="related-card"><div className="card-icon">🎨</div><h3>Web Design Cebu</h3><p>Premium, conversion-focused websites for Cebu SMEs.</p></Link>
            <Link href="/services/web-development-philippines" className="related-card"><div className="card-icon">💻</div><h3>Web Development</h3><p>Turn your designs into production-grade applications.</p></Link>
            <Link href="/services/mobile-optimization" className="related-card"><div className="card-icon">📱</div><h3>Mobile Optimization</h3><p>Perfect mobile experiences for Filipino users.</p></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
