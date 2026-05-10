'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './profile.css';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const SectionHeader = ({ sectionName }: { sectionName: string }) => (
  <div className="profile-bar">
    <div className="profile-bar-logo">
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <span style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '2px' }}>GRIFN</span>
    </div>
    <div className="profile-bar-section">{sectionName}</div>
  </div>
);

export default function CompanyProfile() {
  return (
    <div className="profile-container">
      {/* 01 COVER */}
      <section className="profile-page pg-cover">
        <div className="cover-bg-glow"></div>
        <div className="profile-page-inner">
          <div className="profile-bar" style={{ border: 'none' }}>
            <div className="profile-bar-logo">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>GRIFN</span>
                <span style={{ fontSize: '9px', opacity: 0.5, letterSpacing: '2px' }}>SOFTWARE SOLUTIONS</span>
              </div>
            </div>
            <div className="profile-bar-section" style={{ border: '1px solid var(--border-accent)', padding: '4px 12px', borderRadius: '4px' }}>
              Company Profile 2026
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px' }}>
            <motion.span 
              className="section-label" 
              style={{ marginBottom: 32 }}
              {...reveal}
            >
              Cebu, Philippines · Global Standards
            </motion.span>
            <motion.h1 
              className="display-title"
              {...reveal}
              transition={{ delay: 0.2 }}
            >
              We Design & Build<br />
              <em>Digital Experiences</em><br />
              That Convert.
            </motion.h1>
            <motion.p 
              style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '48px' }}
              {...reveal}
              transition={{ delay: 0.3 }}
            >
              Premium Web Design · Full-Stack Development · E-Commerce · SEO
            </motion.p>

            <motion.div className="profile-stats" {...reveal} transition={{ delay: 0.4 }}>
              <div className="pstat-card">
                <span className="pstat-num">150+</span>
                <span className="pstat-label">Projects</span>
              </div>
              <div className="pstat-card">
                <span className="pstat-num">98%</span>
                <span className="pstat-label">Satisfaction</span>
              </div>
              <div className="pstat-card">
                <span className="pstat-num">8+</span>
                <span className="pstat-label">Years</span>
              </div>
              <div className="pstat-card">
                <span className="pstat-num">10+</span>
                <span className="pstat-label">Team</span>
              </div>
            </motion.div>
          </div>

          <div style={{ padding: '32px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.4 }}>
            <span style={{ fontSize: '12px', letterSpacing: '2px' }}>grifn-website.vercel.app</span>
            <span style={{ fontSize: '12px' }}>© 2026 GRIFN</span>
          </div>
        </div>
        <span className="pnum">01</span>
      </section>

      {/* 02 ABOUT US */}
      <section className="profile-page">
        <SectionHeader sectionName="Who We Are" />
        <div className="split-layout">
          <div className="split-left">
            <motion.div {...reveal}>
              <span className="section-label">About Us</span>
              <h2 className="display-title" style={{ fontSize: '52px' }}>
                The <em>premium digital</em><br />
                experience delivered.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                GRIFN Software Solutions is a boutique digital studio based in Cebu, Philippines. 
                We specialize in crafting high-performance websites and custom software for ambitious brands 
                that demand excellence.
              </p>
              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Clear & Direct Communication', 'Results-Focused Strategy', 'Pixel-Perfect Execution', 'Ongoing Support'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: 'var(--accent-light)' }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="split-right">
            <motion.div {...reveal} transition={{ delay: 0.2 }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.05)', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-accent)' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Our Mission</h3>
                <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '18px' }}>
                  &quot;To create opportunity in every era of work by building the tools and experiences 
                  that bridge technology with human potential.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <span className="pnum">02</span>
      </section>

      {/* 03 LEADERSHIP */}
      <section className="profile-page">
        <SectionHeader sectionName="Our Leadership" />
        <div className="split-layout">
          <div className="split-left" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
             <Image 
                src="/team/arjun-headshot.png" 
                alt="Arjun Haincadto" 
                fill 
                style={{ objectFit: 'cover' }}
             />
             <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 800 }}>Arjun Haincadto</h3>
                <span style={{ color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>Founder & Lead President</span>
             </div>
          </div>
          <div className="split-right" style={{ justifyContent: 'center' }}>
            <motion.div {...reveal}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>A Message from the Founder</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px' }}>
                &quot;At GRIFN, we believe that software should be an asset, not an expense. 
                Our goal is to provide Cebu and the world with a level of technical and creative 
                excellence that was previously only available from massive global agencies. 
                We bring that boutique care with enterprise-grade quality.&quot;
              </p>
            </motion.div>
          </div>
        </div>
        <span className="pnum">03</span>
      </section>

      {/* 04 SERVICES */}
      <section className="profile-page">
        <SectionHeader sectionName="What We Do" />
        <div style={{ padding: '80px 60px' }}>
          <motion.div {...reveal} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Expertise</span>
            <h2 className="display-title" style={{ fontSize: '52px' }}>Services That <em>Drive Growth</em></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'Web Design', icon: '🎨', desc: 'Conversion-focused UI/UX design that captures attention.' },
              { title: 'Development', icon: '💻', desc: 'Scalable, high-performance web applications.' },
              { title: 'E-Commerce', icon: '🛒', desc: 'Seamless shopping experiences optimized for sales.' },
              { title: 'SEO', icon: '🔍', desc: 'Data-driven optimization to dominate search results.' },
              { title: 'Mobile First', icon: '📱', desc: 'Flawless experiences on every device and screen.' },
              { title: 'Maintenance', icon: '⚡', desc: 'Ongoing support to keep your site fast and secure.' },
            ].map((svc, i) => (
              <motion.div 
                key={i} 
                className="pstat-card" 
                style={{ textAlign: 'left', padding: '32px' }}
                {...reveal}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{svc.icon}</div>
                <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{svc.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <span className="pnum">04</span>
      </section>

      {/* 05 CONTACT */}
      <section className="profile-page" style={{ background: 'var(--bg-secondary)' }}>
        <SectionHeader sectionName="Contact Us" />
        <div className="profile-page-inner" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <motion.div {...reveal}>
            <h2 className="display-title">Ready to <em>Scale?</em></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Let&apos;s discuss how GRIFN can help you achieve your digital goals.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/quote" className="btn btn-primary">Request a Quote</Link>
              <Link href="/about" className="btn btn-secondary">Learn More</Link>
            </div>
            
            <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'left' }}>
              <div>
                <span className="pstat-label">Email</span>
                <p style={{ fontSize: '16px', marginTop: '8px' }}>ga.creations101@gmail.com</p>
              </div>
              <div>
                <span className="pstat-label">Phone</span>
                <p style={{ fontSize: '16px', marginTop: '8px' }}>+63 917 839 6962</p>
              </div>
              <div>
                <span className="pstat-label">Location</span>
                <p style={{ fontSize: '16px', marginTop: '8px' }}>IT Park, Cebu City, PH</p>
              </div>
            </div>
          </motion.div>
        </div>
        <span className="pnum">05</span>
      </section>
    </div>
  );
}
