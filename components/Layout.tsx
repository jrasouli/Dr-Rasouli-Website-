import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield, Navigation, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import Button from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  // Scroll to top on route change, unless hash link
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Use a timeout to avoid synchronous state updates during render phase
    const timeoutId = setTimeout(() => {
      setIsMenuOpen(false);
      setMobileSubmenuOpen(null);
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [location]);

  // Filter links for Desktop Navbar to avoid duplication with buttons
  const desktopLinks = NAV_LINKS.filter(link => 
    link.path !== 'https://neurospineplus.com/contact-us/'
  );

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === label ? null : label);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-trust text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {CONTACT_INFO.phone}</span>
          </div>
          <div>
            <span className="flex items-center gap-2"><Clock size={14} /> Office Hours: Mon-Fri 9AM-5PM</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col shrink-0">
              <span className="text-xl md:text-2xl font-heading font-bold text-primary leading-none">Jonathan J. Rasouli, MD</span>
              <span className="text-[10px] md:text-xs text-secondary font-semibold tracking-wider uppercase">Board-Certified Spinal Neurosurgeon</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {desktopLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button 
                        className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                          location.pathname.startsWith(link.path) 
                          ? 'text-primary' 
                          : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        {link.label} <ChevronDown size={14} className="mt-0.5" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg rounded-tr-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                        <div className="py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors text-gray-600 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors ${
                          isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <div className="flex items-center gap-3 ml-4">
                 <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap">
                    Schedule Consultation
                  </button>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-4 pb-12 space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(link.label)}
                        className={`w-full flex items-center justify-between px-3 py-4 rounded-md text-lg font-medium border-b border-gray-50 ${
                          mobileSubmenuOpen === link.label ? 'text-primary' : 'text-gray-700'
                        }`}
                      >
                        {link.label}
                        {mobileSubmenuOpen === link.label ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      
                      {/* Mobile Submenu */}
                      {mobileSubmenuOpen === link.label && (
                        <div className="bg-gray-50 px-4 py-2 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-3 px-2 text-base text-gray-600 border-b border-gray-100 last:border-0 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-4 rounded-md text-lg font-medium border-b border-gray-50 text-gray-700 hover:bg-gray-50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-4 rounded-md text-lg font-medium border-b border-gray-50 ${
                          isActive ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              
              <div className="pt-6 space-y-3">
                 <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="primary" fullWidth className="py-3">Schedule Consultation</Button>
                 </a>

                 <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="block w-full">
                    <Button variant="outline" fullWidth className="py-3 flex items-center gap-2 justify-center">
                      <Phone size={18} /> Call {CONTACT_INFO.phone}
                    </Button>
                 </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Sticky Mobile Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} 
            className="flex flex-col items-center justify-center text-primary active:scale-95 transition-transform"
          >
            <div className="bg-blue-50 p-2 rounded-full mb-1">
              <Phone size={20} className="text-primary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
          </a>

          <a 
            href="https://neurospineplus.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-secondary active:scale-95 transition-transform"
          >
             <div className="bg-teal-50 p-2 rounded-full mb-1">
              <Navigation size={20} className="text-secondary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wide">Consult</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-trust text-white pt-12 pb-24 md:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    {link.isExternal ? (
                      <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{link.label}</a>
                    ) : (
                      <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-3 mt-2">
                  <Phone size={18} className="shrink-0 text-secondary" />
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="hover:text-white font-bold">{CONTACT_INFO.phone}</a>
                </li>
              </ul>
              <div className="mt-8">
                <span className="inline-block bg-white/10 px-3 py-1 rounded text-xs text-accent border border-accent/30">
                  5.0 ★★★★★ Patient Rating
                </span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-6 text-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Jonathan J. Rasouli, MD. All rights reserved.</p>
            <p className="mt-2">This website is for informational purposes only and does not constitute medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;