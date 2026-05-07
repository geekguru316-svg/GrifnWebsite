import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years Experience' },
  { value: '10+', label: 'Team Members' },
];

export default function Stats() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <ScrollReveal>
          <div className="stats-bar">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                {s.label === 'Team Members' && (
                  <div className="avatar-group">
                    <img src="/team/arjun.jpg" alt="Arjun" className="avatar-mini" />
                    <div className="avatar-mini">CG</div>
                    <div className="avatar-mini">GA</div>
                    <div className="avatar-mini">+7</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
