import React from 'react';
import { AlertTriangle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DistressBanner() {
  return (
    <aside className="distress-alert-banner" aria-label="Animal Distress Emergency Notice">
      <AlertTriangle size={15} color="#F87171" aria-hidden="true" />
      <span>
        Found an injured or vulnerable animal in Bengaluru?{' '}
        <Link to="/contact#report-distress">View distress reporting protocol</Link> or{' '}
        <a 
          href="https://api.whatsapp.com/send?text=Hello%20Roksh%20Team,%20I%20am%20reporting%20an%20animal%20in%20distress%20in%20Bengaluru:" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Message on WhatsApp
        </a>
      </span>
    </aside>
  );
}
