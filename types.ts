import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[]; // Added for dropdown support
  isExternal?: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  condition: string;
  date: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

export interface Credential {
  title: string;
  subtitle: string;
  year?: string;
  link?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}