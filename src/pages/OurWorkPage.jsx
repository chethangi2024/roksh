import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Utensils, Home, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import './OurWorkPage.css';

export default function OurWorkPage({ onOpenDonate }) {
  return (
    <div className="our-work-page">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title heading-display">
            Our 4 Pillars of Animal Welfare
          </h1>
          <p className="page-hero-subtitle text-lead">
            Every step we take—from street response to long-term care—is grounded in veterinary excellence, compassion, and verified ground accountability.
          </p>
        </div>
      </section>

      {/* Pillar 1: Emergency Rescue */}
      <section className="pillar-detail-section" id="emergency-rescue">
        <div className="container pillar-detail-grid">
          <div className="pillar-text-content">
            <h2 className="pillar-heading heading-display">
              1. Emergency Street Rescue & Clinical Triage
            </h2>
            <p className="pillar-summary">
              Responding to animals facing acute trauma, abandonment, hit-and-run accidents, and life-threatening infections across Bengaluru.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Gentle, Safe Field Capture:</strong> Trained volunteers use gentle handling, towels, and humane carriers to minimize animal panic.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Immediate Clinical Triage:</strong> Immediate transport to partner veterinary hospitals for stabilization, pain control, and diagnostics.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Documentary Verification:</strong> Every rescue is logged with authentic photography and initial health parameters.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/rescues" className="btn btn-secondary btn-sm">
                <span>View Recent Rescues</span>
                <ArrowRight size={14} />
              </Link>
              <button 
                type="button" 
                onClick={() => onOpenDonate(1500)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Support Rescue Fund</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/rescues/sapna-hero.jpeg" 
                alt="Rescued dog receiving care and love under Roksh Foundation"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Sapna: Rescued from abandonment and receiving clinical care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Veterinary Care & Oncology */}
      {/* Pillar 2: Veterinary Care & Oncology */}
      <section className="pillar-detail-section alt-bg" id="veterinary-care">
        <div className="container pillar-detail-grid reverse">
          <div className="pillar-text-content">
            <h2 className="pillar-heading heading-display">
              2. Veterinary Care & TVT Chemotherapy
            </h2>
            <p className="pillar-summary">
              Comprehensive clinical treatments for severe conditions often neglected or euthanized by others.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Oncology & Chemotherapy:</strong> Specialized Vincristine intravenous chemotherapy protocols for Transmissible Venereal Tumours (TVT).
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Intensive Dermatological Therapy:</strong> Complete eradication of severe demodectic & sarcoptic mange through weekly medicated dips and skin barrier repair.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Surgery & Wound Debridement:</strong> Deep cleaning of chronic maggotted wounds, bilateral otitis flushing, and corrective orthopedic care.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/rescues/rescue-sapna-tvt" className="btn btn-secondary btn-sm">
                <span>See Sapna's Chemo Case</span>
                <ArrowRight size={14} />
              </Link>
              <button 
                type="button" 
                onClick={() => onOpenDonate(3500)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Sponsor a Chemo Session (₹3,500)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/rescues/sapna-treatment.png" 
                alt="Sapna undergoing IV Chemotherapy at veterinary clinic"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Veterinary clinic IV chemotherapy treatment session</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Daily Feeding Drives */}
      <section className="pillar-detail-section" id="feeding-drives">
        <div className="container pillar-detail-grid">
          <div className="pillar-text-content">
            <h2 className="pillar-heading heading-display">
              3. Daily Sustenance & Community Feeding Drives
            </h2>
            <p className="pillar-summary">
              Consistent, high-protein cooked nutrition delivered to street dog packs across industrial and desolate stretches of Bengaluru.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Freshly Cooked Wholesome Meals:</strong> Steamed turmeric rice, farm-fresh eggs, nutrient broth, and puppy kibble cooked in heavy cauldrons daily.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Zero Street Litter:</strong> Distributed in clean reusable bowls or biodegradable leaves, cleaned up immediately by our volunteers.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Daily Health Monitoring:</strong> Feeding doubles as an active surveillance patrol to detect new injuries, mange outbreaks, or motherless litters.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/feeding" className="btn btn-secondary btn-sm">
                <span>Explore Feeding Programme</span>
                <ArrowRight size={14} />
              </Link>
              <button 
                type="button" 
                onClick={() => onOpenDonate(500)}
                className="btn btn-primary btn-sm"
              >
                <Utensils size={14} />
                <span>Sponsor 10 Meals (₹500)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/feeding/feeding-cauldron-boot.jpeg" 
                alt="Mobile feeding vehicle with giant cauldrons of hot cooked food"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Mobile feeding vehicle packed with large food cauldrons</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Boarding & Rehoming */}
      <section className="pillar-detail-section alt-bg" id="lifelong-boarding">
        <div className="container pillar-detail-grid reverse">
          <div className="pillar-text-content">
            <h2 className="pillar-heading heading-display">
              4. Lifelong Safe Boarding & Responsible Rehoming
            </h2>
            <p className="pillar-summary">
              Providing safe haven and foster care for animals unable to survive on the streets, paired with thorough home checks for adoptions.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Safe Boarding Haven:</strong> Secure, clean enclosures with grass yards, daily walks, and dedicated caregivers (like Siddu's boarding home).
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Responsible Adoption Screening:</strong> We conduct rigorous home checks, adopter interviews, and trial periods—never handing animals to unvetted parties.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Lifelong Commitment:</strong> If an animal cannot be adopted, they remain in our safe boarding for life with love and dignity.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/rescues/siddu-mange-recovery" className="btn btn-secondary btn-sm">
                <span>View Siddu's Boarding Life</span>
                <ArrowRight size={14} />
              </Link>
              <button 
                type="button" 
                onClick={() => onOpenDonate(5000)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Sponsor Monthly Boarding (₹5,000)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/rescues/siddu-recovered.png" 
                alt="Siddu happy and healthy in his yellow bandana at safe boarding"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Siddu enjoying his peaceful, protected life in safe boarding</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
