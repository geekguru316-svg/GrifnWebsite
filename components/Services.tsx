import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: '🎨',
    title: 'Web Design Cebu',
    desc: 'Premium, conversion-focused web design Cebu. We build sites that don&apos;t just look good but actually sell for Cebu SMEs.',
  },
  {
    icon: '💻',
    title: 'Software Solutions PH',
    desc: 'Scalable software solutions Philippines. From custom dashboards to complex web apps, we build for growth and local market performance.',
  },
  {
    icon: '📱',
    title: 'Mobile Optimization',
    desc: 'Flawless experiences across every device. We ensure your Cebu-based customers have a perfect mobile experience.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce PH',
    desc: 'Scale your retail business with e-commerce development Philippines. Secure payments and local logistics integration.',
  },
  {
    icon: '🔍',
    title: 'SEO Cebu & PH',
    desc: 'Outrank your local competitors with expert SEO Cebu and Philippines. We optimize for speed and local search intent.',
  },
  {
    icon: '🎯',
    title: 'UI/UX Strategy',
    desc: 'User-centered UI/UX design Philippines backed by research into local buyer behavior and digital habits.',
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-subtitle">
            From concept to launch, we deliver end-to-end digital solutions
            that help businesses grow and stand out in a crowded market.
          </p>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="glass-card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
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
