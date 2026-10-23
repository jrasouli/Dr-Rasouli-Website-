import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, CalendarCheck, MapPin } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, APPOINTMENT_URL, OFFICE_LOCATIONS } from '../constants';
import { Container } from './ui';
import SocialButtons from './SocialButtons';

const TEL = `tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change, unless hash link
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Retry briefly so links from other pages work once the target page has rendered.
      const id = decodeURIComponent(location.hash.slice(1));
      let tries = 0;
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else if (tries++ < 20) setTimeout(tryScroll, 50);
      };
      tryScroll();
    }
    const timeoutId = setTimeout(() => setIsMenuOpen(false), 0);
    return () => clearTimeout(timeoutId);
  }, [location]);

  const isActive = (path: string, children?: { path: string }[]) => {
    if (path === '/') return location.pathname === '/';
    const paths = children ? children.map((c) => c.path) : [path];
    return paths.some((p) => location.pathname === p || location.pathname.startsWith(`${p}/`));
  };

  // Exact match on path and hash, so /media and /media#lectures are told apart.
  const childActive = (to: string) => {
    const [p, h] = to.split('#');
    return location.pathname === p && location.hash === (h ? `#${h}` : '');
  };

  const linkBase = 'text-[0.9375rem] font-medium whitespace-nowrap transition-colors py-2 border-b-2';
  const linkState = (active: boolean) => (active ? 'text-navy-800 border-teal-700' : 'text-slate-600 border-transparent hover:text-navy-800');

  return (
    <div className="flex flex-col min-h-screen font-sans text-ink bg-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <Container>
          <div className="flex justify-between items-center h-16 lg:h-[72px] gap-6">
            <Link to="/" className="flex flex-col shrink-0 leading-none">
              <span className="font-serif text-xl md:text-[1.4rem] font-semibold text-navy-800">Jonathan J. Rasouli, MD</span>
              <span className="mt-1 text-[0.72rem] md:text-xs text-slate-500 font-medium tracking-wide">Board-Certified Spinal Neurosurgeon</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6" aria-label="Main">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <Link to={link.path} className={`${linkBase} ${linkState(isActive(link.path, link.children))} inline-flex items-center gap-1`}>
                        {link.label} <ChevronDown size={14} className="opacity-60" />
                      </Link>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-150">
                        <div className="w-56 bg-white shadow-lg rounded-lg border border-slate-200 py-2">
                          {link.children.map((child) => (
                            <Link key={child.path} to={child.path} onClick={(e) => e.currentTarget.blur()} className="block px-4 py-2.5 text-[0.9375rem] text-slate-700 hover:bg-sand hover:text-navy-800">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink to={link.path} end className={({ isActive: a }) => `${linkBase} ${linkState(a)}`}>
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-teal-700 hover:bg-teal-800 text-white px-4 py-2.5 text-[0.9375rem] font-semibold transition-colors whitespace-nowrap">
                Request an Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-navy-800 p-2 -mr-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </Container>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 absolute w-full shadow-lg z-50 max-h-[calc(100vh-64px)] overflow-y-auto">
            <nav className="px-5 pt-2 pb-8" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-slate-100">
                  {link.children ? (
                    <div className="py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mb-1">{link.label}</p>
                      {link.children.map((child) => (
                        <Link key={child.path} to={child.path} aria-current={childActive(child.path) ? 'page' : undefined} className={`block py-2 text-lg ${childActive(child.path) ? 'text-teal-700 font-semibold' : 'text-navy-800'}`}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <NavLink to={link.path} end className={({ isActive: a }) => `block py-3.5 text-lg ${a ? 'text-teal-700 font-semibold' : 'text-navy-800'}`}>
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-3">
                <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full rounded-md bg-teal-700 text-white py-3 font-semibold">
                  <CalendarCheck size={18} /> Request an Appointment
                </a>
                <a href={TEL} className="flex items-center justify-center gap-2 w-full rounded-md border border-navy-800/25 text-navy-800 py-3 font-semibold">
                  <Phone size={18} /> Call {CONTACT_INFO.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main" className="flex-grow">
        {children}
      </main>

      {/* Sticky mobile action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 px-4 py-2.5 grid grid-cols-2 gap-3 shadow-[0_-4px_16px_rgba(15,42,74,0.08)]">
        <a href={TEL} className="flex items-center justify-center gap-2 rounded-md border border-navy-800/25 text-navy-800 py-2.5 text-[0.9375rem] font-semibold">
          <Phone size={17} /> Call
        </a>
        <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-md bg-teal-700 text-white py-2.5 text-[0.9375rem] font-semibold">
          <CalendarCheck size={17} /> Appointment
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-navy-900 text-navy-100 pb-24 md:pb-0">
        <Container className="pt-14 pb-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-serif text-2xl font-semibold text-white">Jonathan J. Rasouli, MD</p>
              <p className="mt-2 text-sm text-navy-100/80">Board-certified spinal neurosurgeon practicing with{' '}
                <a href="https://neurospineplus.com" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white underline underline-offset-2">NeuroSpine Plus</a> across New Jersey and Staten Island.
              </p>
              <div className="mt-6 space-y-3">
                <a href={TEL} className="flex items-center gap-2 text-white font-semibold text-lg hover:text-teal-300">
                  <Phone size={18} className="text-teal-300" /> {CONTACT_INFO.phone}
                </a>
                <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-teal-700 hover:bg-teal-600 text-white px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors">
                  <CalendarCheck size={17} /> Request an Appointment
                </a>
              </div>
              <SocialButtons onDark className="mt-6" />
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300 mb-4">NeuroSpine Plus Offices</p>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {OFFICE_LOCATIONS.map((loc) => (
                  <li key={loc.city} className="flex gap-2.5">
                    <MapPin size={16} className="text-teal-300 shrink-0 mt-1" />
                    <a href={loc.url} target="_blank" rel="noopener noreferrer" className="text-sm leading-6 hover:text-white">
                      <span className="block font-semibold text-white">{loc.city}</span>
                      {loc.street}, {loc.locality}, {loc.state} {loc.postalCode}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300 mb-4">Explore</p>
              <ul className="space-y-0.5 text-sm">
                {[
                  { label: 'About', path: '/about' },
                  { label: 'Personal Statement', path: '/statement' },
                  { label: 'Services', path: '/services' },
                  { label: 'Media & Publications', path: '/media' },
                  { label: 'Lectures', path: '/media#lectures' },
                  { label: 'News Coverage', path: '/news' },
                  { label: 'Global Work', path: '/global-work' },
                  { label: 'Credentials & CV', path: '/credentials' },
                ].map((l) => (
                  <li key={l.path}><Link to={l.path} className="inline-block py-1 hover:text-white">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-navy-100/70">
            <p>&copy; {new Date().getFullYear()} Jonathan J. Rasouli, MD. All rights reserved.</p>
            <p>This website is for informational purposes only and does not constitute medical advice.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
