import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Let&apos;s Talk</span>
          <h2 className="section-title">
            Get My Quote: Premium <span className="gradient-text">Software Solutions Cebu</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your business with world-class web design and custom software solutions? Get my quote today and let&apos;s discuss how GRIFN can help you scale in the Philippines market. We provide detailed project breakdowns and transparent ROI-focused strategies for every client in Cebu.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link href="/quote" className="btn btn-primary">
              Get My Quote →
            </Link>
            <a href="#portfolio" className="btn btn-secondary">
              See Our Work
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
