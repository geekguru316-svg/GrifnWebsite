import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../services.css';

export const metadata: Metadata = {
  title: 'Web Development Philippines | Custom Software | GRIFN',
  description:
    'Custom web development in the Philippines. GRIFN builds scalable web applications, SaaS platforms, and enterprise software using Next.js, React, and Node.js.',
  alternates: { canonical: '/services/web-development-philippines' },
};

export default function WebDevelopmentPhilippines() {
  return (
    <div className="service-page">
      <Navbar />

      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/#services">Services</Link> <span>/</span>
            <span>Web Development Philippines</span>
          </div>
          <h1>
            Web Development Philippines | <span className="gradient-text">Custom Software</span>
          </h1>
          <p className="hero-desc">
            From complex SaaS dashboards to custom business applications, GRIFN delivers production-grade
            web development for Philippine businesses that need more than a template. We build software
            that scales with your ambitions.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">
              Get My Free Quote →
            </Link>
            <Link href="/portfolio/mactan-logistics-pro" className="btn btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-body">
            <h2>
              Enterprise-Grade <span className="gradient-text">Web Development</span> for Philippine Businesses
            </h2>
            <p>
              The Philippines is one of Southeast Asia&apos;s fastest-growing digital economies, and businesses
              that invest in custom web development gain a massive competitive advantage. Off-the-shelf solutions
              and WordPress plugins can only take you so far — when your business processes are unique, your
              software should be too.
            </p>
            <p>
              GRIFN specializes in building custom web applications using modern, battle-tested technologies:
              Next.js for server-rendered performance, React for dynamic user interfaces, TypeScript for
              code reliability, and Node.js for scalable backend architecture. Our tech stack is chosen
              specifically for speed, maintainability, and SEO — giving your business a technical edge
              that template-based solutions simply cannot match.
            </p>
            <p>
              Whether you need a customer portal, an internal business tool, a logistics management platform,
              or a full-scale SaaS product, we architect solutions that handle real-world scale. Our development
              process includes rigorous testing, performance optimization, and security hardening — because
              in the Philippines&apos; rapidly growing market, downtime means lost revenue.
            </p>

            <h2>
              Our Development <span className="gradient-text">Stack & Approach</span>
            </h2>
            <p>
              We follow an agile development methodology with two-week sprints, continuous deployment, and
              transparent progress tracking. You&apos;ll have full visibility into every feature being built,
              with staging environments where you can test and provide feedback in real time.
            </p>
            <p>
              Every line of code we write is version-controlled, documented, and built to be maintained
              long after launch. We don&apos;t just build software — we build assets that your team (or any
              future developer) can confidently maintain and extend.
            </p>
          </div>

          <div className="who-card">
            <h2>Who Is This For?</h2>
            <ul>
              <li>Philippine businesses needing custom web applications beyond template sites</li>
              <li>Startups building SaaS products or minimum viable products (MVPs)</li>
              <li>Enterprises requiring internal tools, dashboards, or workflow automation</li>
              <li>Companies in logistics, finance, or healthcare needing specialized platforms</li>
              <li>Businesses outgrowing WordPress, Wix, or other low-code platforms</li>
              <li>Teams looking for a reliable Philippine-based development partner</li>
            </ul>
          </div>

          <div className="deliverables">
            <h2>What You Get</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item">
                <div className="icon">💻</div>
                <h3>Custom Web Application</h3>
                <p>Full-stack development with React, Next.js, TypeScript, and Node.js backend.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">🔒</div>
                <h3>Security & Auth</h3>
                <p>Enterprise-grade authentication, role-based access, and data encryption.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">📡</div>
                <h3>API Development</h3>
                <p>RESTful or GraphQL APIs for seamless integration with third-party services.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">🧪</div>
                <h3>Testing & QA</h3>
                <p>Automated testing suites ensuring reliability and preventing regressions.</p>
              </div>
              <div className="deliverable-item">
                <div className="icon">🚀</div>
                <h3>CI/CD Pipeline</h3>
                <p>Automated deployment pipelines for fast, reliable releases to production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>
            Let&apos;s Build Your <span className="gradient-text">Custom Software</span>
          </h2>
          <p>
            Tell us about your project and we&apos;ll provide a detailed proposal with timeline and pricing.
          </p>
          <Link href="/quote" className="btn btn-primary">
            Get My Free Quote →
          </Link>
        </div>
      </section>

      <section className="related-services">
        <div className="container">
          <h2>Related Services</h2>
          <div className="related-grid">
            <Link href="/services/web-design-cebu" className="related-card">
              <div className="card-icon">🎨</div>
              <h3>Web Design Cebu</h3>
              <p>Premium, conversion-focused websites for Cebu SMEs.</p>
            </Link>
            <Link href="/services/ecommerce-philippines" className="related-card">
              <div className="card-icon">🛒</div>
              <h3>E-Commerce Development</h3>
              <p>Custom online stores built for the Philippine market.</p>
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
