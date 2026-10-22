import React, { useState } from 'react';
import { ShieldCheck, Search, Filter } from 'lucide-react';
import RescueCard from '../components/RescueCard';
import rescuesData from '../data/rescues.json';
import './RescuesPage.css';

export default function RescuesPage({ onOpenDonate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRescues = rescuesData.filter((rescue) => {
    const isRecovered = rescue.statusCode === 'recovered' || rescue.statusBadge?.toLowerCase().includes('recover') || rescue.statusBadge?.toLowerCase().includes('adopt');
    const isActive = rescue.statusCode === 'active' || !isRecovered;

    const matchesFilter = 
      activeFilter === 'all' ||
      (activeFilter === 'active' && isActive) ||
      (activeFilter === 'recovered' && isRecovered);

    const nameStr = (rescue.animalName || rescue.name || '').toLowerCase();
    const breedStr = (rescue.species || rescue.breed || '').toLowerCase();
    const diagStr = (rescue.diagnosis || '').toLowerCase();
    const titleStr = (rescue.title || '').toLowerCase();
    const q = searchQuery.toLowerCase().trim();

    const matchesSearch = !q || nameStr.includes(q) || breedStr.includes(q) || diagStr.includes(q) || titleStr.includes(q);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="rescues-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title heading-display">
            Latest Rescues & Field Updates Archive
          </h1>
          <p className="page-hero-subtitle text-lead">
            Every rescue is backed by verified clinical evidence, original photographs, and ongoing progress updates. No stock photography, no AI models, no exaggerated claims.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="rescues-filter-section">
        <div className="container">
          <div className="filter-controls-bar glass-panel">
            {/* Filter Tabs */}
            <div className="filter-tabs-group" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'all'}
                className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Stories ({rescuesData.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'active'}
                className={`filter-tab-btn ${activeFilter === 'active' ? 'active' : ''}`}
                onClick={() => setActiveFilter('active')}
              >
                Under Active Care ({rescuesData.filter((r) => r.statusCode === 'active').length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'recovered'}
                className={`filter-tab-btn ${activeFilter === 'recovered' ? 'active' : ''}`}
                onClick={() => setActiveFilter('recovered')}
              >
                Fully Recovered ({rescuesData.filter((r) => r.statusCode === 'recovered').length})
              </button>
            </div>

            {/* Search Input */}
            <div className="search-input-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by dog name, diagnosis, or breed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search rescue stories"
              />
            </div>
          </div>

          {/* Rescues Grid */}
          {filteredRescues.length > 0 ? (
            <div className="grid-3 rescues-archive-grid">
              {filteredRescues.map((rescue) => (
                <RescueCard
                  key={rescue.id}
                  rescue={rescue}
                  onSupport={(r) => onOpenDonate(r.statusCode === 'recovered' ? 5000 : 3500)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-results-box">
              <h3>No rescue stories matched your search.</h3>
              <p>Try clearing your search query or switching to "All Stories".</p>
              <button
                type="button"
                onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                className="btn btn-secondary btn-sm mt-4"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Transparency Footer Strip */}
          <div className="archive-transparency-box">
            <ShieldCheck size={20} color="#15803D" />
            <div>
              <strong>Strict Clinical Evidence Policy:</strong> Every story published in this archive is cross-referenced with veterinary bills, treatment charts, and date-stamped photographic evidence from our Bengaluru volunteers.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
