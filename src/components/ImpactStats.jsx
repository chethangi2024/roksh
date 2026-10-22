import React from 'react';
import { ShieldCheck, HeartHandshake, Utensils, Stethoscope } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: <Utensils size={28} color="var(--amber-500)" />,
      value: "80+",
      label: "Street Dogs Fed Daily",
      desc: "Fresh hot meals cooked every single morning and distributed along established North & East Bangalore feeding routes.",
    },
    {
      icon: <Stethoscope size={28} color="#BE123C" />,
      value: "60+",
      label: "Critical Medical Interventions",
      desc: "Emergency chemotherapy protocols (such as Sapna's TVT), wound debridements, and severe mange treatments.",
    },
    {
      icon: <HeartHandshake size={28} color="#15803D" />,
      value: "250+",
      label: "Vulnerable Animals Rescued",
      desc: "Rescued from road accidents, commercial breeding abandonment, acute starvation, and severe infection.",
    },
    {
      icon: <ShieldCheck size={28} color="#2563EB" />,
      value: "100%",
      label: "Direct Grassroots Impact",
      desc: "Zero intermediaries. Every rupee contributed goes directly into veterinary bills, food cauldrons, and safe boarding.",
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: '#FAF7F2', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <span>Verified Impact & Transparency</span>
          </div>
          <h2>Measurable Care on Bengaluru's Streets</h2>
          <p>
            We believe in complete honesty. No inflated estimates or manufactured statistics. Every figure represents real animals touched by our hands and hearts.
          </p>
        </div>

        <div className="grid-4">
          {stats.map((item, idx) => (
            <div key={idx} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'inline-flex', padding: '0.9rem', borderRadius: '50%', backgroundColor: 'var(--amber-50)', marginBottom: '1.25rem' }}>
                {item.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, marginBottom: '0.4rem' }}>
                {item.value}
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                {item.label}
              </h4>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
