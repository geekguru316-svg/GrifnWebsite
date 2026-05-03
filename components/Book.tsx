'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import QuoteForm from './QuoteForm';

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
              
              <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <QuoteForm />
              </div>
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
