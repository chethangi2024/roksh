import React, { useState } from 'react';
import { Heart, Copy, Check, QrCode, ShieldCheck, Building2, Smartphone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { organizationData } from '../data/organization';

export default function DonationVault({ initialAmount, initialNote, onDone }) {
  const [selectedAmount, setSelectedAmount] = useState(initialAmount || 1500);
  const [customAmount, setCustomAmount] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const tiers = [
    { amount: 500, label: "Feed 10 Dogs", desc: "Wholesome fresh food & broth for 10 dogs" },
    { amount: 1500, label: "Chemo / Blood Panel", desc: "Covers 1 chemotherapy vial or diagnostic panel" },
    { amount: 3000, label: "Medical & Wound Care", desc: "Anti-parasitic dips & emergency wound care" },
    { amount: 5000, label: "Monthly Boarding", desc: "Full month of safe shelter & nutrition" },
  ];

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(organizationData.bankDetails.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const handleCopyBank = () => {
    const text = `Beneficiary: ${organizationData.bankDetails.beneficiaryName}\nBank: ${organizationData.bankDetails.bankName}\nA/C: ${organizationData.bankDetails.accountNumber}\nIFSC: ${organizationData.bankDetails.ifscCode}`;
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleConfirmTransfer = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F5A623', '#15803D', '#E11D48', '#2563EB'],
    });
    setHasConfirmed(true);
  };

  const effectiveAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <section id="donate" className="section" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <span className="live-beacon"></span>
            <span>Direct Support • Transparent Giving</span>
          </div>
          <h2>Support Roksh Samsthe Foundation</h2>
          <p>
            100% of your contribution goes directly into life-saving veterinary treatment, chemotherapy, daily feeding cauldrons, and safe boarding for Bengaluru's street animals.
          </p>
        </div>

        <div className="donation-vault">
          <div className="donation-grid">
            {/* Left: Donation Amount Selector & Form */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--amber-400)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                <Sparkles size={16} />
                <span>Select Contribution Tier</span>
              </div>

              {initialNote && (
                <div style={{ backgroundColor: 'rgba(245, 166, 35, 0.15)', border: '1px solid rgba(245, 166, 35, 0.3)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                  🎯 Purpose: <strong>{initialNote}</strong>
                </div>
              )}

              {/* Tiers Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', marginBottom: '1.25rem' }}>
                {tiers.map((t) => (
                  <button
                    key={t.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(t.amount);
                      setCustomAmount('');
                    }}
                    style={{
                      backgroundColor: selectedAmount === t.amount && !customAmount ? 'var(--amber-500)' : 'rgba(255, 255, 255, 0.08)',
                      color: selectedAmount === t.amount && !customAmount ? '#121316' : '#FFFFFF',
                      border: selectedAmount === t.amount && !customAmount ? '2px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                      ₹{t.amount.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem' }}>
                      {t.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85, marginTop: '0.2rem' }}>
                      {t.desc}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#D1D5DB', marginBottom: '0.4rem' }}>
                  Or enter custom amount (₹ INR):
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontWeight: 700 }}>
                    ₹
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter amount (e.g. 2500)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.8rem 1rem 0.8rem 2.2rem',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                    }}
                  />
                </div>
              </div>

              {/* Transfer Confirmation Form */}
              {!hasConfirmed ? (
                <form onSubmit={handleConfirmTransfer} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.7rem 0.9rem',
                        color: '#FFFFFF',
                        fontSize: '0.875rem',
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Email (for acknowledgment)"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.7rem 0.9rem',
                        color: '#FFFFFF',
                        fontSize: '0.875rem',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Heart size={18} fill="#121316" />
                    <span>I Have Transferred ₹{effectiveAmount.toLocaleString()} via UPI</span>
                  </button>

                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0, textAlign: 'center' }}>
                    🔒 We do not store card information. All transactions happen through secure banking UPI apps.
                  </p>
                </form>
              ) : (
                <div style={{ backgroundColor: 'rgba(21, 128, 61, 0.2)', border: '1px solid #15803D', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '50%', backgroundColor: '#15803D', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                    <Check size={28} />
                  </div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.4rem' }}>
                    Thank You, {donorName || 'Generous Donor'}!
                  </h4>
                  <p style={{ color: '#D1FAE5', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                    Your contribution of <strong>₹{effectiveAmount.toLocaleString()}</strong> creates life-saving medicine, warm cauldrons of food, and safe shelter. An acknowledgment email has been routed to <strong>{donorEmail || organizationData.email}</strong>.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Official Bank Details & Scannable QR */}
            <div style={{ textAlign: 'center' }}>
              <div className="qr-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#121316', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <QrCode size={18} color="#D98205" />
                  <span>Scan with Any UPI App</span>
                </div>

                <img
                  src={organizationData.bankDetails.qrImage}
                  alt="Official IDFC First Bank UPI QR Code for Roksh Samsthe Foundation"
                  className="qr-img"
                />

                {/* Instant Copy Pill */}
                <div
                  onClick={handleCopyUpi}
                  className="upi-pill-copy"
                  title="Click to copy UPI ID"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Smartphone size={16} />
                    <span>{organizationData.bankDetails.upiId}</span>
                  </div>
                  {copiedUpi ? (
                    <span style={{ fontSize: '0.75rem', color: '#15803D', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <Copy size={16} color="var(--amber-700)" />
                  )}
                </div>
              </div>

              {/* Direct Bank Account Details */}
              <div style={{ marginTop: '1.5rem', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--amber-300)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Building2 size={16} />
                    Direct NEFT / IMPS Transfer
                  </span>
                  <button
                    onClick={handleCopyBank}
                    style={{ fontSize: '0.75rem', color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    {copiedBank ? <Check size={14} color="#22C55E" /> : <Copy size={14} />}
                    <span>{copiedBank ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div style={{ fontSize: '0.825rem', color: '#D1D5DB', lineHeight: 1.6 }}>
                  <div><strong>Beneficiary:</strong> {organizationData.bankDetails.beneficiaryName}</div>
                  <div><strong>Bank:</strong> {organizationData.bankDetails.bankName}</div>
                  <div><strong>A/C No:</strong> {organizationData.bankDetails.accountNumber}</div>
                  <div><strong>IFSC:</strong> {organizationData.bankDetails.ifscCode} ({organizationData.bankDetails.branch})</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
