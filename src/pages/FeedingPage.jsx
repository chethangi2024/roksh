import React, { useState } from 'react';
import { Utensils, Calendar, MapPin, CheckCircle2, Heart, ShieldCheck, ArrowRight, Package } from 'lucide-react';
import FeedingCard from '../components/FeedingCard';
import feedingData from '../data/feeding.json';
import './FeedingPage.css';

const SPONSOR_PRESETS = [
  { amount: 500, meals: 10, title: 'Micro Meal Pot', desc: 'Provides 10 warm, high-protein cooked bowls' },
  { amount: 1500, meals: 35, title: 'Pack Sustenance', desc: 'Nourishes an entire street pack with eggs & rice' },
  { amount: 3500, meals: 80, title: 'Mega Cauldron Sponsor', desc: 'Prepares a full 80-meal heavy-gauge cauldron' },
  { amount: 7000, meals: 160, title: 'Full Route Sponsorship', desc: 'Funds an entire weekend industrial feeding drive' },
];

export default function FeedingPage({ onOpenDonate }) {
  const [selectedPreset, setSelectedPreset] = useState(1500);

  return (
    <div className="feeding-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title heading-display">
            Nourishing The Voiceless Every Single Day
          </h1>
          <p className="page-hero-subtitle text-lead">
            Street animals cannot ask for food. Our volunteers prepare and dispatch giant cauldrons of hot, wholesome meals to commercial and industrial zones across Bengaluru.
          </p>
        </div>
      </section>

      {/* Overview & Live Ground Realities */}
      <section className="feeding-intro-section">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2 className="heading-editorial section-heading-alt">
              Fresh Cooked Nutrition, Zero Compromise
            </h2>
            <p>
              Many community dogs in industrial corridors and business hubs depend entirely on daily restaurant waste or compassionate passersby. When offices close on weekends or during monsoon storms, these animals face days of bitter hunger.
            </p>
            <p>
              Roksh Samsthe Foundation steps in with scheduled mobile feeding drives. We cook fresh turmeric rice with boiled farm eggs, high-protein broth, and specialized puppy kibble. We serve animals in hygienic individual bowls to ensure every dog gets their fair share without fights or street litter.
            </p>

            <div className="feeding-core-stats">
              <div className="f-box">
                <span className="f-val">150+</span>
                <span className="f-lbl">Meals Per Scheduled Drive</span>
              </div>
              <div className="f-box">
                <span className="f-val">100%</span>
                <span className="f-lbl">Freshly Prepared Ingredients</span>
              </div>
              <div className="f-box">
                <span className="f-val">Clean</span>
                <span className="f-lbl">Zero Street Pollution</span>
              </div>
            </div>
          </div>

          <div className="intro-media">
            <div className="intro-image-frame">
              <img 
                src="/assets/feeding/feeding-mother-pups.jpeg" 
                alt="Mother dog and young pups eating freshly cooked meal" 
                className="intro-img"
              />
              <span className="intro-caption">Mother dog and pups receiving dedicated nourishment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Feeding Drives Archive */}
      <section className="feeding-drives-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Verified Feeding Drives</h2>
            <p className="section-description">
              Photographic records of our recent and historical community sustenance drives across Bengaluru routes.
            </p>
          </div>

          <div className="grid-3 feeding-grid">
            {feedingData.map((drive) => (
              <FeedingCard 
                key={drive.id} 
                drive={drive} 
                onSponsor={() => onOpenDonate(1500)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sponsor-a-Meal Calculator */}
      <section className="sponsor-meal-section">
        <div className="container">
          <div className="sponsor-meal-card glass-panel">
            <div className="sponsor-content-side">
              <h2 className="heading-display sponsor-title">Sponsor a Meal Pot</h2>
              <p className="sponsor-desc">
                Select an impact tier below to directly fund fresh eggs, rice, broth, and clean feeding bowls for hungry street animals.
              </p>

              <div className="presets-list">
                {SPONSOR_PRESETS.map((preset) => (
                  <div 
                    key={preset.amount} 
                    className={`preset-card ${selectedPreset === preset.amount ? 'selected' : ''}`}
                    onClick={() => setSelectedPreset(preset.amount)}
                  >
                    <div className="preset-radio">
                      <div className="radio-inner" />
                    </div>
                    <div className="preset-details">
                      <div className="preset-head">
                        <strong>₹{preset.amount.toLocaleString('en-IN')}</strong>
                        <span className="text-muted text-sm font-semibold">({preset.meals} Street Meals)</span>
                      </div>
                      <p className="preset-desc-text">{preset.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                type="button" 
                onClick={() => onOpenDonate(selectedPreset)}
                className="btn btn-primary btn-lg w-full mt-4"
              >
                <Utensils size={18} />
                <span>Sponsor This Meal Tier (₹{selectedPreset.toLocaleString('en-IN')})</span>
              </button>
            </div>

            <div className="sponsor-visual-side">
              <div className="sponsor-bowl-frame">
                <img 
                  src="/assets/feeding/feeding-purple-bowl.jpg" 
                  alt="A happy community dog eating from a clean purple feeding bowl"
                  className="sponsor-bowl-img" 
                />
                <div className="bowl-quote-box">
                  <p>“A single bowl of warm food can turn a shivering, frightened dog into a trusting friend.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply & Food Requirements */}
      <section className="food-requirements-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Essential Feeding Supplies Needed</h2>
            <p className="section-description">
              Prefer donating raw food supplies? We gladly accept deliveries or drop-offs in Bengaluru.
            </p>
          </div>

          <div className="grid-3 supplies-grid">
            <div className="supply-item-card">
              <Package size={28} color="#D97706" />
              <h3>Rice & Grains</h3>
              <p>Raw non-basmati rice (25kg / 50kg bags), broken wheat, and rolled oats for easily digestible energy.</p>
            </div>
            <div className="supply-item-card">
              <Utensils size={28} color="#15803D" />
              <h3>Eggs & Protein</h3>
              <p>Trays of fresh farm eggs and certified poultry broth meat for vital amino acids and coat health.</p>
            </div>
            <div className="supply-item-card">
              <ShieldCheck size={28} color="#BE123C" />
              <h3>Puppy Formula & Bowls</h3>
              <p>Puppy starter formula, lactation supplements, and stainless steel / durable feeding bowls.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
