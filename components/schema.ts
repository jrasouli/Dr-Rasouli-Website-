import { CASTLE_CONNOLLY_URL, CONTACT_INFO, OFFICE_LOCATIONS, SOCIAL_LINKS } from '../constants';

export const SITE_URL = 'https://rasouli-md.com';
export const PHYSICIAN_ID = `${SITE_URL}/#physician`;
export const PRACTICE_ID = `${SITE_URL}/#practice`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Plain spaces. Visible copy keeps the non-breaking spaces in "Dr. Jonathan". */
export const PHYSICIAN_NAME = 'Jonathan J. Rasouli, MD';

const MEDICAL_SPECIALTY = {
  '@type': 'MedicalSpecialty',
  name: 'NeurologicalSurgery',
  description: 'Spinal neurosurgery, including complex spinal deformity, minimally invasive surgery, and robotic-assisted spine procedures',
};

const SAME_AS = [
  'https://www.healthgrades.com/physician/dr-jonathan-rasouli-ci37z',
  CASTLE_CONNOLLY_URL,
  'https://pubmed.ncbi.nlm.nih.gov/?term=rasouli+jonathan',
  'https://www.researchgate.net/profile/Jonathan-Rasouli',
  'https://x.com/jrasouli',
  'https://www.youtube.com/c/virtualglobalspineconference',
  'https://www.doximity.com/pub/jonathan-rasouli-md',
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.linkedin,
  'https://health.usnews.com/doctors/jonathan-rasouli-935230',
];

function clinicLocations() {
  return OFFICE_LOCATIONS.map((loc) => ({
    '@type': 'MedicalClinic',
    name: `NeuroSpine Plus - ${loc.city}`,
    url: loc.url,
    telephone: CONTACT_INFO.phoneSchema,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      addressLocality: loc.locality,
      addressRegion: loc.state,
      postalCode: loc.postalCode,
      addressCountry: 'US',
    },
  }));
}

/** One Physician node, shared by the homepage and philosophy pages via @id. */
export function physicianLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    '@id': PHYSICIAN_ID,
    name: PHYSICIAN_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/dr-rasouli-headshot-2026.jpg`,
    description: 'Board-certified, fellowship-trained spinal neurosurgeon specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted spine procedures.',
    telephone: CONTACT_INFO.phoneSchema,
    medicalSpecialty: MEDICAL_SPECIALTY,
    identifier: {
      '@type': 'PropertyValue',
      name: 'NPI',
      propertyID: 'NPI',
      value: '1003172974',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'American Association of Neurological Surgeons',
      alternateName: 'AANS',
    },
    knowsAbout: [
      'Complex Spinal Deformity',
      'Adult Scoliosis',
      'Minimally Invasive Spine Surgery',
      'Robotic-Assisted Spine Surgery',
      'Spinal Tumors',
      'Spinal Trauma',
      'Cervical Spine Surgery',
      'Lumbar Fusion',
      'Artificial Disc Replacement',
      'Neurocritical Care',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Cleveland Clinic Foundation',
        description: 'Complex Spinal Surgery Fellowship',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'The Mount Sinai Hospital',
        description: 'Neurological Surgery Residency',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Albert Einstein College of Medicine',
        description: 'Doctor of Medicine (M.D.)',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Board Certification',
        name: 'American Board of Neurological Surgery',
        dateCreated: '2023-05',
      },
    ],
    award: [
      'Castle Connolly Top Doctor 2023',
      'Castle Connolly Top Doctor 2024',
      'Castle Connolly Top Doctor 2025',
      'Castle Connolly Top Doctor 2026',
      'Castle Connolly Rising Star 2023',
      'Alpha Omega Alpha Honor Medical Society 2011',
    ],
    workLocation: [
      {
        '@type': 'Hospital',
        name: 'Hudson Regional Hospital',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Secaucus',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Hospital',
        name: 'Bayonne Medical Center',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bayonne',
          addressRegion: 'NJ',
          addressCountry: 'US',
        },
      },
    ],
    affiliation: {
      '@type': 'MedicalOrganization',
      name: 'NeuroSpine Plus',
      url: 'https://neurospineplus.com',
    },
    worksFor: { '@id': PRACTICE_ID },
    location: clinicLocations(),
    sameAs: SAME_AS,
  };
}

export function practiceLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': PRACTICE_ID,
    name: 'Dr. Jonathan J. Rasouli, MD - Spine Neurosurgery',
    description: 'Board-certified spine neurosurgery practice specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted procedures.',
    url: SITE_URL,
    telephone: CONTACT_INFO.phoneSchema,
    employee: { '@id': PHYSICIAN_ID },
    priceRange: '$$$$',
    medicalSpecialty: MEDICAL_SPECIALTY,
    location: clinicLocations(),
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Complex Spinal Deformity Surgery' },
      { '@type': 'MedicalProcedure', name: 'Minimally Invasive Spine Surgery' },
      { '@type': 'MedicalProcedure', name: 'Robotic-Assisted Spine Surgery' },
      { '@type': 'MedicalProcedure', name: 'Adult Scoliosis Correction' },
      { '@type': 'MedicalProcedure', name: 'Lumbar Fusion' },
      { '@type': 'MedicalProcedure', name: 'Cervical Spine Surgery' },
      { '@type': 'MedicalProcedure', name: 'Artificial Disc Replacement' },
      { '@type': 'MedicalProcedure', name: 'Spinal Tumor Surgery' },
    ],
    areaServed: [
      { '@type': 'State', name: 'New Jersey' },
      { '@type': 'State', name: 'New York' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7920',
      longitude: '-74.0650',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://neurospineplus.com/contact-us/',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Book Appointment',
      },
    },
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: PHYSICIAN_NAME,
    description: 'Board-certified spine surgeon practicing with NeuroSpine Plus in Paramus, NJ and Staten Island.',
    publisher: { '@id': PRACTICE_ID },
    mainEntity: { '@id': PHYSICIAN_ID },
    about: { '@id': PHYSICIAN_ID },
  };
}

export function faqLd(id: string, faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
