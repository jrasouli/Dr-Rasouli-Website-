import { Activity, Brain, UserCheck, Microscope, ShieldCheck, Stethoscope } from 'lucide-react';
import { NavItem, Testimonial, ServiceItem, Credential, FaqItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Dr.\u00A0Rasouli', path: '/about' },
      { label: 'Personal Statement', path: '/statement' },
    ]
  },
  { label: 'Services', path: '/services' },
  {
    label: 'Media & News',
    path: '/media',
    children: [
      { label: 'Media & Publications', path: '/media' },
      { label: 'Lectures', path: '/media#lectures' },
      { label: 'News Coverage', path: '/news' },
    ]
  },
  { label: 'Global Work', path: '/global-work' },
  { label: 'Credentials', path: '/credentials' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/jonathan_rasouli/',
  x: 'https://twitter.com/jrasouli',
  linkedin: 'https://www.linkedin.com/in/jonathan-rasouli/',
};

export const CASTLE_CONNOLLY_URL = 'https://www.castleconnolly.com/top-doctors/jonathan-j-rasouli-neurological-surgery';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Dr.\u00A0Rasouli did his homework by reviewing my X-rays and MRIs prior to our first visit and determined the source of my lingering pain. He gave me clear explanations and addressed all my concerns.",
    author: "Michael D.",
    condition: "Spinal Stenosis",
    date: "October 2024",
    rating: 5
  },
  {
    id: 2,
    quote: "He recommended minimally invasive surgery and the results were amazing. Back to my normal life in weeks, not months. His entire team was top-notch.",
    author: "Sarah M.",
    condition: "Herniated Disc",
    date: "August 2024",
    rating: 5
  },
  {
    id: 3,
    quote: "After seeing multiple doctors, Dr.\u00A0Rasouli was the only one who truly understood my complex spine condition. His expertise in spinal deformity was exactly what I needed.",
    author: "Robert L.",
    condition: "Spinal Deformity",
    date: "June 2024",
    rating: 5
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'deformity',
    title: 'Complex Spinal Deformity',
    description: 'Specialized correction for adult scoliosis, kyphosis, and spinal imbalances using advanced planning.',
    icon: Activity,
    details: ['Adult Scoliosis', 'Kyphosis Correction', 'Spinal Imbalance', 'Revision Surgery']
  },
  {
    id: 'miss',
    title: 'Minimally Invasive Surgery',
    description: 'Advanced techniques, including endoscopic spine surgery, using smaller incisions for faster recovery, less pain, and reduced tissue damage.',
    icon: Microscope,
    details: ['Endoscopic Spine Surgery', 'Tubular Retractors', 'Microdiscectomy', 'Faster Recovery']
  },
  {
    id: 'robotic',
    title: 'Robotic-Assisted Surgery',
    description: 'State-of-the-art robotic guidance for unparalleled precision and safety in complex spine procedures.',
    icon: Brain,
    details: ['Enhanced Precision', '3D Navigation', 'Improved Safety', 'Reduced Radiation']
  },
  {
    id: 'stenosis',
    title: 'Spinal Stenosis',
    description: 'Decompression procedures to relieve pressure on nerves causing pain, numbness, or weakness.',
    icon: UserCheck,
    details: ['Laminectomy', 'Laminotomy', 'Spinal Fusion', 'Conservative Care']
  },
  {
    id: 'revision',
    title: 'Second Opinion & Revision Spinal Surgery',
    description: 'Expert evaluation and surgical correction for patients experiencing continued pain or complications after previous spine surgery.',
    icon: Stethoscope,
    details: ['Failed Back Surgery Syndrome', 'Pseudarthrosis', 'Hardware Failure', 'Adjacent Segment Disease']
  },
  {
    id: 'trauma',
    title: 'Spinal Trauma & Tumors',
    description: 'Urgent and complex care for spinal fractures, injuries, and oncological spinal conditions.',
    icon: ShieldCheck,
    details: ['Fracture Stabilization', 'Tumor Resection', 'Spinal Reconstruction', 'Emergency Care']
  }
];

export const CREDENTIALS: Credential[] = [
  {
    title: "Castle Connolly Top Doctor 2026",
    subtitle: "",
    link: "https://www.castleconnolly.com/doctors/profile/1003172974/jonathan-j-rasouli-staten-island-ny"
  },
  {
    title: "Fellowship-Trained",
    subtitle: "World Renowned Cleveland Clinic"
  },
  {
    title: "Board Certified",
    subtitle: "Neurological Surgery"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How do I know if I need spine surgery?",
    answer: "Surgery is typically recommended only after conservative treatments (physical therapy, medications, injections) have been tried, or when there are progressive neurological symptoms like weakness or numbness. Dr.\u00A0Rasouli will thoroughly evaluate your condition."
  },
  {
    question: "What is the recovery time for minimally invasive surgery?",
    answer: "Recovery varies by procedure, but minimally invasive techniques often allow patients to return to light activities within 2-3 weeks. Complex reconstructive surgeries may require 3-6 months for full recovery."
  },
  {
    question: "Do you accept my insurance?",
    answer: "We accept most major insurance plans including Medicare, Aetna, Cigna, Blue Cross Blue Shield, and UnitedHealthcare. Please contact our office to verify your specific plan coverage."
  },
  {
    question: "Can I get a second opinion?",
    answer: "Absolutely. Dr.\u00A0Rasouli welcomes second opinion consultations and believes informed patients make the best decisions about their care. Please bring your recent imaging to your appointment."
  }
];

export const CONTACT_INFO = {
  phone: "(201) 399-3388",
  email: "contact@rasoulimd.com"
};
// NeuroSpine Plus office locations (addresses verified on neurospineplus.com/locations, Oct 2026)
export const APPOINTMENT_URL = "https://neurospineplus.com/contact-us/";

export const OFFICE_LOCATIONS = [
  { city: "Paramus", street: "37 West Century Road, Suite 104", locality: "Paramus", state: "NJ", postalCode: "07652", url: "https://neurospineplus.com/locations/paramus/" },
  { city: "North Bergen", street: "6307 John F. Kennedy Blvd", locality: "North Bergen", state: "NJ", postalCode: "07047", url: "https://neurospineplus.com/locations/north-bergen/" },
  { city: "Jersey City", street: "550 Newark Avenue, Suite 408", locality: "Jersey City", state: "NJ", postalCode: "07306", url: "https://neurospineplus.com/locations/jersey-city/" },
  { city: "Edison", street: "1656 Oak Tree Road, 3rd Floor", locality: "Edison", state: "NJ", postalCode: "08820", url: "https://neurospineplus.com/locations/edison/" },
  { city: "Staten Island", street: "2777 Hylan Blvd", locality: "Staten Island", state: "NY", postalCode: "10306", url: "https://www.google.com/maps/search/?api=1&query=2777+Hylan+Blvd%2C+Staten+Island%2C+NY+10306" },
];
