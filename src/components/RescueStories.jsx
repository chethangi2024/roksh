import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Heart, Filter } from 'lucide-react';

export default function RescueStories({ rescues, onOpenStory, onSupportRescue }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredRescues = rescues.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'treatment') return item.statusColor === 'amber';
    if (activeFilter === 'recovered') return item.statusColor === 'emerald';
    if (activeFilter === 'foster') return item.statusColor === 'blue';
    return true;
  });

  return (
    <section id="rescues-archive" className="section" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <span>Verified Case Archive</span>
          </div>
          <h2>Stories of Resilience, Healing & Hope</h2>
          <p>
            Every street dog has an individual story. Here are the documented journeys of animals who refused to give up, and the people who stood by them.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.75rem' }}>
            <button
              onClick={() => setActiveFilter('all')}
              className={`btn btn-sm ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Stories ({rescues.length})
            </button>
            <button
              onClick={() => setActiveFilter('treatment')}
              className={`btn btn-sm ${activeFilter === 'treatment' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Under Active Treatment
            </button>
            <button
              onClick={() => setActiveFilter('recovered')}
              className={`btn btn-sm ${activeFilter === 'recovered' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Fully Recovered
            </button>
            <button
              onClick={() => setActiveFilter('foster')}
              className={`btn btn-sm ${activeFilter === 'foster' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Foster & Observation
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {filteredRescues.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Card Image Frame */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden', backgroundColor: '#18191E' }}>
                <img
                  src={item.heroImage}
                  alt={`${item.animalName} recovery photo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Status Pill Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                  }}
                >
                  <span className={`badge badge-${item.statusColor}`}>
                    {item.statusBadge}
                  </span>
                </div>

                {/* Multiple Photos Indicator */}
                {item.gallery && item.gallery.length > 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {item.gallery.length} Verified Photos
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={13} />
                      {item.rescueDate}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {item.animalName}: {item.title.split(':')[1] || item.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {item.summary.length > 135 ? `${item.summary.slice(0, 135)}...` : item.summary}
                  </p>
                </div>

                <div>
                  {/* Funding Bar if active */}
                  {item.targetFund && item.raisedFund < item.targetFund && (
                    <div style={{ marginBottom: '1.25rem', padding: '0.6rem 0.85rem', backgroundColor: 'var(--amber-50)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--amber-100)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        <span style={{ color: 'var(--amber-900)' }}>Care Fund</span>
                        <span>₹{item.raisedFund.toLocaleString()} of ₹{item.targetFund.toLocaleString()}</span>
                      </div>
                      <div style={{ width: '100%', height: '5px', backgroundColor: 'rgba(245, 166, 35, 0.25)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${(item.raisedFund / item.targetFund) * 100}%`, height: '100%', backgroundColor: 'var(--amber-500)' }}></div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      onClick={() => onOpenStory(item)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: 'var(--amber-700)',
                      }}
                    >
                      <span>Read Journey</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      onClick={() => onSupportRescue(item)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                    >
                      <Heart size={14} color="#BE123C" />
                      <span>Support</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
