import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenDonate, onExploreRescues }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content Column */}
          <div className="hero-content">
            <div className="section-pill">
              <span className="live-beacon"></span>
              <span>Bengaluru Animal Rescue & Medical Welfare</span>
            </div>

            <h1 className="hero-title">
              Every voiceless life deserves <span className="highlight-amber">healing, dignity</span> and a second chance.
            </h1>

            <p className="hero-lead">
              From emergency street rescues and critical cancer care to daily feeding drives across Bengaluru, Roksh Samsthe Foundation turns compassion into real, verified action. Every photo here is real. Every animal has a name.
            </p>

            <div className="hero-actions">
              <button onClick={onOpenDonate} className="btn btn-primary btn-lg">
                <Heart size={20} fill="#121316" />
                <span>Donate & Save a Life</span>
              </button>

              <button onClick={onExploreRescues} className="btn btn-secondary btn-lg">
                <span>Explore Recent Rescues</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust & Transparency Strip */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <CheckCircle2 size={18} color="#15803D" />
                <span>100% Genuine Rescues</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={18} color="#D98205" />
                <span>Direct Bank & Verified UPI</span>
              </div>
              <div className="trust-item">
                <Activity size={18} color="#2563EB" />
                <span>Real-Time Medical Updates</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="hero-visual-frame">
            <img
              src="/assets/rescues/sapna-hero.jpeg"
              alt="Sapna, a rescued golden labrador smiling upright in her camouflage harness during recovery"
              className="hero-img"
              loading="eager"
            />

            {/* Authentic Photographic Verification Overlay */}
            <div className="hero-badge-overlay">
              <div className="hero-badge-header">
                <span className="badge badge-amber">
                  <span className="live-beacon"></span>
                  LATEST FIELD UPDATE • OCTOBER 2026
                </span>
                <span className="text-xs" style={{ color: '#E5E7EB', fontWeight: 600 }}>
                  Bengaluru, KA
                </span>
              </div>
              <h4 style={{ margin: '0.35rem 0', color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700 }}>
                Sapna — Rescued with TVT Cancer
              </h4>
              <p style={{ margin: 0, fontSize: '0.825rem', color: '#D1D5DB', lineHeight: 1.4 }}>
                Discarded after breeding, now smiling and receiving active chemotherapy under Roksh's care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
