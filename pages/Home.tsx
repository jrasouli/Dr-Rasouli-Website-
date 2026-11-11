import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle2, MapPin, Phone, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICES, TESTIMONIALS, OFFICE_LOCATIONS, APPOINTMENT_URL, CASTLE_CONNOLLY_URL, CONDITION_PAGES, CONTACT_INFO } from '../constants';
import MediaCarousel from '../components/MediaCarousel';
import CredentialsBadges from '../components/CredentialsBadges';
import SocialButtons from '../components/SocialButtons';
import { Container, ButtonLink, Eyebrow, SectionHeading, Picture } from '../components/ui';
import { faqLd, physicianLd, practiceLd, websiteLd, SITE_URL } from '../components/schema';

const HOME_DESCRIPTION = "Board-certified spine surgeon Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli treats complex and minimally invasive spine conditions in Paramus, NJ and Staten Island, New York.";

const HOME_FAQS = [
  {
    question: "Where does Dr.\u00A0Rasouli see patients?",
    answer: "Dr.\u00A0Rasouli practices with NeuroSpine Plus and sees patients at offices in Paramus, North Bergen, Jersey City, and Edison, New Jersey, and on Staten Island, New York. His hospital affiliations are Hudson Regional Hospital in Secaucus, NJ and Bayonne Medical Center in Bayonne, NJ.",
  },
  {
    question: "Does Dr.\u00A0Rasouli perform minimally invasive or robotic spine surgery?",
    answer: "Yes. Dr.\u00A0Rasouli specializes in robotic-assisted, minimally invasive, and complex spinal deformity surgery. Minimally invasive techniques, including endoscopic spine surgery, use smaller incisions for faster recovery, less pain, and reduced tissue damage.",
  },
  {
    question: "How can I get a second opinion or schedule a consultation?",
    answer: `Dr.\u00A0Rasouli welcomes second opinion consultations and believes informed patients make the best decisions about their care. Call ${CONTACT_INFO.phone} or request an appointment at neurospineplus.com/contact-us. Please bring your recent imaging to your appointment.`,
  },
];

function renderFaqAnswer(text: string): React.ReactNode {
  const phone = CONTACT_INFO.phone;
  const site = 'neurospineplus.com/contact-us';
  const pattern = new RegExp(`(${phone.replace(/[()]/g, '\\$&')}|${site.replace(/\./g, '\\.')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, index) => {
    if (part === phone) {
      return <a key={index} href={CONTACT_INFO.phoneTel} className="font-semibold text-navy-800 hover:text-teal-700">{part}</a>;
    }
    if (part === site) {
      return <a key={index} href={APPOINTMENT_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-navy-800">{part}</a>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

const Home: React.FC = () => {
  const physicianSchema = JSON.stringify(physicianLd());
  const businessSchema = JSON.stringify(practiceLd());
  const websiteSchema = JSON.stringify(websiteLd());
  const faqSchema = JSON.stringify(faqLd(`${SITE_URL}/#faq`, HOME_FAQS));

  return (
    <div className="flex flex-col">
      <SEO
        title={"Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD | Spine Surgeon, NJ & Staten Island"}
        description={HOME_DESCRIPTION}
        canonicalPath="/"
        preloadImage="/images/dr-rasouli-navy-suit.avif"
        schema={[physicianSchema, businessSchema, websiteSchema, faqSchema]}
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
                  name="dr-rasouli-navy-suit"
                  alt={"Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD, in a navy suit"}
                  priority
                  avif
                  width={992}
                  height={1502}
                  className="block"
                  imgClassName="w-full h-auto rounded-xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]"
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
                <a href={CONTACT_INFO.phoneTel} className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-teal-300">
                  <Phone size={20} className="text-teal-300" /> Call {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Recognition badges, same treatment as Castle Connolly */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={CASTLE_CONNOLLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center gap-4 rounded-xl bg-white/[0.06] hover:bg-white/10 ring-1 ring-white/15 p-3 pr-5 transition-colors min-[1140px]:w-auto"
                >
                  <Picture name="castle-connolly-2026" alt="Castle Connolly Top Doctors 2026" width={213} height={320} className="block shrink-0" imgClassName="h-20 w-auto rounded" />
                  <span>
                    <span className="block font-serif text-lg font-semibold text-white">Castle Connolly Top Doctors</span>
                    <span className="block text-sm text-navy-100/85">2023 – 2026 &nbsp;|&nbsp; Rising Star 2023</span>
                  </span>
                </a>
                <div className="inline-flex w-full items-center gap-4 rounded-xl bg-white/[0.06] ring-1 ring-white/15 p-3 pr-5 min-[1140px]:w-auto">
                  <span className="flex h-20 w-[3.4rem] shrink-0 flex-col items-center justify-center rounded bg-navy-950 text-center ring-1 ring-teal-300/50" aria-hidden="true">
                    <span className="text-[0.625rem] font-semibold uppercase leading-none tracking-[0.16em] text-white">NJ</span>
                    <span className="mt-1 text-[0.5rem] font-semibold uppercase leading-[1.05] tracking-[0.14em] text-teal-300">Top<br />Docs</span>
                    <span className="mt-1.5 h-px w-6 bg-teal-300/80"></span>
                    <span className="mt-1 font-serif text-[0.9375rem] font-semibold leading-none text-teal-300">2027</span>
                  </span>
                  <span>
                    <span className="block font-serif text-lg font-semibold text-white">NJ Top Docs</span>
                    <span className="block text-sm text-navy-100/85">Top Doctor 2027</span>
                  </span>
                </div>
              </div>
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

      <section className="py-16 md:py-24 bg-white" id="conditions" aria-labelledby="conditions-heading">
        <Container>
          <SectionHeading
            eyebrow="Conditions"
            title={<span id="conditions-heading">Conditions I treat</span>}
            lead={<>Read how Dr.&nbsp;Rasouli approaches each condition on the <Link to="/philosophy" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-navy-800">My Philosophy</Link> pages.</>}
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITION_PAGES.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-sand px-5 py-4 transition-colors hover:border-teal-700/40 hover:bg-white"
                >
                  <span className="font-serif text-lg font-semibold leading-snug text-navy-800 group-hover:text-teal-800">{item.label}</span>
                  <ChevronRight className="shrink-0 text-teal-700" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-sand" id="faq" aria-labelledby="home-faq-heading">
        <Container narrow>
          <SectionHeading eyebrow="Questions" title={<span id="home-faq-heading">Common questions</span>} />
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {HOME_FAQS.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-xl font-semibold text-navy-800">{item.question}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{renderFaqAnswer(item.answer)}</p>
              </div>
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
            <p className="text-slate-700">All offices: <a href={CONTACT_INFO.phoneTel} className="font-semibold text-navy-800 hover:text-teal-700">{CONTACT_INFO.phone}</a></p>
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
