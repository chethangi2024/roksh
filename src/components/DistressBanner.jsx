import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './DistressBanner.css';

export default function DistressBanner() {
  return (
    <aside className="distress-alert-banner" aria-label="Animal Distress Emergency Notice">
      <div className="container distress-banner-container">
        <div className="distress-banner-inner">
          <div className="distress-icon">
            <AlertTriangle size={15} color="#F87171" aria-hidden="true" />
          </div>
          <div className="distress-text">
            <span className="distress-lead">Found an injured or vulnerable animal in Bengaluru?</span>
            <div className="distress-links-wrap">
              <Link to="/contact#report-distress" className="distress-link-protocol">
                Reporting protocol
              </Link>
              <span className="distress-sep" aria-hidden="true">•</span>
              <a 
                href="https://api.whatsapp.com/send?text=Hello%20Roksh%20Team,%20I%20am%20reporting%20an%20animal%20in%20distress%20in%20Bengaluru:" 
                target="_blank" 
                rel="noopener noreferrer"
                className="distress-link-whatsapp"
              >
                <span>WhatsApp Desk</span>
                <ArrowRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
