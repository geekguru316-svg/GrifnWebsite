import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: '🎨',
    title: 'Professional Web Design Cebu — Conversion-Focused',
    desc: 'Premium, conversion-focused web design Cebu. We build sites that don&apos;t just look good but actually sell for Cebu SMEs.',
    href: '/services/web-design-cebu',
  },
  {
    icon: '💻',
    title: 'Custom Software Development Philippines',
    desc: 'Scalable software solutions Philippines. From custom dashboards to complex web apps, we build for growth and local market performance.',
    href: '/services/web-development-philippines',
  },
  {
    icon: '📱',
    title: 'Mobile Optimization for Cebu Businesses',
    desc: 'Flawless experiences across every device. We ensure your Cebu-based customers have a perfect mobile experience.',
    href: '/services/mobile-optimization',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Development Philippines',
    desc: 'Scale your retail business with e-commerce development Philippines. Secure payments and local logistics integration.',
    href: '/services/ecommerce-philippines',
  },
  {
    icon: '🔍',
    title: 'SEO Services in Cebu & Philippines',
    desc: 'Outrank your local competitors with expert SEO Cebu and Philippines. We optimize for speed and local search intent.',
    href: '/services/seo-cebu',
  },
  {
    icon: '🎯',
    title: 'UI/UX Design Philippines',
    desc: 'User-centered UI/UX design Philippines backed by research into local buyer behavior and digital habits.',
    href: '/services/ui-ux-design',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Web Design & Software Services in <span className="gradient-text">Cebu, Philippines</span>
          </h2>
          <p className="section-subtitle">
            From concept to launch, we deliver end-to-end digital solutions
            that help businesses grow and stand out in a crowded market.
          </p>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <Link href={s.href} className="glass-card service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span style={{ fontSize: '0.85rem', color: '#0ea5e9', marginTop: '16px', display: 'inline-block' }}>Learn More →</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#portfolio" className="btn btn-primary">
              View Portfolio →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
