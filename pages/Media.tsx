import React, { useState } from 'react';
import { Play, Newspaper, ExternalLink, Award, Video, Mic, FileText, ChevronRight, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import MediaCarousel from '../components/MediaCarousel';

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journals' | 'presentations'>('journals');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm border border-white/20">
              Dr. Rasouli in the Media
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Trusted Voice in <br/><span className="text-accent">Spine Care</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Featured expert in major publications sharing insights on complex spine conditions, innovative surgical techniques, and inspiring patient recoveries.
            </p>
            <div className="flex flex-wrap gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
               {['CNN', 'New York Post', 'The Washington Post', "Becker's Spine"].map((brand, i) => (
                 <div key={i} className="bg-white/10 px-4 py-2 rounded text-sm font-bold border border-white/20 backdrop-blur-sm">
                   {brand}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Carousel */}
      <MediaCarousel />

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-100 py-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm font-medium text-gray-600">
             <span className="flex items-center gap-2"><Video size={16} className="text-cta-orange" /> Featured in National Media</span>
             <span className="flex items-center gap-2"><FileText size={16} className="text-cta-orange" /> 15+ Peer-Reviewed Publications</span>
             <span className="flex items-center gap-2"><Mic size={16} className="text-cta-orange" /> International Speaker</span>
             <span className="flex items-center gap-2"><Award size={16} className="text-cta-orange" /> Patient Success Stories</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: Featured Story (Anthony Mercado) */}
        <div className="mb-20">
           <div className="flex items-center gap-3 mb-8">
             <div className="h-px bg-gray-200 flex-grow"></div>
             <h2 className="text-3xl font-heading font-bold text-primary">Featured Story</h2>
             <div className="h-px bg-gray-200 flex-grow"></div>
           </div>

           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-gray-100 relative min-h-[300px]">
                 {/* Video Placeholder / Thumbnail */}
                 <img 
                   src="https://lh3.googleusercontent.com/d/1AiR6BlFBDGvAZQcpw8-651bsXu-kPwyp" 
                   alt="Recovery Story - Anthony Mercado" 
                   className="w-full h-full object-cover"
                 />
                 <a 
                   href="https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/"
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-colors"
                 >
                   <div className="w-20 h-20 bg-cta-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                     <Play fill="white" className="text-white ml-1" size={32} />
                   </div>
                 </a>
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded shadow-sm text-gray-900">
                   NY Post Exclusive
                 </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-4">
                   <span className="bg-blue-100 text-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">New York Post</span>
                   <span className="text-gray-400 text-sm">Dec 19, 2023</span>
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                   Teen Paralyzed in Fiery Car Crash Makes 'Miracle' Recovery
                 </h3>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   A teenager left paralyzed and unable to speak after a devastating car accident has made a remarkable recovery that even his doctors called miraculous. Dr. Rasouli guided him through multiple complex surgeries.
                 </p>
                 
                 <blockquote className="border-l-4 border-cta-orange pl-4 py-1 my-6 italic text-gray-700 bg-orange-50/50 rounded-r">
                   "The injuries were life-threatening. I admittedly had doubts about a positive outcome... He ultimately did fantastic."
                   <footer className="text-sm font-bold text-primary mt-2 not-italic">— Dr. Jonathan Rasouli</footer>
                 </blockquote>

                 <div className="flex flex-wrap gap-4 mt-auto pt-4">
                    <a 
                      href="https://nypost.com/2023/12/19/health/young-paralyzed-si-man-regains-ability-to-walk-and-speak/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cta-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-sm"
                    >
                      Read Full Article <ExternalLink size={18} />
                    </a>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 2: More News Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <Newspaper /> Recent Media Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded text-gray-600 font-bold text-xs">The Washington Post</div>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
               </div>
               <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-primary transition-colors">Innovations in Robotic Spine Surgery</h3>
               <p className="text-gray-600 text-sm mb-4">Featured expert discussion on how robotic navigation is improving safety and outcomes in complex spinal deformity cases.</p>
               <span className="text-primary text-sm font-semibold flex items-center gap-1 cursor-pointer">Read Article <ChevronRight size={14} /></span>
             </div>

             {/* Card 2 */}
             <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded text-gray-600 font-bold text-xs">Becker's Spine</div>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
               </div>
               <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-primary transition-colors">Future of Minimally Invasive Care</h3>
               <p className="text-gray-600 text-sm mb-4">Dr. Rasouli weighs in on the shifting landscape of outpatient spine surgery and what it means for patient recovery times.</p>
               <span className="text-primary text-sm font-semibold flex items-center gap-1 cursor-pointer">Read Article <ChevronRight size={14} /></span>
             </div>

             {/* Card 3 */}
             <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded text-gray-600 font-bold text-xs">Northwell Health</div>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
               </div>
               <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-primary transition-colors">"Softening the Memory" Research</h3>
               <p className="text-gray-600 text-sm mb-4">Providing critical insight into how current therapies aim to soften, not erase, painful memories in chronic pain patients.</p>
               <span className="text-primary text-sm font-semibold flex items-center gap-1 cursor-pointer">Read Article <ChevronRight size={14} /></span>
             </div>
          </div>
        </div>

        {/* Section 3: Research & Publications */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mb-3">Research & Publications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advancing the field of neurosurgery through peer-reviewed research, clinical studies, and educational leadership.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
             <button 
               onClick={() => setActiveTab('journals')}
               className={`px-6 py-3 font-medium text-sm md:text-base border-b-2 transition-colors ${activeTab === 'journals' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
             >
               Journal Articles
             </button>
             <button 
               onClick={() => setActiveTab('presentations')}
               className={`px-6 py-3 font-medium text-sm md:text-base border-b-2 transition-colors ${activeTab === 'presentations' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
             >
               Speaking & Lectures
             </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[300px]">
            {activeTab === 'journals' && (
              <ul className="space-y-6 animate-fadeIn">
                {[
                  {
                    title: "Assessing the Accessibility, Engagement, and Value of the Virtual Global Spine Conference",
                    journal: "World Neurosurgery",
                    date: "May 2024",
                    authors: "Hussein A, Than K, Gibbs W, Rasouli J, Dahdaleh NS"
                  },
                  {
                    title: "Editorial: Optimization of spine surgery outcomes in the pre-, peri-, and postoperative settings",
                    journal: "Frontiers in Surgery",
                    date: "Jan 2023",
                    authors: "Rasouli JJ, Steinberger J"
                  },
                  {
                    title: "Negative Pressure Wound Therapy in Spinal Surgery",
                    journal: "Bioengineering",
                    date: "Oct 2022",
                    authors: "Gilad R, Fiani B, Rasouli J, Motivala S, White AJ"
                  },
                  {
                    title: "Emerging Blockchain Technology Solutions for Modern Healthcare Infrastructure",
                    journal: "Journal of Scientific Innovation in Medicine",
                    date: "Jan 2019",
                    authors: "Yaeger KA, Martini M, Rasouli JJ, Costa AB"
                  }
                ].map((pub, i) => (
                  <li key={i} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 mb-1">{pub.title}</h4>
                    <div className="flex flex-wrap gap-y-1 gap-x-3 text-sm text-gray-600">
                      <span className="font-semibold text-primary">{pub.journal}</span>
                      <span className="text-gray-300">•</span>
                      <span>{pub.date}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 italic">{pub.authors}</p>
                  </li>
                ))}
              </ul>
            )}

             {activeTab === 'presentations' && (
               <div className="space-y-6 animate-fadeIn">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-50 p-2 rounded shrink-0 text-primary font-bold text-xs w-16 text-center">2023</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Virtual Global Spine Conference</h4>
                      <p className="text-sm text-gray-600">Invited Lecturer: "Robotic Navigation in Complex Deformity"</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-50 p-2 rounded shrink-0 text-primary font-bold text-xs w-16 text-center">2022</div>
                    <div>
                      <h4 className="font-bold text-gray-900">North American Spine Society (NASS)</h4>
                      <p className="text-sm text-gray-600">Podium Presentation: Minimally Invasive Techniques</p>
                    </div>
                  </div>
               </div>
            )}
          </div>
        </div>



      </div>

      {/* Final CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Inspired by These Stories?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you or a loved one is facing a complex spine condition, Dr. Rasouli is here to help you find your own path to recovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer">
               <Button className="w-full sm:w-auto px-10 py-4 text-lg">Schedule Consultation</Button>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;