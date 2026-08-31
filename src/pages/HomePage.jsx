import React from 'react';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import PortfolioLookbook from '../components/PortfolioLookbook.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import InteractiveCustomForm from '../components/InteractiveCustomForm.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import { getWebSiteSchema, getOrganizationSchema, getBreadcrumbSchema } from '../seo/schemaData.js';

export default function HomePage({
  onOpenContact,
  onSelectService,
  onOpenCustomWithItem,
  isLoaded,
  preselectedCustomItem,
}) {
  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
  ];

  return (
    <>
      <SEOHead
        title={null}
        description="Penta Prizm is a creative and technology-driven company offering branding, content creation, video production, web development, app development, marketing, and digital marketing solutions."
        canonicalUrl="/"
        schemas={schemas}
      />

      <main className="flex-1 flex flex-col w-full" id="main-content">
        {/* 1. Hero */}
        <Hero onOpenContact={() => onOpenContact()} isLoaded={isLoaded} />

        {/* 2. About Studio */}
        <AboutSection />

        {/* 3. What We Do */}
        <WhatWeDo onSelectService={onSelectService} />

        {/* 4. Lookbook & Works */}
        <PortfolioLookbook onOpenCustom={onOpenCustomWithItem} />

        {/* 5. Process */}
        <ProcessSection onStartCustom={() => onOpenCustomWithItem(null)} />

        {/* 6. Interactive Form */}
        <InteractiveCustomForm
          preselectedItem={preselectedCustomItem}
          onCompleted={() => {}}
        />
      </main>
    </>
  );
}
