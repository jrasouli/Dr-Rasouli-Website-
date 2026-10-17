import React from 'react';
import { Globe, Laptop, MapPin, BookOpen, Shield, ArrowRight, Youtube } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink, Eyebrow, Picture } from '../components/ui';

const PILLARS = [
  {
    icon: BookOpen,
    title: 'Educational Equity',
    text: 'True healthcare equity begins with educational equity. Dr. Rasouli is deeply committed to providing comprehensive educational resources, mentorship, and training opportunities to medical professionals in underserved regions. By empowering local surgeons with the knowledge and skills necessary to perform complex spine procedures safely, the goal is sustainable, long-term improvement in healthcare infrastructure and patient outcomes worldwide.',
  },
  {
    icon: Globe,
    title: 'Technology as a Bridge',
    text: 'Dr. Rasouli actively leverages telemedicine, digital platforms, and emerging technologies like artificial intelligence to bridge the gap between expert care and remote patient populations. These tools allow for remote consultations, surgical planning assistance, and continuous follow-up care, so patients in isolated or developing areas can receive the same level of expert evaluation and guidance as those treated in major metropolitan medical centers.',
  },
  {
    icon: Shield,
    title: 'Advocacy & Policy',
    text: 'Beyond clinical practice and education, Dr. Rasouli works with international medical organizations and policy-makers to advocate for systemic changes that improve global spine care. This includes researching insurance-based disparities, promoting the allocation of surgical resources to areas in need, and developing standardized protocols that enhance patient safety and surgical efficacy on a global scale.',
  },
  {
    icon: ArrowRight,
    title: 'Looking Forward',
    text: 'Looking ahead, Dr. Rasouli aims to continue expanding these humanitarian and educational initiatives, forging new partnerships, and using innovative technologies to reach even more patients and providers. The journey toward global healthcare equity is ongoing, and he remains dedicated to making a lasting, positive impact on the world of spine surgery.',
  },
];

const GlobalWork: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Global Humanitarian Work | Virtual Global Spine Conference | Dr. Rasouli"
        description="Dr. Jonathan Rasouli co-founded the Virtual Global Spine Conference, providing free spine surgery education to physicians worldwide. Learn about his global healthcare advocacy."
        canonicalPath="/global-work"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
          { name: "Global Humanitarian Work", item: "/global-work" }
        ]}
      />
      <PageHeader
        eyebrow="Global Work"
        title="Global Humanitarian Work & Education"
        lead="Dr. Rasouli's mission is to democratize spine care globally, so that high-quality medical education and advanced surgical techniques are accessible to patients and providers regardless of geography or socioeconomic status."
      />

      {/* International outreach */}
      <section id="global-work" className="scroll-mt-24 py-14 md:py-20">
        <Container>
          <div className="rounded-2xl bg-navy-800 text-white overflow-hidden grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-12">
              <Eyebrow onDark className="mb-4 flex items-center gap-2"><Globe size={16} /> International Outreach</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Bringing complex spine care to Honduras &amp; Peru</h2>
              <p className="mt-5 text-lg text-navy-100/90 leading-relaxed">
                Beyond his clinical practice, Dr. Rasouli is committed to global health equity. He regularly travels to underserved regions in Honduras and Peru to perform life-changing surgeries for patients with severe spinal deformities who otherwise lack access to advanced neurosurgical care.
              </p>
            </div>
            <div className="lg:col-span-5 bg-navy-900/60 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-5 border-t lg:border-t-0 lg:border-l border-white/10">
              {[
                { title: 'Honduras Mission', text: 'Providing surgical correction for pediatric scoliosis and complex congenital deformities.' },
                { title: 'Peru Initiative', text: 'Collaborating with local surgeons on adult reconstruction cases and advanced training.' },
              ].map((m) => (
                <div key={m.title} className="rounded-xl bg-white/[0.06] ring-1 ring-white/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-teal-300" />
                    <h3 className="text-xl font-semibold">{m.title}</h3>
                  </div>
                  <p className="text-navy-100/85">{m.text}</p>
                </div>
              ))}
              <p className="font-serif italic text-lg text-white/90 pt-2">&ldquo;Every patient deserves the chance to walk without pain, regardless of where they live.&rdquo; <span className="not-italic text-sm text-navy-100/70 font-sans">&mdash; Dr. Rasouli</span></p>
            </div>
          </div>
        </Container>
      </section>

      {/* Virtual Global Spine Conference */}
      <section className="py-14 md:py-20 bg-sand">
        <Container>
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3 flex items-center gap-2"><Laptop size={16} /> Education</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-800 leading-tight">The Virtual Global Spine Conference</h2>
              <div className="mt-5 space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  When the COVID-19 pandemic halted traditional medical education and international collaboration, Dr. Rasouli co-founded the Virtual Global Spine Conference to bridge the gap. What began as a temporary solution quickly evolved into a permanent platform that connects spine surgeons, residents, and medical students across six continents.
                </p>
                <p>
                  By providing free, open-access, case-based education led by world-renowned experts, the conference has broken down the financial and logistical barriers that previously limited access to top-tier medical knowledge, fostering a global community of spine specialists and helping elevate the standard of practice in resource-limited regions.
                </p>
              </div>
              <ButtonLink href="https://www.youtube.com/c/virtualglobalspineconference" variant="secondary" className="mt-7">
                <Youtube size={18} /> Watch on YouTube
              </ButtonLink>
            </div>
            <div className="lg:col-span-5">
              <a href="https://www.youtube.com/c/virtualglobalspineconference" target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-white border border-sand-200 p-8 hover:shadow-md transition">
                <Picture
                  name="virtual-global-spine-conference"
                  alt="Virtual Global Spine Conference logo"
                  width={600}
                  height={597}
                  className="block"
                  imgClassName="w-full max-w-[280px] mx-auto h-auto"
                />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {PILLARS.map((p) => (
              <article key={p.title} className="rounded-xl border border-slate-200 p-7 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700 mb-4">
                  <p.icon size={22} />
                </span>
                <h2 className="text-2xl font-semibold text-navy-800 mb-3">{p.title}</h2>
                <p className="text-slate-700 leading-relaxed">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GlobalWork;
