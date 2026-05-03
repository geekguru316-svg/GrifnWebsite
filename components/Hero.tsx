import Link from 'next/link';
import Globe from './Globe';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <ScrollReveal>
            <div className="hero-badge">
              <span className="dot" />
              Available for Projects
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="hero-title">
              We Design &amp; Build{' '}
              <span className="gradient-text">Digital Experiences</span>{' '}
              That Convert
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="hero-subtitle">
              Premium web design Cebu and full-stack software solutions Philippines for ambitious brands.
              We turn your vision into pixel-perfect, high-performance websites.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="hero-actions">
              <Link href="/quote" className="btn btn-primary">
                Get My Quote →
              </Link>
              <a href="#portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-visual" style={{ minHeight: 450 }}>
          <Globe />
        </div>
      </div>
    </section>
  );
}