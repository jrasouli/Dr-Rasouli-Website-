import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ExternalLink, Award, Video, Mic, FileText, Play } from 'lucide-react';
import MediaCarousel from '../components/MediaCarousel';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink, Eyebrow, Picture } from '../components/ui';
import { APPOINTMENT_URL } from '../constants';

const NYPOST_URL = 'https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/';

const COVERAGE = [
  { outlet: 'The Washington Post', title: 'Innovations in Robotic Spine Surgery', text: 'Featured expert discussion on how robotic navigation is improving safety and outcomes in complex spinal deformity cases.' },
  { outlet: "Becker's Spine", title: 'Future of Minimally Invasive Care', text: 'Dr. Rasouli weighs in on the shifting landscape of outpatient spine surgery and what it means for patient recovery times.' },
  { outlet: 'Northwell Health', title: '"Softening the Memory" Research', text: 'Providing critical insight into how current therapies aim to soften, not erase, painful memories in chronic pain patients.' },
];

const JOURNALS = [
  { title: 'Assessing the Accessibility, Engagement, and Value of the Virtual Global Spine Conference', journal: 'World Neurosurgery', date: 'May 2024', authors: 'Hussein A, Than K, Gibbs W, Rasouli J, Dahdaleh NS' },
  { title: 'Editorial: Optimization of spine surgery outcomes in the pre-, peri-, and postoperative settings', journal: 'Frontiers in Surgery', date: 'Jan 2023', authors: 'Rasouli JJ, Steinberger J' },
  { title: 'Negative Pressure Wound Therapy in Spinal Surgery', journal: 'Bioengineering', date: 'Oct 2022', authors: 'Gilad R, Fiani B, Rasouli J, Motivala S, White AJ' },
  { title: 'Emerging Blockchain Technology Solutions for Modern Healthcare Infrastructure', journal: 'Journal of Scientific Innovation in Medicine', date: 'Jan 2019', authors: 'Yaeger KA, Martini M, Rasouli JJ, Costa AB' },
];

