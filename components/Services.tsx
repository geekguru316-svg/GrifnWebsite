import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: '🎨',
    title: 'Web Design',
    desc: 'Pixel-perfect, conversion-focused designs crafted to captivate your audience and elevate your brand.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'High-performance, scalable websites built with modern frameworks and clean, maintainable code.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Flawless experiences across every device — desktop, tablet, and mobile, beautifully optimized.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    desc: 'Custom online stores with seamless checkout flows, inventory management, and payment integration.',
  },
  {
    icon: '🔍',
    title: 'SEO & Performance',
    desc: 'Search engine optimization and speed tuning to maximize your visibility and user engagement.',
  },
  {
    icon: '🎯',
    title: 'UI/UX Strategy',
    desc: 'User-centered design strategy backed by research, wireframing, prototyping, and testing.',
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
      </div>
    </section>
  );
}
