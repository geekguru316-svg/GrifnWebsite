import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const caseStudies = {
  'cebu-artisan-collective': {
    title: 'Cebu Artisan Collective',
    tag: 'E-Commerce ROI',
    image: '/portfolio-1.png',
    problem: 'A collective of local Cebu artisans struggled to reach customers outside the Philippines. Their existing platform was slow and didn&apos;t support international payments or logistics.',
    solution: 'We built a premium, high-performance e-commerce storefront with integrated international payment gateways (PayPal, Stripe) and automated shipping calculations. We focused on local-commercial SEO to rank for global artisan keywords.',
    result: 'Within 6 months, online sales increased by 120%. The brand successfully expanded to US and European markets, becoming a leading voice for Cebuano craftsmanship.',
    metrics: ['120% Sales Growth', 'Global Reach', '5s Page Load'],
  },
  'mactan-logistics-pro': {
    title: 'Mactan Logistics Pro',
    tag: 'SaaS / Logistics',
    image: '/portfolio-2.png',
    problem: 'One of Mactan&apos;s leading freight providers was using manual spreadsheets for fleet tracking, leading to delayed deliveries and customer dissatisfaction.',
    solution: 'We developed a custom SaaS dashboard that integrated real-time GPS tracking, automated dispatching, and a client-facing tracking portal. The system was optimized for local Philippines internet speeds.',
    result: 'Operational costs dropped by 30% through route optimization. Fleet uptime reached 99%, and customer satisfaction scores soared across the Visayas region.',
    metrics: ['30% Cost Reduction', '99% Fleet Uptime', 'Real-time Tracking'],
  },
  'metro-cebu-real-estate': {
    title: 'Metro Cebu Real Estate',
    tag: 'Lead Generation',
    image: '/portfolio-3.png',
    problem: 'A top real estate agency in Cebu was losing high-intent buyers to generic listing sites. They needed a dedicated platform to showcase luxury condos and pre-selling projects.',
    solution: 'We built a SEO-optimized lead generation platform featuring virtual 360° tours, an interactive map of Cebu developments, and an automated lead nurturing system.',
    result: 'The platform now generates over 200 qualified leads per month. The agency saw a 40% increase in conversion rates from inquiry to site visit.',
    metrics: ['200+ Monthly Leads', '40% Conv. Rate', 'Top 3 SEO Rank'],
  },
};

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const study = caseStudies[params.id as keyof typeof caseStudies];
  
  if (!study) {
    return { title: 'Portfolio Project Not Found | GRIFN' };
  }

  return {
    title: `${study.title} Case Study | GRIFN Software Solutions`,
    description: `Read how we built the ${study.title} platform and achieved ${study.metrics.join(', ')}.`,
    alternates: { canonical: `/portfolio/${params.id}` }
  };
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1>Case Study Not Found</h1>
        <Link href="/#portfolio" className="btn btn-primary" style={{ marginTop: '24px' }}>Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <nav className="navbar scrolled">
        <div className="container">
          <Link href="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="GRIFN Logo" width={54} height={54} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '22px', lineHeight: 1 }}>GRIFN</span>
              <span style={{ fontWeight: 500, fontSize: '10px', opacity: 0.7, letterSpacing: '2px' }}>SOFTWARE SOLUTIONS</span>
            </div>
          </Link>
          <Link href="/#portfolio" className="btn btn-secondary" style={{ padding: '10px 20px' }}>← Back</Link>
        </div>
      </nav>

      <section className="quote-hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-label">{study.tag}</span>
            <h1 className="section-title">{study.title}</h1>
            <div className="metrics-row" style={{ display: 'flex', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
              {study.metrics.map(m => (
                <div key={m} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, color: '#0ea5e9', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  {m}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingBottom: 100 }}>
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              <div className="case-study-content">
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#fff' }}>The Challenge</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.problem}</p>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#fff' }}>Our Solution</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.solution}</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#fff' }}>The Result</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.result}</p>
                </div>
                <div style={{ marginTop: 60 }}>
                  <Link href="/quote" className="btn btn-primary" style={{ padding: '16px 40px' }}>Start Your Project Like This →</Link>
                </div>
              </div>
              <div className="case-study-image">
                <div className="glass-card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px' }}>
                  <Image src={study.image} alt={study.title} width={800} height={1000} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
