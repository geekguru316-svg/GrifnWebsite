import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailLink from '@/components/EmailLink';
import './quote.css';

export const metadata: Metadata = {
  title: 'Hire Us | Get a Free Quote | GRIFN Software Solutions',
  description:
    'Ready to build something extraordinary? Get a free, no-obligation quote from GRIFN Software Solutions. Web design, app development, and digital marketing in Cebu, Philippines.',
  alternates: { canonical: '/quote' },
};

export default function QuotePage() {
  return (
    <div className="quote-page">
      <Navbar />
      
      <section className="quote-hero">
        <div className="container">
          <div className="quote-grid">
            {/* Left Column: Info */}
            <div className="quote-info">
              <div>
                <span className="section-label">Hire Us</span>
                <h1>
                  Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
                </h1>
                <p>
                  Fill out the form with your project details, and our team will get back to you within 24 hours with a free, no-obligation technical assessment and pricing estimate.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email Us Directly</h3>
                    <EmailLink email="geekguru316@gmail.com" />
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Call or WhatsApp</h3>
                    <a href="tel:+639178396962">+63 917 839 6962</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Visit Our Studio</h3>
                    <p>IT Park, Lahug, Cebu City 6000<br/>Philippines</p>
                  </div>
                </div>
              </div>

              <div className="trust-section">
                <h3>Why Choose GRIFN?</h3>
                <div className="trust-badges">
                  <div className="trust-badge">⭐️ 5.0 Rating on Clutch</div>
                  <div className="trust-badge">⚡ Next.js Experts</div>
                  <div className="trust-badge">🇵🇭 100% Local Cebu Team</div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="quote-form-container">
              <form action="#" method="POST">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" className="form-control" placeholder="Juan" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Dela Cruz" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Work Email *</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="juan@company.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form-control" placeholder="+63 912 345 6789" />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="service">What do you need help with? *</label>
                    <select id="service" name="service" className="form-control" required>
                      <option value="" disabled selected>Select a primary service</option>
                      <option value="web-design">Web Design & Redesign</option>
                      <option value="web-app">Custom Web Application</option>
                      <option value="ecommerce">E-Commerce Store</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="ui-ux">UI/UX Product Design</option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="budget">Estimated Budget Range</label>
                    <select id="budget" name="budget" className="form-control">
                      <option value="" disabled selected>Select a budget range (₱ PHP)</option>
                      <option value="under-50k">Under ₱50,000</option>
                      <option value="50k-150k">₱50,000 - ₱150,000</option>
                      <option value="150k-300k">₱150,000 - ₱300,000</option>
                      <option value="300k-plus">₱300,000+</option>
                      <option value="to-be-determined">To be determined</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Project Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-control" 
                      placeholder="Tell us about your business, your goals, and what you're looking to build..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Request Free Quote →
                </button>
                <p className="form-footer">
                  🔒 Your information is completely confidential. We never spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
