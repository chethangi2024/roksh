import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Heart, ShieldCheck, ExternalLink, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from '../context/ToastContext';
import siteContent from '../data/siteContent.json';
import './QuickDonateModal.css';

const DONATION_TIERS = [
  { amount: 500, label: '10 Street Meals', desc: 'Cooked rice, egg, and broth for hungry dogs' },
  { amount: 1500, label: 'Wound Care Kit', desc: 'Medicated dips, bandages & pain relief' },
  { amount: 3500, label: 'Chemo / Cancer Fund', desc: 'Chemotherapy vial & IV oncology care' },
  { amount: 5000, label: 'Monthly Boarding', desc: 'Safe shelter, boarding & care for 1 dog' },
];

export default function QuickDonateModal({ isOpen, onClose, initialTier = null }) {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState(initialTier || 1500);
  const [customAmount, setCustomAmount] = useState('');

  useEffect(() => {
    if (initialTier) setSelectedTier(initialTier);
  }, [initialTier]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentAmount = customAmount ? Number(customAmount) : selectedTier;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteContent.banking.upiId);
    setCopied(true);
    showToast('UPI ID copied: ' + siteContent.banking.upiId);
    
    // Trigger festive burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F5A623', '#15803D', '#BE123C']
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const upiIntentUrl = `upi://pay?pa=${encodeURIComponent(siteContent.banking.upiId)}&pn=${encodeURIComponent(siteContent.banking.beneficiary)}&am=${currentAmount}&cu=INR&tn=${encodeURIComponent('Donation to Roksh Samsthe Foundation')}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="donate-modal-title">
      <div className="modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close donation modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <Heart size={14} fill="#BE123C" color="#BE123C" />
            <span>Direct Community Support</span>
          </div>
          <h2 id="donate-modal-title" className="modal-title">
            Support Roksh Samsthe Foundation
          </h2>
          <p className="modal-subtitle">
            100% of your donation directly funds emergency medical care, chemotherapy, daily feeding cauldrons, and safe boarding.
          </p>
        </div>

        {/* Tier Selector */}
        <div className="donation-tiers-grid">
          {DONATION_TIERS.map((tier) => (
            <button
              key={tier.amount}
              type="button"
              className={`tier-button ${selectedTier === tier.amount && !customAmount ? 'active' : ''}`}
              onClick={() => {
                setSelectedTier(tier.amount);
                setCustomAmount('');
              }}
            >
              <span className="tier-amount">₹{tier.amount.toLocaleString('en-IN')}</span>
              <span className="tier-label">{tier.label}</span>
              <span className="tier-desc">{tier.desc}</span>
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="custom-amount-wrapper">
          <label htmlFor="custom-amt" className="custom-amount-label">Or choose a custom amount (₹):</label>
          <div className="custom-input-box">
            <span className="currency-prefix">₹</span>
            <input
              id="custom-amt"
              type="number"
              placeholder="Enter amount, e.g. 2000"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              min="50"
            />
          </div>
        </div>

        {/* Payment Channels Container */}
        <div className="modal-payment-card">
          <div className="qr-preview-side">
            <img 
              src={siteContent.banking.qrImage} 
              alt="Official IDFC FIRST Bank UPI QR Code" 
              className="qr-image"
              width="150"
              height="150"
            />
            <span className="qr-caption">Scan with any UPI App</span>
          </div>

          <div className="payment-details-side">
            <div className="payment-field">
              <span className="field-label">Beneficiary Name</span>
              <strong className="field-val">{siteContent.banking.beneficiary}</strong>
            </div>

            <div className="payment-field">
              <span className="field-label">Official UPI ID</span>
              <div className="upi-input-group">
                <input 
                  type="text" 
                  readOnly 
                  value={siteContent.banking.upiId} 
                  className="upi-readonly-input"
                />
                <button 
                  type="button" 
                  onClick={handleCopyUpi} 
                  className="btn-copy-action"
                  title="Copy UPI ID"
                >
                  {copied ? <Check size={16} color="#15803D" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="payment-field">
              <span className="field-label">Bank Partner</span>
              <span className="field-sub">{siteContent.banking.bankName} • Account: Foundation</span>
            </div>

            {/* Mobile Instant UPI Trigger */}
            <a 
              href={upiIntentUrl}
              className="btn btn-primary btn-sm mobile-upi-intent-btn"
            >
              <span>Pay ₹{currentAmount.toLocaleString('en-IN')} via UPI App</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="modal-footer-notice">
          <p>
            <ShieldCheck size={14} color="#15803D" />
            Direct to foundation bank account. For payment acknowledgement or 80G tax receipt inquiries, email 
            <a href="mailto:rokshsamsthe@gmail.com"> rokshsamsthe@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
