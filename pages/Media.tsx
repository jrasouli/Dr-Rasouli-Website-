import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ExternalLink, Award, Video, Mic, FileText, Play } from 'lucide-react';
import MediaCarousel from '../components/MediaCarousel';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink, Eyebrow, Picture } from '../components/ui';
import { APPOINTMENT_URL } from '../constants';

const NYPOST_URL = 'https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/';

// Every item links to the original article (verified Oct 2026).
const COVERAGE = [
  { outlet: "Becker's Spine Review", date: 'Apr 22, 2026', title: 'Dr. Jonathan Rasouli joins NeuroSpine Plus', text: 'Becker\'s reports on Dr. Rasouli joining NeuroSpine Plus in Paramus, N.J., to focus on complex and minimally invasive spine procedures.', url: 'https://www.beckersspine.com/spine/dr-jonathan-rasouli-joins-neurospine-plus/' },
  { outlet: 'Northwell Health', date: 'Apr 24, 2025', title: 'Softening the memory', text: 'Dr. Rasouli weighs in on the real-world potential of memory modulation and how current therapies aim to soften, not erase, painful memories.', url: 'https://www.northwell.edu/news/the-latest/softening-the-memory' },
  { outlet: 'CNN', date: 'Jun 7, 2019', title: 'Unusual symptoms pointing to brain cancer turned out to be a tapeworm', text: 'Dr. Rasouli discusses a case in which suspected brain cancer turned out to be a parasitic infection.', url: 'https://www.cnn.com/2019/06/07/health/tapeworm-brain-trnd/index.html' },
  { outlet: 'The Washington Post', date: 'Jun 6, 2019', title: 'Surgeons opened her skull to remove a cancerous tumor. Instead, they found a tapeworm.', text: 'Dr. Rasouli, then chief neurosurgery resident at Mount Sinai, describes finding a tapeworm cyst where doctors had expected a malignant brain tumor.', url: 'https://www.washingtonpost.com/health/2019/06/06/surgeons-opened-her-skull-remove-cancerous-tumor-instead-they-found-tapeworm/' },
];

const JOURNALS = [
  { title: 'Assessing the Accessibility, Engagement, and Value of the Virtual Global Spine Conference', journal: 'World Neurosurgery', date: 'May 2024', authors: 'Hussein A, Than K, Gibbs W, Rasouli J, Dahdaleh NS' },
  { title: 'Editorial: Optimization of spine surgery outcomes in the pre-, peri-, and postoperative settings', journal: 'Frontiers in Surgery', date: 'Jan 2023', authors: 'Rasouli JJ, Steinberger J' },
  { title: 'Negative Pressure Wound Therapy in Spinal Surgery', journal: 'Bioengineering', date: 'Oct 2022', authors: 'Gilad R, Fiani B, Rasouli J, Motivala S, White AJ' },
  { title: 'Emerging Blockchain Technology Solutions for Modern Healthcare Infrastructure', journal: 'Journal of Scientific Innovation in Medicine', date: 'Jan 2019', authors: 'Yaeger KA, Martini M, Rasouli JJ, Costa AB' },
];

// From the CV, "Abstracts/Presentations".
const TALKS = [
  { year: '2020', venue: 'AO Spine Fellows Forum · Banff, Canada', text: 'Best Oral Abstract: "Obesity is Correlated with Functional Disability and Depression Following Adult Spinal Deformity Surgery in the Early Postoperative Period"' },
  { year: '2020', venue: 'AANS/CNS Spine Summit · Las Vegas, NV', text: '"BMI Is Correlated with Functional Disability and Depression Following Adult Spinal Deformity Surgery"' },
  { year: '2019', venue: 'AANS Annual Scientific Meeting · San Diego, CA', text: '"Disparities in Discharge Destination by Insurance Payer Group After Posterior Cervical Decompression and Instrumented Fusion"' },
  { year: '2018', venue: 'International Spinal Deformity Symposium · New York, NY', text: '"The Case for T2 Pedicle Subtraction Osteotomy in the Surgical Treatment of Rigid Cervicothoracic Deformity"' },
];

// Virtual Global Spine Conference lectures (IDs verified via YouTube oEmbed, Oct 2026).
const LECTURES = [
  { id: 'dTyFv3gGkQA', cover: '/images/lectures/postop.webp', cover2x: '/images/lectures/postop@2x.webp', title: 'Post-operative Evaluation of the Spine', year: '2026' },
  { id: 'LDS1SbuJZbE', cover: '/images/lectures/fusion.webp', cover2x: '/images/lectures/fusion@2x.webp', title: 'Decompression and Fusion of the Cervical Spine', year: '2025' },
  { id: 'OY_lQBHeffM', cover: '/images/lectures/arthroplasty.webp', cover2x: '/images/lectures/arthroplasty@2x.webp', title: 'Cervical Arthroplasty: Where Do We Stand in 2025?', year: '2025' },
];

