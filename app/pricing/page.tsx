import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './pricing.css';

export const metadata: Metadata = {
  title: 'Web Design Packages & Pricing in the Philippines | GRIFN',
  description:
    'Transparent web design pricing for Cebu and Philippine businesses. Packages starting from PHP 50,000. Custom quotes available. No hidden fees.',
  alternates: { canonical: '/pricing' },
};

export default function Pricing() {
  return (
    <div className="pricing-page">
      <Navbar />

      <section className="pricing-hero">
        <div className="container">
          <span className="section-label">Pricing</span>
          <h1>Web Design Packages & <span className="gradient-text">Pricing in the Philippines</span></h1>
          <p className="hero-desc">
            Transparent pricing for Cebu and Philippine businesses. Every package includes design,
            development, SEO foundation, and post-launch support. No hidden fees, ever.
          </p>
          <span className="pricing-note">All prices are estimates. Request a custom quote for your project.</span>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="pricing-grid">

            {/* Starter */}
            <div className="pricing-card">
              <div className="tier-name">Starter</div>
              <div className="price">₱50,000<span style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-tertiary)' }}> +</span></div>
              <div className="price-note">One-time investment</div>
              <p className="tier-desc">
                Perfect for small Cebu businesses and startups needing a professional online presence
                that looks premium and loads fast.
              </p>
              <ul className="pricing-features">
                <li>Up to 5 custom-designed pages</li>
                <li>Mobile-responsive design</li>
                <li>Basic SEO setup (meta tags, sitemap)</li>
                <li>Contact form integration</li>
                <li>Google Analytics setup</li>
                <li>1 round of revisions</li>
                <li>2 weeks delivery</li>
                <li>30-day post-launch support</li>
              </ul>
              <Link href="/quote" className="btn btn-secondary">Get Started →</Link>
            </div>

            {/* Growth — Featured */}
            <div className="pricing-card featured">
              <div className="tier-name">Growth</div>
              <div className="price">₱120,000<span style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-tertiary)' }}> +</span></div>
              <div className="price-note">One-time investment</div>
              <p className="tier-desc">
                For growing Philippine businesses ready to convert visitors into customers with
                a strategic, conversion-optimized website.
              </p>
              <ul className="pricing-features">
                <li>Up to 12 custom-designed pages</li>
                <li>Conversion-optimized UI/UX design</li>
                <li>Advanced SEO (structured data, local SEO)</li>
                <li>CMS integration for content management</li>
                <li>Performance optimization (Core Web Vitals)</li>
                <li>Custom contact/quote forms</li>
                <li>Social media integration</li>
                <li>3 rounds of revisions</li>
                <li>4–6 weeks delivery</li>
                <li>90-day post-launch support</li>
              </ul>
              <Link href="/quote" className="btn btn-primary">Get Started →</Link>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <div className="tier-name">Enterprise</div>
              <div className="price">₱250,000<span style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-tertiary)' }}> +</span></div>
              <div className="price-note">One-time investment</div>
              <p className="tier-desc">
                Full-scale web applications, e-commerce platforms, and custom software solutions
                for ambitious Philippine businesses.
              </p>
              <ul className="pricing-features">
                <li>Unlimited pages & custom functionality</li>
                <li>Full-stack web application development</li>
                <li>E-commerce with payment gateway integration</li>
                <li>Custom admin dashboard</li>
                <li>API development & third-party integrations</li>
                <li>Advanced analytics & reporting</li>
                <li>Security hardening & authentication</li>
                <li>Unlimited revisions during development</li>
                <li>6–10 weeks delivery</li>
                <li>6-month post-launch support & maintenance</li>
              </ul>
              <Link href="/quote" className="btn btn-secondary">Contact Us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq">
        <div className="container">
          <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What affects the cost?</h3>
              <p>Pricing depends on project scope, number of pages, custom functionality, third-party integrations, and timeline. E-commerce features, custom animations, and CMS integration may increase the cost. We provide a detailed breakdown after our discovery call.</p>
            </div>
            <div className="faq-item">
              <h3>What&apos;s included in every package?</h3>
              <p>Every package includes custom design (no templates), responsive development, basic SEO setup, Google Analytics integration, and post-launch support. We never charge hidden fees for hosting setup, SSL, or domain configuration assistance.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take?</h3>
              <p>Starter projects typically take 1–2 weeks, Growth projects 4–6 weeks, and Enterprise projects 6–10 weeks. Timelines are confirmed after the discovery call and depend on feedback turnaround time and project complexity.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer payment plans?</h3>
              <p>Yes. We typically structure payments as 50% upfront to begin work and 50% upon project completion. For larger Enterprise projects, we can arrange milestone-based payment schedules. All terms are agreed before work begins.</p>
            </div>
            <div className="faq-item">
              <h3>What if I need something custom?</h3>
              <p>Most of our projects are custom. If your needs don&apos;t fit neatly into one of these packages, request a free quote and we&apos;ll create a tailored proposal with exact pricing and timeline for your specific requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing maintenance?</h3>
              <p>Yes. After the included support period, we offer monthly maintenance plans starting at ₱5,000/month covering security updates, content changes, performance monitoring, and priority support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <span className="section-label">Ready?</span>
          <h2 className="section-title">
            Get a Custom <span className="gradient-text">Quote Today</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Every project is unique. Tell us about yours and we&apos;ll provide a detailed proposal with exact pricing.
          </p>
          <Link href="/quote" className="btn btn-primary">Request My Free Quote →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
