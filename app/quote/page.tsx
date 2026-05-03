'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

import QuoteForm from '@/components/QuoteForm';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="quote-page">
        <nav className="navbar scrolled">
          <div className="container">
            <Link href="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image src="/logo.png" alt="GRIFN Logo" width={54} height={54} style={{ objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 800, fontSize: '22px', lineHeight: 1 }}>GRIFN</span>
                <span style={{ fontWeight: 500, fontSize: '10px', opacity: 0.7, letterSpacing: '2px', marginTop: '2px' }}>SOFTWARE SOLUTIONS</span>
              </div>
            </Link>
          </div>
        </nav>

        <section className="quote-hero">
          <div className="container" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '120px' }}>
            <ScrollReveal>
              <div className="quote-success-icon">✓</div>
              <h1 className="section-title" style={{ marginTop: 24 }}>
                Thank You<span className="gradient-text">!</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '0 auto 40px', maxWidth: 480 }}>
                We&apos;ve received your request. Our team will review your project
                details and get back to you within 24 hours.
              </p>
              <Link href="/" className="btn btn-primary">
                ← Back to Home
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="quote-page">
      {/* Nav */}
      <nav className="navbar scrolled">
        <div className="container">
          <Link href="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="GRIFN Logo" width={54} height={54} style={{ objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 800, fontSize: '22px', lineHeight: 1 }}>GRIFN</span>
              <span style={{ fontWeight: 500, fontSize: '10px', opacity: 0.7, letterSpacing: '2px', marginTop: '2px' }}>SOFTWARE SOLUTIONS</span>
            </div>
          </Link>
          <ul className="navbar-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#portfolio">Portfolio</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <section className="quote-hero">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Get a Quote</span>
            <h1 className="section-title">
              Tell Us About Your{' '}
              <span className="gradient-text">Project</span>
            </h1>
            <p className="section-subtitle">
              Fill out the form below and we&apos;ll get back to you within 24 hours
              with a detailed proposal tailored to your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <ScrollReveal delay={0.1}>
            <QuoteForm onSuccess={() => setSubmitted(true)} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
