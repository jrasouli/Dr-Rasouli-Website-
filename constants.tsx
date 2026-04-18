import { Activity, Brain, UserCheck, Microscope, ShieldCheck, Stethoscope } from 'lucide-react';
import { NavItem, Testimonial, ServiceItem, Credential, FaqItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About Dr. Rasouli', 
    path: '/about',
    children: [
      { label: 'Statement', path: '/statement' },
      { label: 'Credentials/CV', path: '/credentials' },
      { label: 'Global Humanitarian Work', path: '/global-work' },
      { label: 'News', path: '/news' }
    ]
  },
  { label: 'Services', path: '/services' },
  { label: 'Media', path: '/media' },
  { label: 'Schedule Consultation', path: 'https://neurospineplus.com/contact-us/', isExternal: true },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Dr. Rasouli did his homework by reviewing my X-rays and MRIs prior to our first visit and determined the source of my lingering pain. He gave me clear explanations and addressed all my concerns.",
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
    quote: "After seeing multiple doctors, Dr. Rasouli was the only one who truly understood my complex spine condition. His expertise in spinal deformity was exactly what I needed.",
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
    description: 'Advanced techniques using smaller incisions for faster recovery, less pain, and reduced tissue damage.',
    icon: Microscope,
    details: ['Tubular Retractors', 'Microdiscectomy', 'Less Blood Loss', 'Faster Recovery']
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
  },
  {
    title: "Academic Faculty",
    subtitle: ""
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How do I know if I need spine surgery?",
    answer: "Surgery is typically recommended only after conservative treatments (physical therapy, medications, injections) have been tried, or when there are progressive neurological symptoms like weakness or numbness. Dr. Rasouli will thoroughly evaluate your condition."
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
    answer: "Absolutely. Dr. Rasouli welcomes second opinion consultations and believes informed patients make the best decisions about their care. Please bring your recent imaging to your appointment."
  }
];

export const CONTACT_INFO = {
  phone: "(201) 399-3388",
  email: "contact@rasoulimd.com"
};