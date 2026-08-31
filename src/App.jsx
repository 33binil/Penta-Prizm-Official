import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import PortfolioLookbook from './components/PortfolioLookbook.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import InteractiveCustomForm from './components/InteractiveCustomForm.jsx';
import ApplicationFormModal from './components/ApplicationFormModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [preselectedApplication, setPreselectedApplication] = useState(null);
  const [preselectedCustomItem, setPreselectedCustomItem] = useState(null);

  useEffect(() => {
    // Disable browser default scroll restoration on refresh so it always starts at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (isLoading) {
      // Lock scroll while loading screen is active
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const preventScroll = (e) => {
        e.preventDefault();
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', (e) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space', ' '].includes(e.key)) {
          e.preventDefault();
        }
      });

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
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
      {/* Dynamic Intro Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Top Fixed Header */}
      <Header onOpenContact={() => handleOpenContact()} isLoaded={!isLoading} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} isLoaded={!isLoading} />

        {/* 2. About Studio Section */}
        <AboutSection />

        {/* 3. What We Do Section */}
        <WhatWeDo onSelectService={handleSelectServiceFromGrid} />

        {/* 4. Lookbook & Works Section */}
        <PortfolioLookbook onOpenCustom={handleOpenCustomWithItem} />

        {/* 5. Process Section */}
        <ProcessSection onStartCustom={() => handleOpenCustomWithItem(null)} />

        {/* 6. Interactive Custom Form Section */}
        <InteractiveCustomForm
          preselectedItem={preselectedCustomItem}
          onCompleted={() => {}}
        />
      </main>

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
