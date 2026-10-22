import React from 'react';
import './LegalPages.css';

export default function TermsPage() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Legal & Compliance</span>
          <h1 className="page-hero-title heading-display">Donation Terms & Conditions</h1>
          <p className="page-hero-subtitle text-lead">
            Last Updated: 22 October 2026 • Roksh Samsthe Foundation
          </p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container legal-content-box">
          <h2>1. Voluntary Contributions</h2>
          <p>
            All financial gifts, recurring contributions, and sponsorships made to Roksh Samsthe Foundation via UPI (roksh@idfcbank), bank transfer, or partner gateways are voluntary charitable donations intended to support animal welfare, clinical care, feeding, and boarding operations in Bengaluru.
          </p>

          <h2>2. Utilization of Funds</h2>
          <p>
            Donations are allocated strictly towards charitable objectives:
          </p>
          <ul>
            <li><strong>Medical Treatment & Oncology:</strong> Purchasing veterinary pharmaceuticals, Vincristine chemotherapy, sterile IV fluids, surgical consumables, and hospital boarding fees.</li>
            <li><strong>Community Feeding:</strong> Sourcing raw rice, eggs, puppy formula, cooking fuel, and hygienic stainless-steel distribution bowls.</li>
            <li><strong>Rescue Operations:</strong> Emergency animal transport, first aid gear, and rehabilitation foster support.</li>
          </ul>

          <h2>3. Refund Guidelines</h2>
          <p>
            Due to the immediate utilization of donations for live veterinary care and perishable daily food preparations, donations are non-refundable once processed. In the rare event of an accidental duplicate transaction or technical error, donors may notify us within 7 days at <a href="mailto:rokshsamsthe@gmail.com">rokshsamsthe@gmail.com</a> with the bank transaction ID for review.
          </p>

          <h2>4. Verification & Tax Exemption Inquiries</h2>
          <p>
            Donors wishing to receive official payment confirmation or enquire regarding 80G tax benefit receipt status may email their bank transaction reference to <a href="mailto:rokshsamsthe@gmail.com">rokshsamsthe@gmail.com</a>.
          </p>

          <h2>5. Field Safety & Volunteer Guidelines</h2>
          <p>
            Volunteers participating in field rescues or feeding drives do so voluntarily and are required to follow safety instructions from designated senior team leads. Aggressive handling or approaching agitated animals without appropriate protective gear is strictly forbidden.
          </p>

          <h2>6. Governing Jurisdiction</h2>
          <p>
            These terms are governed by the applicable laws of Karnataka and the Republic of India. Any legal dispute will fall within the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
          </p>
        </div>
      </section>
    </div>
  );
}
