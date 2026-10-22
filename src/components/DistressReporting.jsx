import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, AlertTriangle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { organizationData } from '../data/organization';

export default function DistressReporting() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill" style={{ backgroundColor: 'var(--rose-100)', color: 'var(--rose-700)', borderColor: 'rgba(225, 29, 72, 0.3)' }}>
            <AlertTriangle size={15} />
            <span>Reporting Guidelines & Contact</span>
          </div>
          <h2>Contact Roksh & Report Animals in Distress</h2>
          <p>
            Have an enquiry, partnership proposal, or spotted an animal in critical distress in Bengaluru? Here is how to reach our team immediately.
          </p>
        </div>

        {/* Emergency Distress Guidelines Notice */}
        <div
          style={{
            backgroundColor: '#FFF1F2',
            border: '1.5px solid #FDA4AF',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <AlertTriangle size={24} color="#BE123C" />
            <h3 style={{ fontSize: '1.3rem', color: '#881337', margin: 0 }}>
              {organizationData.emergencyGuidelines.notice}
            </h3>
          </div>

          <p style={{ fontSize: '0.925rem', color: '#9F1239', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            To help our team assess the situation and dispatch volunteers swiftly, please follow these steps:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {organizationData.emergencyGuidelines.steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  gap: '0.75rem',
                  border: '1px solid rgba(244, 63, 94, 0.2)',
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#BE123C',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#4C0519', lineHeight: 1.5 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href={organizationData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: '#15803D', color: '#FFFFFF', border: 'none' }}
            >
              <MessageCircle size={18} />
              <span>Send Urgent Case Alert on WhatsApp</span>
            </a>
            <span style={{ fontSize: '0.825rem', color: '#9F1239', fontWeight: 600 }}>
              ⚡ WhatsApp with photos & live GPS pin provides the fastest volunteer triage.
            </span>
          </div>
        </div>

        {/* Contact Info & General Message Form */}
        <div className="grid-2" style={{ gap: '3rem' }}>
          {/* Contact Details */}
          <div>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1rem' }}>
              Direct Organisational Channels
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Roksh Samsthe Foundation operates primarily across Bengaluru. For administrative queries, volunteering, donations, or collaborations:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--amber-100)', color: 'var(--amber-800)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>Official Email</h4>
                  <a href={`mailto:${organizationData.email}`} style={{ color: 'var(--amber-700)', fontWeight: 600, fontSize: '1rem' }}>
                    {organizationData.email}
                  </a>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    Monitored daily for receipts, sponsorships & administrative enquiries.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#DCFCE7', color: '#15803D', padding: '0.75rem', borderRadius: '50%' }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>WhatsApp Care Line</h4>
                  <a href={organizationData.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#15803D', fontWeight: 600, fontSize: '1rem' }}>
                    +91 94825 80111
                  </a>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    For photo/video sharing of street animals and live location sharing.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#EFF6FF', color: '#2563EB', padding: '0.75rem', borderRadius: '50%' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>Operational Region</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0, color: 'var(--text-main)' }}>
                    {organizationData.location}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    Daily feeding in North & East Bengaluru; veterinary admissions at partner facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* General Message Form */}
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
              Send a General Enquiry
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              For non-emergency questions, feedback, or CSR partnerships:
            </p>

            {!contactSubmitted ? (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Partnership / Donation Receipt Query"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Message *
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Write your message here..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: '#DCFCE7', color: '#15803D', marginBottom: '1rem' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
                  Message Sent Successfully
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Thank you for reaching out. We will review your message and reply to <strong>{contactForm.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1.25rem' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
