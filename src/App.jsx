import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ApplicationFormModal from './components/ApplicationFormModal.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import BrandingPage from './pages/BrandingPage.jsx';
import ContentCreationPage from './pages/ContentCreationPage.jsx';
import VideoProductionPage from './pages/VideoProductionPage.jsx';
import WebDevelopmentPage from './pages/WebDevelopmentPage.jsx';
import AppDevelopmentPage from './pages/AppDevelopmentPage.jsx';
import MarketingPage from './pages/MarketingPage.jsx';
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import PortfolioDetailPage from './pages/PortfolioDetailPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import InsightDetailPage from './pages/InsightDetailPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import CookiePolicyPage from './pages/CookiePolicyPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Scroll to top on route change
function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppInner() {
  const [isLoading, setIsLoading] = useState(true);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [preselectedApplication, setPreselectedApplication] = useState(null);
  const [preselectedCustomItem, setPreselectedCustomItem] = useState(null);

  // Scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Lock scroll during loading
  useEffect(() => {
    if (isLoading) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const preventScroll = (e) => e.preventDefault();
      const preventKeys = (e) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space', ' '].includes(e.key)) {
          e.preventDefault();
        }
      };
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeys);

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', preventKeys);
      };
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsLoading(false);
  };

  const handleOpenContact = (serviceName = '') => {
    const item =
      typeof serviceName === 'string' && serviceName
        ? { title: serviceName }
        : null;
    setPreselectedApplication(item);
    setApplicationFormOpen(true);
  };

  const handleSelectServiceFromGrid = (serviceId) => {
    const serviceNames = {
      projects: { title: 'Brand Strategy & Identity', services: ['BRANDING'] },
      design: { title: 'Digital Experiences & Web', services: ['WEBSITE DEVELOPMENT', 'APP DEVELOPMENT'] },
      custom: { title: 'Creative Content & Media', services: ['CREATIVE CONTENT'] },
      upcycling: { title: 'Digital Marketing & Growth', services: ['MARKETING', 'DIGITAL MARKETING'] },
    };
    setPreselectedApplication(
      serviceNames[serviceId] || { title: 'Custom Project Inquiry', services: ['BRANDING'] }
    );
    setApplicationFormOpen(true);
  };

  const handleOpenCustomWithItem = (item) => {
    if (typeof item === 'string') {
      handleOpenContact(item);
      return;
    }
    setPreselectedApplication(item);
    setApplicationFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col selection:bg-[#ff3b19] selection:text-white">
      <ScrollToTopOnNav />

      {/* Loading Screen (only on initial load) */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Skip-to-content link for accessibility/crawlability */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#ff3b19] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header onOpenContact={() => handleOpenContact()} isLoaded={!isLoading} />

      {/* All Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenContact={handleOpenContact}
              onSelectService={handleSelectServiceFromGrid}
              onOpenCustomWithItem={handleOpenCustomWithItem}
              isLoaded={!isLoading}
              preselectedCustomItem={preselectedCustomItem}
            />
          }
        />
        <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContact} />} />
        <Route path="/branding" element={<BrandingPage onOpenContact={handleOpenContact} />} />
        <Route path="/content-creation" element={<ContentCreationPage onOpenContact={handleOpenContact} />} />
        <Route path="/video-production" element={<VideoProductionPage onOpenContact={handleOpenContact} />} />
        <Route path="/web-development" element={<WebDevelopmentPage onOpenContact={handleOpenContact} />} />
        <Route path="/app-development" element={<AppDevelopmentPage onOpenContact={handleOpenContact} />} />
        <Route path="/marketing" element={<MarketingPage onOpenContact={handleOpenContact} />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage onOpenContact={handleOpenContact} />} />
        <Route path="/portfolio" element={<PortfolioPage onOpenContact={handleOpenContact} />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage onOpenContact={handleOpenContact} />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightDetailPage onOpenContact={handleOpenContact} />} />
        <Route path="/contact" element={<ContactPage onOpenContact={handleOpenContact} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage onOpenContact={handleOpenContact} />} />
        <Route path="/terms-and-conditions" element={<TermsPage onOpenContact={handleOpenContact} />} />
        <Route path="/terms" element={<TermsPage onOpenContact={handleOpenContact} />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage onOpenContact={handleOpenContact} />} />
        <Route path="/disclaimer" element={<DisclaimerPage onOpenContact={handleOpenContact} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Application Form Overlay */}
      <ApplicationFormModal
        isOpen={applicationFormOpen}
        onClose={() => setApplicationFormOpen(false)}
        preselectedItem={preselectedApplication}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
