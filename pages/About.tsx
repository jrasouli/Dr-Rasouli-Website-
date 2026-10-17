import React from 'react';
import { GraduationCap, Phone } from 'lucide-react';
import SocialButtons from '../components/SocialButtons';
import MediaCarousel from '../components/MediaCarousel';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink, Picture } from '../components/ui';
import { APPOINTMENT_URL } from '../constants';

const TIMELINE = [
  {
    title: 'Fellowship',
    inst: 'Cleveland Clinic',
    desc: 'Combined Neurosurgery & Orthopaedic Spine Surgery. Specialized in robotic/minimally invasive techniques.',
  },
  {
    title: 'Residency',
    inst: 'The Mount Sinai Hospital, NY',
    desc: 'Neurosurgical Residency & Functional Neurosurgery Fellowship.',
  },
  {
    title: 'Medical School',
    inst: 'Albert Einstein College of Medicine',
    desc: 'Graduated with Distinction. Alpha Omega Alpha Honors (2012).',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Dr. Jonathan Rasouli | Top NY & NJ Spine Surgeon"
        description="Learn about Dr. Rasouli, a board-certified, dual fellowship-trained spine neurosurgeon. Read about his background and philosophy."
        canonicalPath="/about"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Dr. Rasouli", item: "/about" }
        ]}
      />
      <PageHeader
        eyebrow="About"
        title="About Dr. Rasouli"
        lead="A board-certified neurosurgeon combining fellowship training with a compassionate, patient-centered approach to complex spine care."
      />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Picture
                name="dr-rasouli-portrait"
                alt="Dr. Jonathan J. Rasouli, MD"
                eager
                width={900}
                height={1350}
                className="block"
                imgClassName="w-full max-w-[360px] mx-auto lg:mx-0 rounded-xl shadow-lg object-cover aspect-[4/5] object-[center_20%]"
              />
              <div className="mt-6 max-w-[360px] mx-auto lg:mx-0">
                <p className="font-serif text-xl font-semibold text-navy-800">Jonathan J. Rasouli, MD, FAANS</p>
                <p className="text-slate-600">Board-Certified Spinal Neurosurgeon</p>
                <SocialButtons className="mt-4" />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-3xl font-semibold text-navy-800 mb-5">Professional Biography</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Dr. Rasouli is a board-certified, fellowship-trained neurosurgeon specializing in complex spinal conditions. He practices with NeuroSpine Plus, seeing patients at offices across New Jersey and Staten Island, and his work centers on helping patients regain their quality of life through advanced surgical techniques.
                </p>
                <p>
                  After completing his residency at The Mount Sinai Hospital, he pursued advanced fellowship training in both Neurosurgery and Orthopaedic Spine Surgery at the world-renowned Cleveland Clinic. This background allows him to treat spinal deformities with a comprehensive understanding of biomechanics and neurological function.
                </p>
              </div>
            </section>

            <section id="credentials" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-navy-800 mb-6 flex items-center gap-2">
                <GraduationCap className="text-teal-700" /> Education &amp; Training
              </h2>
              <ol className="space-y-8 border-l-2 border-teal-100 ml-2 pl-8">
                {TIMELINE.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[41px] top-1.5 bg-teal-700 w-4 h-4 rounded-full ring-4 ring-white" aria-hidden="true"></span>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{item.title}</p>
                    <h3 className="text-xl font-semibold text-navy-800 mt-1">{item.inst}</h3>
                    <p className="text-slate-600 mt-1">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <ButtonLink href={APPOINTMENT_URL}>Request an Appointment</ButtonLink>
              <ButtonLink href="/credentials" variant="secondary">View Full Credentials</ButtonLink>
              <a href="tel:2013993388" className="inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-teal-700 sm:ml-2">
                <Phone size={18} className="text-teal-700" /> (201) 399-3388
              </a>
            </div>
          </div>
        </div>
      </Container>

      <MediaCarousel />
    </div>
  );
};

export default About;
