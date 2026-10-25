import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ChevronDown, HeartHandshake, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink } from '../components/ui';
import { APPOINTMENT_URL } from '../constants';

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('deformity');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What conditions does Dr.\u00A0Rasouli treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr.\u00A0Rasouli specializes in complex spinal deformity, adult scoliosis, herniated discs, spinal stenosis, spinal tumors, spinal trauma, and degenerative spine conditions. He offers both minimally invasive and robotic-assisted surgical options."
        }
      },
      {
        "@type": "Question",
        "name": "Where does Dr.\u00A0Rasouli see patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr.\u00A0Rasouli practices with NeuroSpine Plus and sees patients at offices in Paramus, North Bergen, Jersey City, and Edison, New Jersey, and on Staten Island, New York. His hospital affiliations are Hudson Regional Hospital in Secaucus, NJ and Bayonne Medical Center in Bayonne, NJ."
        }
      },
      {
        "@type": "Question",
        "name": "Is Dr.\u00A0Rasouli board certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr.\u00A0Rasouli is board certified by the American Board of Neurological Surgery. He completed a Complex Spinal Surgery Fellowship at the Cleveland Clinic, one of the world's leading medical institutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does Dr.\u00A0Rasouli perform minimally invasive spine surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr.\u00A0Rasouli is specially trained in minimally invasive spine surgery techniques, including robotic-assisted procedures. These approaches typically result in smaller incisions, less pain, shorter hospital stays, and faster recovery times."
        }
      },
      {
        "@type": "Question",
        "name": "How do I schedule a consultation with Dr.\u00A0Rasouli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a consultation by calling (201) 399-3388 or by visiting the NeuroSpine Plus website at neurospineplus.com/contact-us to book an appointment online."
        }
      }
    ]
  });

  return (
    <div className="bg-white">
      <SEO 
        title={"Spine Surgery Services | Minimally Invasive, Endoscopic & Robotic | Dr.\u00A0Rasouli, NJ & Staten Island"}
        description={"Dr.\u00A0Rasouli offers complex spinal deformity correction, minimally invasive and endoscopic spine surgery, robotic-assisted procedures, adult scoliosis treatment, and more in New Jersey and Staten Island."}
        canonicalPath="/services"
        schema={faqSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" }
        ]}
      />
      <PageHeader
        eyebrow="Services"
        title="Surgical & Non-Surgical Treatments"
        lead={"Dr.\u00A0Rasouli provides expert treatment for a wide range of spine conditions, prioritizing conservative management whenever possible."}
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-slate-200 divide-y divide-slate-200 overflow-hidden">
              {SERVICES.map((service) => {
                const isOpen = openId === service.id;
                return (
                  <div key={service.id}>
                    <h2 className="tracking-normal">
                    <button
                      onClick={() => toggle(service.id)}
                      aria-expanded={isOpen}
                      className={`w-full text-left px-5 md:px-6 py-5 flex items-center justify-between gap-4 transition-colors ${isOpen ? 'bg-sand' : 'hover:bg-slate-50'}`}
                    >
                      <span className="flex items-center gap-4">
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${isOpen ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-700'}`}>
                          <service.icon size={22} />
                        </span>
                        <span className="font-serif text-xl font-semibold text-navy-800">{service.title}</span>
                      </span>
                      <ChevronDown className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    </h2>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-7 pt-1 md:pl-[84px] bg-sand animate-fadeIn">
                        <p className="text-slate-700 text-lg leading-relaxed mb-5">{service.description}</p>
                        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">Procedures &amp; Conditions</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                          {service.details?.map((detail) => (
                            <li key={detail} className="flex items-center gap-2.5 bg-white border border-sand-200 rounded-md px-3.5 py-2.5 text-ink">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-700" aria-hidden="true"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <ButtonLink href={APPOINTMENT_URL} variant="secondary">Request a Consultation</ButtonLink>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-xl bg-teal-50 border border-teal-100 p-6">
              <HeartHandshake className="text-teal-700 mb-3" size={28} />
              <h2 className="text-xl font-semibold text-navy-800 mb-2">Conservative First Approach</h2>
              <p className="text-slate-700 leading-relaxed">
                Dr.&nbsp;Rasouli believes spine surgery is not always the answer. We thoroughly explore non-surgical options including physical therapy, pain management, and lifestyle modifications before recommending surgical intervention.
              </p>
            </div>
            <div className="rounded-xl bg-navy-800 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">Schedule a consultation</h2>
              <p className="text-navy-100/85 mb-5">Appointments are available at five NeuroSpine Plus offices across New Jersey and Staten Island.</p>
              <ButtonLink href={APPOINTMENT_URL} className="w-full">Request an Appointment</ButtonLink>
              <a href="tel:2013993388" className="mt-4 flex items-center justify-center gap-2 font-semibold text-white hover:text-teal-300">
                <Phone size={18} className="text-teal-300" /> (201) 399-3388
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Services;
