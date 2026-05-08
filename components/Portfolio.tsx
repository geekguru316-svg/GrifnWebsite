import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    id: 'cebu-artisan-collective',
    image: '/portfolio-1.png',
    tag: 'E-Commerce ROI',
    title: 'Cebu Artisan Collective',
    desc: 'How we scaled a local Cebu brand to global markets, increasing online sales by 120%.',
    altText: 'E-commerce project by GRIFN — web design Cebu.',
  },
  {
    id: 'mactan-logistics-pro',
    image: '/portfolio-2.png',
    tag: 'SaaS / Logistics',
    title: 'Mactan Logistics Pro',
    desc: 'Custom software solution for a PH freight leader, streamlining local logistics and fleet tracking.',
    altText: 'SaaS Dashboard project by GRIFN — software solutions Philippines.',
  },
  {
    id: 'metro-cebu-real-estate',
    image: '/portfolio-3.png',
    tag: 'Lead Generation',
    title: 'Metro Cebu Real Estate',
    desc: 'High-converting platform for Cebu&apos;s real estate market, generating 200+ qualified leads per month.',
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
            Web Design & <span className="gradient-text">Software Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of successful software solutions and web design projects across Cebu and the Philippines. Each project is a detailed case study in driving business ROI and digital transformation for our local partners.
          </p>
        </ScrollReveal>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <a href={`/portfolio/${p.id}`} className="portfolio-card" style={{ display: 'block', cursor: 'pointer' }}>
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
                  <span style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.8, color: '#0ea5e9' }}>Read Case Study →</span>
                </div>
              </a>
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
