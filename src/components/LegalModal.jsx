import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { organizationData } from '../data/organization';

export default function LegalModal({ legalType, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!legalType) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-light)',
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={20} color="var(--amber-600)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>
              {legalType === 'privacy' && 'Privacy Policy'}
              {legalType === 'donation-policy' && 'Donation Terms & Disclosures'}
              {legalType === 'terms' && 'Terms of Welfare Service'}
            </h3>
          </div>

          <button onClick={onClose} style={{ padding: '0.4rem', color: 'var(--text-muted)' }}>
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem', fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--text-main)' }}>
          {legalType === 'privacy' && (
            <>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>1. Information We Collect</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Roksh Samsthe Foundation respects the privacy of our donors, volunteers, and visitors. We only collect personal details (such as your name, email, phone number, and location) that you voluntarily provide when submitting a contact query, volunteer application, or donation acknowledgement form.
              </p>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>2. Use of Information</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Any contact information collected is used solely to respond to your queries, coordinate animal rescue assistance in Bengaluru, and send contribution receipts. We strictly do not sell, rent, or share personal information with third-party marketing entities.
              </p>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>3. Photography & Sensitive Locations</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                All documentary photographs are taken during real rescue, veterinary, and feeding operations. Specific exact addresses of vulnerable street packs are safeguarded to protect animals from deliberate harm or harassment.
              </p>
            </>
          )}

          {legalType === 'donation-policy' && (
            <>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>1. Voluntary Contributions</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Donations made to Roksh Samsthe Foundation are voluntary charitable contributions directly utilized to fund emergency medical treatment, chemotherapy, clinical surgeries, daily food supplies, and safe boarding for vulnerable animals.
              </p>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>2. Payment Channels</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                All online transactions occur directly through verified banking rails via official IDFC FIRST Bank UPI (UPI ID: <code>roksh@idfcbank</code>) or direct account transfer. Roksh Samsthe Foundation does not store credit/debit card numbers.
              </p>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>3. Refund & Acknowledgments</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Because funds are immediately allocated to active medical interventions and daily food supplies, donations are generally non-refundable. However, if a duplicate or erroneous transaction occurs, please email <strong>rokshsamsthe@gmail.com</strong> with transaction reference details within 48 hours for review and resolution.
              </p>
            </>
          )}

          {legalType === 'terms' && (
            <>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>1. Animal Rescue Capacity</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Roksh Samsthe Foundation operates as a dedicated grassroots charitable welfare organisation in Bengaluru. Rescue responses, foster placements, and emergency hospitalizations depend on current volunteer availability, vehicle logistics, and partner hospital bed capacities.
              </p>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>2. Intellectual Property & Photography Policy</h4>
              <p style={{ marginBottom: '1.25rem' }}>
                All photographs, animal case narratives, and logo assets appearing on this website are the genuine documentary property of Roksh Samsthe Foundation. Unauthorized reproduction for commercial purposes or false attribution is strictly prohibited.
              </p>
            </>
          )}

          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={onClose} className="btn btn-secondary btn-sm">
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
