import React from 'react';
import { ZoomIn, Check, MessageSquare, Heart, ShieldCheck } from 'lucide-react';
import './AdoptionCard.css';

export default function AdoptionCard({ dog, onSelect }) {
  const phoneNum = dog.contact?.phone || '7204004104';
  const whatsappNum = dog.contact?.whatsapp || ('91' + phoneNum);
  const whatsappText = encodeURIComponent(`Hello Roksh Samsthe Foundation, I saw the adoption poster for ${dog.name} (${dog.age}) and would like to enquire about adopting.`);

  return (
    <article className="adoption-poster-card card-hover" id={`adoption-card-${dog.id}`}>
      {/* Poster Media Box with Aspect Ratio preservation */}
      <div className="poster-media-box" onClick={() => onSelect(dog)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onSelect(dog); }} aria-label={`View full adoption poster for ${dog.name}`}>
        <img 
          src={dog.posterImage} 
          alt={dog.altText || `Adoption poster for ${dog.name}`} 
          className="poster-card-img"
          loading="lazy"
        />
      </div>

      {/* Card Info Content */}
      <div className="adoption-card-content">
        <div className="adoption-header-row">
          <h3 className="adoption-dog-name">{dog.name}</h3>
        </div>

        <div className="adoption-meta-strip">
          <span>{dog.age} • {dog.gender} • {dog.breed || 'Indie'}</span>
        </div>

        {/* Health status as clean text */}
        <p className="adoption-health-text">
          {dog.healthStatus.notes || (
            [
              dog.healthStatus.vaccinated ? 'Vaccinated' : null,
              dog.healthStatus.dewormed ? 'Dewormed' : null,
              dog.healthStatus.deflead ? 'De-flead' : null,
              dog.healthStatus.sterilised ? 'Sterilised' : null,
            ].filter(Boolean).join(' • ')
          )}
        </p>

        <p className="adoption-quote-text">
          "{dog.tagline || (dog.temperament && dog.temperament[0])}"
        </p>

        {/* Interactive Actions */}
        <div className="adoption-card-actions">
          <button 
            type="button" 
            className="btn btn-secondary btn-sm flex-1"
            onClick={() => onSelect(dog)}
            aria-label={`View full poster for ${dog.name}`}
          >
            <ZoomIn size={14} />
            <span>View Poster</span>
          </button>

          <a 
            href={`https://wa.me/${whatsappNum}?text=${whatsappText}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex-1"
            title={`Enquire on WhatsApp about ${dog.name}`}
            aria-label={`Enquire on WhatsApp about adopting ${dog.name}`}
          >
            <MessageSquare size={14} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
