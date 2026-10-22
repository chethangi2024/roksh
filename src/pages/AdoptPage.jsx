import React, { useState } from 'react';
import { Heart, Search, Filter, ShieldCheck, CheckCircle2, MessageSquare, Phone, Info, Sparkles, ArrowRight } from 'lucide-react';
import { adoptionDogs } from '../data/adoption';
import AdoptionCard from '../components/AdoptionCard';
import PosterModal from '../components/PosterModal';
import './AdoptPage.css';

export default function AdoptPage({ onOpenDonate }) {
  const [selectedDog, setSelectedDog] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredDogs = adoptionDogs.filter((dog) => {
    // Category filter
    let matchesCategory = true;
    if (categoryFilter === 'puppies') {
      matchesCategory = dog.age.toLowerCase().includes('days') || dog.age.toLowerCase().includes('45');
    } else if (categoryFilter === 'young') {
      matchesCategory = dog.age.toLowerCase().includes('month');
    } else if (categoryFilter === 'adult') {
      matchesCategory = dog.age.toLowerCase().includes('year');
    }

    // Gender filter
    let matchesGender = true;
    if (genderFilter !== 'all') {
      matchesGender = dog.gender.toLowerCase() === genderFilter.toLowerCase();
    }

    // Search query
    const q = searchQuery.toLowerCase().trim();
    const nameMatch = dog.name.toLowerCase().includes(q);
    const ageMatch = dog.age.toLowerCase().includes(q);
    const descMatch = (dog.description || '').toLowerCase().includes(q);
    const tagMatch = (dog.tagline || '').toLowerCase().includes(q);
    const matchesSearch = !q || nameMatch || ageMatch || descMatch || tagMatch;

    return matchesCategory && matchesGender && matchesSearch;
  });

  return (
    <div className="adopt-page">
      {/* Hero Header */}
      <section className="adopt-hero-section">
        <div className="container">
          <h1 className="adopt-hero-title heading-display">
            Adopt a Best Friend. <span className="text-gold">Change Two Lives Forever.</span>
          </h1>

          <p className="adopt-hero-subtitle text-lead">
            Every animal featured below is under Roksh Samsthe Foundation's care and seeking a safe, compassionate forever home. Browse every original adoption poster below with full medical verification and temperament notes.
          </p>
        </div>
      </section>

      {/* Main Adoption Gallery Section */}
      <section className="adopt-gallery-section" id="gallery">
        <div className="container">
          {/* Controls Bar: Filters & Search */}
          <div className="adopt-filter-bar glass-panel">
            {/* Category Tabs */}
            <div className="adopt-tabs-group" role="tablist" aria-label="Filter dogs by age">
              <button
                type="button"
                role="tab"
                aria-selected={categoryFilter === 'all'}
                className={`adopt-tab-btn ${categoryFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCategoryFilter('all')}
              >
                All Dogs ({adoptionDogs.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={categoryFilter === 'puppies'}
                className={`adopt-tab-btn ${categoryFilter === 'puppies' ? 'active' : ''}`}
                onClick={() => setCategoryFilter('puppies')}
              >
                Puppies (45 Days)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={categoryFilter === 'young'}
                className={`adopt-tab-btn ${categoryFilter === 'young' ? 'active' : ''}`}
                onClick={() => setCategoryFilter('young')}
              >
                Young Pups (4–6 Mo)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={categoryFilter === 'adult'}
                className={`adopt-tab-btn ${categoryFilter === 'adult' ? 'active' : ''}`}
                onClick={() => setCategoryFilter('adult')}
              >
                Adults & Teens
              </button>
            </div>

            {/* Gender and Search Controls */}
            <div className="adopt-subcontrols">
              <div className="gender-selector-wrap">
                <span className="control-label">Gender:</span>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="gender-select"
                  aria-label="Filter by gender"
                >
                  <option value="all">All Genders</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="adopt-search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by dog name or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search dogs available for adoption"
                />
              </div>
            </div>
          </div>

          {/* Active Filter Note */}
          <div className="gallery-count-row">
            <span className="count-text">
              Showing <strong>{filteredDogs.length}</strong> of {adoptionDogs.length} verified adoption profiles
            </span>
            <span className="mobile-tap-hint">
              💡 Tip: Tap on any poster card to enlarge and read full details.
            </span>
          </div>

          {/* Responsive Gallery Grid */}
          {filteredDogs.length > 0 ? (
            <div className="adopt-posters-grid">
              {filteredDogs.map((dog) => (
                <AdoptionCard
                  key={dog.id}
                  dog={dog}
                  onSelect={(d) => setSelectedDog(d)}
                />
              ))}
            </div>
          ) : (
            <div className="adopt-empty-state glass-panel">
              <Info size={40} className="text-muted mb-2" />
              <h3 className="text-lg font-bold">No dogs match your selected filters</h3>
              <p className="text-muted text-sm mb-4">Try clearing your search query or selecting "All Dogs" to see all 13 rescues available for adoption.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => { setCategoryFilter('all'); setGenderFilter('all'); setSearchQuery(''); }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Adoption Process & Policy Section */}
      <section className="adopt-process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How the Adoption Process Works</h2>
            <p className="section-description">
              At Roksh Samsthe Foundation, we view adoption as a lifelong commitment. We never hand over animals to unvetted parties, ensuring each dog finds a safe, affectionate forever family.
            </p>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-card">
              <span className="step-number">01</span>
              <h3 className="step-title">Initial Enquiry & Poster Review</h3>
              <p className="step-text">
                Browse our verified posters, pick a dog matching your lifestyle, and send a message via WhatsApp or telephone directly to the adoption coordinator.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-number">02</span>
              <h3 className="step-title">Adopter Conversation & Screening</h3>
              <p className="step-text">
                Our team conducts a friendly conversation regarding your family setup, previous pet experience, housing arrangements, and daily schedule.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-number">03</span>
              <h3 className="step-title">Home Check & Meet-and-Greet</h3>
              <p className="step-text">
                We organize a meet-and-greet with the dog and perform a basic safety check (balcony netting, secure gate, calm space) to ensure the animal's security.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-number">04</span>
              <h3 className="step-title">Trial Period & Lifelong Support</h3>
              <p className="step-text">
                Every adoption includes a trial adjustment period, complete medical handover (vaccination booklet, deworming history), and continuous guidance from our volunteers.
              </p>
            </div>
          </div>

          {/* Adoption FAQ / Helpline Box */}
          <div className="adopt-helpline-box glass-panel">
            <div className="helpline-text-side">
              <span className="helpline-tag">Adoption Inquiries & Guidance</span>
              <h3 className="helpline-title">Have Questions About Adoption?</h3>
              <p className="helpline-desc">
                Whether you're adopting for the first time or introducing a second pet to your home, our experienced adoption team is here to guide you every step of the way.
              </p>
            </div>
            <div className="helpline-action-side">
              <a
                href="https://wa.me/917204004104?text=Hi%20Roksh%20Team%2C%20I%20have%20questions%20regarding%20dog%20adoptions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg flex-center gap-2"
                id="adopt-page-helpline-wa"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Adoption Helpline (7204004104)</span>
              </a>
              <a
                href="tel:7204004104"
                className="btn btn-secondary btn-md flex-center gap-2"
              >
                <Phone size={16} />
                <span>Call Helpline: 7204004104</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tap-to-Enlarge Modal */}
      {selectedDog && (
        <PosterModal
          dog={selectedDog}
          onClose={() => setSelectedDog(null)}
        />
      )}
    </div>
  );
}