const VUMEDI_URL = 'https://www.vumedi.com/video/rigid-cervicothoracic-deformity-t2-pedicle-subtraction-osteotomy-for-sagittal-correction/';

// Click-to-load embed: shows a lazy thumbnail until clicked, then loads the privacy-enhanced player.
const LectureVideo: React.FC<{ id: string; title: string; cover: string; cover2x?: string }> = ({ id, title, cover, cover2x }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video bg-navy-800">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full group" aria-label={`Play video: ${title}`}>
          <img src={cover} srcSet={cover2x ? `${cover} 1x, ${cover2x} 2x` : undefined} alt="" loading="lazy" decoding="async" width={960} height={540} className="w-full h-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-navy-900/25 group-hover:bg-navy-900/40 transition-colors">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-navy-800 shadow-lg"><Play size={22} fill="currentColor" className="ml-1" /></span>
          </span>
        </button>
      )}
    </div>
  );
};

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journals' | 'presentations'>('journals');
  const tabCls = (active: boolean) => `px-5 py-3 font-semibold border-b-2 -mb-px transition-colors ${active ? 'border-teal-700 text-navy-800' : 'border-transparent text-slate-500 hover:text-navy-800'}`;

  return (
    <div className="bg-white">
      <SEO 
        title="Media & Publications | Dr. Jonathan J. Rasouli, Board-Certified Spinal Neurosurgeon"
        description="Media coverage, peer-reviewed journal articles, and presentations from Dr. Jonathan J. Rasouli, a board-certified spinal neurosurgeon serving New Jersey and Staten Island."
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
              <article key={c.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 mb-3">{c.outlet} <span className="text-slate-500 normal-case tracking-normal font-medium">· {c.date}</span></p>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700">{c.title}</a>
                </h3>
                <p className="text-slate-600 mb-4 flex-grow">{c.text}</p>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:text-navy-800 mt-auto" aria-label={`Read "${c.title}" on ${c.outlet} (opens in a new tab)`}>
                  Read article <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-slate-600">More coverage, with links to each article, is on the <Link to="/news" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-navy-800">News page</Link>.</p>
        </Container>
      </section>

      <MediaCarousel />

      {/* Lectures */}
      <section id="lectures" className="py-14 md:py-20 border-t border-slate-200 scroll-mt-24">
        <Container>
          <Eyebrow className="mb-3">Virtual Global Spine Conference</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-6 flex items-center gap-2"><Mic className="text-teal-700" /> Lectures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LECTURES.map((l) => (
              <article key={l.id} className="rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                <LectureVideo id={l.id} title={l.title} cover={l.cover} cover2x={'cover2x' in l ? l.cover2x : undefined} />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 mb-2">Lecture <span className="text-slate-500 normal-case tracking-normal font-medium">· {l.year}</span></p>
                  <h3 className="text-xl font-semibold text-navy-800">{l.title}</h3>
                  <p className="mt-2 text-slate-600">Presented by Dr. Rasouli at the Virtual Global Spine Conference.</p>
                </div>
              </article>
            ))}
            <article className="rounded-xl border border-slate-200 overflow-hidden flex flex-col">
              <a href={VUMEDI_URL} target="_blank" rel="noopener noreferrer" className="relative block aspect-video bg-navy-800 group" aria-label="Watch on VuMedi (opens in a new tab)">
                <img src="/images/lectures/pso.webp" srcSet="/images/lectures/pso.webp 1x, /images/lectures/pso@2x.webp 2x" alt="" loading="lazy" decoding="async" width={960} height={540} className="w-full h-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-navy-900/25 group-hover:bg-navy-900/40 transition-colors">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-navy-800 shadow-lg"><ExternalLink size={22} /></span>
                </span>
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 mb-2">VuMedi</p>
                <h3 className="text-xl font-semibold text-navy-800">Rigid Cervicothoracic Deformity: T2 Pedicle Subtraction Osteotomy for Sagittal Correction</h3>
                <p className="mt-2 text-slate-600 flex-grow">Video on VuMedi (clinician login required).</p>
                <a href={VUMEDI_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:text-navy-800">Watch on VuMedi <ExternalLink size={16} /></a>
              </div>
            </article>
          </div>
        </Container>
      </section>

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
                <li key={t.venue + t.year} className="py-5 flex gap-5">
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
