import React from 'react';
import { ArrowRight, ShieldAlert, Stethoscope, UtensilsCrossed, Home } from 'lucide-react';

export default function OurWork({ onSelectWork }) {
  const pillars = [
    {
      id: "emergency-rescue",
      title: "Emergency Rescue & Triage",
      desc: "Responding to emergency alerts across Bengaluru for animals hit by vehicles, victims of deliberate cruelty, or pups trapped in dangerous sites.",
      image: "/assets/rescues/puppy-clinic-oct20.jpeg",
      alt: "Orphaned puppy receiving triage and intake care at clinic",
      tag: "Immediate Response",
      icon: <ShieldAlert size={20} color="#BE123C" />,
    },
    {
      id: "veterinary-care",
      title: "Veterinary Treatment & Chemo",
      desc: "Partnering with licensed veterinarians for critical surgeries, amputations, wound treatments, and complex chemotherapy protocols for cancer patients.",
      image: "/assets/rescues/sapna-treatment.png",
      alt: "Sapna receiving veterinary IV chemotherapy infusion",
      tag: "Advanced Medicine",
      icon: <Stethoscope size={20} color="#D98205" />,
    },
    {
      id: "feeding-drives",
      title: "Daily Community Feeding Drives",
      desc: "Ensuring 80+ street dogs receive warm, protein-packed fresh meals every single morning. Feeding creates trust and allows early health detection.",
      image: "/assets/feeding/cauldrons-boot.jpeg",
      alt: "Volunteers loading large cauldrons of freshly cooked food into vehicle",
      tag: "Daily Commitment",
      icon: <UtensilsCrossed size={20} color="#15803D" />,
    },
    {
      id: "rehabilitation-boarding",
      title: "Rehabilitation & Safe Boarding",
      desc: "For vulnerable dogs whose injuries, trauma, or age prevent them from returning to the streets, we provide permanent safe boarding with food and play.",
      image: "/assets/rescues/siddu-recovered.png",
      alt: "Siddu fully recovered wearing bandana beside his toys in boarding",
      tag: "Dignified Living",
      icon: <Home size={20} color="#2563EB" />,
    },
  ];

  return (
    <section id="our-work" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <span>What We Do • Core Programmes</span>
          </div>
          <h2>Comprehensive Care from Street to Recovery</h2>
          <p>
            Animal welfare requires more than good intentions. We operate structured, continuous programs to rescue, heal, nourish, and protect Bengaluru's voiceless souls.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
              }}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(18, 19, 22, 0.82)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {pillar.icon}
                  <span>{pillar.tag}</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {pillar.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => onSelectWork(pillar.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 600,
                      color: 'var(--amber-700)',
                      fontSize: '0.925rem',
                    }}
                  >
                    <span>Learn how this programme works</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
