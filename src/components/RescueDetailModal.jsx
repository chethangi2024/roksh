import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Stethoscope, Activity, Heart, Share2, Check } from 'lucide-react';

export default function RescueDetailModal({ rescue, onClose, onSupportRescue }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!rescue) return null;

  const currentImg = rescue.gallery[activeImgIndex] || rescue.gallery[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-light)',
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className={`badge badge-${rescue.statusColor}`}>
              {rescue.statusBadge}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Case File: {rescue.animalName}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.4rem',
              color: 'var(--text-muted)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: ' clamp(1.5rem, 3vw, 2.25rem)' }}>
          {/* Main Visual Display */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: '#121316', marginBottom: '1.25rem' }}>
            <img
              src={currentImg.url}
              alt={currentImg.caption}
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'contain',
                backgroundColor: '#121316',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#FFFFFF',
                padding: '0.6rem 1rem',
                fontSize: '0.8rem',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span><strong>Phase:</strong> {currentImg.phase}</span>
              <span style={{ opacity: 0.85 }}>{currentImg.caption}</span>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {rescue.gallery.length > 1 && (
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {rescue.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`thumb-btn ${activeImgIndex === idx ? 'active' : ''}`}
                  style={{ width: '64px', height: '64px', flexShrink: 0 }}
                >
                  <img src={img.url} alt={img.caption} />
                </button>
              ))}
            </div>
          )}

          {/* Meta Dates Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={15} />
              <strong>Actual Rescue Date:</strong> {rescue.rescueDate}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={15} />
              <strong>Published:</strong> {rescue.publishedDate}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={15} />
              <strong>Location:</strong> {rescue.location}
            </span>
          </div>

          {/* Story Title */}
          <h2 style={{ fontSize: '1.65rem', marginBottom: '1rem', lineHeight: 1.3 }}>
            {rescue.title}
          </h2>

          {/* Narrative Summary */}
          <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            {rescue.circumstances}
          </p>

          {/* Clinical & Treatment Specifications Box */}
          <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Stethoscope size={18} color="#D98205" />
              Verified Clinical Assessment & Procedures
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <div>
                <strong>Diagnosis:</strong> <span style={{ color: '#BE123C', fontWeight: 600 }}>{rescue.diagnosis}</span>
              </div>
              <div>
                <strong>Medical Care Provided:</strong> {rescue.treatmentProvided}
              </div>
              <div>
                <strong>Current Verified Status:</strong> <span style={{ color: '#15803D', fontWeight: 700 }}>{rescue.currentStatus}</span>
              </div>
              <div>
                <strong>Latest Progress Report:</strong> {rescue.latestUpdate}
              </div>
              <div>
                <strong>Specific Support Needed:</strong> {rescue.supportNeeded}
              </div>
            </div>
          </div>

          {/* Support Fund Bar */}
          {rescue.targetFund && (
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--amber-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--amber-200)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--amber-900)' }}>Medical Care & Sustenance Fund</span>
                <span>₹{rescue.raisedFund.toLocaleString()} of ₹{rescue.targetFund.toLocaleString()} raised</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(245, 166, 35, 0.3)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (rescue.raisedFund / rescue.targetFund) * 100)}%`, height: '100%', backgroundColor: 'var(--amber-500)' }}></div>
              </div>
            </div>
          )}

          {/* Modal Actions Footer */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <button
              onClick={() => {
                onClose();
                onSupportRescue(rescue);
              }}
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '220px' }}
            >
              <Heart size={18} fill="#121316" />
              <span>Sponsor {rescue.animalName}'s Medical Care</span>
            </button>

            <button
              onClick={handleShare}
              className="btn btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              {copied ? <Check size={16} color="#15803D" /> : <Share2 size={16} />}
              <span>{copied ? 'Link Copied!' : 'Share Case'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
