import React from 'react';
import { Search } from 'lucide-react';

const LOGOS = [
  { name: "NY Post", url: "https://placehold.co/160x60/transparent/1E4D8B?text=NY+Post" },
  { name: "CNN", url: "https://placehold.co/160x60/transparent/cc0000?text=CNN" },
  { name: "The Washington Post", url: "https://placehold.co/160x60/transparent/333333?text=Washington+Post" },
  { name: "Becker's Spine", url: "https://placehold.co/160x60/transparent/0066cc?text=Becker's+Spine" },
  { name: "US News", url: "https://placehold.co/160x60/transparent/0052A3?text=US+News" },
  { name: "Northwell Health", url: "https://placehold.co/160x60/transparent/333333?text=Northwell" },
  { name: "WebMD", url: "https://placehold.co/160x60/transparent/0066cc?text=WebMD" },
  { name: "ResearchGate", url: "https://placehold.co/160x60/transparent/00ccbb?text=ResearchGate" },
];

const MediaCarousel: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section className={`bg-gradient-to-br from-blue-50 to-white py-12 overflow-hidden border-y border-gray-100 ${className}`}>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .carousel-track {
            display: flex;
            gap: 4rem;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .carousel-wrapper:hover .carousel-track {
            animation-play-state: paused;
          }
          .media-logo {
             filter: grayscale(100%) opacity(0.6);
             transition: all 0.3s ease;
          }
          .media-logo:hover {
             filter: grayscale(0%) opacity(1);
             transform: scale(1.05);
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="font-heading font-bold text-2xl text-primary uppercase tracking-wide mb-2">As Featured In</h3>
        <p className="text-gray-500 text-lg">Recognized Expert in National Media & Medical Publications</p>
      </div>

      <div className="carousel-wrapper relative w-full">
        {/* Gradient masks for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="carousel-track items-center py-4 px-4">
          {/* First set of logos */}
          {LOGOS.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex items-center justify-center min-w-[160px] h-20 px-4">
              <img 
                src={logo.url} 
                alt={`${logo.name} Logo`} 
                className="media-logo h-12 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for infinite loop */}
          {LOGOS.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex items-center justify-center min-w-[160px] h-20 px-4">
              <img 
                src={logo.url} 
                alt={`${logo.name} Logo`} 
                className="media-logo h-12 w-auto object-contain"
              />
            </div>
          ))}
           {/* Triplicate set for infinite loop on wide screens */}
           {LOGOS.map((logo, index) => (
            <div key={`logo-3-${index}`} className="flex items-center justify-center min-w-[160px] h-20 px-4">
              <img 
                src={logo.url} 
                alt={`${logo.name} Logo`} 
                className="media-logo h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-200/60 pt-8 mx-auto max-w-4xl px-4">
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          <Search size={16} className="inline-block text-primary mr-2 mb-0.5" />
          <strong>Research Dr. Rasouli</strong> to discover more credible sources featuring his expertise in neurosurgery and spine care
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
           <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rasouli+jonathan" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-cta-orange hover:underline">PubMed</a>
           <span className="text-gray-300">|</span>
           <a href="https://www.researchgate.net/profile/Jonathan-Rasouli" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-cta-orange hover:underline">ResearchGate</a>
           <span className="text-gray-300">|</span>
           <a href="https://www.doximity.com/pub/jonathan-rasouli-md" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-cta-orange hover:underline">Doximity</a>
           <span className="text-gray-300">|</span>
           <a href="https://www.google.com/search?q=Dr+Jonathan+Rasouli+neurosurgeon" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-cta-orange hover:underline">Google Search</a>
        </div>
      </div>
    </section>
  );
};

export default MediaCarousel;