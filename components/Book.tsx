'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import QuoteForm from './QuoteForm';

export default function Book() {
  const [activeTab, setActiveTab] = useState<'quote' | 'meeting'>('quote');
  const [selectedDate, setSelectedDate] = useState<number>(30);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<'calendar' | 'details' | 'success'>('calendar');
  const [bookingForm, setBookingForm] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingStep('details');
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      template_params: {
        ...bookingForm,
        selected_date: `May ${selectedDate}, 2026`,
        selected_time: selectedTime || "",
        from_name: bookingForm.name,
        reply_to: bookingForm.email,
        subject: `New Meeting Scheduled: May ${selectedDate} at ${selectedTime}`
      }
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setBookingStep('success');
      } else {
        const errorData = await response.text();
        setSubmitError(`EmailJS Error: ${errorData || "Something went wrong"}`);
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  
                  <div className="visual-image-wrapper" style={{ marginTop: 24 }}>
                    <Image 
                      src="/tech-professional.png" 
                      alt="Tech Professional" 
                      width={500} 
                      height={600} 
                      style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', boxShadow: 'var(--shadow-glow)' }} 
                    />
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
                  {bookingStep === 'calendar' && (
                    <>
                      <div className="calendar-month">
                        <div className="month-nav">
                          <button>&lt;</button>
                          <span>May 2026</span>
                          <button>&gt;</button>
                        </div>
                        <div className="weekdays">
                          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div className="days">
                          <span className="disabled">26</span><span className="disabled">27</span><span className="disabled">28</span>
                          <span className="disabled">29</span><span className="disabled">30</span>
                          {[...Array(31)].map((_, i) => {
                            const day = i + 1;
                            return (
                              <span 
                                key={day} 
                                className={selectedDate === day ? 'active' : ''}
                                onClick={() => setSelectedDate(day)}
                                style={{ cursor: 'pointer' }}
                              >
                                {day}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      <div className="time-slots">
                        <div className="selected-date">Friday, May {selectedDate}</div>
                        {['9:00 am', '9:45 am', '10:30 am', '11:15 am', '2:00 pm', '2:45 pm', '3:30 pm', '4:15 pm', '5:00 pm'].map(time => (
                          <button 
                            key={time} 
                            className={`time-slot ${selectedTime === time ? 'active' : ''}`}
                            onClick={() => handleTimeSelect(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {bookingStep === 'details' && (
                    <div style={{ padding: 24, flex: 1 }}>
                      <button onClick={() => setBookingStep('calendar')} style={{ background: 'transparent', border: 'none', color: '#0ea5e9', cursor: 'pointer', marginBottom: 16 }}>← Back to Calendar</button>
                      <h4 style={{ marginBottom: 16, fontSize: '1.1rem' }}>Enter Details</h4>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: 24, fontSize: '0.9rem' }}>
                        May {selectedDate}, 2026 at {selectedTime}
                      </p>
                      <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label style={{ fontSize: '0.9rem', marginBottom: 8, display: 'block', color: 'var(--text-secondary)' }}>Full Name *</label>
                          <input type="text" required value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})} style={{ background: 'var(--bg-secondary)' }} />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label style={{ fontSize: '0.9rem', marginBottom: 8, display: 'block', color: 'var(--text-secondary)' }}>Email Address *</label>
                          <input type="email" required value={bookingForm.email} onChange={e => setBookingForm({...bookingForm, email: e.target.value})} style={{ background: 'var(--bg-secondary)' }} />
                        </div>

                        {/* Error Message */}
                        {submitError && (
                          <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', marginTop: '8px' }}>
                            {submitError}
                          </div>
                        )}

                        <button 
                          type="submit" 
                          className="btn btn-primary" 
                          style={{ marginTop: 16, width: '100%', padding: '14px 0', opacity: isSubmitting ? 0.7 : 1, justifyContent: 'center' }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                        </button>
                      </form>
                    </div>
                  )}

                  {bookingStep === 'success' && (
                    <div style={{ padding: '60px 24px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="quote-success-icon" style={{ fontSize: 48, color: '#10b981', marginBottom: 16 }}>✓</div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Booking Confirmed!</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>A calendar invitation has been sent to {bookingForm.email}.</p>
                      <button onClick={() => { setBookingStep('calendar'); setSelectedTime(null); setBookingForm({name: '', email: ''}); }} className="btn btn-secondary" style={{ marginTop: 32 }}>
                        Book Another
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

      </div>
    </section>
  );
}
