import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Heart, ArrowLeft, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import ImageComparisonSlider from '../components/ImageComparisonSlider';
import rescuesData from '../data/rescues.json';
import './RescueDetailPage.css';

export default function RescueDetailPage({ onOpenDonate }) {
  const { id } = useParams();
  const rescue = rescuesData.find((r) => r.id === id);

  if (!rescue) {
    return <Navigate to="/rescues" replace />;
  }

  const isRecovered = rescue.statusCode === 'recovered';
  const otherRescues = rescuesData.filter((r) => r.id !== rescue.id).slice(0, 2);

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
            <span className={`status-pill ${isRecovered ? 'recovered' : 'active'}`}>
              <span className="status-pill-dot" />
              Verified Status: {rescue.statusBadge}
            </span>
            <span className="detail-loc-badge">
              <MapPin size={14} />
              {rescue.location}
            </span>
            <span className="detail-date-badge">
              <Calendar size={14} />
              Rescue Date: {new Date(rescue.rescueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h1 className="detail-title heading-display">
            {rescue.title}
          </h1>

          <div className="detail-diagnosis-callout">
            <span className="diag-callout-tag">Clinical Assessment & Diagnosis</span>
            <p className="diag-callout-text">{rescue.diagnosis}</p>
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
                beforeLabel={`Before: ${rescue.name} at Rescue`}
                afterLabel={`After: ${rescue.name} Healing`}
                altText={`${rescue.name} before and after transformation`}
              />
              <p className="slider-instruction">
                &larr; Drag the slider above horizontally to compare documentary photos &rarr;
              </p>
            </div>
          ) : (
            <div className="single-detail-frame">
              <img src={rescue.heroImage} alt={rescue.name} className="single-frame-img" />
            </div>
          )}
        </div>
      </section>

      {/* Video Player if available (e.g. October 2026 Puppies) */}
      {rescue.videoUrl && (
        <section className="detail-video-section">
          <div className="container">
            <div className="video-card glass-panel">
              <h3 className="heading-display mb-3">Field Video Recording</h3>
              <p className="text-muted mb-4">Original video documentation captured during the field rescue operation.</p>
              <div className="video-player-frame">
                <video controls className="html-video-element" poster={rescue.heroImage}>
                  <source src={rescue.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Story & Medical Log Split Layout */}
      <section className="detail-body-section">
        <div className="container detail-content-grid">
          {/* Main Story Narrative */}
          <div className="detail-story-col">
            <h2 className="heading-editorial detail-subheading">
              The Journey of {rescue.name}
            </h2>
            <div className="story-paragraphs">
              {rescue.story.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Additional Authentic Documentary Photos */}
            {rescue.additionalImages && rescue.additionalImages.length > 0 && (
              <div className="documentary-gallery-section">
                <h3 className="heading-display text-lg mb-3">Documentary Photo Evidence</h3>
                <div className="documentary-gallery-grid">
                  {rescue.additionalImages.map((imgUrl, i) => (
                    <div key={i} className="doc-photo-card">
                      <img src={imgUrl} alt={`${rescue.name} documentary photo ${i + 1}`} loading="lazy" />
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
                <span>Verified Treatment Protocol</span>
              </h3>
              <ul className="treatment-steps-list">
                {rescue.treatment.map((step, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="#15803D" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support CTA Card */}
            <div className="sidebar-card support-card">
              <span className="support-card-tag">Dedicated Patient Fund</span>
              <h3 className="support-card-title-lg">{rescue.supportGoal}</h3>
              <p className="support-card-desc">
                Your direct contribution sponsors medicines, chemotherapy cycles, sterile bandages, and wholesome nutrition for {rescue.name}.
              </p>
              <div className="urgent-need-box">
                <AlertCircle size={15} color="#BE123C" />
                <span><strong>Urgent Need:</strong> {rescue.urgentNeed}</span>
              </div>
              <button 
                type="button" 
                onClick={() => onOpenDonate(isRecovered ? 5000 : 3500)}
                className="btn btn-primary btn-lg w-full"
              >
                <Heart size={16} fill="currentColor" strokeWidth={0} />
                <span>Support {rescue.name}'s Care</span>
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Stories */}
      <section className="related-stories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">More Rescued Lives</span>
            <h2 className="section-title">Follow Other Healing Journeys</h2>
          </div>
          <div className="grid-2 related-grid">
            {otherRescues.map((item) => (
              <div key={item.id} className="related-rescue-card card-hover">
                <img src={item.heroImage} alt={item.name} className="related-img" />
                <div className="related-content">
                  <span className="related-badge">{item.statusBadge}</span>
                  <h4 className="related-title">
                    <Link to={`/rescues/${item.id}`}>{item.name}: {item.title}</Link>
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
