import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import DistressBanner from './components/DistressBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickDonateModal from './components/QuickDonateModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import RescuesPage from './pages/RescuesPage';
import RescueDetailPage from './pages/RescueDetailPage';
import FeedingPage from './pages/FeedingPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import AdoptPage from './pages/AdoptPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donateInitialTier, setDonateInitialTier] = useState(null);

  const handleOpenDonate = (tier = null) => {
    setDonateInitialTier(tier);
    setDonateModalOpen(true);
  };

  const handleCloseDonate = () => {
    setDonateModalOpen(false);
    setDonateInitialTier(null);
  };

  return (
    <ToastProvider>
      <div className="app-shell">
        <DistressBanner />
        <Navbar onOpenDonate={() => handleOpenDonate()} />

        <main className="site-main" id="main-content">
          <Routes>
            <Route path="/" element={<HomePage onOpenDonate={handleOpenDonate} />} />
            <Route path="/about" element={<AboutPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/our-work" element={<OurWorkPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/rescues" element={<RescuesPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/rescues/:id" element={<RescueDetailPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/feeding" element={<FeedingPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/adopt" element={<AdoptPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/get-involved" element={<GetInvolvedPage onOpenDonate={handleOpenDonate} />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer onOpenDonate={() => handleOpenDonate()} />

        {/* Persistent Quick Donate Modal */}
        <QuickDonateModal
          isOpen={donateModalOpen}
          onClose={handleCloseDonate}
          initialTier={donateInitialTier}
        />
      </div>
    </ToastProvider>
  );
}
