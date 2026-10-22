import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, AlertTriangle, Send, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import siteContent from '../data/siteContent.json';
import './ContactPage.css';

export default function ContactPage() {
  const { showToast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    setSent(true);
    showToast('Your message has been sent. We will get back to you shortly.');
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Get in Touch</span>
          <h1 className="page-hero-title heading-display">
            Contact & Distress Reporting Protocol
          </h1>
          <p className="page-hero-subtitle text-lead">
            Have a question, want to collaborate, or need to report a vulnerable animal in Bengaluru? We are here to help.
          </p>
        </div>
      </section>

      {/* Distress Reporting Priority Box */}
      <section className="distress-protocol-section" id="report-distress">
        <div className="container">
          <div className="protocol-card">
            <div className="protocol-badge">
              <AlertTriangle size={18} color="#BE123C" />
              <span>Emergency Animal Distress Guidelines (Bengaluru)</span>
            </div>

            <h2 className="heading-display protocol-title">
              What to Do If You Find an Injured or Sick Animal
            </h2>
            <p className="protocol-sub text-muted">
              Please follow these 4 steps to help our volunteer rescue network assess and coordinate care effectively.
            </p>

            <div className="grid-4 protocol-steps-grid">
              <div className="step-card">
                <span className="step-num">Step 1</span>
                <h3>Keep Animal Safe</h3>
                <p>Move the animal away from heavy traffic if safe. Do not attempt forceful capture if the animal is aggressive or in extreme pain.</p>
              </div>

              <div className="step-card">
                <span className="step-num">Step 2</span>
                <h3>Capture Photos / Video</h3>
                <p>Take clear photos and a 10-second video showing the animal’s exact injury, breathing status, and general demeanor.</p>
              </div>

              <div className="step-card">
                <span className="step-num">Step 3</span>
                <h3>Pin Exact Location</h3>
                <p>Drop a Google Maps GPS pin along with a nearby prominent landmark, street name, and shop sign.</p>
              </div>

              <div className="step-card">
                <span className="step-num">Step 4</span>
                <h3>Send via WhatsApp</h3>
                <p>Send the photos and GPS pin immediately to our volunteer response WhatsApp channel.</p>
              </div>
            </div>

            <div className="protocol-whatsapp-bar">
              <div className="bar-info">
                <strong>WhatsApp Response Desk</strong>
                <span>Open for photo and GPS reporting across Bengaluru</span>
              </div>
              <a 
                href="https://api.whatsapp.com/send?text=Hello%20Roksh%20Team,%20I%20am%20reporting%20an%20animal%20in%20distress%20in%20Bengaluru:"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={16} />
                <span>Message Distress Desk on WhatsApp</span>
              </a>
            </div>

            <div className="protocol-disclaimer">
              <p>
                <strong>Operational Scope:</strong> Roksh Samsthe Foundation responds based on volunteer availability and rescue vehicle capacity. For critical road accident victims requiring immediate surgical ICU trauma care, we will assist in directing you to the nearest open 24/7 emergency veterinary hospital in Bengaluru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & General Enquiry Form */}
      <section className="contact-details-section">
        <div className="container contact-grid">
          {/* Left Column: Direct Coordinates */}
          <div className="contact-info-col">
            <h2 className="heading-editorial section-heading-alt mb-3">
              Official Coordinates
            </h2>
            <p className="text-muted mb-4">
              Reach out directly to the Foundation board for partnerships, media enquiries, and donation verification.
            </p>

            <div className="contact-methods-list">
              <div className="contact-method-item">
                <div className="c-icon-box">
                  <Mail size={20} color="#D97706" />
                </div>
                <div>
                  <span className="c-label">Official Email ID</span>
                  <a href={`mailto:${siteContent.contact.email}`} className="c-val-link">
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="c-icon-box">
                  <MapPin size={20} color="#15803D" />
                </div>
                <div>
                  <span className="c-label">Headquarters & Operations</span>
                  <strong className="c-val-text">{siteContent.contact.location}</strong>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="c-icon-box">
                  <ShieldCheck size={20} color="#BE123C" />
                </div>
                <div>
                  <span className="c-label">Registered Trust</span>
                  <strong className="c-val-text">Roksh Samsthe Foundation</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              <h3 className="heading-display form-title mb-2">Send Us an Enquiry</h3>
              <p className="text-muted mb-4">
                Fill in the form below and we will respond within 24 to 48 hours.
              </p>

              {sent ? (
                <div className="success-banner">
                  <CheckCircle2 size={36} color="#15803D" />
                  <h4 className="heading-display mt-2 mb-2">Message Sent Successfully</h4>
                  <p>Thank you, {contactForm.name}. Your enquiry has been routed to our team.</p>
                  <button
                    type="button"
                    onClick={() => { setSent(false); setContactForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn btn-secondary btn-sm mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="general-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-sub">Subject</label>
                    <input
                      id="contact-sub"
                      type="text"
                      placeholder="e.g. Volunteer Query / Feeding Drive Support"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-msg">Message *</label>
                    <textarea
                      id="contact-msg"
                      rows="4"
                      required
                      placeholder="How can we assist you?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
