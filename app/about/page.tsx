import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
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
          <ScrollReveal>
            <span className="section-label" style={{ marginBottom: 24 }}>Our Story</span>
            <h1>
              To create opportunity in every{' '}
              <span className="gradient-text">era of work.</span>
            </h1>
            <p className="hero-desc">
              GRIFN is a team of designers, developers, and strategists based in Cebu City,
              Philippines — on a mission to bridge the gap between world-class software quality
              and the local market.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <ScrollReveal>
            <div className="mission-container">
              <h2>Our Mission</h2>
              <p className="mission-lead">
                To create economic opportunities in the Philippines through high-performance
                digital experiences that actually drive revenue.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <ScrollReveal direction="left">
              <div className="founder-image-container">
                <div className="founder-image-bg"></div>
                <img
                  src="/team/arjun.jpg"
                  alt="Arjun Haincadto - Founder of GRIFN"
                  className="founder-image"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="founder-content">
                <span className="section-label" style={{ marginBottom: 16 }}>Message from our Founder</span>
                <h2>Building the Future <br /><span className="gradient-text">of Work in Cebu</span></h2>
                <div className="founder-letter">
                  <p>
                    When I founded GRIFN Software Solutions in 2024, I saw a clear gap in the market.
                    Cebu was filled with talented developers and ambitious businesses, yet most
                    local companies were stuck with template websites that didn&apos;t convert.
                  </p>
                  <p>
                    I believed Cebu deserved a homegrown digital studio that combined international
                    design standards with deep local market knowledge. A team that understood both
                    the technical sophistication of global tech hubs and the cultural nuances of
                    doing business in the Philippines.
                  </p>
                  <p>
                    Today, we treat every project as a partnership, not a transaction. We succeed
                    when our clients succeed. Our goal isn&apos;t just to build software—it&apos;s to build
                    assets that drive real growth for our community.
                  </p>
                </div>
                <div className="founder-signature">
                  <div className="founder-name">Arjun Haincadto</div>
                  <div className="founder-title">Founder & Lead Developer</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CFO's Message — Glenda Agnes */}
      <section className="founder-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* LEFT: Text content */}
            <ScrollReveal direction="left">
              <div className="founder-content">
                <span className="section-label" style={{ marginBottom: 16 }}>Message from our CFO &amp; Head of Strategy</span>
                <h2>Growing Businesses <br /><span className="gradient-text">Through Smart Strategy</span></h2>
                <div className="founder-letter">
                  <p>
                    At GRIFN, strategy isn&apos;t an afterthought — it&apos;s the foundation of everything we
                    build. My role is to ensure that every peso our clients invest in their digital
                    presence delivers measurable, sustainable returns.
                  </p>
                  <p>
                    As a graduate of Computer Science, former programming instructor, HR manager, and Outstanding Cebuano Youth Leader awardee in 2000, 
                    I bring a unique combination of technical expertise, leadership, and people-focused
                    strategy into every project. My background has given me the ability to bridge
                    technology with real business needs — helping teams, brands, and organizations
                    grow with purpose, efficiency, and long-term vision.
                  </p>
                  <p>
                    I&apos;ve seen too many businesses pour resources into beautiful websites that simply
                    don&apos;t perform. That&apos;s why I work closely with every client to align their digital
                    roadmap with their core business objectives — from growth targets to market
                    positioning and long-term brand equity.
                  </p>
                  <p>
                    Whether you&apos;re a startup finding your footing or an established enterprise ready
                    to scale, we&apos;re here to be the strategic partner that helps you grow with clarity
                    and confidence. At GRIFN, your success is the only metric that matters.
                  </p>
                </div>
                <div className="founder-signature">
                  <div className="founder-name">Glenda Agnes</div>
                  <div className="founder-title">CFO &amp; Head of Strategy</div>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: Glenda's Photo */}
            <ScrollReveal direction="right">
              <div className="founder-image-container">
                <div className="founder-image-bg"></div>
                <img
                  src="/team/glenda-agnes.png"
                  alt="Glenda Agnes - CFO and Head of Strategy at GRIFN"
                  className="founder-image"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="stats-section" style={{ padding: '0 0 80px' }}>
        <div className="container">
          <ScrollReveal>
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
                <div className="number">10+</div>
                <div className="label">Team Members</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="values-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 48 }}>
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Results First</h3>
                <p>We measure success by the business outcomes our work generates — leads, sales, and growth.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>True Partnership</h3>
                <p>We invest in long-term relationships. Your success is our success, and we&apos;re in it for the long haul.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>Speed & Quality</h3>
                <p>Performance is non-negotiable. Every site we build is optimized for speed, accessibility, and SEO.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔍</div>
                <h3>Full Transparency</h3>
                <p>No hidden fees, no scope surprises. We communicate clearly and price honestly.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌏</div>
                <h3>Global Standards</h3>
                <p>We combine Philippine market understanding with world-class development practices.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">📈</div>
                <h3>Always Evolving</h3>
                <p>We stay current with the latest technologies so our clients always get cutting-edge solutions.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Digital Authority & Backlink Summary */}
      <section className="authority-section" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="authority-grid">
              <div className="authority-content">
                <span className="section-label" style={{ marginBottom: 16 }}>Industry Authority</span>
                <h2>Our <span className="gradient-text">Digital Footprint</span></h2>
                <p>
                  GRIFN Software Solutions is more than just a local agency. We maintain a high-authority
                  backlink profile and a global network of technology partners that ensure our
                  clients' websites are recognized by search engines worldwide.
                </p>
                <div className="authority-stats">
                  <div className="a-stat">
                    <strong>500+</strong>
                    <span>High-DA Backlinks</span>
                  </div>
                  <div className="a-stat">
                    <strong>15+</strong>
                    <span>Industry Awards</span>
                  </div>
                  <div className="a-stat">
                    <strong>90+</strong>
                    <span>Domain Authority Projects</span>
                  </div>
                </div>
              </div>
              <div className="authority-logos">
                {/* Placeholder for partner/recognition logos */}
                <div className="logo-placeholder">Featured in TechInAsia</div>
                <div className="logo-placeholder">Clutch Top Developer</div>
                <div className="logo-placeholder">Upwork Top Rated Plus</div>
                <div className="logo-placeholder">Google Partner</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <ScrollReveal>
            <h2>Meet the <span className="gradient-text">Team</span></h2>
            <div className="team-grid">
              <div className="team-card">
                <div
                  className="team-avatar"
                  style={{
                    backgroundImage: 'url(/team/arjun-headshot.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
                <h3>Arjun Haincadto</h3>
                <div className="role">Founder & Lead Dev</div>
                <p>Full-stack developer with 8+ years experience building scalable web apps.</p>
              </div>
              <div className="team-card">
                <div className="team-avatar">CG</div>
                <h3>Clark Gomez</h3>
                <div className="role">Creative Director</div>
                <p>Specializing in premium UI/UX design for Philippine and international brands.</p>
              </div>
              <div className="team-card">
                <div
                  className="team-avatar"
                  style={{
                    backgroundImage: 'url(/team/glenda-agnes.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
                <h3>Glenda Agnes</h3>
                <div className="role">CFO &amp; Head of Strategy</div>
                <p>Strategic financial leader driving growth, digital ROI, and long-term brand equity for GRIFN clients.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'rgba(139, 92, 246, 0.03)', padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center' }}>
              <span className="section-label">Work With Us</span>
              <h2 className="section-title">
                Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 40px', maxWidth: 600 }}>
                Ready to partner with a Cebu-based team that cares about your results as much as you do?
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/quote" className="btn btn-primary">Get My Free Quote →</Link>
                <Link href="/pricing" className="btn btn-secondary">View Pricing</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
