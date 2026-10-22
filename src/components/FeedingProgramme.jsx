import React from 'react';
import { Utensils, Heart, CheckCircle2, MapPin, Sparkles, Clock, Users } from 'lucide-react';
import { feedingData } from '../data/feeding';

export default function FeedingProgramme({ onSponsorFeeding, onVolunteerFeeding }) {
  return (
    <section id="feeding" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <span className="live-beacon"></span>
            <span>Daily Sustenance • Community Drives</span>
          </div>
          <h2>{feedingData.title}</h2>
          <p>{feedingData.overview}</p>
        </div>

        {/* Highlight Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {feedingData.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--amber-50)',
                border: '1px solid var(--amber-200)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: 'var(--amber-700)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--amber-900)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Feeding Photographic Gallery Grid */}
        <div className="feeding-banner-grid">
          {feedingData.gallery.map((photo, idx) => (
            <div key={idx} className="feeding-photo-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={photo.url} alt={photo.title} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(18, 19, 22, 0.75)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {photo.date}
                </div>
              </div>
              <div className="feeding-photo-content">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {photo.title}
                </h4>
                <p style={{ fontSize: '0.825rem', lineHeight: 1.5, color: 'var(--text-muted)', margin: 0 }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nutritional Quality & Sponsorship Tiers Split */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '2.5rem',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {/* Left: Wholesome Nutrition Blueprint */}
          <div>
            <div className="section-pill" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} color="var(--amber-600)" />
              <span>Wholesome & Balanced</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', marginBottom: '1rem' }}>
              What Goes into Every Roksh Feeding Cauldron?
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              We never feed stale waste or plain dry biscuits. Our street packs receive freshly prepared, hot meals formulated for dog health and immunity.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {feedingData.foodRecipe.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    fontWeight: 500,
                  }}
                >
                  <CheckCircle2 size={18} color="#15803D" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem' }}>
              <button onClick={onVolunteerFeeding} className="btn btn-secondary btn-sm">
                <Users size={16} />
                <span>Join Feeding Volunteer Route</span>
              </button>
            </div>
          </div>

          {/* Right: Direct Sponsorship Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Choose a Feeding Sponsorship Tier:
            </h4>

            {feedingData.supportTiers.map((tier, idx) => (
              <div
                key={idx}
                style={{
                  border: '1.5px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'all var(--transition-fast)',
                  backgroundColor: 'var(--bg-canvas)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--amber-700)', fontFamily: 'var(--font-display)' }}>
                      ₹{tier.amount.toLocaleString()}
                    </span>
                    <span className="badge badge-amber">{tier.badge}</span>
                  </div>
                  <h5 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.2rem 0' }}>
                    {tier.title}
                  </h5>
                  <p style={{ fontSize: '0.825rem', margin: 0, color: 'var(--text-muted)' }}>
                    {tier.description}
                  </p>
                </div>

                <button
                  onClick={() => onSponsorFeeding(tier.amount, tier.title)}
                  className="btn btn-primary btn-sm"
                  style={{ flexShrink: 0 }}
                >
                  <Heart size={14} fill="#121316" />
                  <span>Sponsor</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
