import React, { useState } from 'react';
import { Calendar, MapPin, Activity, Stethoscope, ArrowRight, Heart, Share2, Check } from 'lucide-react';

export default function LatestRescueHighlight({ rescue, onOpenStory, onSupportRescue }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!rescue) return null;

  const currentMedia = rescue.gallery[activeMediaIndex] || rescue.gallery[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '#rescues');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="latest-rescue" className="section signature-rescue-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-left" style={{ marginBottom: '2rem' }}>
          <div className="section-pill">
            <span className="live-beacon"></span>
            <span>Signature Feature • Recent Activity</span>
          </div>
          <h2>Latest Rescues & Field Updates</h2>
          <p>
            Real dogs, real medical files, real outcomes. This section reflects Roksh's most recent verified rescue activity in Bengaluru.
          </p>
        </div>

        {/* Featured Rescue Card */}
        <div className="rescue-featured-card">
          {/* Left Media Column with Interactive Gallery */}
          <div className="rescue-featured-media">
            <img
              src={currentMedia.url}
              alt={currentMedia.caption}
              className="rescue-main-img"
            />

            {/* Media Phase Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(18, 19, 22, 0.85)',
                color: '#FFFFFF',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              Phase: {currentMedia.phase}
            </div>

            {/* Gallery Thumbnail Selector */}
            <div className="rescue-media-gallery-strip">
              {rescue.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`thumb-btn ${activeMediaIndex === idx ? 'active' : ''}`}
                  title={img.caption}
                  aria-label={`View photo ${idx + 1}: ${img.phase}`}
                >
                  <img src={img.url} alt={img.caption} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Information Column */}
          <div className="rescue-featured-info">
            <div>
              {/* Meta Tags Row */}
              <div className="rescue-meta-row">
                <span className="badge badge-amber">
                  <span className="live-beacon"></span>
                  {rescue.statusBadge}
                </span>

                <div className="rescue-date-tag">
                  <Calendar size={15} />
                  <span>Rescued: {rescue.rescueDate}</span>
                </div>

                <div className="rescue-date-tag">
                  <MapPin size={15} />
                  <span>{rescue.location}</span>
                </div>
              </div>

              {/* Story Title */}
              <h3 className="rescue-featured-title">
                {rescue.title}
              </h3>

              {/* Verified Details Box */}
              <div className="rescue-details-box">
                <div className="rescue-detail-row">
                  <span className="rescue-label">Animal Name:</span>
                  <span className="rescue-val" style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                    {rescue.animalName} ({rescue.species})
                  </span>
                </div>

                <div className="rescue-detail-row">
                  <span className="rescue-label">Diagnosis:</span>
                  <span className="rescue-val" style={{ color: '#BE123C', fontWeight: 600 }}>
                    {rescue.diagnosis}
                  </span>
                </div>

                <div className="rescue-detail-row">
                  <span className="rescue-label">Treatment:</span>
                  <span className="rescue-val">
                    {rescue.treatmentProvided}
                  </span>
                </div>

                <div className="rescue-detail-row">
                  <span className="rescue-label">Current Status:</span>
                  <span className="rescue-val" style={{ color: '#15803D', fontWeight: 700 }}>
                    {rescue.currentStatus}
                  </span>
                </div>
              </div>

              {/* Latest Progress Narrative */}
              <div style={{ marginTop: '1rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Activity size={16} color="var(--amber-600)" />
                  Verified Progress Update:
                </h4>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {rescue.latestUpdate}
                </p>
              </div>

              {/* Funding Bar */}
              {rescue.targetFund && (
                <div style={{ marginTop: '1.25rem', padding: '1rem', backgroundColor: 'var(--amber-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--amber-200)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    <span style={{ color: 'var(--amber-900)' }}>Chemotherapy & Care Fund</span>
                    <span style={{ color: 'var(--text-main)' }}>
                      ₹{rescue.raisedFund.toLocaleString()} raised of ₹{rescue.targetFund.toLocaleString()}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(245, 166, 35, 0.25)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${Math.min(100, (rescue.raisedFund / rescue.targetFund) * 100)}%`,
                        height: '100%',
                        backgroundColor: 'var(--amber-500)',
                        borderRadius: '4px',
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={() => onSupportRescue(rescue)}
                className="btn btn-primary"
                style={{ flex: 1, minWidth: '200px' }}
              >
                <Heart size={18} fill="#121316" />
                <span>Support Sapna's Chemo</span>
              </button>

              <button
                onClick={() => onOpenStory(rescue)}
                className="btn btn-secondary"
              >
                <span>Read Full Case Details</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleShare}
                className="btn btn-secondary"
                style={{ padding: '0.75rem', minWidth: 'auto' }}
                title="Share this rescue update"
              >
                {copiedLink ? <Check size={18} color="#15803D" /> : <Share2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
