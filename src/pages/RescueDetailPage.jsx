import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Heart, ArrowLeft, ShieldCheck, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import ImageComparisonSlider from '../components/ImageComparisonSlider';
import rescuesData from '../data/rescues.json';
import './RescueDetailPage.css';

export default function RescueDetailPage({ onOpenDonate }) {
  const { id } = useParams();
  const rescue = rescuesData.find((r) => r.id === id);

  if (!rescue) {
    return <Navigate to="/rescues" replace />;
  }

  const displayName = rescue.animalName || rescue.name || 'Rescued Dog';
  const isRecovered = rescue.statusCode === 'recovered' || rescue.statusColor === 'emerald' || rescue.statusColor === 'purple';
  const otherRescues = rescuesData.filter((r) => r.id !== rescue.id).slice(0, 2);

  const formatRescueDate = (dateVal) => {
    if (!dateVal) return 'Verified Record';
    if (/^\d{4}$/.test(dateVal) || /^[A-Za-z]+ \d{4}$/.test(dateVal)) return dateVal;
    const d = new Date(dateVal);
    return isNaN(d.getTime()) ? dateVal : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const storyParagraphs = rescue.story 
    ? rescue.story.split('\n\n')
    : [rescue.circumstances, rescue.latestUpdate, rescue.summary].filter(Boolean);

  const treatmentSteps = rescue.treatment && Array.isArray(rescue.treatment) 
    ? rescue.treatment 
    : [rescue.treatmentProvided].filter(Boolean);

  return (
    <article className="rescue-detail-page">
      {/* Top Breadcrumb & Navigation */}
      <div className="container detail-nav-container">
        <Link to="/rescues" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to All Rescues Archive</span>
        </Link>
      </div>

      {/* Main Header */}
      <header className="detail-header-section">
        <div className="container">
          <div className="detail-meta-strip">
            <span className="detail-loc-text">
              <MapPin size={14} />
              {rescue.location}
            </span>
            <span className="detail-date-text">
              <Calendar size={14} />
              Rescue Date: {formatRescueDate(rescue.rescueDate)}
            </span>
            {rescue.publishedDate && (
              <span className="detail-date-text text-muted">
                <Clock size={14} />
                Published: {rescue.publishedDate}
              </span>
            )}
          </div>

          <h1 className="detail-title heading-display">
            {rescue.title}
          </h1>

          <div className="detail-diagnosis-box">
            <strong>Confirmed Diagnosis:</strong> {rescue.diagnosis}
          </div>
        </div>
      </header>

      {/* Visual Showcase (Before/After Slider or Hero) */}
      <section className="detail-visual-section">
        <div className="container">
          {rescue.beforeImage && rescue.recoveryImage ? (
            <div className="comparison-detail-frame">
              <ImageComparisonSlider
                beforeImage={rescue.beforeImage}
                afterImage={rescue.recoveryImage}
                beforeLabel={`Before: ${displayName} at Rescue`}
                afterLabel={`After: ${displayName} Healing`}
                altText={`${displayName} before and after transformation`}
              />
              <p className="slider-instruction">
                &larr; Drag the slider above horizontally to compare documentary photos &rarr;
              </p>
            </div>
          ) : (
            <div className="single-detail-frame">
              <img src={rescue.heroImage} alt={displayName} className="single-frame-img" />
            </div>
          )}
        </div>
      </section>

      {/* Story & Medical Log Split Layout */}
      <section className="detail-body-section">
        <div className="container detail-content-grid">
          {/* Main Story Narrative */}
          <div className="detail-story-col">
            <h2 className="heading-editorial detail-subheading">
              The Journey of {displayName}
            </h2>
            <div className="story-paragraphs">
              {storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Adoption Link if applicable */}
            {rescue.adoptionId && (
              <div className="detail-adoption-banner glass-panel my-4 p-4 rounded-xl border border-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles size={20} className="text-gold" />
                  <h3 className="font-bold text-lg">{displayName} is Ready for Adoption!</h3>
                </div>
                <p className="text-sm text-muted mb-3">
                  After completing recovery with Roksh, {displayName} is staying in boarding and eager to find a permanent, loving home.
                </p>
                <Link to="/adopt" className="btn btn-primary btn-sm">
                  <span>View {displayName}'s Adoption Poster & Details</span>
                </Link>
              </div>
            )}

            {/* Authentic Documentary Gallery */}
            {rescue.gallery && rescue.gallery.length > 0 && (
              <div className="documentary-gallery-section">
                <h3 className="heading-display text-lg mb-3">Documentary Photo Evidence</h3>
                <div className="documentary-gallery-grid">
                  {rescue.gallery.map((item, i) => (
                    <div key={i} className="doc-photo-card">
                      <img 
                        src={item.url} 
                        alt={item.caption || `${displayName} documentary photo ${i + 1}`} 
                        decoding="async"
                      />
                      {item.caption && (
                        <div className="doc-photo-caption">
                          {item.phase && <span className="doc-phase-tag">{item.phase}</span>}
                          <p>{item.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clinical Treatment & Support Sidebar */}
          <aside className="detail-sidebar-col">
            {/* Treatment Milestones Card */}
            <div className="sidebar-card treatment-card">
              <h3 className="sidebar-card-title">
                <ShieldCheck size={18} color="#15803D" />
                <span>Clinical Treatment Protocol</span>
              </h3>
              <ul className="treatment-steps-list">
                {treatmentSteps.map((step, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="#15803D" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support CTA Card */}
            <div className="sidebar-card support-card">
              <h3 className="support-card-title-lg">
                {rescue.supportGoal || `Sponsor ${displayName}'s Care`}
              </h3>
              <p className="support-card-desc">
                Your direct contribution sponsors medicines, chemotherapy cycles, sterile bandages, and wholesome nutrition for {displayName}.
              </p>
              {rescue.urgentNeed && (
                <div className="urgent-need-box">
                  <AlertCircle size={15} color="#BE123C" />
                  <span><strong>Urgent Need:</strong> {rescue.urgentNeed}</span>
                </div>
              )}
              <button 
                type="button" 
                onClick={() => onOpenDonate(isRecovered ? 5000 : 3500)}
                className="btn btn-primary btn-lg w-full"
              >
                <Heart size={16} fill="currentColor" strokeWidth={0} />
                <span>Support {displayName}'s Care</span>
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Stories */}
      <section className="related-stories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Follow Other Healing Journeys</h2>
          </div>
          <div className="grid-2 related-grid">
            {otherRescues.map((item) => (
              <div key={item.id} className="related-rescue-card card-hover">
                <img src={item.heroImage} alt={item.animalName || item.name} className="related-img" />
                <div className="related-content">
                  <h4 className="related-title">
                    <Link to={`/rescues/${item.id}`}>{item.animalName || item.name}: {item.title}</Link>
                  </h4>
                  <p className="related-summary">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
