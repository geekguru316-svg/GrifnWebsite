import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './about.css';

export const metadata: Metadata = {
  title: 'About GRIFN | Web Design & Software Agency in Cebu, Philippines',
  description:
    'Meet the team behind GRIFN Software Solutions. We are a premium web design and software agency based in Cebu, Philippines — building high-performance digital experiences since 2024.',
  alternates: { canonical: '/about' },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GRIFN Software Solutions",
  image: "https://grifn-website.vercel.app/logo.png",
  url: "https://grifn-website.vercel.app/about",
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
};

export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1>
            About GRIFN | Web Design & Software Agency in{' '}
            <span className="gradient-text">Cebu, Philippines</span>
          </h1>
          <p className="hero-desc">
            We&apos;re a team of designers, developers, and strategists based in Cebu City,
            Philippines — on a mission to help ambitious businesses build digital experiences
            that actually drive revenue. No fluff, no templates, no shortcuts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <h2>Our <span className="gradient-text">Story</span></h2>
          <p>
            GRIFN Software Solutions was founded in 2024 in Cebu City&apos;s thriving IT Park district
            with a clear mission: to bridge the gap between world-class software quality and the
            Philippine market. We saw too many local businesses stuck with template websites that
            didn&apos;t convert, or paying overseas agencies premium rates for mediocre results.
          </p>
          <p>
            We believed Cebu deserved a homegrown digital studio that combined international design
            standards with deep local market knowledge. A team that understood both the technical
            sophistication of Silicon Valley and the cultural nuances of doing business in the
            Visayas and across the Philippines.
          </p>
          <p>
            Today, GRIFN serves businesses across Cebu, Metro Manila, and internationally — from
            ambitious startups launching their first product to established enterprises modernizing
            their digital infrastructure. Every project we take on is treated as a partnership,
            not a transaction. We succeed when our clients succeed.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="about-stat">
              <div className="number">150+</div>
              <div className="label">Projects Delivered</div>
            </div>
            <div className="about-stat">
              <div className="number">98%</div>
              <div className="label">Client Satisfaction</div>
            </div>
            <div className="about-stat">
              <div className="number">8+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="about-stat">
              <div className="number">30+</div>
              <div className="label">Team Members</div>
            </div>
          </div>

          {/* Values */}
          <h2>Our <span className="gradient-text">Values</span></h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Results Over Aesthetics</h3>
              <p>Beautiful design is table stakes. We measure success by the business outcomes our work generates — leads, sales, and growth.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership, Not Transactions</h3>
              <p>We invest in long-term relationships with our clients. Your success is our success, and we&apos;re in it for the long haul.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Performance Is Non-Negotiable</h3>
              <p>Every site and app we build is optimized for speed, accessibility, and SEO. We don&apos;t ship slow software.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Radical Transparency</h3>
              <p>No hidden fees, no scope surprises. We communicate clearly, price honestly, and deliver on our commitments.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌏</div>
              <h3>Local Expertise, Global Standards</h3>
              <p>We combine deep understanding of the Philippine market with world-class development practices and tools.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Continuous Improvement</h3>
              <p>We stay current with the latest technologies and design trends so our clients always get cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <h2>Meet the <span className="gradient-text">Team</span></h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">AH</div>
              <h3>Arjun Haincadto</h3>
              <div className="role">Founder & Lead Developer</div>
              <p>Full-stack developer with 8+ years of experience building scalable web applications.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">CG</div>
              <h3>Clark Gomez</h3>
              <div className="role">Creative Director</div>
              <p>A passionate graphic designer specializing in UI/UX for Philippine and international brands.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">GA</div>
              <h3>Glenda Agnes</h3>
              <div className="role">Head of Strategy</div>
              <p>Digital strategist focused on SEO, conversion optimization, and growth for Cebu businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="about-story">
        <div className="container">
          <div className="location-card">
            <div>
              <h2>Based in <span className="gradient-text">Cebu City</span></h2>
              <p>
                Our studio is located in the heart of Cebu&apos;s IT Park — the Philippines&apos; premier
                technology hub. We work with clients locally in Cebu, across the Philippines, and internationally.
              </p>
              <div className="location-details">
                <div className="location-detail">
                  <span className="icon">📍</span>
                  <span>IT Park, Lahug, Cebu City 6000, Philippines</span>
                </div>
                <div className="location-detail">
                  <span className="icon">📧</span>
                  <a href="mailto:geekguru316@gmail.com" style={{ color: 'var(--accent-light)' }}>geekguru316@gmail.com</a>
                </div>
                <div className="location-detail">
                  <span className="icon">📞</span>
                  <a href="tel:+639178396962" style={{ color: 'var(--accent-light)' }}>+63 917 839 6962</a>
                </div>
                <div className="location-detail">
                  <span className="icon">🕘</span>
                  <span>Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                aspectRatio: '1',
                maxWidth: 320,
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 64,
              }}>
                🇵🇭
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <span className="section-label">Work With Us</span>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Ready to partner with a Cebu-based team that cares about your results as much as you do?
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
            <Link href="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
