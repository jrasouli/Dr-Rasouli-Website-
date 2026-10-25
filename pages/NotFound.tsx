import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, ButtonLink, Eyebrow } from '../components/ui';

const LINKS = [
  { path: '/about', label: 'About Dr.\u00A0Rasouli' },
  { path: '/services', label: 'Services' },
  { path: '/credentials', label: 'Credentials' },
  { path: '/news', label: 'News' },
];

const NotFound: React.FC = () => (
  <>
    <SEO
      title={"Page Not Found | Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli"}
      description={"The page you were looking for could not be found. Visit the home page of Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, board-certified spinal neurosurgeon."}
      noindex
    />
    <section className="bg-sand border-b border-sand-200">
      <Container narrow className="py-20 md:py-28 text-center">
        <Eyebrow className="mb-3">Error 404</Eyebrow>
        <h1 className="text-4xl md:text-5xl font-semibold text-navy-800 leading-[1.1]">We couldn&rsquo;t find that page</h1>
        <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          The link may be out of date, or the page may have moved. Here are a few places to start instead.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="tel:2013993388" variant="secondary"><Phone size={18} aria-hidden="true" /> (201) 399-3388</ButtonLink>
        </div>
        <nav aria-label="Popular pages" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.9375rem]">
            {LINKS.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="inline-block py-1 font-semibold text-teal-700 hover:text-navy-800 underline underline-offset-2">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  </>
);

export default NotFound;
