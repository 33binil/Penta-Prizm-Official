// Central SEO and Brand Configuration for PENTA PRIZM
export const SEO_CONFIG = {
  siteName: 'PENTA PRIZM',
  siteUrl: 'https://pentaprizm.in',
  defaultTitle: 'Penta Prizm | Branding, Content, Digital & Tech',
  titleTemplate: '%s | PENTA PRIZM',
  defaultDescription:
    'Penta Prizm is a creative and technology-driven company offering branding, content creation, video production, web development, app development, marketing, and digital marketing solutions.',
  defaultImage: 'https://pentaprizm.in/Hero.png',
  locale: 'en_IN',
  twitterHandle: '@pentaprizm',
  
  // Real business contact information
  business: {
    name: 'PENTA PRIZM',
    legalName: 'Penta Prizm Studio',
    telephone: '+917306043445',
    email: 'pentaprizmofficial@gmail.com',
    whatsapp: 'https://wa.me/+917306043445',
    address: {
      streetAddress: 'Kaloor',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      postalCode: '682017',
      addressCountry: 'IN',
    },
    geo: {
      latitude: '9.9984',
      longitude: '76.2929',
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-19:00',
    priceRange: '$$',
  },

  socialProfiles: [
    'https://www.instagram.com/penta_prizm/',
    'https://www.facebook.com/profile.php?id=61594139094021&mibextid=LQQzGN',
    'https://www.linkedin.com/company/penta-prizm/',
  ],

  // Google Search Console & Google Analytics (GA4) configuration
  // Set via Vite env variables (VITE_GSC_VERIFICATION, VITE_GA_MEASUREMENT_ID) or fallback
  verification: {
    googleSiteVerification: import.meta.env?.VITE_GSC_VERIFICATION || '',
  },
  analytics: {
    gaMeasurementId: import.meta.env?.VITE_GA_MEASUREMENT_ID || '',
  },
};
