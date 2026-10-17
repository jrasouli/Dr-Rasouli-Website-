import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle2, Newspaper, Play, MapPin } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { SERVICES, TESTIMONIALS, OFFICE_LOCATIONS, APPOINTMENT_URL } from '../constants';
import MediaCarousel from '../components/MediaCarousel';
import SocialButtons from '../components/SocialButtons';
import CredentialsBadges from '../components/CredentialsBadges';

const SITE_URL = 'https://rasouli-md.com';

const clinicLocations = OFFICE_LOCATIONS.map((loc) => ({
  "@type": "MedicalClinic",
  "name": `NeuroSpine Plus - ${loc.city}`,
  "url": loc.url,
  "telephone": "+1-201-399-3388",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": loc.street,
    "addressLocality": loc.locality,
    "addressRegion": "NJ",
    "postalCode": loc.postalCode,
    "addressCountry": "US"
  }
}));

const Home: React.FC = () => {
  const physicianSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    "name": "Dr. Jonathan J. Rasouli, MD",
    "image": `${SITE_URL}/images/dr-rasouli-headshot.jpg`,
    "description": "Board-certified, fellowship-trained spine neurosurgeon specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted spine procedures.",
    "url": SITE_URL,
    "telephone": "+1-201-399-3388",
    "medicalSpecialty": [
      "https://schema.org/Neurology",
      {
        "@type": "MedicalSpecialty",
        "name": "Spinal Neurosurgery"
      },
      {
        "@type": "MedicalSpecialty", 
        "name": "Complex Spinal Deformity Surgery"
      }
    ],
    "knowsAbout": [
      "Complex Spinal Deformity",
      "Adult Scoliosis",
      "Minimally Invasive Spine Surgery",
      "Robotic-Assisted Spine Surgery",
      "Spinal Tumors",
      "Spinal Trauma",
      "Cervical Spine Surgery",
      "Lumbar Fusion",
      "Artificial Disc Replacement",
      "Neurocritical Care"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Cleveland Clinic Foundation",
        "description": "Complex & Adult Reconstructive Spinal Surgery Fellowship"
      },
      {
        "@type": "EducationalOrganization",
        "name": "The Mount Sinai Hospital",
        "description": "Neurological Surgery Residency"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Albert Einstein College of Medicine",
        "description": "Doctor of Medicine (M.D.)"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Board Certification",
        "name": "American Board of Neurological Surgery",
        "dateCreated": "2023-05"
      }
    ],
    "award": [
      "Castle Connolly Top Doctor 2024",
      "Castle Connolly Top Doctor 2025",
      "Castle Connolly Top Doctor 2026",
      "Castle Connolly Rising Star Award 2023",
      "Top Doctor - New York Magazine 2024"
    ],
    "workLocation": [
      {
        "@type": "Hospital",
        "name": "Hudson Regional Hospital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Secaucus",
          "addressRegion": "NJ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Hospital",
        "name": "Bayonne Medical Center",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bayonne",
          "addressRegion": "NJ",
          "addressCountry": "US"
        }
      }
    ],
    "affiliation": {
      "@type": "MedicalOrganization",
      "name": "NeuroSpine Plus",
      "url": "https://neurospineplus.com"
    },
    "location": clinicLocations,
    "sameAs": [
      "https://www.youtube.com/c/virtualglobalspineconference",
      "https://www.healthgrades.com/physicians/dr-jonathan-rasouli",
      "https://www.doximity.com/pub/jonathan-rasouli-md"
    ]
  });

  const businessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#practice`,
    "name": "Dr. Jonathan J. Rasouli, MD - Spine Neurosurgery",
    "description": "Board-certified spine neurosurgery practice specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted procedures.",
    "url": SITE_URL,
    "telephone": "+1-201-399-3388",
    "priceRange": "$$$$",
    "medicalSpecialty": "Neurosurgery",
    "location": clinicLocations,
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Complex Spinal Deformity Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Minimally Invasive Spine Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Robotic-Assisted Spine Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Adult Scoliosis Correction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Lumbar Fusion"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Cervical Spine Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Artificial Disc Replacement"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Spinal Tumor Surgery"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "State",
        "name": "New York"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7920",
      "longitude": "-74.0650"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://neurospineplus.com/contact-us/",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book Appointment"
      }
    }
  });

  return (
    <div className="flex flex-col">
      <SEO 
        title="Dr. Jonathan J. Rasouli, MD | Board-Certified Spine Neurosurgeon | NJ & NY"
        description="Dr. Jonathan Rasouli is a fellowship-trained spine neurosurgeon specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted procedures. Serving patients in New Jersey and New York. Call (201) 399-3388."
        canonicalPath="/"
        schema={[physicianSchema, businessSchema]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-900 text-white pt-12 pb-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5 space-y-6">
              <a 
                href="https://health.usnews.com/doctors/jonathan-rasouli-935230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-1.5 rounded-full border border-blue-400/30 backdrop-blur-sm hover:bg-blue-800/70 transition-colors group cursor-pointer"
              >
                <Star size={16} className="text-accent fill-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium tracking-wide underline decoration-blue-400/50 underline-offset-4 group-hover:decoration-blue-300">5.0 Patient Rating US News & World Report</span>
              </a>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                World-Class Spine Care, <span className="text-secondary">Personalized for You</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
                Dr. Jonathan J. Rasouli is a board-certified, fellowship-trained neurosurgeon specializing in robotic-assisted, minimally invasive, and complex spinal deformity surgery.
              </p>
              <div className="pt-4 flex flex-col items-start">
                <div className="inline-flex flex-col items-center">
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button variant="secondary" className="w-full sm:w-auto text-lg px-8">Schedule Consultation</Button>
                    </a>
                  </div>

                  {/* Moved Badges here for better aesthetics */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-6 opacity-90">
                   <img 
                     src="https://lh3.googleusercontent.com/d/1sDQNlO0MVvxGKAGzEOvhmt99J6CDTSrE" 
                     alt="Castle Connolly Top Doctor" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                   <img 
                     src="https://lh3.googleusercontent.com/d/19yFbjiJ6R2-r9HyyqabMCBEaeDr-qSaw" 
                     alt="Award Badge" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                   <img 
                     src="https://lh3.googleusercontent.com/d/1WC5Ptj1B2yOvKNjgRCUWoX7OdJT-CZ-O" 
                     alt="Recognition Badge" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                   <img 
                     src="https://lh3.googleusercontent.com/d/1c1uwIGfenEh-LxweuYKYD_pMNI6Khv_J" 
                     alt="Board Certified" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Image / Headshot Placeholder */}
            <div className="md:w-2/5 relative w-full">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                {/* Simulated Professional Headshot */}
                <img 
                  src="/images/dr-rasouli-headshot.jpg" 
                  alt="Dr. Jonathan J. Rasouli" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-heading font-bold text-xl">Jonathan J. Rasouli, MD, FAANS</p>
                </div>
              </div>
              
              {/* Social Media Buttons under headshot */}
              <div className="mt-6">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Credentials - Replaced with Component */}
      <CredentialsBadges />

      {/* About / Differentiator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <img 
                src="https://lh3.googleusercontent.com/d/1a6Scq7cQ5wC4TJD6hUUsnuuqaVJPg5pN" 
                alt="Dr. Rasouli consulting with patient" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Why Choose Dr. Rasouli?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dr. Rasouli stands apart through his rare <strong>fellowship training</strong> in both neurosurgery and orthopaedic spine surgery. This comprehensive background allows him to approach complex spinal deformities from multiple expert perspectives.
              </p>
              
              <ul className="space-y-4 pt-2">
                {[
                  "Fellowship Trained (Cleveland Clinic)",
                  "Alpha Omega Alpha Honors Society",
                  "Specialist in Robotic-Assisted Surgery",
                  "Featured in CNN & The Washington Post"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Specialized Spine Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining academic excellence with cutting-edge technology to provide personalized treatment plans for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-secondary flex flex-col">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mt-auto">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline">View All Treatments</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Media Carousel */}
      <MediaCarousel className="mb-8" />

      {/* Featured Media Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="md:w-1/2">
                  <div className="flex items-center gap-2 text-cta-orange mb-3 font-bold uppercase tracking-wider text-sm">
                    <Newspaper size={16} /> In the News
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">"Miracle" Recovery Featured in NY Post</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                     Dr. Rasouli's expertise was instrumental in the recovery of a paralyzed teen who defied all odds. Read the inspiring story that captivated the nation.
                  </p>
                  <Link to="/media">
                    <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                       <Play size={18} fill="currentColor" /> Watch the Story
                    </button>
                  </Link>
               </div>
               <div className="md:w-1/2 flex justify-center md:justify-end">
                   <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 max-w-sm">
                      <p className="italic text-lg mb-4">"The injuries were life-threatening... He ultimately did fantastic."</p>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">JR</div>
                         <div>
                            <p className="font-bold text-sm">Dr. Jonathan Rasouli</p>
                            <p className="text-xs text-blue-200">As quoted in The New York Post</p>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-trust text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Patient Stories</h2>
            <div className="flex justify-center gap-1 text-accent mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-blue-200">Consistent 5-Star Ratings on Healthgrades & Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="mb-4 text-accent flex gap-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-100 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-blue-300">{t.condition} | {t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice & Office Locations */}
      <section className="py-20 bg-gray-50" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Office Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Dr. Rasouli practices with <a href="https://neurospineplus.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-semibold hover:text-primary">NeuroSpine Plus</a>, seeing patients at offices across New Jersey in Paramus, North Bergen, Jersey City, Edison, Hamilton, and Mount Laurel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICE_LOCATIONS.map((loc) => (
              <div key={loc.city} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4">
                <MapPin className="text-secondary shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-gray-900">{loc.city}, NJ</h3>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed mt-1">
                    {loc.street}<br />
                    {loc.locality}, NJ {loc.postalCode}
                  </address>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-gray-700">
            <p className="mb-4">
              Appointments for all offices: <a href="tel:2013993388" className="font-bold text-primary hover:text-secondary">(201) 399-3388</a>
            </p>
            <a href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="px-8">Request an Appointment</Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Start Your Journey to a Pain-Free Life
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Dr. Rasouli is currently accepting new patients for complex spine consultations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer">
               <Button className="w-full sm:w-auto px-10 py-4 text-lg">Request Appointment</Button>
             </a>
             <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg">Explore Services</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;