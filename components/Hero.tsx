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
              Software Solutions & Premium{' '}
              <span className="gradient-text">Web Design Cebu</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="hero-subtitle">
              GRIFN is a premier software solutions studio in the Philippines. We help Cebu&apos;s growing SMEs and Philippines&apos; ambitious brands scale with high-performance websites, custom web applications, and ROI-focused software solutions. 
              Our team of experts in Cebu specializes in turning your online presence into a 24/7 revenue asset through superior UI/UX design and technical excellence.
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