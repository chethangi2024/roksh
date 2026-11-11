import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, AlertCircle, ExternalLink, QrCode, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from '../context/ToastContext';
import siteContent from '../data/siteContent.json';
import './DonatePage.css';

const IMPACT_TIERS = [
  {
    amount: 3000,
    title: 'Vaccinate & Protect',
    desc: 'Support vaccination initiatives that help protect street dogs and cats from preventable diseases.',
    tag: 'Prevention & Safety'
  },
  {
    amount: 5000,
    title: 'Support Medical Care',
    desc: 'Contribute towards veterinary consultations, medicines, and treatment for rescued animals.',
    tag: 'Veterinary Treatment'
  }
];

export default function DonatePage() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState(3000);
  const [customAmount, setCustomAmount] = useState('');

  const currentAmount = customAmount ? Number(customAmount) : selectedTier;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteContent.banking.upiId);
    setCopied(true);
    showToast('UPI ID copied: ' + siteContent.banking.upiId);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F5A623', '#15803D', '#BE123C']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const upiIntentUrl = `upi://pay?pa=${encodeURIComponent(siteContent.banking.upiId)}&pn=${encodeURIComponent(siteContent.banking.beneficiary)}&am=${currentAmount}&cu=INR&tn=${encodeURIComponent('Donation to Roksh Samsthe Foundation')}`;

  return (
    <div className="donate-page">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title heading-display">
            Direct & Transparent Animal Welfare Support
          </h1>
          <p className="page-hero-subtitle text-lead">
            Every single rupee directly finances veterinary consultations, life-saving surgeries, vaccinations, and critical care for Bengaluru's rescued animals.
          </p>
        </div>
      </section>

      {/* Main Payment Hub */}
      <section className="payment-hub-section">
        <div className="container hub-grid">
          {/* Left Side: Select Impact & Tier */}
          <div className="impact-selection-side">
            <h2 className="heading-editorial section-heading-alt mb-2">
              Choose an Area of Direct Impact
            </h2>
            <p className="text-muted mb-4">
              Select a tier below or specify a custom donation amount.
            </p>

            <div className="tiers-grid">
              {IMPACT_TIERS.map((tier) => (
                <div
                  key={tier.amount}
                  className={`tier-card ${selectedTier === tier.amount && !customAmount ? 'active' : ''}`}
                  onClick={() => { setSelectedTier(tier.amount); setCustomAmount(''); }}
                >
                  <div className="tier-header-row">
                    <span className="tier-amount-val">₹{tier.amount.toLocaleString('en-IN')}</span>
                    <span className="tier-tag-text">{tier.tag}</span>
                  </div>
                  <h3 className="tier-title">{tier.title}</h3>
                  <p className="tier-desc">{tier.desc}</p>
                </div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="custom-amt-card">
              <label htmlFor="custom-donation" className="custom-label">
                Prefer a custom contribution amount (₹):
              </label>
              <div className="custom-input-group">
                <span className="rupee-sign">₹</span>
                <input
                  id="custom-donation"
                  type="number"
                  placeholder="e.g. 2500"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  min="50"
                />
              </div>
            </div>

            {/* Direct Mobile UPI Trigger */}
            <a 
              href={upiIntentUrl}
              className="btn btn-primary btn-lg w-full mobile-intent-large"
            >
              <span>Pay ₹{currentAmount.toLocaleString('en-IN')} with any UPI App</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Right Side: Banking Details & QR Code */}
          <div className="banking-vault-side">
            <div className="vault-payment-card glass-panel">
              <div className="vault-card-header text-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Roksh Samsthe Foundation Logo" 
                  className="vault-logo"
                  width="60"
                  height="60" 
                />
                <h3 className="vault-head-title">Official Foundation UPI</h3>
                <span className="vault-head-sub">{siteContent.banking.bankName}</span>
              </div>

              {/* Scannable QR Code */}
              <div className="vault-qr-wrapper">
                <img 
                  src={siteContent.banking.qrImage} 
                  alt="Official IDFC First Bank UPI QR Code" 
                  className="vault-qr-img" 
                />
                <span className="qr-scan-guide">
                  Scan using Google Pay, PhonePe, Paytm, BHIM, or any banking app
                </span>
              </div>

              {/* Verified Details Table */}
              <div className="vault-details-table">
                <div className="table-row">
                  <span className="row-label">Beneficiary</span>
                  <strong className="row-val">{siteContent.banking.beneficiary}</strong>
                </div>

                <div className="table-row">
                  <span className="row-label">UPI ID</span>
                  <div className="row-copy-box">
                    <code className="row-code">{siteContent.banking.upiId}</code>
                    <button 
                      type="button" 
                      onClick={handleCopyUpi} 
                      className="btn-copy-mini"
                      aria-label="Copy UPI ID"
                    >
                      {copied ? <Check size={15} color="#15803D" /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>

                <div className="table-row">
                  <span className="row-label">Account Category</span>
                  <span className="row-val">{siteContent.banking.accountType}</span>
                </div>
              </div>

              {/* Transparency & Receipt Note */}
              <div className="tax-notice-box">
                <FileText size={16} color="#92400E" className="flex-shrink-0" />
                <p>
                  <strong>Payment Acknowledgement & Tax Status:</strong> {siteContent.banking.taxExemptionNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Every Rupee Goes */}
      <section className="fund-allocation-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Where Every Rupee Is Directed</h2>
            <p className="section-description">
              We operate leanly with zero corporate luxury. Funds are mobilized straight to clinical invoices and food ingredients.
            </p>
          </div>

          <div className="grid-3 allocation-grid">
            <div className="allocation-card">
              <span className="alloc-percent">60%</span>
              <h3 className="alloc-title">Emergency Medical & Veterinary Care</h3>
              <p className="alloc-desc">Veterinary hospital bills, surgical procedures, blood diagnostics, vaccinations, and specialized medicines.</p>
            </div>
            <div className="allocation-card">
              <span className="alloc-percent">25%</span>
              <h3 className="alloc-title">Community Feeding Drives</h3>
              <p className="alloc-desc">Fresh grocery ingredients (rice, eggs, poultry broth), gas for cooking cauldrons, and logistics for feeding drives.</p>
            </div>
            <div className="allocation-card">
              <span className="alloc-percent">15%</span>
              <h3 className="alloc-title">Shelter, Boarding & Foster Care</h3>
              <p className="alloc-desc">Safe boarding facility fees, bedding, tick/flea preventatives, and neonatal puppy nursing supplies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
