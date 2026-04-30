import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Let&apos;s Talk</span>
          <h2 className="section-title">
            Ready to Transform Your{' '}
            <span className="gradient-text">Digital Presence</span>?
          </h2>
          <p className="section-subtitle">
            Let&apos;s build something extraordinary together. Get in touch and
            let&apos;s discuss how we can bring your vision to life.
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
