import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Users, Target, Eye, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import siteContent from '../data/siteContent.json';
import './AboutPage.css';

export default function AboutPage({ onOpenDonate }) {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Who We Are</span>
          <h1 className="page-hero-title heading-display">
            A Movement of Compassion, Action & Lasting Change
          </h1>
          <p className="page-hero-subtitle text-lead">
            {siteContent.tagline} across Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="about-narrative-section">
        <div className="container narrative-grid">
          <div className="narrative-text-side">
            <h2 className="heading-editorial section-heading-alt">
              From a Personal Calling to a Lifesaving Sanctuary
            </h2>
            <p>
              Roksh Samsthe Foundation began not as an institution, but as a personal commitment: to never look away when a vulnerable animal is suffering on the streets of Bengaluru. What started as individual rescue responses has evolved into an active, verified animal welfare foundation.
            </p>
            <p>
              From emergency rescues and high-complexity medical treatments—such as intravenous cancer chemotherapy and intensive mange rehabilitation—to daily sustenance feeding drives, sterilizations, and careful adoptions, we work tirelessly to grant every dog and cat a dignified second chance.
            </p>
            <p className="quote-callout">
              “With every rescue and every story of recovery, Roksh Samsthe stands for one simple, unshakeable belief: every life matters.”
            </p>
          </div>

          <div className="narrative-media-side">
            <div className="narrative-image-frame">
              <img 
                src="/assets/feeding/feeding-cauldron-boot.jpeg" 
                alt="Roksh volunteers preparing fresh hot meals for community animals" 
                className="narrative-img"
              />
              <div className="narrative-frame-caption">
                <span>Roksh volunteer feeding team in action across Bengaluru routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="vision-mission-section">
        <div className="container grid-2">
          <div className="vm-card vision-card">
            <div className="vm-icon-bubble">
              <Eye size={28} color="#D97706" />
            </div>
            <span className="vm-tag">Our Vision</span>
            <h3 className="vm-title heading-display">Safe, Loved & Treated with Dignity</h3>
            <p className="vm-body">
              {siteContent.vision}
            </p>
          </div>

          <div className="vm-card mission-card">
            <div className="vm-icon-bubble">
              <Target size={28} color="#15803D" />
            </div>
            <span className="vm-tag">Our Mission</span>
            <h3 className="vm-title heading-display">Rescue, Treat, Protect & Rehome</h3>
            <p className="vm-body">
              {siteContent.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Standards & Care Principles */}
      <section className="principles-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Guiding Ethos</span>
            <h2 className="section-title">Strict Standards of Animal Welfare</h2>
            <p className="section-description">
              How we safeguard the welfare, dignity, and recovery of every animal in our care.
            </p>
          </div>

          <div className="grid-3 principles-grid">
            <div className="principle-card">
              <div className="p-num">01</div>
              <h3 className="p-title">100% Genuine Evidence</h3>
              <p className="p-desc">
                We never use generic stock imagery or simulated stories. Every photograph, date, and medical case published on this website reflects real dogs under our direct care.
              </p>
            </div>

            <div className="principle-card">
              <div className="p-num">02</div>
              <h3 className="p-title">Complete Clinical Care</h3>
              <p className="p-desc">
                No animal is abandoned halfway through treatment. Whether treating TVT cancer with weekly chemo or months of skin dips, we commit to full recovery.
              </p>
            </div>

            <div className="principle-card">
              <div className="p-num">03</div>
              <h3 className="p-title">Lifelong Dignity & Boarding</h3>
              <p className="p-desc">
                When street release is unsafe due to age, trauma, or chronic medical conditions, we provide safe long-term boarding with regular nutrition and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="container text-center">
          <h2 className="heading-display text-white mb-4">
            Be a Guardian for the Voiceless
          </h2>
          <p className="text-lead text-gray mb-6 max-w-2xl mx-auto">
            Your support makes emergency rescues, chemotherapy medications, and daily feeding drives possible. Join our mission today.
          </p>
          <div className="flex-center-gap">
            <button 
              type="button" 
              onClick={() => onOpenDonate()}
              className="btn btn-primary btn-lg"
            >
              <Heart size={18} fill="currentColor" strokeWidth={0} />
              <span>Donate Now</span>
            </button>
            <Link to="/get-involved" className="btn btn-secondary btn-lg">
              <span>Volunteer with Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
