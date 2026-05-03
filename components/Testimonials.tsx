import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    stars: 5,
    quote:
      'GRIFN transformed our online presence completely. The design is stunning and as our chosen web developer Cebu, they doubled our conversion rate within the first month.',
    name: 'Sarah Chen',
    title: 'CEO, NovaTech',
    initials: 'SC',
  },
  {
    stars: 5,
    quote:
      'Exceptional attention to detail and flawless execution. They delivered a world-class e-commerce platform ahead of schedule, proving to be an exceptional Shopify developer Cebu.',
    name: 'Marcus Rivera',
    title: 'Founder, Apex Retail',
    initials: 'MR',
  },
  {
    stars: 5,
    quote:
      'Working with GRIFN was a game-changer. Their strategic approach to UX design helped us reduce bounce rates by 45%.',
    name: 'Emily Watson',
    title: 'CMO, BrightPath',
    initials: 'EW',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            We let our work and our clients speak for themselves.
          </p>
        </ScrollReveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glass-card testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <p>{t.title}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/quote" className="btn btn-primary">
              Get My Quote →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
