'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image src="/logo.png" alt="GRIFN Logo" width={54} height={54} style={{ objectFit: 'contain' }} priority />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 800, fontSize: '22px', lineHeight: 1 }}>GRIFN</span>
            <span style={{ fontWeight: 500, fontSize: '10px', opacity: 0.7, letterSpacing: '2px', marginTop: '2px' }}>SOFTWARE SOLUTIONS</span>
          </div>
        </Link>
        <ul className="navbar-links">
          <li><a href="/#services">Services</a></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li>
            <Link href="/#book" className="btn btn-secondary" style={{ padding: '10px 24px', fontSize: '13px' }}>
              Book a Call
            </Link>
          </li>
          <li>
            <Link href="/quote" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '13px' }}>
              Get My Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}