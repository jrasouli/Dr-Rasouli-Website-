import React from 'react';
import { Container } from './ui';

const OUTLETS = [
  'New York Post',
  'CNN',
  'The Washington Post',
  "Becker's Spine",
  'U.S. News & World Report',
  'WebMD',
];

const RESEARCH_LINKS = [
  { label: 'PubMed', href: 'https://pubmed.ncbi.nlm.nih.gov/?term=rasouli+jonathan' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Jonathan-Rasouli' },
  { label: 'Doximity', href: 'https://www.doximity.com/pub/jonathan-rasouli-md' },
  { label: 'Google Search', href: 'https://www.google.com/search?q=Dr+Jonathan+Rasouli+neurosurgeon' },
];

/** "As Featured In" — a static, wrapping row of text wordmarks (no marquee, nothing cut off). */
const MediaCarousel: React.FC<{ className?: string }> = ({ className = '' }) => (
  <section className={`bg-sand border-y border-sand-200 ${className}`} aria-labelledby="featured-in">
    <Container className="py-12 md:py-14 text-center">
      <p id="featured-in" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">As Featured In</p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-10 gap-y-3">
        {OUTLETS.map((name) => (
          <li key={name} className="font-serif text-xl lg:text-[1.375rem] font-semibold text-navy-800/70 whitespace-nowrap">{name}</li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-slate-600">
        Research Dr. Rasouli:{' '}
        {RESEARCH_LINKS.map((l, i) => (
          <React.Fragment key={l.label}>
            {i > 0 && <span className="text-slate-300 mx-2" aria-hidden="true">·</span>}
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 hover:text-navy-800 underline underline-offset-2">{l.label}</a>
          </React.Fragment>
        ))}
      </p>
    </Container>
  </section>
);

export default MediaCarousel;
