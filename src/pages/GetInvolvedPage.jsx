import React, { useState } from 'react';
import { Heart, Users, Home, Package, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import './GetInvolvedPage.css';

export default function GetInvolvedPage({ onOpenDonate }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: '',
    interest: 'feeding',
    experience: '',
    hasVehicle: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('Please fill in your name, email, and phone number.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Thank you! Your volunteer interest has been received. Our team will contact you on WhatsApp.');
  };

  return (
    <div className="get-involved-page">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title heading-display">
            Join the Compassion Network in Bengaluru
          </h1>
          <p className="page-hero-subtitle text-lead">
            Whether you can spare a couple of hours on a Sunday morning, offer temporary foster space, or donate food supplies, every bit of help directly protects vulnerable animals.
          </p>
        </div>
      </section>

      {/* 3 Involvement Pillars */}
      <section className="involvement-options-section">
        <div className="container grid-3">
          <div className="option-card card-hover" id="volunteer">
            <div className="option-icon-box gold">
              <Users size={28} color="#D97706" />
            </div>
            <h2 className="option-title">1. Ground Volunteer</h2>
            <p className="option-desc">
              Join our weekend feeding drives, assist with loading cauldrons, or help with gentle handling during non-emergency veterinary follow-ups.
            </p>
            <ul className="option-points">
              <li><CheckCircle2 size={15} color="#15803D" /> Weekend feeding routes</li>
              <li><CheckCircle2 size={15} color="#15803D" /> Triage observation</li>
              <li><CheckCircle2 size={15} color="#15803D" /> Photography & rescue updates</li>
            </ul>
          </div>

          <div className="option-card card-hover" id="foster">
            <div className="option-icon-box green">
              <Home size={28} color="#15803D" />
            </div>
            <h2 className="option-title">2. Foster Care Parent</h2>
            <p className="option-desc">
              Provide a safe, quiet indoor corner for an animal recovering from surgery, chemotherapy, or orphaned puppies needing warmth and bottle feeding.
            </p>
            <ul className="option-points">
              <li><CheckCircle2 size={15} color="#15803D" /> Food & medical supplies funded</li>
              <li><CheckCircle2 size={15} color="#15803D" /> 2 to 6 weeks temporary care</li>
              <li><CheckCircle2 size={15} color="#15803D" /> Full veterinary guidance provided</li>
            </ul>
          </div>

          <div className="option-card card-hover" id="supplies">
            <div className="option-icon-box dark">
              <Package size={28} color="#121316" />
            </div>
            <h2 className="option-title">3. In-Kind Food & Meds</h2>
            <p className="option-desc">
              Donate raw groceries, medical bandages, deworming tablets, or puppy formula. We coordinate collection points in Bengaluru.
            </p>
            <ul className="option-points">
              <li><CheckCircle2 size={15} color="#15803D" /> 25kg/50kg bags of raw rice</li>
              <li><CheckCircle2 size={15} color="#15803D" /> Farm eggs & puppy kibble</li>
              <li><CheckCircle2 size={15} color="#15803D" /> Betadine, gauze & skin sprays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteer Signup Form */}
      <section className="volunteer-form-section">
        <div className="container">
          <div className="volunteer-form-wrapper glass-panel">
            <div className="form-header text-center">
              <h2 className="heading-display form-heading">
                Step Forward for Bengaluru's Animals
              </h2>
              <p className="form-subheading text-muted">
                Fill out the details below. Our volunteer coordinator will reach out via WhatsApp/email to align on location and availability.
              </p>
            </div>

            {submitted ? (
              <div className="success-banner">
                <CheckCircle2 size={36} color="#15803D" />
                <h3 className="heading-display mt-2 mb-2">Application Received!</h3>
                <p>
                  Thank you for stepping forward, <strong>{formData.fullName}</strong>. A Roksh team member will connect with you soon to welcome you into our volunteer circle.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', area: '', interest: 'feeding', experience: '', hasVehicle: false }); }}
                  className="btn btn-secondary btn-sm mt-4"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="area">Location / Area in Bengaluru</label>
                    <input
                      id="area"
                      type="text"
                      placeholder="e.g. Indiranagar, Whitefield, HSR"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="interest">Primary Area of Interest</label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="feeding">Feeding Drives & Meal Distribution</option>
                    <option value="foster">Temporary Foster Parent (Recovering Dogs/Pups)</option>
                    <option value="rescue-transport">Animal Transport & Emergency Ambulance Assist</option>
                    <option value="photography">Photography, Content & Social Media Documentation</option>
                    <option value="supplies">Supply Donations & Grocery Logistics</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Brief Experience with Animals (Optional)</label>
                  <textarea
                    id="experience"
                    rows="3"
                    placeholder="Tell us if you have pets, prior shelter volunteering experience, or specific comfort with dogs/cats."
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  />
                </div>

                <div className="checkbox-group">
                  <input
                    id="hasVehicle"
                    type="checkbox"
                    checked={formData.hasVehicle}
                    onChange={(e) => setFormData({ ...formData, hasVehicle: e.target.checked })}
                  />
                  <label htmlFor="hasVehicle">
                    I have access to a 2-wheeler or 4-wheeler for animal transport or feeding drive dispatches.
                  </label>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <Send size={16} />
                    <span>Submit Volunteer Application</span>
                  </button>
                  <p className="form-privacy-note">
                    <ShieldCheck size={14} color="#15803D" />
                    Your contact details are strictly kept confidential and only used for volunteer coordination.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
