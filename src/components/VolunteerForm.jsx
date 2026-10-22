import React, { useState } from 'react';
import { Users, Package, HeartHandshake, CheckCircle2, Send, MessageCircle } from 'lucide-react';
import { organizationData } from '../data/organization';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    interest: 'feeding',
    availability: 'weekends',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const supplyChecklist = [
    "Raw Rice (Sona Masoori / Broken Rice)",
    "Fresh Eggs & Poultry Broth",
    "Anti-tick spot-on treatments (Bravecto / Simparica)",
    "Medicated Chlorhexidine Shampoos for mange",
    "Stainless Steel / Heavy Plastic Feeding Bowls",
    "Fleece Blankets & Sterilized Towels for recovery",
  ];

  return (
    <section id="volunteer" className="section" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <span>Community Action • Get Involved</span>
          </div>
          <h2>Be the Hands and Voice They Desperately Need</h2>
          <p>
            Animal welfare in a metropolis like Bengaluru succeeds when compassionate residents unite. Whether you have 2 hours on a weekend or can supply raw food, your effort saves lives.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3rem' }}>
          {/* Left: Ways to Help & Supply Needs */}
          <div>
            <div className="card" style={{ padding: '2rem', marginBottom: '1.75rem', backgroundColor: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Package size={22} color="var(--amber-600)" />
                Donate Essential Supplies
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Prefer sending supplies directly instead of cash? We welcome deliveries of these high-priority daily essentials to our Bengaluru center:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                {supplyChecklist.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={16} color="#15803D" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={`mailto:${organizationData.email}?subject=In-Kind%20Supply%20Donation%20for%20Roksh`}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  Coordinate Supply Drop-off via Email
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div style={{ backgroundColor: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ backgroundColor: '#15803D', color: '#FFFFFF', padding: '0.75rem', borderRadius: '50%', flexShrink: 0 }}>
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#14532D', fontSize: '1.05rem' }}>
                  Direct Volunteer WhatsApp Coordination
                </h4>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.825rem', color: '#166534' }}>
                  Want to join our active volunteer group chat for emergency alerts and weekend feeding runs?
                </p>
                <a
                  href={organizationData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#15803D', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'underline' }}
                >
                  Chat with Volunteer Leads on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right: Volunteer Signup Form */}
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>
              Volunteer Application Form
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Tell us how you would like to help. Our coordinator will follow up within 24–48 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.925rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.925rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      Area in Bengaluru *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indiranagar, Hebbal"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.925rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.925rem',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <option value="feeding">Daily Feeding Drives (Morning)</option>
                    <option value="rescue-transport">Rescue Transport & Vehicle Assistance</option>
                    <option value="foster">Temporary Foster Care for Recovering Pups</option>
                    <option value="awareness">Community Awareness & Education</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    A Little About Yourself (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about any previous animal care experience or how you would like to participate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.925rem',
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Submit Volunteer Application</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: '#DCFCE7', color: '#15803D', marginBottom: '1rem' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                  Application Received!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Our volunteer coordinator will reach out to you on <strong>{formData.phone}</strong> regarding feeding and rescue opportunities in {formData.area}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1.25rem' }}
                >
                  Submit Another Response
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
