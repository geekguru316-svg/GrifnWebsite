import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Image src="/logo.png" alt="GRIFN Logo" width={54} height={54} style={{ objectFit: 'contain' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '22px', lineHeight: 1 }}>GRIFN</h3>
                <span style={{ fontWeight: 500, fontSize: '10px', opacity: 0.7, letterSpacing: '2px', display: 'block', marginTop: '2px' }}>SOFTWARE SOLUTIONS</span>
              </div>
            </div>
            <p>
              Professional software solutions studio crafting premium digital
              experiences that drive real business results.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/web-design-cebu">Web Design</Link></li>
              <li><Link href="/services/web-development-philippines">Web Development</Link></li>
              <li><Link href="/services/ecommerce-philippines">E-Commerce</Link></li>
              <li><Link href="/services/seo-cebu">SEO Services</Link></li>
              <li><Link href="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link href="/services/mobile-optimization">Mobile Optimization</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#portfolio">Portfolio</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:geekguru316@gmail.com">geekguru316@gmail.com</a></li>
              <li><a href="tel:+639178396962">+63 917 839 6962</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GRIFN Software Solutions. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="https://www.linkedin.com/company/grifn-software-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://www.facebook.com/profile.php?id=61588838560417" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="#" aria-label="GitHub">⌘</a>
            <a href="#" aria-label="Dribbble">◉</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
