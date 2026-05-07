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
              Elevate Your Business with Premium{' '}
              <span className="gradient-text">Web Design Cebu</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="hero-subtitle">
              Helping Cebu&apos;s growing SMEs and Philippines&apos; ambitious brands scale with high-performance websites and ROI-focused software solutions. 
              Turn your online presence into a 24/7 revenue asset.
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
      </div>
    </section>
  );
}