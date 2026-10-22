import React, { useEffect } from 'react';
import { X, Heart, Phone, MessageSquare, ShieldCheck, Check, ZoomIn } from 'lucide-react';
import './PosterModal.css';

export default function PosterModal({ dog, onClose, onOpenEnquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!dog) return null;

  const phoneNum = dog.contact?.phone || '7204004104';
  const whatsappNum = dog.contact?.whatsapp || ('91' + phoneNum);
  const whatsappText = encodeURIComponent(`Hello Roksh Samsthe Foundation, I saw the adoption poster for ${dog.name} (${dog.age}) and would like to learn more about the adoption process.`);

  return (
    <div className="poster-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-dog-title">
      <div className="poster-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          type="button" 
          className="poster-modal-close-btn" 
          onClick={onClose}
          aria-label="Close poster view"
        >
          <X size={20} />
        </button>

        <div className="poster-modal-content-grid">
          {/* Left: Original Poster Image (Fit to Screen, Preserved Aspect Ratio) */}
          <div className="poster-modal-image-col">
            <div className="poster-modal-img-wrapper">
              <img 
                src={dog.posterImage} 
                alt={dog.altText || `Original adoption poster for ${dog.name}`} 
                className="poster-modal-img"
              />
            </div>
          </div>

          {/* Right: Verified Dog Details & Direct Actions */}
          <div className="poster-modal-info-col">
            <div className="poster-modal-header">
              <h2 id="modal-dog-title" className="poster-modal-title heading-display">
                Meet {dog.name}
              </h2>
              <p className="poster-tagline-text">{dog.tagline || 'Looking for a Forever Home'}</p>
              <div className="poster-modal-specs">
                <span>Age: {dog.age}</span>
                <span>•</span>
                <span>Gender: {dog.gender}</span>
                <span>•</span>
                <span>Location: {dog.location || 'Bengaluru'}</span>
              </div>
            </div>

            {/* Health Verification */}
            <div className="poster-health-box">
              <h4 className="box-heading">
                <ShieldCheck size={16} color="#15803D" />
                <span>Health & Medical Information</span>
              </h4>
              <p className="health-notes-text">
                {[
                  dog.healthStatus.vaccinated ? 'Vaccinated' : null,
                  dog.healthStatus.dewormed ? 'Dewormed' : null,
                  dog.healthStatus.deflead ? 'De-flead' : null,
                  dog.healthStatus.sterilised ? 'Sterilised' : null,
                ].filter(Boolean).join(' • ')}
              </p>
              {dog.healthStatus.notes && (
                <p className="health-notes-sub">{dog.healthStatus.notes}</p>
              )}
            </div>

            {/* Temperament Highlights */}
            {dog.temperament && dog.temperament.length > 0 && (
              <div className="poster-temperament-box">
                <h4 className="box-heading">Personality & Temperament</h4>
                <ul className="temperament-list">
                  {dog.temperament.map((trait, idx) => (
                    <li key={idx}>
                      <span className="bullet-heart">♥</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* About / Description */}
            {dog.description && (
              <p className="poster-desc-para">
                {dog.description}
              </p>
            )}

            {/* Direct Action Contacts */}
            <div className="poster-actions-stack">
              <a 
                href={`https://wa.me/${whatsappNum}?text=${whatsappText}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg w-full flex-center gap-2"
                id={`modal-whatsapp-${dog.id}`}
              >
                <MessageSquare size={18} />
                <span>Enquire via WhatsApp ({phoneNum})</span>
              </a>

              <a 
                href={`tel:${phoneNum}`}
                className="btn btn-secondary btn-md w-full flex-center gap-2"
              >
                <Phone size={16} />
                <span>Call Adoption Coordinator ({phoneNum})</span>
              </a>

              <p className="poster-screening-note">
                <strong>Responsible Adoption:</strong> Roksh Samsthe Foundation requires adopter verification, basic home screening, and trial bonding for all adoptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
