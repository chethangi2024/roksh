import React from 'react';
import { Heart, Compass, Shield, Users, CheckCircle2 } from 'lucide-react';
import { organizationData } from '../data/organization';

export default function AboutRoksh({ onOpenVolunteer }) {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <span>Who We Are • Our Roots</span>
          </div>
          <h2>Founded on One Simple Belief: Every Life Matters</h2>
          <p>
            Roksh Samsthe Foundation is an animal welfare initiative committed to rescuing, healing, and protecting vulnerable animals across Bengaluru.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          {/* Left Column: Mission & Vision */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--amber-700)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Compass size={18} />
                <span>Our Vision</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                "{organizationData.vision}"
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: 1.7 }}>
                We envision a society where street animals are no longer viewed as nuisances or abandoned when sick, but treated as valued community companions with protection and respect.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#15803D', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Heart size={18} />
                <span>Our Mission</span>
              </div>
              <p style={{ fontSize: '0.975rem', lineHeight: 1.7 }}>
                {organizationData.mission}
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={18} color="var(--amber-600)" />
                Our Core Operating Commitments:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#15803D" />
                  <span><strong>100% Genuine Evidence:</strong> We publish real clinical photos only.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#15803D" />
                  <span><strong>Responsible Medicine:</strong> Licensed veterinary doctors and prescribed chemo protocols.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#15803D" />
                  <span><strong>Safe Rehoming & Boarding:</strong> Safe lifelong shelter for dogs who cannot return to streets.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '8px solid #FFFFFF',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <img
                src="/assets/feeding/cauldrons-boot.jpeg"
                alt="Roksh Samsthe Foundation field volunteer team preparing meals"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Overlapping Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'var(--bg-dark)',
                color: '#FFFFFF',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <h5 style={{ margin: 0, fontSize: '1rem', color: '#FFFFFF', fontWeight: 700 }}>
                  Grassroots Animal Care in Bengaluru
                </h5>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
                  Driven by real compassion and everyday citizens.
                </p>
              </div>

              <button
                onClick={onOpenVolunteer}
                className="btn btn-primary btn-sm"
              >
                <Users size={15} />
                <span>Join Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
