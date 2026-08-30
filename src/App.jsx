import React, { useState } from 'react';
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
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [preselectedApplication, setPreselectedApplication] = useState(null);
  const [preselectedCustomItem, setPreselectedCustomItem] = useState(null);

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
      {/* Top Fixed Header */}
      <Header onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

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
