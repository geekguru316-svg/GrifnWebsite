import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export async function generateStaticParams() {
  return [
    { id: 'cebu-artisan-collective' },
    { id: 'mactan-logistics-pro' },
    { id: 'metro-cebu-real-estate' },
  ];
}

const caseStudies = {
  'cebu-artisan-collective': {
    title: 'Cebu Artisan Collective',
    tag: 'E-Commerce ROI',
    image: '/portfolio-1.png',
    problem: 'A collective of local Cebu artisans was struggling to reach customers outside the Philippines. Their existing platform was slow, not mobile-optimized, and lacked the necessary trust signals for international buyers. They had no way to handle international payments or calculate global shipping costs dynamically, leading to abandoned carts and lost revenue. Furthermore, they were invisible on Google for high-intent search terms related to handmade Filipino crafts.',
    solution: 'We engineered a premium, high-performance e-commerce storefront designed to compete on a global scale. The solution involved a complete migration to a headless commerce architecture, enabling blazing-fast page loads. We integrated Stripe and PayPal for seamless international transactions and implemented a custom logistics API to provide real-time shipping rates for over 50 countries. We also executed a deep local-commercial SEO strategy, targeting "artisan crafts Philippines" and "handmade Cebuano products" to attract global traffic.',
    process: 'Our process began with a deep discovery phase, interviewing the artisans to understand their unique value propositions. We then moved to UI/UX prototyping, focusing on a "storytelling" design that highlighted the craftsmanship. The development phase utilized Next.js for superior performance, followed by a rigorous SEO audit and international shipping integration testing.',
    tools: ['Next.js', 'Stripe API', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    result: 'Within just 6 months of launch, online sales increased by 120%. The brand successfully expanded its footprint into the US and European markets, with international orders now making up 45% of total revenue. The site now ranks on the first page of Google for several key artisan keywords, establishing the collective as a leading voice for Cebuano craftsmanship worldwide.',
    metrics: ['120% Sales Growth', '45% Intl. Revenue', 'Under 2s Load Time'],
  },
  'mactan-logistics-pro': {
    title: 'Mactan Logistics Pro',
    tag: 'SaaS / Logistics',
    image: '/portfolio-2.png',
    problem: 'One of Mactan&apos;s leading freight providers was paralyzed by manual processes. Fleet tracking was managed via spreadsheets and phone calls, leading to data silos, delayed deliveries, and constant customer inquiries. There was no centralized system to monitor fuel consumption, driver performance, or real-time cargo status. This lack of transparency was hurting their reputation with major manufacturing clients in the Mactan Economic Zone.',
    solution: 'We developed a custom, end-to-end SaaS logistics management platform. The core of the solution was a real-time GPS tracking engine integrated with a driver mobile app. We built an automated dispatching system that optimized routes based on traffic data and fuel efficiency. For their clients, we created a white-labeled tracking portal where they could see their cargo moving in real-time, significantly reducing the load on the customer support team.',
    process: 'We conducted an on-site workflow audit at their Mactan facility to map out every step of their logistics chain. We then designed a mobile-first interface for drivers and a complex administrative dashboard. The build followed an agile approach, releasing the tracking module first before expanding into automated dispatching and reporting.',
    tools: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS'],
    result: 'Operational costs dropped by 30% within the first year through aggressive route optimization and reduced idle times. Fleet uptime reached an all-time high of 99%, and customer satisfaction scores soared across the Visayas region. The agency now handles 40% more volume with the same fleet size, thanks to the efficiency gains from the custom software.',
    metrics: ['30% Cost Reduction', '99% Fleet Uptime', '40% Volume Increase'],
  },
  'metro-cebu-real-estate': {
    title: 'Metro Cebu Real Estate',
    tag: 'Lead Generation',
    image: '/portfolio-3.png',
    problem: 'A top real estate agency in Cebu was losing high-value leads to generic, cluttered listing sites. Their own website was outdated and failed to capture the premium feel of their luxury condo and pre-selling projects. High-intent buyers were leaving the site because they couldn&apos;t visualize the properties or understand the surrounding neighborhood. They needed a dedicated platform that could act as a digital showroom for Cebu&apos;s most ambitious developments.',
    solution: 'We built a high-converting lead generation platform optimized for the Cebuano real estate market. The site features interactive 360° virtual tours, custom-mapped neighborhood guides, and an automated lead nurturing system that segments users based on their budget and location preferences. We implemented a technical SEO framework that ensures their listings rank at the top of Google for terms like "Cebu condo for sale" and "pre-selling projects Mandaue."',
    process: 'We analyzed the search behavior of local and OFW property buyers to define our SEO and content strategy. We used Three.js to implement the virtual tours and built a custom CMS that allows the agency to update listings in real-time. Finally, we integrated a CRM to ensure every lead is tracked and followed up within minutes.',
    tools: ['Next.js', 'Three.js', 'Firebase', 'Google Maps API', 'Framer Motion'],
    result: 'The platform now generates over 200 qualified leads per month, a 300% increase from their previous site. The agency saw a 40% increase in conversion rates from initial inquiry to scheduled site visits. They now dominate the local real estate search space, reducing their reliance on expensive paid advertising.',
    metrics: ['300% Lead Increase', '40% Conv. Rate', 'Dominant SEO Rank'],
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.id as keyof typeof caseStudies];
  
  if (!study) {
    return { title: 'Portfolio Project Not Found | GRIFN' };
  }

  return {
    title: `${study.title} Case Study | GRIFN Software Solutions`,
    description: `Read how we built the ${study.title} platform and achieved ${study.metrics.join(', ')}.`,
    alternates: { canonical: `/portfolio/${params.id}` }
  };
}

export default async function CaseStudyPage({ params }: any) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
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
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#fff' }}>The Process</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.process}</p>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#fff' }}>Our Solution</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{study.solution}</p>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#fff' }}>Tools Used</h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                    {study.tools.map(tool => (
                      <span key={tool} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
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
