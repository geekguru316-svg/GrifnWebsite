'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Book() {
  const [activeTab, setActiveTab] = useState<'quote' | 'meeting'>('quote');

  return (
    <section id="book" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}># GET IN TOUCH WITH US</span>
            <h2 className="section-title">
              Have a project in mind? <span className="gradient-text">We can help you!</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 600 }}>
              Request a quotation or schedule a discovery meeting with us to know more about our pricing and how we can help you.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="book-tabs">
            <div className="tab-container">
              <button 
                className={`tab ${activeTab === 'quote' ? 'active' : ''}`}
                onClick={() => setActiveTab('quote')}
              >
                Get a Quote
              </button>
              <button 
                className={`tab ${activeTab === 'meeting' ? 'active' : ''}`}
                onClick={() => setActiveTab('meeting')}
              >
                Schedule a Meeting
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        {activeTab === 'quote' ? (
          <ScrollReveal delay={0.2}>
            <div className="quote-tab-content">
              <h3 style={{ textAlign: 'center', marginBottom: 32, fontSize: '1.5rem', fontWeight: 500 }}>
                Want to know more about our pricing? Request it today!
              </h3>
              
              <form className="quote-form simple-quote-form" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: 700, margin: '0 auto' }}>
                <div className="form-group">
                  <input type="text" id="simple-name" placeholder="Full Name *" required />
                </div>
                <div className="form-group">
                  <input type="email" id="simple-email" placeholder="Email Address *" required />
                </div>
                <div className="form-group" style={{ marginBottom: 32 }}>
                  <input type="tel" id="simple-mobile" placeholder="Mobile Number *" required />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: 12, fontWeight: 500, fontSize: '1.1rem' }}>What service do you need? *</label>
                  <div className="services-checkbox-grid">
                    <label className="checkbox-label"><input type="checkbox" /> Web Design & Development</label>
                    <label className="checkbox-label"><input type="checkbox" /> Digital Marketing</label>
                    <label className="checkbox-label"><input type="checkbox" /> Branding / Graphic Design</label>
                    <label className="checkbox-label"><input type="checkbox" /> Web Hosting</label>
                    <label className="checkbox-label"><input type="checkbox" /> Website Maintenance</label>
                    <label className="checkbox-label"><input type="checkbox" /> Other</label>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: 24 }}>
                  <label htmlFor="simple-desc" style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: '1.1rem' }}>Please describe your project briefly *</label>
                  <textarea 
                    id="simple-desc" 
                    placeholder="Describe your project. Preferred call time. Include your company and website." 
                    required 
                    style={{ minHeight: 120 }}
                  ></textarea>
                </div>

                <div className="form-group" style={{ marginTop: 24 }}>
                  <label htmlFor="simple-budget" style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: '1.1rem' }}>What's your estimated budget range? *</label>
                  <select id="simple-budget" required>
                    <option value="">—Please choose an option—</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>

                <div style={{ marginTop: 24, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  By proceeding, you confirm that you have read and agree to our <a href="#" style={{ color: '#0ea5e9', textDecoration: 'none' }}>Privacy Notice</a>.
                </div>

                <div className="form-group" style={{ marginTop: 24, textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Request Quote
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        ) : (
          <div className="book-grid">
            {/* Left side: Visual/Info */}
            <ScrollReveal delay={0.2}>
              <div className="book-visual-card">
                <div className="visual-content">
                  <h3>Discovery Meeting</h3>
                  <p>15 min appointment</p>
                  <p className="meeting-detail">
                    <span className="icon">🎥</span> Google Meet video conference info provided after booking
                  </p>
                  
                  <div className="visual-image-wrapper">
                    <div className="visual-placeholder">
                      <div className="glow-orb"></div>
                      <h2>Let's build something extraordinary together.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right side: Calendar (Mockup) */}
            <ScrollReveal delay={0.3}>
              <div className="calendar-card">
                <div className="calendar-header">
                  <h4>Select an appointment time</h4>
                  <span className="timezone">GMT+08:00 Philippine Standard Time</span>
                </div>
                
                <div className="calendar-body">
                  <div className="calendar-month">
                    <div className="month-nav">
                      <button>&lt;</button>
                      <span>April 2026</span>
                      <button>&gt;</button>
                    </div>
                    <div className="weekdays">
                      <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                    </div>
                    <div className="days">
                      <span className="disabled">29</span><span className="disabled">30</span><span className="disabled">31</span>
                      <span>1</span><span>2</span><span>3</span><span>4</span>
                      <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
                      <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                      <span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span>
                      <span>26</span><span>27</span><span>28</span><span>29</span><span className="active">30</span>
                    </div>
                  </div>

                  <div className="time-slots">
                    <div className="selected-date">Friday, May 1</div>
                    <button className="time-slot">9:00 am</button>
                    <button className="time-slot">9:45 am</button>
                    <button className="time-slot">10:30 am</button>
                    <button className="time-slot">11:15 am</button>
                    <button className="time-slot">2:00 pm</button>
                    <button className="time-slot">2:45 pm</button>
                    <button className="time-slot">3:30 pm</button>
                    <button className="time-slot">4:15 pm</button>
                    <button className="time-slot">5:00 pm</button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

      </div>
    </section>
  );
}
