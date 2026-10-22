import React from 'react';
import './LegalPages.css';

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Legal & Compliance</span>
          <h1 className="page-hero-title heading-display">Privacy Policy</h1>
          <p className="page-hero-subtitle text-lead">
            Last Updated: 22 October 2026 • Roksh Samsthe Foundation
          </p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container legal-content-box">
          <h2>1. Introduction</h2>
          <p>
            Roksh Samsthe Foundation ("we", "our", or "the Foundation") is committed to protecting the privacy and personal data of our donors, volunteers, adopters, and website visitors. This Privacy Policy outlines our transparent practices regarding data collection, usage, and protection.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information solely when voluntarily provided by you, including:
          </p>
          <ul>
            <li><strong>Donor Information:</strong> Name, email address, transaction reference, and communication preferences when you contribute or request receipts.</li>
            <li><strong>Volunteer & Foster Inquiries:</strong> Full name, telephone number, residential area in Bengaluru, vehicle availability, and pet experience.</li>
            <li><strong>Distress Reports:</strong> Photographic media, location coordinates, and reporter contact numbers to coordinate rescue triage.</li>
          </ul>

          <h2>3. Photographic Integrity & Animal Protection</h2>
          <p>
            All animal photographs and videos hosted on this platform are original, date-stamped documentary evidence of Roksh Samsthe Foundation's field rescue work. We strictly refrain from using simulated, artificial intelligence (AI), or unauthorized commercial stock media. Locations of vulnerable animals are generalized where necessary to protect animals from malicious harm or abandonment.
          </p>

          <h2>4. Use of Financial & Contact Information</h2>
          <p>
            We do not sell, rent, trade, or share your contact or donation records with third-party marketing companies. Personal data is used exclusively to:
          </p>
          <ul>
            <li>Issue donation confirmations and tax exemption receipts upon verified request.</li>
            <li>Coordinate volunteer scheduling and emergency animal transport.</li>
            <li>Respond to distress inquiries and feedback.</li>
          </ul>

          <h2>5. Security of Information</h2>
          <p>
            Direct payments made via UPI (roksh@idfcbank) or bank transfer are processed securely by your bank and IDFC FIRST Bank. Roksh Samsthe Foundation does not store credit card numbers, CVVs, or UPI PINs.
          </p>

          <h2>6. Contact Us Regarding Your Privacy</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to update or delete your information from our volunteer roster, please contact us at:
            <br />
            <strong>Roksh Samsthe Foundation</strong>
            <br />
            Email: <a href="mailto:rokshsamsthe@gmail.com">rokshsamsthe@gmail.com</a>
            <br />
            Bengaluru, Karnataka, India
          </p>
        </div>
      </section>
    </div>
  );
}
