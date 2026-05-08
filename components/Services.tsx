import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: '🎨',
    title: 'Professional Web Design Cebu — Conversion-Focused',
    desc: 'Our professional web design Cebu services focus on high conversion rates and ROI. We build custom websites that don&apos;t just look good but actually sell for Cebu SMEs and national Philippines brands.',
    href: '/services/web-design-cebu',
  },
  {
    icon: '💻',
    title: 'Custom Software Solutions Philippines',
    desc: 'Scalable software solutions Philippines for modern enterprises. From custom dashboards and SaaS platforms to complex enterprise web apps, we build for performance and scalability in the local Philippines market.',
    href: '/services/web-development-philippines',
  },
  {
    icon: '📱',
    title: 'Mobile Optimization for Cebu Businesses',
    desc: 'Flawless mobile experiences across every device. We ensure your Cebu-based customers have a perfect mobile-first experience that improves engagement and search engine rankings in the Philippines.',
    href: '/services/mobile-optimization',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Development Philippines',
    desc: 'Scale your retail business with expert e-commerce development Philippines. We integrate secure local payment gateways, inventory management, and regional logistics to ensure a seamless buyer journey.',
    href: '/services/ecommerce-philippines',
  },
  {
    icon: '🔍',
    title: 'SEO Services in Cebu & Philippines',
    desc: 'Outrank your local competitors with expert SEO Cebu and Philippines. We optimize for speed, local search intent, and technical Core Web Vitals to drive organic growth for your business.',
    href: '/services/seo-cebu',
  },
  {
    icon: '🎯',
    title: 'UI/UX Design Philippines & Case Study Research',
    desc: 'User-centered UI/UX design Philippines backed by deep research into local buyer behavior. Every design is a case study in usability, ensuring your software solutions are intuitive and high-converting.',
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
            Premium UI/UX & Software Solutions in <span className="gradient-text">Cebu, Philippines</span>
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
