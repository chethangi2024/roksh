import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenDonate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="brand-logo-link" aria-label="Roksh Samsthe Foundation Home">
          <img 
            src="/assets/logo.png" 
            alt="Roksh Samsthe Foundation Logo" 
            className="brand-logo-img" 
            width="52" 
            height="52" 
          />
          <div className="brand-titles">
            <span className="brand-name">Roksh Samsthe</span>
            <span className="brand-tagline">Foundation • Bengaluru</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/our-work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Our Work
          </NavLink>
          <NavLink to="/rescues" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Latest Rescues
          </NavLink>
          <NavLink to="/feeding" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Feeding
          </NavLink>
          <NavLink to="/get-involved" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Get Involved
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          <button 
            type="button" 
            onClick={onOpenDonate}
            className="btn btn-primary btn-sm donate-cta-btn"
            id="header-donate-btn"
            aria-label="Open donation options"
          >
            <Heart size={16} fill="currentColor" strokeWidth={0} />
            <span>Donate</span>
          </button>

          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-links">
            <NavLink to="/" end className="mobile-nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="mobile-nav-link">
              About Roksh
            </NavLink>
            <NavLink to="/our-work" className="mobile-nav-link">
              Our 4 Pillars of Work
            </NavLink>
            <NavLink to="/rescues" className="mobile-nav-link">
              Latest Rescues Archive
            </NavLink>
            <NavLink to="/feeding" className="mobile-nav-link">
              Feeding Programme
            </NavLink>
            <NavLink to="/get-involved" className="mobile-nav-link">
              Get Involved & Volunteer
            </NavLink>
            <NavLink to="/contact" className="mobile-nav-link">
              Contact & Distress Reporting
            </NavLink>
            <NavLink to="/donate" className="mobile-nav-link text-gold font-bold">
              Donate & Transparency Vault
            </NavLink>
          </nav>

          <div className="mobile-drawer-footer">
            <button 
              type="button" 
              onClick={() => { setIsMobileMenuOpen(false); onOpenDonate(); }}
              className="btn btn-primary btn-lg w-full"
            >
              <Heart size={18} fill="currentColor" strokeWidth={0} />
              <span>Donate via Instant UPI</span>
            </button>
            <p className="mobile-trust-note">
              <ShieldCheck size={14} color="#15803D" />
              100% Genuine Rescues • IDFC First Bank: roksh@idfcbank
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
