import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle2, Save, Download, RefreshCw, ShieldAlert, Sparkles } from 'lucide-react';

export default function AdminDeskModal({ isOpen, onClose, rescues, onSaveRescue, onUpdateStatus }) {
  const [activeTab, setActiveTab] = useState('new-rescue');
  const [selectedRescueId, setSelectedRescueId] = useState(rescues[0]?.id || '');
  const [newStatus, setNewStatus] = useState('Fully Recovered & Safe');
  const [newStatusBadge, setNewStatusBadge] = useState('Recovered');
  const [newStatusColor, setNewStatusColor] = useState('emerald');
  const [progressUpdateText, setProgressUpdateText] = useState('');

  // New Rescue Form State
  const [newRescue, setNewRescue] = useState({
    title: '',
    animalName: '',
    species: 'Indie Dog',
    rescueDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    location: 'Bengaluru, Karnataka',
    diagnosis: '',
    circumstances: '',
    treatmentProvided: '',
    statusBadge: 'Active Treatment',
    statusColor: 'amber',
    targetFund: 5000,
    imageUrl: '/assets/rescues/puppy-clinic-oct20.jpeg',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleUpdateStatusSubmit = (e) => {
    e.preventDefault();
    if (!selectedRescueId) return;

    onUpdateStatus(selectedRescueId, {
      currentStatus: newStatus,
      statusBadge: newStatusBadge,
      statusColor: newStatusColor,
      latestUpdate: progressUpdateText || `Status updated on ${new Date().toLocaleDateString()}`,
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleCreateRescueSubmit = (e) => {
    e.preventDefault();
    const created = {
      ...newRescue,
      id: `rescue-${Date.now()}`,
      publishedDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      raisedFund: 0,
      heroImage: newRescue.imageUrl,
      gallery: [
        {
          url: newRescue.imageUrl,
          caption: `${newRescue.animalName} intake and care in Bengaluru`,
          phase: 'Field Intake',
        },
      ],
      summary: newRescue.circumstances,
      latestUpdate: `Rescue recorded on ${newRescue.rescueDate}. Initial treatment initiated.`,
    };

    onSaveRescue(created);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1500);
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rescues, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `roksh_rescues_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        {/* Header */}
        <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'var(--bg-dark)', color: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="live-beacon"></span>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#FFFFFF' }}>
              Roksh Volunteer Field Desk (CMS)
            </h3>
          </div>
          <button onClick={onClose} style={{ color: '#FFFFFF', padding: '0.25rem' }}>
            <X size={22} />
          </button>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', backgroundColor: '#FAF7F2' }}>
          <button
            onClick={() => setActiveTab('new-rescue')}
            style={{
              padding: '0.85rem 1.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderBottom: activeTab === 'new-rescue' ? '3px solid var(--amber-500)' : 'none',
              color: activeTab === 'new-rescue' ? 'var(--amber-700)' : 'var(--text-muted)',
              backgroundColor: activeTab === 'new-rescue' ? '#FFFFFF' : 'transparent',
            }}
          >
            ➕ Record New Rescue Story
          </button>

          <button
            onClick={() => setActiveTab('update-status')}
            style={{
              padding: '0.85rem 1.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderBottom: activeTab === 'update-status' ? '3px solid var(--amber-500)' : 'none',
              color: activeTab === 'update-status' ? 'var(--amber-700)' : 'var(--text-muted)',
              backgroundColor: activeTab === 'update-status' ? '#FFFFFF' : 'transparent',
            }}
          >
            🔄 Update Existing Animal Status
          </button>

          <button
            onClick={handleExportData}
            style={{
              marginLeft: 'auto',
              padding: '0.85rem 1.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Download size={15} />
            <span>Export Backup JSON</span>
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem' }}>
          {savedSuccess && (
            <div style={{ backgroundColor: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', marginBottom: '1.5rem', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 600 }}>
              <CheckCircle2 size={18} />
              <span>Record successfully saved! The website has updated automatically.</span>
            </div>
          )}

          {activeTab === 'new-rescue' ? (
            <form onSubmit={handleCreateRescueSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Story Headline / Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Healing from Severe Fracture: Bruno's Story"
                    value={newRescue.title}
                    onChange={(e) => setNewRescue({ ...newRescue, title: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Animal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bruno"
                    value={newRescue.animalName}
                    onChange={(e) => setNewRescue({ ...newRescue, animalName: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Species / Breed
                  </label>
                  <input
                    type="text"
                    value={newRescue.species}
                    onChange={(e) => setNewRescue({ ...newRescue, species: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Actual Rescue Date *
                  </label>
                  <input
                    type="text"
                    required
                    value={newRescue.rescueDate}
                    onChange={(e) => setNewRescue({ ...newRescue, rescueDate: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Location (Bengaluru Area)
                  </label>
                  <input
                    type="text"
                    value={newRescue.location}
                    onChange={(e) => setNewRescue({ ...newRescue, location: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Clinical Diagnosis *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pelvic Fracture and Dehydration"
                  value={newRescue.diagnosis}
                  onChange={(e) => setNewRescue({ ...newRescue, diagnosis: e.target.value })}
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Circumstances & Background
                </label>
                <textarea
                  rows="2"
                  placeholder="Describe rescue circumstances and where the animal was discovered..."
                  value={newRescue.circumstances}
                  onChange={(e) => setNewRescue({ ...newRescue, circumstances: e.target.value })}
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                ></textarea>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Medical Treatment Administered
                </label>
                <textarea
                  rows="2"
                  placeholder="Clinical procedures, medications, surgery or drips provided..."
                  value={newRescue.treatmentProvided}
                  onChange={(e) => setNewRescue({ ...newRescue, treatmentProvided: e.target.value })}
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                ></textarea>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Status Badge
                  </label>
                  <select
                    value={newRescue.statusBadge}
                    onChange={(e) => {
                      const badge = e.target.value;
                      setNewRescue({
                        ...newRescue,
                        statusBadge: badge,
                        statusColor: badge === 'Active Treatment' ? 'amber' : badge === 'Recovered' ? 'emerald' : 'blue',
                      });
                    }}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  >
                    <option value="Active Treatment">Active Treatment</option>
                    <option value="Recovered">Recovered</option>
                    <option value="Foster Care">Foster Care</option>
                    <option value="Under Observation">Under Observation</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Photo Asset Path
                  </label>
                  <select
                    value={newRescue.imageUrl}
                    onChange={(e) => setNewRescue({ ...newRescue, imageUrl: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  >
                    <option value="/assets/rescues/puppy-clinic-oct20.jpeg">Orphaned Pup Intake (20 Oct 2026)</option>
                    <option value="/assets/rescues/indie-clinic-harness.jpeg">Indie in Blue Harness (04 Oct 2026)</option>
                    <option value="/assets/rescues/sapna-hero.jpeg">Sapna Hero Portrait</option>
                    <option value="/assets/rescues/siddu-recovered.png">Siddu Recovered</option>
                    <option value="/assets/rescues/chinna-recovered.png">Chinna Recovered</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                <Save size={18} />
                <span>Publish Rescue Record to Website</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleUpdateStatusSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Select Animal Record to Update:
                </label>
                <select
                  value={selectedRescueId}
                  onChange={(e) => setSelectedRescueId(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem' }}
                >
                  {rescues.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.animalName} ({r.species}) — Current: {r.statusBadge}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    New Status Badge
                  </label>
                  <select
                    value={newStatusBadge}
                    onChange={(e) => {
                      const badge = e.target.value;
                      setNewStatusBadge(badge);
                      setNewStatusColor(badge === 'Active Treatment' ? 'amber' : badge === 'Recovered' ? 'emerald' : 'blue');
                    }}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  >
                    <option value="Recovered">Recovered</option>
                    <option value="Active Treatment">Active Treatment</option>
                    <option value="In Safe Boarding">In Safe Boarding</option>
                    <option value="Adopted / Reunited">Adopted / Reunited</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Full Status Description
                  </label>
                  <input
                    type="text"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    placeholder="e.g. Completed Chemo — Safe in Boarding"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Progress Report Update:
                </label>
                <textarea
                  rows="3"
                  placeholder="Add latest notes on blood test, weight gain, foster status, or medical recovery..."
                  value={progressUpdateText}
                  onChange={(e) => setProgressUpdateText(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                <RefreshCw size={18} />
                <span>Save Status Update & Refresh Display</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
