import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './faq.css';

export const metadata: Metadata = {
  title: 'Web Design FAQ Philippines | Common Questions & Answers | GRIFN',
  description:
    'Find answers to common questions about web design, development, SEO, and pricing in the Philippines. Everything you need to know before starting your project.',
  alternates: { canonical: '/faq' },
};

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How much does web design cost in the Philippines?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Web design costs in the Philippines typically range from ₱15,000 for simple landing pages to ₱250,000+ for complex enterprise applications or e-commerce platforms. At GRIFN, our professional business packages generally start at ₱50,000.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does it take to build a website in Cebu?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A standard business website typically takes 4 to 6 weeks from discovery to launch. Simpler projects can be completed in 1-2 weeks, while complex custom applications may take 8-12 weeks or more depending on functionality.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need SEO for my new website?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Without SEO, your website is like a beautiful billboard in the middle of a desert. We build every website with an SEO-ready foundation, but we also offer ongoing SEO services to help you outrank competitors and stay visible on Google.'
        }
      }
    ]
  };

  return (
    <div className="faq-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <section className="faq-hero">
        <div className="container">
          <span className="section-label">Questions?</span>
          <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p>
            Everything you need to know about building, launching, and growing your digital presence 
            in the Philippines. Can&apos;t find what you&apos;re looking for? Reach out to us.
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            
            <span className="faq-category-title">General & Pricing</span>
            
            <details className="faq-accordion">
              <summary>How much does web design cost in the Philippines?</summary>
              <div className="faq-answer">
                <p>
                  The cost varies significantly based on the complexity and goals of your project. For most Philippine SMEs, a professional, lead-generating website ranges between <strong>₱50,000 to ₱150,000</strong>.
                </p>
                <p>
                  Simple landing pages can start as low as ₱15,000, while complex e-commerce stores or custom SaaS platforms often start at ₱200,000+. We provide transparent, fixed-price quotes after our initial consultation.
                </p>
              </div>
            </details>

            <details className="faq-accordion">
              <summary>How long does it take to build a website?</summary>
              <div className="faq-answer">
                <p>
                  On average, a professional business website takes <strong>4 to 6 weeks</strong>. This includes discovery, UI/UX design, development, content population, and testing.
                </p>
                <p>
                  If you need a site launched faster, we offer a &quot;Starter&quot; package that can be live in as little as <strong>2 weeks</strong> using our streamlined design framework.
                </p>
              </div>
            </details>

            <details className="faq-accordion">
              <summary>Do you offer payment plans?</summary>
              <div className="faq-answer">
                <p>
                  Yes. Our standard payment structure is <strong>50% upfront</strong> to initiate the project and <strong>50% upon final approval</strong> before launch. For larger enterprise projects, we can arrange milestone-based payments (e.g., 30/40/30) to better suit your cash flow.
                </p>
              </div>
            </details>

            <span className="faq-category-title">Technical & SEO</span>

            <details className="faq-accordion">
              <summary>Will my website be mobile-friendly?</summary>
              <div className="faq-answer">
                <p>
                  <strong>Absolutely.</strong> In the Philippines, over 95% of internet users browse via mobile. We follow a &quot;Mobile-First&quot; design philosophy, ensuring your site looks stunning and functions perfectly on smartphones, tablets, and desktops.
                </p>
              </div>
            </details>

            <details className="faq-accordion">
              <summary>Do I need SEO with my new website?</summary>
              <div className="faq-answer">
                <p>
                  Building a website without SEO is like printing a thousand flyers and keeping them in your drawer. <strong>SEO is critical</strong> for getting your business found by people searching for your services on Google.
                </p>
                <p>
                  Every GRIFN website includes an <strong>SEO Foundation</strong> (fast load speeds, semantic HTML, meta tags). However, for competitive keywords like &quot;web design Cebu,&quot; we recommend our ongoing SEO growth plans to maintain top rankings.
                </p>
              </div>
            </details>

            <details className="faq-accordion">
              <summary>Can I update the content myself?</summary>
              <div className="faq-answer">
                <p>
                  Yes. We typically integrate a <strong>Content Management System (CMS)</strong> like Sanity or Payload, which allows you to update text, images, and blog posts without touching any code. We provide a full training session upon launch to ensure your team is comfortable making updates.
                </p>
              </div>
            </details>

            <details className="faq-accordion">
              <summary>Do you provide hosting and maintenance?</summary>
              <div className="faq-answer">
                <p>
                  We help you set up high-performance hosting (typically on Vercel or AWS) and manage your domain configuration. We also offer <strong>Maintenance & Support plans</strong> starting at ₱5,000/month that cover security updates, regular backups, and priority support for any changes you need.
                </p>
              </div>
            </details>

            <div className="faq-cta">
              <h2>Still have questions?</h2>
              <p>We&apos;re here to help you navigate the digital landscape. Let&apos;s hop on a 15-minute call to discuss your project.</p>
              <Link href="/quote" className="btn btn-primary" style={{ marginTop: '24px' }}>
                Contact Us Today →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
