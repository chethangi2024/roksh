import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, CheckCircle2, ShieldCheck, Stethoscope, Sparkles, AlertCircle } from 'lucide-react';
import './OurWorkPage.css';

export default function OurWorkPage({ onOpenDonate }) {
  return (
    <div className="our-work-page">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title heading-display">
            Our Work: Six Core Welfare Initiatives
          </h1>
          <p className="page-hero-subtitle text-lead">
            Dedicated initiatives across Bengaluru to make life safer, healthier, and kinder for street dogs and cats.
          </p>
        </div>
      </section>

      {/* 1. Rescue and Treatment */}
      <section className="pillar-detail-section" id="rescue-treatment">
        <div className="container pillar-detail-grid">
          <div className="pillar-text-content">
            <span className="pillar-badge-num">Initiative 01</span>
            <h2 className="pillar-heading heading-display">
              1. Rescue and Treatment
            </h2>
            <p className="pillar-summary">
              We respond to emergency calls for injured, sick, and abandoned street dogs and cats across Bengaluru. Working alongside qualified veterinary surgeons, we provide prompt rescue assistance, clinical stabilization, surgeries, specialized treatments, and compassionate rehabilitation until full recovery.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Emergency Street Response:</strong> Gentle, trained field rescue and safe transportation for animals in acute distress.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Clinical Diagnostics & Surgery:</strong> Veterinary triage, blood biochemistry, wound debridement, and specialized medical protocols.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Complete Healing Commitment:</strong> Dedicated follow-up and foster nursing until each animal is fully recovered and pain-free.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/rescues" className="btn btn-secondary btn-sm">
                <span>Explore Rescues Archive</span>
                <ArrowRight size={14} />
              </Link>
              <button 
                type="button" 
                onClick={() => onOpenDonate(5000)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Support Medical Care (₹5,000)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/rescues/sapna-treatment.png" 
                alt="Rescued dog receiving veterinary care and treatment under Roksh care"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Clinical veterinary care and treatment for injured street animals</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feeding Drives */}
      <section className="pillar-detail-section alt-bg" id="feeding-drives">
        <div className="container pillar-detail-grid reverse">
          <div className="pillar-text-content">
            <span className="pillar-badge-num">Initiative 02</span>
            <h2 className="pillar-heading heading-display">
              2. Feeding Drives
            </h2>
            <p className="pillar-summary">
              Through organised community feeding drives, we provide nutritious, freshly cooked meals to community animals in commercial corridors, industrial zones, and areas where natural food sources are limited. These drives also allow our team to conduct regular health checks across street packs.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Freshly Prepared Nutrition:</strong> Wholesome meals cooked with farm-fresh eggs, steamed turmeric rice, and protein broth.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Organised Route Distribution:</strong> Systematic feeding drives targeting commercial and industrial stretches where dogs face hunger.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Pack Health Surveillance:</strong> Regular ground contact helps us spot new injuries, skin infections, and vulnerable puppies early.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <button 
                type="button" 
                onClick={() => onOpenDonate(3000)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Vaccinate & Protect (₹3,000)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/feeding/feeding-cauldron-boot.jpeg" 
                alt="Roksh volunteers preparing and serving wholesome cooked meals during feeding drives"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Organised feeding drives providing wholesome cooked meals in Bengaluru</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Adoption Drives */}
      <section className="pillar-detail-section" id="adoption-drives">
        <div className="container pillar-detail-grid">
          <div className="pillar-text-content">
            <span className="pillar-badge-num">Initiative 03</span>
            <h2 className="pillar-heading heading-display">
              3. Adoption Drives
            </h2>
            <p className="pillar-summary">
              We actively work to find loving, responsible, permanent families for our rescued dogs and cats. Through careful vetting, adopter interviews, home checks, and post-adoption guidance, we ensure every animal enters a safe, committed lifelong home.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Responsible Family Matching:</strong> Rigorous screening, adopter questionnaires, and home visits to ensure optimal placement.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Medical & Behavioral Readiness:</strong> Every candidate is dewormed, vaccinated, and socialized prior to permanent placement.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Lifelong Guidance:</strong> Ongoing support and behavioral advice to help adoptive families and pets settle comfortably.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/adopt" className="btn btn-secondary btn-sm">
                <span>Browse Dogs for Adoption</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/adoption/Siddu@2x.png" 
                alt="Siddu in safe boarding ready for adoption with official poster"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Connecting healthy, rescued animals with vetted, loving adoptive families</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Reflective Collar Drives */}
      <section className="pillar-detail-section alt-bg" id="reflective-collars">
        <div className="container pillar-detail-grid reverse">
          <div className="pillar-text-content">
            <span className="pillar-badge-num">Initiative 04</span>
            <h2 className="pillar-heading heading-display">
              4. Reflective Collar Drives
            </h2>
            <p className="pillar-summary">
              Low visibility during evening and night hours poses a serious hazard to street dogs navigating Bengaluru's busy roads. Our reflective collar initiatives equip community dogs with high-visibility reflective collars that catch headlights from a distance, dramatically reducing vehicular accidents and keeping animals and drivers safer.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Accident Prevention:</strong> High-grade reflective material alerts oncoming drivers up to 100 meters away in low light.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Safe & Comfortable Fit:</strong> Weatherproof collars fitted gently by experienced volunteers without restricting movement or breathing.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Safer Communities:</strong> Protecting animals while simultaneously preventing dangerous two-wheeler skids and collisions.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <button 
                type="button" 
                onClick={() => onOpenDonate(3000)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Support Collar Drives (₹3,000)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-placeholder-frame">
              <ShieldCheck size={48} color="#D97706" />
              <h3 className="placeholder-title">Reflective Collar Initiative</h3>
              <p className="placeholder-sub">
                Equipping Bengaluru street dogs with high-visibility safety collars to prevent nighttime road accidents.
              </p>
              <span className="placeholder-note">Field photo documentation to be supplied by Roksh team</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sterilisation */}
      <section className="pillar-detail-section" id="sterilisation">
        <div className="container pillar-detail-grid">
          <div className="pillar-text-content">
            <span className="pillar-badge-num">Initiative 05</span>
            <h2 className="pillar-heading heading-display">
              5. Sterilisation
            </h2>
            <p className="pillar-summary">
              Humane sterilisation through Animal Birth Control (ABC) is the most effective and compassionate way to stabilize street animal populations. We facilitate and support sterilisation and post-operative recovery in collaboration with accredited veterinary facilities, ensuring safe procedures and proper healing before animals return to their territories.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Humane Population Control:</strong> Prevents the birth of unwanted litters that face severe suffering, starvation, and trauma on the street.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Clinical Standards & Safety:</strong> Partnering with qualified veterinary surgeons for hygienic surgery and pain-managed post-op care.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Territory Release:</strong> Animals are monitored until fully healed and safely returned to their established community areas.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <button 
                type="button" 
                onClick={() => onOpenDonate(5000)}
                className="btn btn-primary btn-sm"
              >
                <Heart size={14} fill="currentColor" strokeWidth={0} />
                <span>Support Sterilisation (₹5,000)</span>
              </button>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-placeholder-frame">
              <Stethoscope size={48} color="#15803D" />
              <h3 className="placeholder-title">Sterilisation & ABC Drives</h3>
              <p className="placeholder-sub">
                Supporting Animal Birth Control initiatives to humanely stabilize community animal populations.
              </p>
              <span className="placeholder-note">Documented in collaboration with accredited veterinary clinics</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Awareness */}
      <section className="pillar-detail-section alt-bg" id="awareness">
        <div className="container pillar-detail-grid reverse">
          <div className="pillar-text-content">
            <span className="pillar-badge-num">Initiative 06</span>
            <h2 className="pillar-heading heading-display">
              6. Awareness
            </h2>
            <p className="pillar-summary">
              Long-term animal welfare requires educated, compassionate communities. We conduct grassroots awareness initiatives to encourage peaceful coexistence, promote responsible animal guardianship, dispel common misconceptions about native Indian dogs, and empower citizens to take action when they witness animal distress.
            </p>
            <div className="pillar-features-list">
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Peaceful Coexistence Education:</strong> Helping neighborhoods understand community dog behavior and humane management.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Celebrating Indie Dogs:</strong> Advocating for the adoption and dignified treatment of native Indian street dogs and cats.
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={18} color="#15803D" />
                <div>
                  <strong>Community Action Guidance:</strong> Educating the public on emergency distress protocols, legal animal protections, and ethical feeding.
                </div>
              </div>
            </div>
            <div className="pillar-action-row">
              <Link to="/get-involved" className="btn btn-secondary btn-sm">
                <span>Get Involved as a Volunteer</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="pillar-visual-side">
            <div className="pillar-image-frame">
              <img 
                src="/assets/feeding/feeding-mother-pups.jpeg" 
                alt="Community volunteers protecting and nurturing mother dog and puppies"
                className="pillar-full-img" 
              />
              <span className="visual-caption">Grassroots community outreach fostering compassion and animal protection</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
