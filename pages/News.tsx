import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Container, PageHeader, Picture } from '../components/ui';

interface NewsArticle {
  id: number;
  title: string;
  url: string;
  date: string;
  category: string;
  outlet: string;
  summary: string;
  image: string | null;
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 6,
    title: "New York Teen’s First Word Months After Being Pulled From Fiery Crash Was ‘Mom’",
    url: "https://cafemom.com/news/teens-first-word-months-after-being-pulled-from-fiery-crash-was-mom",
    date: "2024",
    category: "Press & Media",
    outlet: "CafeMom",
    summary: "After a fiery crash left him with severe injuries, a Staten Island teen's first word months later was 'Mom'.",
    image: "tv-abc7-still"
  },
  {
    id: 1,
    title: "Neurosurgeon's hearty recipe fights dementia and brain disease",
    url: "https://nypost.com/2025/01/20/health/neurosurgeons-hearty-recipe-fights-dementia-and-brain-disease/",
    date: "January 20, 2025",
    category: "Press & Media",
    outlet: "New York Post",
    summary: "Dr. Jonathan Rasouli shares a highly nutritious, brain-boosting recipe designed to support cognitive health and combat dementia.",
    image: null
  },
  {
    id: 2,
    title: "Neurosurgeon's easy, cheap recipe boosts memory, prevents dementia",
    url: "https://nypost.com/2024/12/27/health/neurosurgeons-easy-cheap-recipe-boosts-memory-prevents-dementia/",
    date: "December 27, 2024",
    category: "Press & Media",
    outlet: "New York Post",
    summary: "Discover Dr. Rasouli's simple and affordable dietary recommendations for preserving memory and optimizing long-term brain function.",
    image: null
  },
  {
    id: 3,
    title: "Young paralyzed SI man regains ability to walk and speak",
    url: "https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/",
    date: "December 19, 2023",
    category: "Press & Media",
    outlet: "New York Post",
    summary: "The incredible story of a Staten Island teenager's 'miracle' recovery after severe trauma, guided by Dr. Rasouli's expertise.",
    image: "tv-nypost-still"
  },
  {
    id: 4,
    title: "Nothing short of a miracle: How a Staten Island teen survived fiery crash and recovered from traumatic brain injury",
    url: "https://www.silive.com/news/2024/01/nothing-short-of-a-miracle-how-a-staten-island-teen-survived-fiery-crash-and-recovered-from-traumatic-brain-injury.html",
    date: "January 2024",
    category: "Press & Media",
    outlet: "SILive.com",
    summary: "An in-depth look at the complex, life-saving interventions and the remarkable resilience of a teen recovering from a traumatic brain injury.",
    image: null
  },
  {
    id: 5,
    title: "Brain surgeons went looking for a tumour, but found a tapeworm instead",
    url: "https://www.cbc.ca/radio/asithappens/as-it-happens-friday-edition-1.5166570/brain-surgeons-went-looking-for-a-tumour-but-found-a-tapeworm-instead-1.5166571",
    date: "June 7, 2019",
    category: "Press & Media",
    outlet: "CBC Radio · As It Happens",
    summary: "A rare and surprising discovery during surgery highlights the complexities and unpredictability of neurosurgical diagnosis and treatment.",
    image: null
  }
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
          "datePublished": article.date,
          "url": article.url,
          "about": {
            "@type": "Person",
            "name": "Dr. Jonathan J. Rasouli"
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
        title="Dr. Jonathan Rasouli in the News | Media Features | NY Post, CNN, CBC"
        description="Dr. Jonathan Rasouli featured in NY Post, CNN, CBC Radio, and more. Read about his groundbreaking cases and expert insights on brain health and spine surgery."
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
        lead="Media coverage, published research, and professional updates featuring Dr. Jonathan J. Rasouli."
      />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article key={article.id} className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block aspect-[16/9] overflow-hidden bg-navy-800" tabIndex={-1} aria-hidden="true">
                {article.image ? (
                  <Picture name={article.image} alt="" className="block h-full" imgClassName="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center px-6 bg-[radial-gradient(ellipse_at_top_right,rgba(127,209,199,0.18),transparent_60%)]">
                    <span className="font-serif text-2xl md:text-[1.7rem] font-semibold text-white">{article.outlet}</span>
                    <span className="mt-2 h-0.5 w-10 bg-teal-300" />
                  </div>
                )}
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 mb-3">
                  <span className="font-semibold text-teal-700">{article.outlet}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={15} /> {article.date}</span>
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
