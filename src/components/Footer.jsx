import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Copy, Check } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { useToast } from '../context/ToastContext';
import siteContent from '../data/siteContent.json';
import './Footer.css';

export default function Footer({ onOpenDonate }) {
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteContent.banking.upiId);
    setCopied(true);
    showToast('UPI ID copied to clipboard: ' + siteContent.banking.upiId);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Column 1: Organization & Mission */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-brand-link">
            <img 
              src="/assets/logo.png" 
              alt="Roksh Samsthe Foundation" 
              className="footer-logo" 
              width="56" 
              height="56"
            />
            <div>
              <h3 className="footer-brand-name">Roksh Samsthe</h3>
              <span className="footer-brand-sub">Foundation • Bengaluru</span>
            </div>
          </Link>
          <p className="footer-mission-text">
            {siteContent.vision}
          </p>
          <div className="footer-social-links">
            <a 
              href={siteContent.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              aria-label="Roksh Samsthe Foundation Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a 
              href={siteContent.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              aria-label="Roksh Samsthe Foundation Facebook"
            >
              <FacebookIcon size={18} />
            </a>
            <a 
              href={siteContent.social.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              aria-label="Roksh Samsthe Foundation YouTube"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Explore</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/about">About Our Mission</Link></li>
            <li><Link to="/our-work">Our 4 Pillars</Link></li>
            <li><Link to="/rescues">Latest Rescues Archive</Link></li>
            <li><Link to="/feeding">Feeding Programme</Link></li>
            <li><Link to="/adopt">Adopt a Dog</Link></li>
            <li><Link to="/get-involved">Volunteer & Foster</Link></li>
            <li><Link to="/donate">Donate & Transparency</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Distress */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-contact-list">
            <li>
              <Mail size={16} className="contact-icon" />
              <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            </li>
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>{siteContent.contact.location}</span>
            </li>
          </ul>

          <div className="footer-distress-box">
            <span className="distress-box-tag">Animal Emergency</span>
            <p>Report injured or distressed community animals directly via WhatsApp.</p>
            <Link to="/contact" className="distress-box-link">
              Read distress protocol &rarr;
            </Link>
          </div>
        </div>

        {/* Column 4: Verified UPI Support */}
        <div className="footer-col donation-col">
          <h4 className="footer-col-title">Direct Support</h4>
          <div className="footer-upi-card">
            <div className="upi-header">
              <span className="upi-label">Official UPI ID</span>
              <span className="bank-name">IDFC FIRST Bank</span>
            </div>
            <div className="upi-code-row">
              <code className="upi-code">{siteContent.banking.upiId}</code>
              <button 
                type="button" 
                onClick={handleCopyUpi} 
                className="btn-copy-upi"
                title="Copy UPI ID"
                aria-label="Copy UPI ID"
              >
                {copied ? <Check size={16} color="#15803D" /> : <Copy size={16} />}
              </button>
            </div>
            <p className="upi-note">
              Scan with GPay, PhonePe, Paytm, or BHIM.
            </p>
            <button 
              type="button" 
              onClick={onOpenDonate}
              className="btn btn-primary btn-sm w-full"
            >
              <Heart size={15} fill="currentColor" strokeWidth={0} />
              <span>View UPI QR Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Roksh Samsthe Foundation. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Donation Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
