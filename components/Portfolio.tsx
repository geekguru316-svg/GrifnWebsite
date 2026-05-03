import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    image: '/portfolio-1.png',
    tag: 'E-Commerce',
    title: 'Luxe Storefront',
    desc: 'Premium online shopping experience with dark-themed product showcase.',
    altText: 'E-commerce project by GRIFN — web design Cebu.',
  },
  {
    image: '/portfolio-2.png',
    tag: 'SaaS Dashboard',
    title: 'DataFlow Analytics',
    desc: 'Real-time analytics dashboard for enterprise data management.',
    altText: 'SaaS Dashboard project by GRIFN — software solutions Philippines.',
  },
  {
    image: '/portfolio-3.png',
    tag: 'Brand Identity',
    title: 'Vertex Creative',
    desc: 'Full brand and web presence for a creative design studio.',
    altText: 'Brand Identity project by GRIFN — UI/UX design Philippines.',
  },
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of recent work we&apos;re proud of. Each project is a unique
            collaboration crafted to exceed expectations.
          </p>
        </ScrollReveal>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="portfolio-card">
                <Image
                  src={p.image}
                  alt={p.altText}
                  width={600}
                  height={412}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#testimonials" className="btn btn-secondary">
              Read Client Testimonials →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
