import React from 'react';
import { ShieldCheck, GraduationCap, Award, Stethoscope } from 'lucide-react';
import { Container } from './ui';
import { CASTLE_CONNOLLY_URL } from '../constants';

const ITEMS = [
  { icon: ShieldCheck, title: 'Board Certified', text: 'American Board of Neurological Surgery' },
  { icon: GraduationCap, title: 'Fellowship-Trained', text: 'Complex & Adult Reconstructive Spine, Cleveland Clinic' },
  { icon: Stethoscope, title: 'Residency', text: 'Neurological Surgery, The Mount Sinai Hospital' },
  { icon: Award, title: 'Castle Connolly Top Doctor', text: '2024 · 2025 · 2026', link: CASTLE_CONNOLLY_URL },
];

/** Credential strip under the homepage hero. Same container width as the rest of the page; stacks on mobile. */
const CredentialsBadges: React.FC = () => (
  <section className="bg-white border-b border-slate-200" aria-label="Credentials">
    <Container className="py-8 md:py-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
        {ITEMS.map((item) => (
          <li key={item.title} className="flex gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <item.icon size={22} />
            </span>
            <div>
              <p className="font-serif text-lg font-semibold text-navy-800 leading-snug">{item.title}</p>
              <p className="text-sm text-slate-600 mt-0.5">{item.text}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-teal-700 hover:text-navy-800 underline underline-offset-2">
                  View profile
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default CredentialsBadges;
