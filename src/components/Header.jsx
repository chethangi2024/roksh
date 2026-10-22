import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, PhoneCall, ShieldCheck, MessageCircle } from 'lucide-react';
import { organizationData } from '../data/organization';

export default function Header({ activeSection, onNavigate, onOpenDonate, onOpenAdmin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'latest-rescue', label: 'Latest Rescue' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'rescues-archive', label: 'All Rescues' },
    { id: 'feeding', label: 'Feeding Drives' },
    { id: 'about', label: 'About Roksh' },
    { id: 'volunteer', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="brand-link"
          >
            <img
              src="/assets/logo.png"
              alt="Roksh Samsthe Foundation Official Logo"
              className="brand-logo-img"
            />
            <div className="brand-text-block">
              <span className="brand-name">ROKSH SAMSTHE</span>
              <span className="brand-sub">Foundation • Bengaluru</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Header Action Buttons */}
          <div className="header-actions">
            {/* Field Desk Admin Quick Button */}
            <button
              onClick={onOpenAdmin}
              className="btn btn-secondary btn-sm"
              title="Open Roksh Field Desk / Content Publishing"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
            >
              <ShieldCheck size={14} className="text-amber" />
              <span>Field Desk</span>
            </button>

            {/* Primary Donate CTA */}
            <button
              onClick={onOpenDonate}
              className="btn btn-primary btn-sm"
              style={{ padding: '0.55rem 1.15rem' }}
            >
              <Heart size={15} fill="#121316" />
              <span>Donate</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src="/assets/logo.png"
                  alt="Roksh Samsthe Foundation"
                  style={{ width: '42px', height: '42px', borderRadius: '50%' }}
                />
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem' }}>ROKSH SAMSTHE</h4>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--amber-600)' }}>
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '0.5rem', color: 'var(--text-muted)' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    color: activeSection === item.id ? 'var(--amber-600)' : 'var(--text-main)',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Heart size={18} fill="#121316" />
              <span>Donate Online (UPI / Bank)</span>
            </button>

            <a
              href={organizationData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', borderColor: '#22C55E', color: '#15803D' }}
            >
              <MessageCircle size={18} />
              <span>Report Animal on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="btn btn-dark btn-sm"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <ShieldCheck size={16} />
              <span>Volunteer Field Desk Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
