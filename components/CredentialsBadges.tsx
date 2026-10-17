import React from 'react';
import { ShieldCheck, GraduationCap, Award, Star, type LucideIcon } from 'lucide-react';
import { Container } from './ui';
import { CASTLE_CONNOLLY_URL } from '../constants';

const USNEWS_URL = 'https://health.usnews.com/doctors/jonathan-rasouli-935230';

type Item = {
  icon: LucideIcon;
  title: string;
  text: string;
  /** When set, the whole tile becomes an external link. */
  href?: string;
  ariaLabel?: string;
};

const ITEMS: Item[] = [
  { icon: ShieldCheck, title: 'Board Certified', text: 'American Board of Neurological Surgery' },
  { icon: GraduationCap, title: 'Fellowship-Trained', text: 'Spine Surgery Fellowship, Cleveland Clinic' },
  { icon: Star, title: '5-Star Patient Satisfaction', text: 'Patient ratings on U.S.\u00A0News', href: USNEWS_URL, ariaLabel: "5-Star Patient Satisfaction: view patient ratings on Dr. Rasouli's U.S. News profile (opens in a new tab)" },
  { icon: Award, title: 'Castle Connolly Top Doctor', text: '2023 – 2026', href: CASTLE_CONNOLLY_URL, ariaLabel: "Castle Connolly Top Doctor 2023 to 2026: view Dr. Rasouli's Castle Connolly profile (opens in a new tab)" },
];

const TileBody: React.FC<{ item: Item }> = ({ item }) => (
  <>
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
      <item.icon size={22} />
    </span>
    <div>
      <p className="font-serif text-lg font-semibold text-navy-800 leading-snug transition-colors group-hover:text-teal-700">{item.title}</p>
      <p className="text-sm text-slate-600 mt-0.5">{item.text}</p>
    </div>
  </>
);

/** One tile: a full-tile external link when `href` is set, otherwise static. */
const CredentialTile: React.FC<{ item: Item }> = ({ item }) =>
  item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.ariaLabel}
      className="group flex gap-4 -m-2 p-2 rounded-lg transition-colors hover:bg-teal-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
    >
      <TileBody item={item} />
    </a>
  ) : (
    <div className="flex gap-4">
      <TileBody item={item} />
    </div>
  );

/** Credential strip under the homepage hero. Same container width as the rest of the page; stacks on mobile. */
const CredentialsBadges: React.FC = () => (
  <section className="bg-white border-b border-slate-200" aria-label="Credentials">
    <Container className="py-8 md:py-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
        {ITEMS.map((item) => (
          <li key={item.title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
            <CredentialTile item={item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default CredentialsBadges;
