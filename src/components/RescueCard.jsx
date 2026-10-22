import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Heart } from 'lucide-react';
import './RescueCard.css';

export default function RescueCard({ rescue, onSupport }) {
  const isRecovered = rescue.statusCode === 'recovered';

  return (
    <article className="rescue-card card-hover">
      <div className="rescue-card-media">
        <img 
          src={rescue.heroImage || rescue.recoveryImage} 
          alt={`${rescue.name} - ${rescue.breed}`}
          className="rescue-card-img"
          loading="lazy"
        />
        <div className="rescue-media-overlay">
          <span className={`status-pill ${isRecovered ? 'recovered' : 'active'}`}>
            <span className="status-pill-dot" />
            {rescue.statusBadge}
          </span>
        </div>
      </div>

      <div className="rescue-card-content">
        <div className="rescue-meta-row">
          <span className="rescue-date-badge">
            <Calendar size={13} />
            Rescue: {new Date(rescue.rescueDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
          </span>
          <span className="rescue-loc-badge">
            <MapPin size={13} />
            {rescue.location}
          </span>
        </div>

        <h3 className="rescue-card-title">
          <Link to={`/rescues/${rescue.id}`}>
            {rescue.name}: {rescue.title}
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
            title={`Support ${rescue.name}`}
          >
            <Heart size={14} color="#BE123C" />
            <span>Support</span>
          </button>
        </div>
      </div>
    </article>
  );
}