const TALKS = [
  { year: '2023', venue: 'Virtual Global Spine Conference', text: 'Invited Lecturer: "Robotic Navigation in Complex Deformity"' },
  { year: '2022', venue: 'North American Spine Society (NASS)', text: 'Podium Presentation: Minimally Invasive Techniques' },
];

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journals' | 'presentations'>('journals');
  const tabCls = (active: boolean) => `px-5 py-3 font-semibold border-b-2 -mb-px transition-colors ${active ? 'border-teal-700 text-navy-800' : 'border-transparent text-slate-500 hover:text-navy-800'}`;

  return (
    <div className="bg-white">
      <SEO 
        title="Dr. Jonathan Rasouli Media & Publications | Spine Neurosurgery"
        description="View Dr. Rasouli's recent media appearances, peer-reviewed journal articles, and speaking engagements on complex spine surgery."
        canonicalPath="/media"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Media", item: "/media" }
        ]}
      />
      <PageHeader
        eyebrow="Media & News"
        title="Trusted voice in spine care"
        lead="Featured expert in major publications sharing insights on complex spine conditions, innovative surgical techniques, and inspiring patient recoveries."
      />

      {/* Quick facts */}
      <div className="border-b border-slate-200">
        <Container className="py-5">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-[0.9375rem] font-medium text-slate-700">
            <li className="flex items-center gap-2"><Video size={18} className="text-teal-700 shrink-0" /> Featured in National Media</li>
            <li className="flex items-center gap-2"><FileText size={18} className="text-teal-700 shrink-0" /> 15+ Peer-Reviewed Publications</li>
            <li className="flex items-center gap-2"><Mic size={18} className="text-teal-700 shrink-0" /> International Speaker</li>
            <li className="flex items-center gap-2"><Award size={18} className="text-teal-700 shrink-0" /> Patient Success Stories</li>
          </ul>
        </Container>
      </div>

      {/* Featured story */}
      <section className="py-14 md:py-20">
        <Container>
          <Eyebrow className="mb-6">Featured Story</Eyebrow>
          <div className="rounded-2xl border border-slate-200 overflow-hidden grid lg:grid-cols-2">
            <a href={NYPOST_URL} target="_blank" rel="noopener noreferrer" className="relative block bg-navy-800 min-h-[320px] group">
              <Picture name="dr-rasouli-patient-nypost" alt="Dr. Rasouli with his patient, as featured in the New York Post" className="block absolute inset-0" imgClassName="w-full h-full object-cover object-[center_30%]" />
              <span className="absolute inset-0 flex items-center justify-center bg-navy-900/20 group-hover:bg-navy-900/35 transition-colors">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-navy-800 shadow-lg"><Play size={26} fill="currentColor" className="ml-1" /></span>
              </span>
              <span className="absolute top-4 left-4 rounded bg-white/95 px-3 py-1 text-xs font-semibold text-navy-800">New York Post</span>
            </a>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm text-slate-500"><span className="font-semibold text-teal-700">New York Post</span> · Dec 19, 2023</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy-800 leading-tight">Teen paralyzed in fiery car crash makes &lsquo;miracle&rsquo; recovery</h2>
              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                A teenager left paralyzed and unable to speak after a devastating car accident has made a remarkable recovery that even his doctors called miraculous. Dr. Rasouli guided him through multiple complex surgeries.
              </p>
              <blockquote className="mt-6 border-l-2 border-teal-700 pl-5">
                <p className="font-serif text-xl text-navy-800 leading-snug">&ldquo;The injuries were life-threatening. I admittedly had doubts about a positive outcome&hellip; He ultimately did fantastic.&rdquo;</p>
                <footer className="mt-2 text-sm text-slate-500">Dr. Jonathan Rasouli</footer>
              </blockquote>
              <ButtonLink href={NYPOST_URL} className="mt-8 self-start">Read Full Article <ExternalLink size={17} /></ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="pb-14 md:pb-20">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-6 flex items-center gap-2"><Newspaper className="text-teal-700" /> Recent Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COVERAGE.map((c) => (
              <article key={c.title} className="rounded-xl border border-slate-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 mb-3">{c.outlet}</p>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{c.title}</h3>
                <p className="text-slate-600">{c.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-slate-600">More coverage, with links to each article, is on the <Link to="/news" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-navy-800">News page</Link>.</p>
        </Container>
      </section>

      <MediaCarousel />

      {/* Research & Publications */}
      <section className="py-14 md:py-20">
        <Container narrow>
          <div className="text-center mb-8">
            <Eyebrow className="mb-3">Academic Work</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-800">Research &amp; Publications</h2>
            <p className="mt-3 text-lg text-slate-600">Advancing the field of neurosurgery through peer-reviewed research, clinical studies, and educational leadership.</p>
          </div>
          <div className="flex justify-center border-b border-slate-200 mb-6" role="tablist">
            <button role="tab" aria-selected={activeTab === 'journals'} onClick={() => setActiveTab('journals')} className={tabCls(activeTab === 'journals')}>Journal Articles</button>
            <button role="tab" aria-selected={activeTab === 'presentations'} onClick={() => setActiveTab('presentations')} className={tabCls(activeTab === 'presentations')}>Speaking &amp; Lectures</button>
          </div>
          {activeTab === 'journals' && (
            <ul className="divide-y divide-slate-200 animate-fadeIn">
              {JOURNALS.map((pub) => (
                <li key={pub.title} className="py-5">
                  <h3 className="text-lg font-semibold text-navy-800">{pub.title}</h3>
                  <p className="mt-1 text-[0.9375rem] text-slate-600"><span className="font-semibold text-teal-700">{pub.journal}</span> · {pub.date}</p>
                  <p className="mt-1 text-[0.9375rem] text-slate-500 italic">{pub.authors}</p>
                </li>
              ))}
            </ul>
          )}
          {activeTab === 'presentations' && (
            <ul className="divide-y divide-slate-200 animate-fadeIn">
              {TALKS.map((t) => (
                <li key={t.venue} className="py-5 flex gap-5">
                  <span className="font-serif text-xl font-semibold text-teal-700 w-14 shrink-0">{t.year}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800">{t.venue}</h3>
                    <p className="text-slate-600">{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-800 text-white py-16">
        <Container narrow className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Inspired by these stories?</h2>
          <p className="mt-4 text-xl text-navy-100/90">If you or a loved one is facing a complex spine condition, Dr. Rasouli is here to help you find your own path to recovery.</p>
          <ButtonLink href={APPOINTMENT_URL} className="mt-8 text-lg px-8">Request an Appointment</ButtonLink>
        </Container>
      </section>
    </div>
  );
};

export default Media;
