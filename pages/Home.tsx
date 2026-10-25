import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle2, MapPin, Phone, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICES, TESTIMONIALS, OFFICE_LOCATIONS, APPOINTMENT_URL, CASTLE_CONNOLLY_URL, SOCIAL_LINKS } from '../constants';
import MediaCarousel from '../components/MediaCarousel';
import CredentialsBadges from '../components/CredentialsBadges';
import SocialButtons from '../components/SocialButtons';
import { Container, ButtonLink, Eyebrow, SectionHeading, Picture } from '../components/ui';

const SITE_URL = 'https://rasouli-md.com';

const clinicLocations = OFFICE_LOCATIONS.map((loc) => ({
  "@type": "MedicalClinic",
  "name": `NeuroSpine Plus - ${loc.city}`,
  ...(loc.url.includes('neurospineplus.com') ? { "url": loc.url } : {}),
  "telephone": "+1-201-399-3388",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": loc.street,
    "addressLocality": loc.locality,
    "addressRegion": loc.state,
    "postalCode": loc.postalCode,
    "addressCountry": "US"
  }
}));

const Home: React.FC = () => {
  const physicianSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    "name": "Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD",
    "image": `${SITE_URL}/images/dr-rasouli-headshot-2026.jpg`,
    "description": "Board-certified, fellowship-trained spinal neurosurgeon specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted spine procedures.",
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
        "description": "Complex Spinal Surgery Fellowship"
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
      "Castle Connolly Top Doctor 2023",
      "Castle Connolly Top Doctor 2024",
      "Castle Connolly Top Doctor 2025",
      "Castle Connolly Top Doctor 2026",
      "Castle Connolly Rising Star 2023",
      "Alpha Omega Alpha Honor Medical Society 2011"
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
      "https://www.doximity.com/pub/jonathan-rasouli-md",
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.x,
      SOCIAL_LINKS.linkedin,
      "https://health.usnews.com/doctors/jonathan-rasouli-935230"
    ]
  });

  const businessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#practice`,
    "name": "Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD - Spine Neurosurgery",
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
        title={"Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD | Board-Certified Spinal Neurosurgeon | NJ & Staten Island"}
        description={"Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli is a board-certified, fellowship-trained spinal neurosurgeon specializing in complex spinal deformity, minimally invasive surgery, and robotic-assisted procedures. Serving patients in New Jersey and Staten Island, NY. Call (201) 399-3388."}
        canonicalPath="/"
        schema={[physicianSchema, businessSchema]}
      />

      {/* Hero */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,209,199,0.14),transparent_55%)]" aria-hidden="true"></div>
        <Container className="relative py-8 md:py-14 lg:py-16">
          <div className="grid items-center gap-8 md:gap-12 md:grid-cols-12">
            {/* Photo: first on mobile so it is visible near the top */}
            <div className="md:col-span-5 md:order-2">
              <div className="relative mx-auto max-w-[420px]">
                <Picture
                  name="dr-rasouli-statement"
                  alt={"Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD, in a navy suit"}
                  priority
                  width={1000}
                  height={1500}
                  className="block"
                  imgClassName="hero-portrait w-full aspect-[3/2] md:aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-7 md:order-1">
              <Eyebrow onDark><span className="block sm:inline">NeuroSpine Plus<span className="hidden sm:inline"> · </span></span><span className="block sm:inline mt-1 sm:mt-0">New Jersey &amp; Staten Island</span></Eyebrow>
              <h1 className="mt-4 md:mt-5 text-[2.25rem] sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-white [text-wrap:balance]">
                World-Class Spine Care, Personalized for You
              </h1>
              <p className="mt-5 text-lg md:text-xl text-navy-100/90 leading-relaxed max-w-2xl">
                Dr.&nbsp;Rasouli is a board-certified, fellowship-trained neurosurgeon specializing in robotic-assisted, minimally invasive, and complex spinal deformity surgery.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <ButtonLink href={APPOINTMENT_URL} className="text-lg px-7">Request an Appointment</ButtonLink>
                <a href="tel:2013993388" className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-teal-300">
                  <Phone size={20} className="text-teal-300" /> Call (201) 399-3388
                </a>
              </div>

              {/* One clear Castle Connolly treatment */}
              <a
                href={CASTLE_CONNOLLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-4 rounded-xl bg-white/[0.06] hover:bg-white/10 ring-1 ring-white/15 p-3 pr-5 transition-colors"
              >
                <Picture name="castle-connolly-2026" alt="Castle Connolly Top Doctors 2026" width={213} height={320} className="block shrink-0" imgClassName="h-20 w-auto rounded" />
                <span>
                  <span className="block font-serif text-lg font-semibold text-white">Castle Connolly Top Doctors</span>
                  <span className="block text-sm text-navy-100/85">2023 – 2026 &nbsp;|&nbsp; Rising Star 2023</span>
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CredentialsBadges />

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <Picture
              name="dr-rasouli-office"
              alt={"Dr.\u00A0Rasouli reviewing spine imaging in his office"}
              width={1200}
              height={800}
              className="block"
              imgClassName="w-full rounded-xl shadow-lg object-cover aspect-[3/2]"
            />
            <div>
              <SectionHeading
                eyebrow={"Why patients choose Dr.\u00A0Rasouli"}
                title="Academic training, focused on complex spine care"
                lead={<>Dr.&nbsp;Rasouli trained in neurological surgery at The Mount Sinai Hospital, then completed a <strong className="text-navy-800 font-semibold">Complex Spinal Surgery Fellowship</strong> at the world-renowned Cleveland Clinic. His practice is dedicated entirely to the spine, from minimally invasive and endoscopic procedures to complex deformity correction.</>}
              />
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  'Cleveland Clinic\u2013Trained Spine Surgeon',
                  'Alpha Omega Alpha Honor Society',
                  'Specialist in Robotic-Assisted Surgery',
                  'Featured in CNN & The Washington Post',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-teal-700 shrink-0 mt-1" size={20} />
                    <span className="font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-sand">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Specialties"
              title="Specialized spine care"
              lead="Combining academic excellence with cutting-edge technology to provide personalized treatment plans for every patient."
            />
            <ButtonLink href="/services" variant="secondary" className="shrink-0">View All Treatments</ButtonLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <Link key={service.id} to="/services" className="group bg-white rounded-xl border border-sand-200 p-7 flex flex-col hover:border-teal-700/40 hover:shadow-md transition">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-700 mb-5">
                  <service.icon size={26} />
                </span>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
                <span className="mt-5 inline-flex items-center text-teal-700 font-semibold group-hover:text-navy-800">
                  Learn more <ChevronRight size={18} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <MediaCarousel />

      {/* Featured story */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3">In the news</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-800 leading-tight">&ldquo;Miracle&rdquo; recovery featured in the New York Post</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Dr.&nbsp;Rasouli&apos;s expertise was instrumental in the recovery of a paralyzed teen who defied all odds. Read the inspiring story that captivated the nation.
              </p>
              <blockquote className="mt-8 border-l-2 border-teal-700 pl-5">
                <p className="font-serif text-xl md:text-2xl text-navy-800 leading-snug">&ldquo;The injuries were life-threatening&hellip; He ultimately did fantastic.&rdquo;</p>
                <footer className="mt-3 text-sm text-slate-500">Dr.&nbsp;Jonathan&nbsp;Rasouli, as quoted in the New York Post</footer>
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/media">Watch the Story</ButtonLink>
                <ButtonLink href="https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/" variant="secondary">
                  Read the Article <ExternalLink size={16} />
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure>
                <Picture
                  name="dr-rasouli-patient-nypost"
                  alt={"Dr.\u00A0Rasouli at the bedside with his patient and family"}
                  width={900}
                  height={1125}
                  className="block"
                  imgClassName="w-full max-w-md mx-auto rounded-xl shadow-lg object-cover aspect-[4/5]"
                />
                <figcaption className="mt-3 text-sm text-slate-500 text-center">Dr.&nbsp;Rasouli with his patient, as featured in the New York Post.</figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient Stories (content unchanged) */}
      <section className="py-16 md:py-24 bg-navy-800 text-white">
        <Container>
          <div className="text-center mb-12">
            <Eyebrow onDark className="mb-3">In their words</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold">Patient Stories</h2>
            <div className="mt-4 flex justify-center gap-1 text-teal-300" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="mt-2 text-navy-100/85">Consistent 5-Star Patient Ratings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.id} className="bg-white text-ink rounded-xl p-7 flex flex-col">
                <div className="mb-4 text-teal-700 flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="font-serif text-lg leading-relaxed text-navy-800 flex-grow">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 pt-4 border-t border-slate-200">
                  <p className="font-semibold text-navy-800">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.condition} | {t.date}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Practice & Office Locations */}
      <section className="py-16 md:py-24 bg-sand" id="locations">
        <Container>
          <SectionHeading
            center
            eyebrow="Locations"
            title="Office Locations"
            lead={<>Dr.&nbsp;Rasouli practices with <a href="https://neurospineplus.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-semibold underline underline-offset-2 hover:text-navy-800">NeuroSpine Plus</a>, seeing patients at offices in Paramus, North Bergen, Jersey City, and Edison, New Jersey, and on Staten Island, New York.</>}
          />
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {OFFICE_LOCATIONS.map((loc) => (
              <a key={loc.city} href={loc.url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)] bg-white rounded-xl border border-sand-200 p-6 flex gap-4 hover:border-teal-700/40 hover:shadow-sm transition">
                <MapPin className="text-teal-700 shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="text-lg font-semibold text-navy-800">{loc.city}, {loc.state}</h3>
                  <address className="not-italic text-slate-600 leading-relaxed mt-1">
                    {loc.street}<br />
                    {loc.locality}, {loc.state} {loc.postalCode}
                  </address>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <ButtonLink href={APPOINTMENT_URL}>Request an Appointment</ButtonLink>
            <p className="text-slate-700">All offices: <a href="tel:2013993388" className="font-semibold text-navy-800 hover:text-teal-700">(201) 399-3388</a></p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <Container narrow className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-800">Start your journey to a pain-free life</h2>
          <p className="mt-4 text-xl text-slate-600">Dr.&nbsp;Rasouli is currently accepting new patients for complex spine consultations.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href={APPOINTMENT_URL} className="text-lg px-8">Request an Appointment</ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="text-lg px-8">Explore Services</ButtonLink>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Follow Dr.&nbsp;Rasouli</p>
            <SocialButtons />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
