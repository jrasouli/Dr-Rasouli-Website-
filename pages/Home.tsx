import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, CheckCircle2, Newspaper, Play } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, TESTIMONIALS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import MediaCarousel from '../components/MediaCarousel';
import SocialButtons from '../components/SocialButtons';
import CredentialsBadges from '../components/CredentialsBadges';

// Mock Research Data for Visualization
const RESEARCH_DATA = [
  { name: 'National Avg', score: 82 },
  { name: 'Dr. Rasouli', score: 98 },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-900 text-white pt-12 pb-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/4/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5 space-y-6">
              <a 
                href="https://health.usnews.com/doctors/jonathan-rasouli-935230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-1.5 rounded-full border border-blue-400/30 backdrop-blur-sm hover:bg-blue-800/70 transition-colors group cursor-pointer"
              >
                <Star size={16} className="text-accent fill-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium tracking-wide underline decoration-blue-400/50 underline-offset-4 group-hover:decoration-blue-300">5.0 Patient Rating US News & World Report</span>
              </a>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                World-Class Spine Care, <span className="text-secondary">Personalized for You</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
                Dr. Jonathan J. Rasouli is a board-certified, fellowship-trained neurosurgeon specializing in robotic-assisted, minimally invasive, and complex spinal deformity surgery.
              </p>
              <div className="pt-4 flex flex-col items-start">
                <div className="inline-flex flex-col items-center">
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button variant="secondary" className="w-full sm:w-auto text-lg px-8">Schedule Consultation</Button>
                    </a>
                  </div>

                  {/* Moved Badges here for better aesthetics */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-6 opacity-90">
                   <img 
                     src="https://lh3.googleusercontent.com/d/1sDQNlO0MVvxGKAGzEOvhmt99J6CDTSrE" 
                     alt="Castle Connolly Top Doctor" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                   <img 
                     src="https://lh3.googleusercontent.com/d/19yFbjiJ6R2-r9HyyqabMCBEaeDr-qSaw" 
                     alt="Award Badge" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                   <img 
                     src="https://lh3.googleusercontent.com/d/1WC5Ptj1B2yOvKNjgRCUWoX7OdJT-CZ-O" 
                     alt="Recognition Badge" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                   <img 
                     src="https://lh3.googleusercontent.com/d/1c1uwIGfenEh-LxweuYKYD_pMNI6Khv_J" 
                     alt="Board Certified" 
                     className="h-20 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
                   />
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Image / Headshot Placeholder */}
            <div className="md:w-2/5 relative w-full">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                {/* Simulated Professional Headshot */}
                <img 
                  src="/64B9A1EE-87D6-4E30-A83C-FB3D15B84F79.JPG" 
                  alt="Dr. Jonathan J. Rasouli" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-heading font-bold text-xl">Jonathan J. Rasouli, MD, FAANS</p>
                </div>
              </div>
              
              {/* Social Media Buttons under headshot */}
              <div className="mt-6">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Credentials - Replaced with Component */}
      <CredentialsBadges />

      {/* About / Differentiator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <img 
                src="https://lh3.googleusercontent.com/d/1a6Scq7cQ5wC4TJD6hUUsnuuqaVJPg5pN" 
                alt="Dr. Rasouli consulting with patient" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Why Choose Dr. Rasouli?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dr. Rasouli stands apart through his rare <strong>fellowship training</strong> in both neurosurgery and orthopaedic spine surgery. This comprehensive background allows him to approach complex spinal deformities from multiple expert perspectives.
              </p>
              
              <ul className="space-y-4 pt-2">
                {[
                  "Fellowship Trained (Cleveland Clinic)",
                  "Alpha Omega Alpha Honors Society",
                  "Specialist in Robotic-Assisted Surgery",
                  "Featured in CNN & The Washington Post"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Research/Stats Micro-Viz */}
              <div className="bg-neutral-light p-6 rounded-xl mt-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Patient Satisfaction Score</h4>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={RESEARCH_DATA} layout="vertical" margin={{ left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: '#666'}} />
                      <Tooltip cursor={{fill: 'transparent'}} />
                      <Bar dataKey="score" fill="#1E4D8B" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Specialized Spine Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining academic excellence with cutting-edge technology to provide personalized treatment plans for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-secondary flex flex-col">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors mt-auto">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline">View All Treatments</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Media Carousel */}
      <MediaCarousel className="mb-8" />

      {/* Featured Media Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="md:w-1/2">
                  <div className="flex items-center gap-2 text-cta-orange mb-3 font-bold uppercase tracking-wider text-sm">
                    <Newspaper size={16} /> In the News
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">"Miracle" Recovery Featured in NY Post</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                     Dr. Rasouli's expertise was instrumental in the recovery of a paralyzed teen who defied all odds. Read the inspiring story that captivated the nation.
                  </p>
                  <Link to="/media">
                    <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                       <Play size={18} fill="currentColor" /> Watch the Story
                    </button>
                  </Link>
               </div>
               <div className="md:w-1/2 flex justify-center md:justify-end">
                   <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 max-w-sm">
                      <p className="italic text-lg mb-4">"The injuries were life-threatening... He ultimately did fantastic."</p>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">JR</div>
                         <div>
                            <p className="font-bold text-sm">Dr. Jonathan Rasouli</p>
                            <p className="text-xs text-blue-200">As quoted in The New York Post</p>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-trust text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Patient Stories</h2>
            <div className="flex justify-center gap-1 text-accent mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-blue-200">Consistent 5-Star Ratings on Healthgrades & Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="mb-4 text-accent flex gap-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-100 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-blue-300">{t.condition} | {t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Start Your Journey to a Pain-Free Life
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Dr. Rasouli is currently accepting new patients for complex spine consultations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer">
               <Button className="w-full sm:w-auto px-10 py-4 text-lg">Request Appointment</Button>
             </a>
             <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg">Explore Services</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;