import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Heart } from 'lucide-react';
import './RescueCard.css';

export default function RescueCard({ rescue, onSupport }) {
  const isRecovered = rescue.statusCode === 'recovered';
  const displayName = rescue.animalName || rescue.name || 'Rescued Friend';
  const displayBreed = rescue.species || rescue.breed || 'Indie';

  const formatRescueDate = (dateVal) => {
    if (!dateVal) return 'Verified Rescue';
    if (/^\d{4}$/.test(dateVal)) return dateVal;
    const d = new Date(dateVal);
    return isNaN(d.getTime()) ? dateVal : d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  };

  return (
    <article className="rescue-card card-hover">
      <div className="rescue-card-media">
        <img 
          src={rescue.heroImage || rescue.recoveryImage} 
          alt={`${displayName} - ${displayBreed}`}
          className="rescue-card-img"
          loading="lazy"
        />
      </div>

      <div className="rescue-card-content">
        <div className="rescue-meta-row">
          <span className="rescue-date-text">
            <Calendar size={13} />
            Rescue: {formatRescueDate(rescue.rescueDate)}
          </span>
          <span className="rescue-loc-text">
            <MapPin size={13} />
            {rescue.location}
          </span>
        </div>

        <h3 className="rescue-card-title">
          <Link to={`/rescues/${rescue.id}`}>
            {displayName}: {rescue.title}
          </Link>
        </h3>

        <p className="rescue-card-diag">
          <strong>Diagnosis:</strong> {rescue.diagnosis}
        </p>

        <p className="rescue-card-summary">
          {rescue.summary}
        </p>

        <div className="rescue-card-actions">
          <Link to={`/rescues/${rescue.id}`} className="btn-read-story">
            <span>Read Full Journey</span>
            <ArrowRight size={15} />
          </Link>
          <button 
            type="button" 
            onClick={() => onSupport && onSupport(rescue)}
            className="btn btn-secondary btn-sm btn-support-card"
            title={`Support ${displayName}`}
          >
            <Heart size={14} color="#BE123C" />
            <span>Support</span>
          </button>
        </div>
      </div>
    </article>
  );
}
