import React from 'react';
import { Award, GraduationCap, Building2, Download, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink } from '../components/ui';
import { OFFICE_LOCATIONS } from '../constants';

const EDUCATION = [
  { inst: 'Cleveland Clinic Foundation', program: 'Complex & Adult Reconstructive Spinal Surgery Fellowship', meta: '2019 – 2020 · Cleveland, OH' },
  { inst: 'The Mount Sinai Hospital', program: 'Neurological Surgery Residency', meta: '2013 – 2019 · New York, NY' },
  { inst: 'Albert Einstein College of Medicine', program: 'Doctor of Medicine (M.D.)', meta: '2007 – 2012 · Bronx, NY', notes: ['Alpha Omega Alpha (AOA) Medical Honor Society (2012)', 'Research Distinction in Neurosurgery'] },
];

const HONORS = [
  { year: '2026', title: 'Top Doctor', org: 'Castle Connolly' },
  { year: '2025', title: 'Top Doctor', org: 'Castle Connolly' },
  { year: '2024', title: 'Top Doctor', org: 'New York Magazine' },
  { year: '2023', title: 'Rising Star in Spine Surgery', org: "Becker's Spine Review" },
  { year: '2022', title: "Patient's Choice Award", org: 'Vitals.com' },
  { year: '2021', title: 'Excellence in Teaching Award', org: 'Mount Sinai Health System' },
  { year: '2012', title: 'Alpha Omega Alpha (AOA)', org: 'Honor Medical Society Inductee' },
];

const SectionTitle: React.FC<{ icon: React.ElementType; children: React.ReactNode }> = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700"><Icon size={20} /></span>
    <h2 className="text-2xl md:text-3xl font-semibold text-navy-800">{children}</h2>
  </div>
);

const Credentials: React.FC = () => {
  return (
    <div className="bg-white">
       <SEO 
        title="Dr. Jonathan Rasouli Credentials | Cleveland Clinic Fellowship | Castle Connolly Top Doctor"
        description="Dr. Jonathan Rasouli's credentials: Cleveland Clinic fellowship-trained, board-certified neurosurgeon, Castle Connolly Top Doctor 2024-2026. Mount Sinai residency, Albert Einstein College of Medicine."
        canonicalPath="/credentials"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Dr. Rasouli", item: "/about" },
          { name: "Credentials", item: "/credentials" }
        ]}
      />
      <PageHeader eyebrow="Credentials" title="Curriculum Vitae" lead="Jonathan J. Rasouli, MD, FAANS">
        <ButtonLink href="/JRasouli_CV.pdf" variant="secondary"><Download size={18} /> View/Download Full CV</ButtonLink>
      </PageHeader>

      <Container className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-14">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-4">Professional Summary</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Dr. Jonathan J. Rasouli is a board-certified spinal neurosurgeon specializing in complex spinal deformity, minimally invasive spine surgery, and robotic-assisted techniques. He is dedicated to providing comprehensive, patient-centered care, utilizing the latest advancements in neurosurgery to achieve optimal outcomes.
              </p>
            </section>

            <section>
              <SectionTitle icon={Briefcase}>Current Practice</SectionTitle>
              <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-6">
                <h3 className="text-xl font-semibold text-navy-800">Spine Neurosurgeon, NeuroSpine Plus</h3>
                <p className="mt-1 text-slate-700">Offices in {OFFICE_LOCATIONS.filter((l) => l.state === 'NJ').map((l) => l.city).join(', ').replace(/, ([^,]*)$/, ', and $1')}, New Jersey, and Staten Island, New York.</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Hospital affiliations</p>
                <ul className="mt-2 space-y-1 text-slate-700">
                  <li>Hudson Regional Hospital, Secaucus, NJ</li>
                  <li>Bayonne Medical Center, Bayonne, NJ</li>
                </ul>
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap}>Education &amp; Training</SectionTitle>
              <ol className="space-y-8 border-l-2 border-teal-100 ml-2 pl-8">
                {EDUCATION.map((e) => (
                  <li key={e.inst} className="relative">
                    <span className="absolute -left-[41px] top-1.5 bg-teal-700 w-4 h-4 rounded-full ring-4 ring-white" aria-hidden="true"></span>
                    <h3 className="text-xl font-semibold text-navy-800">{e.inst}</h3>
                    <p className="text-ink font-medium">{e.program}</p>
                    <p className="text-slate-500 text-[0.9375rem]">{e.meta}</p>
                    {e.notes && (
                      <ul className="mt-2 text-slate-600 list-disc list-inside">
                        {e.notes.map((n) => <li key={n}>{n}</li>)}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <SectionTitle icon={Building2}>Former Appointments &amp; Affiliations</SectionTitle>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">Former Positions</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li><strong className="font-semibold text-ink">Assistant Professor of Neurosurgery</strong> (former)<br /><span className="text-[0.9375rem] text-slate-600">Donald and Barbara Zucker School of Medicine at Hofstra/Northwell</span></li>
                    <li><strong className="font-semibold text-ink">Neurosurgeon</strong> (former)<br /><span className="text-[0.9375rem] text-slate-600">Northwell Health</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3">Former Hospital Affiliations</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Northwell Health</li>
                    <li>Mather Hospital</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <section className="rounded-2xl bg-navy-800 text-white p-7 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-teal-300" size={24} />
                <h2 className="text-2xl font-semibold">Honors &amp; Awards</h2>
              </div>
              <ul className="space-y-4">
                {HONORS.map((h) => (
                  <li key={h.year + h.title} className="flex gap-4">
                    <span className="font-serif text-lg font-semibold text-teal-300 w-12 shrink-0">{h.year}</span>
                    <span>
                      <span className="block font-semibold">{h.title}</span>
                      <span className="block text-[0.9375rem] text-navy-100/80">{h.org}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Credentials;
