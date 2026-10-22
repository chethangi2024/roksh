import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Utensils, 
  AlertCircle,
  Copy,
  Check,
  Play
} from 'lucide-react';
import ImageComparisonSlider from '../components/ImageComparisonSlider';
import RescueCard from '../components/RescueCard';
import FeedingCard from '../components/FeedingCard';
import { useToast } from '../context/ToastContext';
import rescuesData from '../data/rescues.json';
import feedingData from '../data/feeding.json';
import siteContent from '../data/siteContent.json';
import './HomePage.css';

export default function HomePage({ onOpenDonate }) {
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  // Latest rescue record (Sapna)
  const latestRescue = rescuesData.find((r) => r.isLatest) || rescuesData[0];
  // Other featured rescues (Siddu, Chinna, Puppies)
  const otherRescues = rescuesData.filter((r) => r.id !== latestRescue.id);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteContent.banking.upiId);
    setCopied(true);
    showToast('UPI ID copied: ' + siteContent.banking.upiId);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="home-page">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow-badge">
              <span className="live-dot" />
              <span>Verified Animal Welfare Initiative • Bengaluru</span>
            </div>

            <h1 className="hero-heading heading-display">
              Every Voiceless Life Deserves <span className="text-gold">Healing, Dignity</span> & a Second Chance.
            </h1>

            <p className="hero-description text-lead">
              From emergency street rescues and specialized cancer chemotherapy to daily sustenance feeding drives across Bengaluru, Roksh Samsthe Foundation turns compassion into tangible medical and community relief.
            </p>

            <div className="hero-cta-group">
              <button 
                type="button" 
                onClick={() => onOpenDonate()} 
                className="btn btn-primary btn-lg"
                id="hero-donate-btn"
              >
                <Heart size={18} fill="currentColor" strokeWidth={0} />
                <span>Donate & Save a Life</span>
              </button>

              <Link to="/rescues" className="btn btn-secondary btn-lg">
                <span>Explore Rescues Archive</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Verified Trust Strip */}
            <div className="hero-trust-strip">
              <div className="trust-item">
                <ShieldCheck size={18} color="#15803D" />
                <span>100% Authentic Photos Only</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={18} color="#15803D" />
                <span>Direct IDFC First Bank / UPI</span>
              </div>
              <div className="trust-item">
                <Activity size={18} color="#15803D" />
                <span>Verified Veterinary Progress</span>
              </div>
            </div>
          </div>

          <div className="hero-media-wrapper">
            <div className="hero-image-card">
              <img 
                src="/assets/rescues/sapna-hero.jpeg" 
                alt="Sapna, a rescued Labrador smiling radiantly in her harness during recovery under Roksh care" 
                className="hero-primary-photo"
              />
              <div className="hero-floating-badge">
                <span className="status-pill active">
                  <span className="status-pill-dot" />
                  Latest Rescue Update: Oct 2026
                </span>
                <h4 className="floating-title">Sapna: TVT Chemotherapy Recovery</h4>
                <p className="floating-sub">Rescued from street abandonment • Undergoing active cancer care</p>
                <Link to="/rescues/sapna-tvt-recovery" className="floating-link">
                  Read Sapna's Journey &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SIGNATURE FEATURE — LATEST RESCUES & FIELD UPDATES
          (Directly below Hero as strictly specified by PRD Section 7.2)
          ========================================================================= */}
      <section className="latest-rescue-feature-section" id="latest-rescue">
        <div className="container">
          <div className="latest-rescue-header">
            <div className="latest-tag-wrapper">
              <span className="latest-pulse-badge">
                <span className="pulse-ping" />
                <span className="pulse-core" />
                LATEST FIELD RESCUE • OCTOBER 2026
              </span>
              <span className="verification-label">
                <ShieldCheck size={14} color="#15803D" />
                Verified Clinical Record
              </span>
            </div>
            <h2 className="latest-rescue-title heading-display">
              {latestRescue.title}
            </h2>
            <p className="latest-rescue-subtitle">
              Demonstrating our ongoing work through genuine photographs, verified rescue dates, and real clinical progress.
            </p>
          </div>

          <div className="latest-rescue-card">
            {/* Split Left: Documentary Visuals */}
            <div className="latest-card-gallery">
              <div className="featured-primary-frame">
                <img 
                  src={latestRescue.heroImage} 
                  alt="Sapna smiling in recovery" 
                  className="featured-frame-img"
                />
                <span className="frame-overlay-tag">Recovery Progress (17 Oct 2026)</span>
              </div>
              <div className="featured-secondary-grid">
                <div className="sub-frame">
                  <img 
                    src="/assets/rescues/sapna-street.png" 
                    alt="Sapna abandoned on street before rescue" 
                    className="sub-frame-img"
                  />
                  <span className="sub-frame-tag">Street Abandonment</span>
                </div>
                <div className="sub-frame">
                  <img 
                    src="/assets/rescues/sapna-treatment.png" 
                    alt="Sapna receiving IV chemotherapy at veterinary clinic" 
                    className="sub-frame-img"
                  />
                  <span className="sub-frame-tag">Clinic Chemotherapy</span>
                </div>
              </div>
            </div>

            {/* Split Right: Story & Clinical Verification */}
            <div className="latest-card-details">
              <div className="latest-status-strip">
                <span className="status-pill active">
                  <span className="status-pill-dot" />
                  Status: {latestRescue.statusBadge}
                </span>
                <span className="rescue-loc-tag">
                  <MapPin size={14} />
                  {latestRescue.location}
                </span>
              </div>

              <div className="rescue-dates-grid">
                <div className="date-cell">
                  <span className="cell-label">Rescue Date</span>
                  <strong className="cell-val">10 October 2026</strong>
                </div>
                <div className="date-cell">
                  <span className="cell-label">Published</span>
                  <strong className="cell-val">17 October 2026</strong>
                </div>
                <div className="date-cell">
                  <span className="cell-label">Last Clinical Check</span>
                  <strong className="cell-val">22 October 2026</strong>
                </div>
              </div>

              <div className="diagnosis-box">
                <span className="diag-label">Confirmed Veterinary Diagnosis</span>
                <p className="diag-text">{latestRescue.diagnosis}</p>
              </div>

              <div className="story-summary-text">
                <p>
                  Found abandoned on Bengaluru streets, her body covered in ticks, bleeding and silently suffering after what appears to be years of forced breeding. Left behind when she needed medical care the most.
                </p>
                <p>
                  Her intravenous chemotherapy has officially commenced under specialized veterinary care. She is finally pain-managed, eating well, and smiling as her healing journey unfolds.
                </p>
              </div>

              <div className="latest-actions-row">
                <Link to={`/rescues/${latestRescue.id}`} className="btn btn-dark">
                  <span>View Full Documentary & Updates</span>
                  <ArrowRight size={16} />
                </Link>

                <button 
                  type="button" 
                  onClick={() => onOpenDonate(3500)}
                  className="btn btn-primary"
                >
                  <Heart size={16} fill="currentColor" strokeWidth={0} />
                  <span>Support Sapna's Chemo (₹3,500)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VERIFIED IMPACT & TRANSPARENCY METRICS
          (PRD: Only verified figures, no exaggerated marketing claims)
          ========================================================================= */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Ground Realities</span>
            <h2 className="section-title">Measurable Care, Zero Exaggeration</h2>
            <p className="section-description">
              We believe genuine animal welfare is built on transparent ground evidence. Here is how Roksh Samsthe Foundation serves Bengaluru's animals every single day.
            </p>
          </div>

          <div className="grid-4 impact-metrics-grid">
            {siteContent.impactMetrics.map((metric, i) => (
              <div key={i} className="impact-card">
                <span className="impact-number">{metric.value}</span>
                <h3 className="impact-label">{metric.label}</h3>
                <p className="impact-detail">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT WE DO (OUR 4 CORE PILLARS)
          ========================================================================= */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Pillars of Service</span>
            <h2 className="section-title">Our Work in Action</h2>
            <p className="section-description">
              A comprehensive approach to animal welfare: from the moment of emergency distress call to lifelong recovery and nourishment.
            </p>
          </div>

          <div className="grid-4 pillars-grid">
            {siteContent.pillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card card-hover">
                <div className="pillar-media">
                  <img src={pillar.image} alt={pillar.title} className="pillar-img" loading="lazy" />
                </div>
                <div className="pillar-body">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.shortDesc}</p>
                  <Link to="/our-work" className="pillar-link">
                    <span>Learn how we work</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED RESCUE STORIES (BEFORE & AFTER RECOVERY)
          ========================================================================= */}
      <section className="transformations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Documentary Proof</span>
            <h2 className="section-title">The Power of Timely Intervention</h2>
            <p className="section-description">
              Drag the interactive slider below to witness how medical care and nutrition completely transformed Siddu from severe mange to joyful boarding.
            </p>
          </div>

          <div className="transformation-showcase">
            <div className="slider-wrapper-box">
              <ImageComparisonSlider
                beforeImage="/assets/rescues/siddu-before.jpg"
                afterImage="/assets/rescues/siddu-recovered.png"
                beforeLabel="Before Rescue: Severe Mange"
                afterLabel="Fully Recovered in Boarding"
                altText="Siddu before and after skin infection treatment"
              />
            </div>

            <div className="transformation-info-box">
              <span className="status-pill recovered">
                <span className="status-pill-dot" />
                Status: Recovered & In Safe Boarding
              </span>
              <h3 className="trans-title heading-editorial">
                Siddu’s Journey: From Raw Pain to Bandana Smiles
              </h3>
              <p className="trans-desc">
                Rescued hairless, emaciated, and suffering from acute generalized mange. Through intensive medicated dips, wound dressings, and love, his coat returned completely. Today he stays at a peaceful boarding facility.
              </p>
              <div className="trans-meta-badges">
                <span><strong>Breed:</strong> Indie Male</span>
                <span><strong>Treatment:</strong> Medicated skin baths & anti-parasitic course</span>
                <span><strong>Current Home:</strong> Long-term boarding facility</span>
              </div>
              <div className="trans-actions">
                <Link to="/rescues/siddu-mange-recovery" className="btn btn-secondary btn-sm">
                  <span>Read Siddu's Full Story</span>
                  <ArrowRight size={14} />
                </Link>
                <button 
                  type="button" 
                  onClick={() => onOpenDonate(5000)}
                  className="btn btn-primary btn-sm"
                >
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                  <span>Sponsor Siddu's Boarding (₹5,000)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Rescues Grid */}
          <div className="other-rescues-header">
            <h3 className="heading-display text-xl font-bold">More Rescued Lives</h3>
            <Link to="/rescues" className="view-all-link">
              <span>View All Verified Stories ({rescuesData.length})</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3 rescues-showcase-grid">
            {otherRescues.map((rescue) => (
              <RescueCard 
                key={rescue.id} 
                rescue={rescue} 
                onSupport={(r) => onOpenDonate(r.id === 'siddu-mange-recovery' ? 5000 : 1500)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE FEEDING PROGRAMME (FIELD SPOTLIGHT)
          ========================================================================= */}
      <section className="feeding-spotlight-section">
        <div className="container">
          <div className="feeding-spotlight-banner">
            <div className="feeding-spotlight-content">
              <span className="feeding-spotlight-tag">
                <Utensils size={14} />
                Daily Sustenance Initiative
              </span>
              <h2 className="feeding-spotlight-title heading-display">
                Nourishing Hundreds of Voiceless Lives Across Bengaluru
              </h2>
              <p className="feeding-spotlight-desc">
                Hunger is the silent crisis street dogs face every day. Our volunteers cook giant cauldrons of hot, protein-rich turmeric rice and boiled eggs, distributing them systematically across commercial and industrial pockets where scraps are nonexistent.
              </p>

              <div className="feeding-quick-stats">
                <div className="f-stat">
                  <strong>150+</strong>
                  <span>Meals Per Drive</span>
                </div>
                <div className="f-stat">
                  <strong>100%</strong>
                  <span>Fresh Cooked Meat & Rice</span>
                </div>
                <div className="f-stat">
                  <strong>Zero</strong>
                  <span>Street Litter Left Behind</span>
                </div>
              </div>

              <div className="feeding-spotlight-ctas">
                <Link to="/feeding" className="btn btn-dark">
                  <span>Explore Feeding Routes & Gallery</span>
                  <ArrowRight size={16} />
                </Link>
                <button 
                  type="button" 
                  onClick={() => onOpenDonate(500)}
                  className="btn btn-primary"
                >
                  <Utensils size={16} />
                  <span>Sponsor 10 Meals (₹500)</span>
                </button>
              </div>
            </div>

            <div className="feeding-spotlight-media">
              <div className="feeding-media-frame">
                <img 
                  src="/assets/feeding/feeding-cauldron-boot.jpeg" 
                  alt="Roksh volunteers serving fresh food from heavy cauldrons in car boot"
                  className="feeding-cauldron-img" 
                />
                <div className="feeding-media-caption">
                  <span>Authentic Field Photograph: Cauldron meal dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HOW YOU CAN GET INVOLVED
          ========================================================================= */}
      <section className="get-involved-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Join the Movement</span>
            <h2 className="section-title">Three Powerful Ways to Help Today</h2>
            <p className="section-description">
              Whether through financial support, donating supplies, or giving your time on the ground, your compassion directly saves lives.
            </p>
          </div>

          <div className="grid-3 involvement-cards">
            {/* Action 1: Donate */}
            <div className="involve-card card-hover">
              <div className="involve-icon-box gold">
                <Heart size={26} color="#B45309" />
              </div>
              <h3 className="involve-card-title">1. Donate Funds via Instant UPI</h3>
              <p className="involve-card-text">
                Support critical chemotherapy vials, emergency ambulance runs, wound antiseptics, and daily feeding cauldrons with direct UPI transfer.
              </p>
              <div className="involve-card-footer">
                <button 
                  type="button" 
                  onClick={() => onOpenDonate()}
                  className="btn btn-primary btn-sm w-full"
                >
                  <span>Donate via UPI (roksh@idfcbank)</span>
                </button>
              </div>
            </div>

            {/* Action 2: Supply Drop-off */}
            <div className="involve-card card-hover">
              <div className="involve-icon-box green">
                <Utensils size={26} color="#15803D" />
              </div>
              <h3 className="involve-card-title">2. Sponsor Food & Medical Supplies</h3>
              <p className="involve-card-text">
                Donate raw rice, eggs, puppy formula, surgical pads, skin ointments, and dog bowls. We coordinate drop-offs in Bengaluru.
              </p>
              <div className="involve-card-footer">
                <Link to="/get-involved#supplies" className="btn btn-secondary btn-sm w-full">
                  <span>View Required Supplies List</span>
                </Link>
              </div>
            </div>

            {/* Action 3: Volunteer */}
            <div className="involve-card card-hover">
              <div className="involve-icon-box dark">
                <Sparkles size={26} color="#121316" />
              </div>
              <h3 className="involve-card-title">3. Volunteer or Foster Care</h3>
              <p className="involve-card-text">
                Join our weekend feeding drives, provide temporary foster warmth to recovering dogs or puppies, or assist with photography and transport.
              </p>
              <div className="involve-card-footer">
                <Link to="/get-involved#volunteer" className="btn btn-secondary btn-sm w-full">
                  <span>Sign Up as a Volunteer</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TRANSPARENCY & DIRECT BANKING VAULT
          ========================================================================= */}
      <section className="bank-vault-section">
        <div className="container">
          <div className="bank-vault-box glass-panel">
            <div className="vault-content">
              <span className="vault-tag">
                <ShieldCheck size={14} color="#15803D" />
                Verified Non-Profit Banking
              </span>
              <h2 className="vault-title heading-display">
                Direct, Transparent Financial Support
              </h2>
              <p className="vault-desc">
                Roksh Samsthe Foundation maintains strict financial integrity. Every rupee donated is accounted for and directed straight to animal medical care and feeding supplies.
              </p>

              <div className="vault-fields-list">
                <div className="vault-field-item">
                  <span className="v-label">Beneficiary Account Name</span>
                  <strong className="v-val">{siteContent.banking.beneficiary}</strong>
                </div>

                <div className="vault-field-item">
                  <span className="v-label">Bank Partner</span>
                  <strong className="v-val">{siteContent.banking.bankName}</strong>
                </div>

                <div className="vault-field-item">
                  <span className="v-label">Official UPI Identifier</span>
                  <div className="v-upi-row">
                    <code className="v-upi-code">{siteContent.banking.upiId}</code>
                    <button 
                      type="button" 
                      onClick={handleCopyUpi} 
                      className="btn-copy-vault"
                      title="Copy UPI ID"
                    >
                      {copied ? <Check size={16} color="#15803D" /> : <Copy size={16} />}
                      <span>{copied ? 'Copied!' : 'Copy UPI ID'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="vault-policy-note">
                <AlertCircle size={15} color="#D97706" />
                <span>
                  <strong>Transparency Note:</strong> {siteContent.banking.taxExemptionNote}
                </span>
              </div>
            </div>

            <div className="vault-qr-side">
              <div className="vault-qr-frame">
                <img 
                  src={siteContent.banking.qrImage} 
                  alt="Official IDFC First Bank QR Code for Roksh Samsthe Foundation"
                  className="vault-qr-image" 
                />
                <span className="vault-qr-text">Scan with any UPI App</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
