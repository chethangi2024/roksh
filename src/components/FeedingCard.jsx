import React from 'react';
import { Calendar, MapPin, Utensils, CheckCircle2 } from 'lucide-react';
import './FeedingCard.css';

export default function FeedingCard({ drive, onSponsor }) {
  return (
    <article className="feeding-card card-hover">
      <div className="feeding-card-media">
        <img 
          src={drive.primaryImage} 
          alt={drive.title}
          className="feeding-card-img"
          loading="lazy"
        />
        <div className="feeding-badge-overlay">
          <span className="feeding-meals-pill">
            <Utensils size={13} />
            {drive.mealsServed}
          </span>
        </div>
      </div>

      <div className="feeding-card-body">
        <div className="feeding-meta">
          <span className="feeding-meta-item">
            <Calendar size={13} />
            {new Date(drive.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
          <span className="feeding-meta-item">
            <MapPin size={13} />
            {drive.location}
          </span>
        </div>

        <h3 className="feeding-card-title">{drive.title}</h3>

        <p className="feeding-card-menu">
          <strong>Prepared Menu:</strong> {drive.menu}
        </p>

        <p className="feeding-card-desc">{drive.description}</p>

        {drive.highlights && (
          <ul className="feeding-highlights">
            {drive.highlights.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={13} color="#15803D" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="feeding-card-footer">
          <button 
            type="button" 
            onClick={() => onSponsor && onSponsor(drive)}
            className="btn btn-primary btn-sm w-full"
          >
            <Utensils size={14} />
            <span>Sponsor Next Feeding Drive</span>
          </button>
        </div>
      </div>
    </article>
  );
}
