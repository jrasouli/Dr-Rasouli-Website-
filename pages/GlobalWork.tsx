import React from 'react';
import { Globe, Laptop, MapPin, BookOpen, Shield, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const GlobalWork: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
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
      {/* Hero */}
      <div className="bg-[#0A192F] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-6 text-[#FF6B35]">
            <Globe size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Global Humanitarian Work & Education</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            My mission is to democratize spine care globally, ensuring that high-quality medical education and advanced surgical techniques are accessible to patients and providers regardless of their geographic location or socioeconomic status.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section: International Spinal Surgery */}
        <div id="global-work" className="mb-16 scroll-mt-24">
           <div className="bg-gradient-to-br from-primary to-blue-900 rounded-2xl shadow-xl overflow-hidden text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                 <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-accent font-bold uppercase tracking-widest text-sm">
                       <Globe size={18} /> International Outreach
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6 leading-tight">
                       Bringing Complex Spine Care to <br/><span className="text-blue-200">Honduras & Peru</span>
                    </h3>
                    <p className="text-blue-50 text-lg mb-8 leading-relaxed">
                       Beyond his practice in New York, Dr. Rasouli is committed to global health equity. He regularly travels to underserved regions in Honduras and Peru to perform life-changing surgeries for patients with severe spinal deformities who otherwise lack access to advanced neurosurgical care.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="bg-white/10 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                          <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cta-orange/20 rounded-lg text-cta-orange">
                                <MapPin size={20} />
                             </div>
                             <h4 className="font-bold text-lg">Honduras Mission</h4>
                          </div>
                          <p className="text-sm text-blue-100">Providing surgical correction for pediatric scoliosis and complex congenital deformities.</p>
                       </div>
                       
                       <div className="bg-white/10 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                          <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-cta-orange/20 rounded-lg text-cta-orange">
                                <MapPin size={20} />
                             </div>
                             <h4 className="font-bold text-lg">Peru Initiative</h4>
                          </div>
                          <p className="text-sm text-blue-100">Collaborating with local surgeons on adult reconstruction cases and advanced training.</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                    <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80" 
                      alt="International Spine Surgery Mission" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                       <p className="text-white text-sm italic opacity-90">"Every patient deserves the chance to walk without pain, regardless of where they live." — Dr. Rasouli</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 1: The Virtual Global Spine Conference */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-full text-[#0A192F]">
              <Laptop size={28} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">The Virtual Global Spine Conference</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                When the COVID-19 pandemic halted traditional medical education and international collaboration, I co-founded the Virtual Global Spine Conference to bridge the gap. What began as a temporary solution quickly evolved into a permanent, revolutionary platform that connects spine surgeons, residents, and medical students across six continents.
              </p>
              <p>
                By providing free, open-access, case-based education led by world-renowned experts, we have broken down the financial and logistical barriers that previously limited access to top-tier medical knowledge. This initiative has not only fostered a truly global community of spine specialists but has also directly impacted patient care by elevating the standard of practice in resource-limited regions.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-full min-h-[300px] relative flex items-center justify-center group bg-gray-100">
              <a href="https://www.youtube.com/c/virtualglobalspineconference" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 hover:bg-black/20 transition-colors">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white opacity-90 group-hover:scale-110 shadow-lg transition-transform">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1"><path d="M8 5.14v14l11-7-11-7z" /></svg>
                 </div>
              </a>
              <img 
                src="/hf_20260418_154203_d3bb6da6-cd92-473c-b8ab-393a1d95a9dc.png" 
                alt="Virtual Global Spine Conference" 
                className="absolute inset-0 w-full h-full object-contain p-4"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Educational Equity */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-full text-[#0A192F]">
              <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Educational Equity</h2>
          </div>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p>
              True healthcare equity begins with educational equity. I am deeply committed to providing comprehensive educational resources, mentorship, and training opportunities to medical professionals in underserved regions. By empowering local surgeons with the knowledge and skills necessary to perform complex spine procedures safely, we can create sustainable, long-term improvements in healthcare infrastructure and patient outcomes worldwide.
            </p>
          </div>
        </section>

        {/* Section 3: Technology as a Bridge */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-full text-[#0A192F]">
              <Globe size={28} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Technology as a Bridge</h2>
          </div>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p>
              I actively leverage telemedicine, digital platforms, and emerging technologies like artificial intelligence to bridge the gap between expert care and remote patient populations. These tools allow for remote consultations, surgical planning assistance, and continuous follow-up care, ensuring that patients in isolated or developing areas receive the same level of expert evaluation and guidance as those treated in major metropolitan medical centers.
            </p>
          </div>
        </section>

        {/* Section 4: Advocacy & Policy */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-full text-[#0A192F]">
              <Shield size={28} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Advocacy & Policy</h2>
          </div>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p>
              Beyond clinical practice and education, I work closely with international medical organizations and policy-makers to advocate for systemic changes that improve global spine care. This includes researching insurance-based disparities, promoting the allocation of surgical resources to areas in need, and developing standardized protocols that enhance patient safety and surgical efficacy on a global scale.
            </p>
          </div>
        </section>

        {/* Section 5: Looking Forward */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-full text-[#0A192F]">
              <ArrowRight size={28} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Looking Forward</h2>
          </div>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            <p>
              As we look to the future, my goal is to continue expanding these humanitarian and educational initiatives, forging new partnerships, and utilizing innovative technologies to reach even more patients and providers. The journey toward global healthcare equity is ongoing, and I remain steadfast in my dedication to making a lasting, positive impact on the world of spine surgery.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GlobalWork;