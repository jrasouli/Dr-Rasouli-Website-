import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, PageHeader } from '../components/ui';

interface NewsArticle {
  id: string;
  title: string;
  url: string;
  /** Human-readable date shown on the card. */
  date: string;
  /** ISO date for structured data. */
  iso: string;
  outlet: string;
  summary: string;
}

// Newest first. Every URL and date was checked against the original article (Oct 2026).
const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'beckers-2026',
    title: 'Dr.\u00A0Jonathan\u00A0Rasouli joins NeuroSpine Plus',
    url: 'https://www.beckersspine.com/spine/dr-jonathan-rasouli-joins-neurospine-plus/',
    date: 'April 22, 2026',
    iso: '2026-04-22',
    outlet: "Becker's Spine Review",
    summary: 'Dr.\u00A0Rasouli joins NeuroSpine Plus in Paramus, N.J., after serving as director of complex and adult spinal deformity surgery at Staten Island University Hospital.',
  },
  {
    id: 'northwell-2025',
    title: 'Softening the memory',
    url: 'https://www.northwell.edu/news/the-latest/softening-the-memory',
    date: 'April 24, 2025',
    iso: '2025-04-24',
    outlet: 'Northwell Health',
    summary: 'Dr.\u00A0Rasouli weighs in on the real-world potential of memory modulation and how current therapies aim to soften, not erase, painful memories.',
  },
  {
    id: 'nypost-2025-01',
    title: "Neurosurgeon's hearty recipe fights dementia and brain disease",
    url: 'https://nypost.com/2025/01/20/health/neurosurgeons-hearty-recipe-fights-dementia-and-brain-disease/',
    date: 'January 20, 2025',
    iso: '2025-01-20',
    outlet: 'New York Post',
    summary: 'Dr.\u00A0Jonathan\u00A0Rasouli shares a highly nutritious, brain-boosting recipe designed to support cognitive health and combat dementia.',
  },
  {
    id: 'nypost-2024-12',
    title: "Neurosurgeon's easy, cheap recipe boosts memory, prevents dementia",
    url: 'https://nypost.com/2024/12/27/health/neurosurgeons-easy-cheap-recipe-boosts-memory-prevents-dementia/',
    date: 'December 27, 2024',
    iso: '2024-12-27',
    outlet: 'New York Post',
    summary: "Discover Dr.\u00A0Rasouli's simple and affordable dietary recommendations for preserving memory and optimizing long-term brain function.",
  },
  {
    id: 'silive-2024-01',
    title: 'Nothing short of a miracle: How a Staten Island teen survived fiery crash and recovered from traumatic brain injury',
    url: 'https://www.silive.com/news/2024/01/nothing-short-of-a-miracle-how-a-staten-island-teen-survived-fiery-crash-and-recovered-from-traumatic-brain-injury.html',
    date: 'January 2024',
    iso: '2024-01',
    outlet: 'SILive.com',
    summary: 'An in-depth look at the complex, life-saving interventions and the remarkable resilience of a teen recovering from a traumatic brain injury.',
  },
  {
    id: 'cafemom-2023-12',
    title: "New York Teen’s First Word Months After Being Pulled From Fiery Crash Was ‘Mom’",
    url: 'https://cafemom.com/news/teens-first-word-months-after-being-pulled-from-fiery-crash-was-mom',
    date: 'December 20, 2023',
    iso: '2023-12-20',
    outlet: 'CafeMom',
    summary: "After a fiery crash left him with severe injuries, a Staten Island teen's first word months later was 'Mom'.",
  },
  {
    id: 'nypost-2023-12',
    title: 'Young paralyzed Staten Island man regains ability to walk and speak',
    url: 'https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/',
    date: 'December 19, 2023',
    iso: '2023-12-19',
    outlet: 'New York Post',
    summary: "The incredible story of a Staten Island teenager's 'miracle' recovery after severe trauma, guided by Dr.\u00A0Rasouli's expertise.",
  },
  {
    id: 'cnn-2019',
    title: 'Unusual symptoms pointing to brain cancer turned out to be a tapeworm',
    url: 'https://www.cnn.com/2019/06/07/health/tapeworm-brain-trnd/index.html',
    date: 'June 7, 2019',
    iso: '2019-06-07',
    outlet: 'CNN',
    summary: 'Dr.\u00A0Rasouli discusses a case in which suspected brain cancer turned out to be a parasitic infection.',
  },
  {
    id: 'cbc-2019',
    title: 'Brain surgeons went looking for a tumour, but found a tapeworm instead',
    url: 'https://www.cbc.ca/radio/asithappens/as-it-happens-friday-edition-1.5166570/brain-surgeons-went-looking-for-a-tumour-but-found-a-tapeworm-instead-1.5166571',
    date: 'June 7, 2019',
    iso: '2019-06-07',
    outlet: 'CBC Radio · As It Happens',
    summary: 'A rare and surprising discovery during surgery highlights the complexities and unpredictability of neurosurgical diagnosis and treatment.',
  },
  {
    id: 'wapo-2019',
    title: 'Surgeons opened her skull to remove a cancerous tumor. Instead, they found a tapeworm.',
    url: 'https://www.washingtonpost.com/health/2019/06/06/surgeons-opened-her-skull-remove-cancerous-tumor-instead-they-found-tapeworm/',
    date: 'June 6, 2019',
    iso: '2019-06-06',
    outlet: 'The Washington Post',
    summary: 'Dr.\u00A0Rasouli, then chief neurosurgery resident at Mount Sinai, describes finding a tapeworm cyst where doctors had expected a malignant brain tumor.',
  },
];

const News: React.FC = () => {
  let newsSchema = '{}';
  try {
    newsSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": NEWS_ARTICLES.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "NewsArticle",
          "headline": article.title,
          "datePublished": article.iso,
          "url": article.url,
          "about": {
            "@type": "Person",
            "name": "Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli"
          }
        }
      }))
    });
  } catch (e) {
    console.error('Schema generation error:', e);
  }

  return (
    <div className="bg-white">
      <SEO 
        title={"In the News | Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, Board-Certified Spinal Neurosurgeon"}
        description={"Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, a board-certified spinal neurosurgeon in New Jersey and Staten Island, featured in the New York Post, CNN, CBC Radio, Becker's Spine Review, and more. Read about his groundbreaking cases and expert insights on brain health and spine surgery."}
        canonicalPath="/news"
        schema={newsSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "News", item: "/news" }
        ]}
      />
      <PageHeader
        eyebrow="Media & News"
        title="News Coverage"
        leadWide
        lead={"Media coverage, published research, and professional updates featuring Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli."}
      />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article key={article.id} className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block aspect-[16/9] overflow-hidden bg-navy-800" tabIndex={-1} aria-hidden="true">
                <div className="h-full flex flex-col items-center justify-center text-center px-6 bg-[radial-gradient(ellipse_at_top_right,rgba(127,209,199,0.18),transparent_60%)] transition-colors group-hover:bg-navy-700">
                  <span className="font-serif text-2xl md:text-[1.7rem] font-semibold text-white">{article.outlet}</span>
                  <span className="mt-2 h-0.5 w-10 bg-teal-300" />
                </div>
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 mb-3">
                  <span className="font-semibold text-teal-700">{article.outlet}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={15} aria-hidden="true" /> <time dateTime={article.iso}>{article.date}</time></span>
                </div>
                <h2 className="text-xl font-semibold text-navy-800 leading-snug mb-3">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700">{article.title}</a>
                </h2>
                <p className="text-slate-600 mb-5 flex-grow">{article.summary}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-teal-700 hover:text-navy-800 mt-auto">
                  Read article <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default News;
