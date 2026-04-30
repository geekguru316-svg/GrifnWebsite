'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const serviceOptions = [
  'Web Design',
  'Web Development',
  'E-Commerce',
  'UI/UX Design',
  'SEO & Performance',
  'Full Branding',
  'Other',
];

const budgetOptions = [
  'Under ₱50,000 ($1,000)',
  '₱50,000 - ₱200,000 ($1,000 - $4,000)',
  '₱200,000 - ₱500,000 ($4,000 - $10,000)',
  'Above ₱500,000 ($10,000+)',
];

const timelineOptions = [
  'ASAP (< 2 weeks)',
  '1 – 2 months',
  '2 – 4 months',
  '4+ months',
  'Flexible',
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote-page">
        <nav className="navbar scrolled">
          <div className="container">
            <Link href="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image src="/logo.png" alt="GRIFN Logo" width={45} height={45} style={{ objectFit: 'contain' }} />
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
            <Image src="/logo.png" alt="GRIFN Logo" width={45} height={45} style={{ objectFit: 'contain' }} />
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
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>

                {/* Company */}
                <div className="form-group">
                  <label htmlFor="company">Company / Organization</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                  />
                </div>

                {/* Service */}
                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget *</label>
                  <select
                    id="budget"
                    required
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                  >
                    <option value="" disabled>Select a range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline *</label>
                  <select
                    id="timeline"
                    required
                    value={form.timeline}
                    onChange={(e) => update('timeline', e.target.value)}
                  >
                    <option value="" disabled>Select timeline</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="form-group" style={{ marginTop: 0 }}>
                <label htmlFor="description">Project Description *</label>
                <textarea
                  id="description"
                  rows={6}
                  placeholder="Describe your project, goals, and any specific requirements..."
                  required
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                />
              </div>

              {/* Submit */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 8 }}>
                <button type="submit" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
                  Submit Request →
                </button>
                <p style={{ fontSize: 13, color: 'var(--text-tertiary)', margin: 0 }}>
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
