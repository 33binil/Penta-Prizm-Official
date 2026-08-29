import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import PortfolioLookbook from './components/PortfolioLookbook.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import InteractiveCustomForm from './components/InteractiveCustomForm.jsx';
import ContactModal from './components/ContactModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('');
  const [preselectedCustomItem, setPreselectedCustomItem] = useState(null);

  const handleOpenContact = (serviceName = '') => {
    setSelectedServiceForModal(typeof serviceName === 'string' ? serviceName : '');
    setContactModalOpen(true);
  };

  const handleSelectServiceFromGrid = (serviceId) => {
    const serviceNames = {
      projects: 'Кастом для проектов (Музыканты, бренды)',
      design: 'Авторский дизайн / Коллекция',
      custom: 'Кастом одежды под заказ',
      upcycling: 'Апсайклинг старых вещей',
    };
    handleOpenContact(serviceNames[serviceId] || 'Индивидуальный заказ');
  };

  const handleOpenCustomWithItem = (item) => {
    setPreselectedCustomItem(item);
    const customSection = document.getElementById('custom-builder');
    if (customSection) {
      customSection.scrollIntoView({ behavior: 'smooth' });
    }
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

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
