import React from 'react';
import { Calendar, FolderOpen, ChevronRight } from 'lucide-react';

const NEWS_ARTICLES = [
  {
    id: 1,
    title: "Neurosurgeon's hearty recipe fights dementia and brain disease",
    url: "https://nypost.com/2025/01/20/health/neurosurgeons-hearty-recipe-fights-dementia-and-brain-disease/",
    date: "January 20, 2025",
    category: "Press & Media",
    summary: "Dr. Jonathan Rasouli shares a highly nutritious, brain-boosting recipe designed to support cognitive health and combat dementia.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Neurosurgeon's easy, cheap recipe boosts memory, prevents dementia",
    url: "https://nypost.com/2024/12/27/health/neurosurgeons-easy-cheap-recipe-boosts-memory-prevents-dementia/",
    date: "December 27, 2024",
    category: "Press & Media",
    summary: "Discover Dr. Rasouli's simple and affordable dietary recommendations for preserving memory and optimizing long-term brain function.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Young paralyzed SI man regains ability to walk and speak",
    url: "https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/",
    date: "December 19, 2023",
    category: "Press & Media",
    summary: "The incredible story of a Staten Island teenager's 'miracle' recovery after severe trauma, guided by Dr. Rasouli's expertise.",
    image: "/si_man_recovery_2.png"
  },
  {
    id: 4,
    title: "Nothing short of a miracle: How a Staten Island teen survived fiery crash and recovered from traumatic brain injury",
    url: "https://www.silive.com/news/2024/01/nothing-short-of-a-miracle-how-a-staten-island-teen-survived-fiery-crash-and-recovered-from-traumatic-brain-injury.html",
    date: "January 2024",
    category: "Press & Media",
    summary: "An in-depth look at the complex, life-saving interventions and the remarkable resilience of a teen recovering from a traumatic brain injury.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Brain surgeons went looking for a tumour, but found a tapeworm instead",
    url: "https://www.cbc.ca/radio/asithappens/as-it-happens-friday-edition-1.5166570/brain-surgeons-went-looking-for-a-tumour-but-found-a-tapeworm-instead-1.5166571",
    date: "June 7, 2019",
    category: "Press & Media",
    summary: "A rare and surprising discovery during surgery highlights the complexities and unpredictability of neurosurgical diagnosis and treatment.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80"
  }
];

const News: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-neutral-light py-16 border-b border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Stay informed with the latest media coverage, published research, and professional updates from Dr. Jonathan J. Rasouli.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100">
               <a href={article.url} target="_blank" rel="noopener noreferrer" className="block relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 object-center"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
               </a>
               
               <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-medium">
                     <span className="flex items-center gap-1.5 text-secondary">
                        <FolderOpen size={16} /> {article.category}
                     </span>
                     <span className="flex items-center gap-1.5">
                        <Calendar size={16} /> {article.date}
                     </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-secondary transition-colors">
                     <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title}
                     </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                     {article.summary}
                  </p>
                  
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group mt-auto"
                  >
                    Read More <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
