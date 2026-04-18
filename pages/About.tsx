import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Button from '../components/Button';
import SocialButtons from '../components/SocialButtons';
import MediaCarousel from '../components/MediaCarousel';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-neutral-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">About Dr. Rasouli</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A board-certified neurosurgeon combining fellowship training with a compassionate, patient-centered approach to complex spine care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
             <img 
               src="https://lh3.googleusercontent.com/d/1YdgFcU2fdDyWADqmjnPAyONP2gsgFVc5" 
               alt="Dr. Jonathan Rasouli" 
               className="rounded-xl shadow-lg w-full max-w-[350px] mx-auto object-cover h-auto"
             />
             
             {/* Social Media Buttons Component */}
             <div className="mt-6">
                <SocialButtons />
             </div>
          </div>
          
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Biography</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am privileged to serve patients as a board-certified, fellowship-trained neurosurgeon specializing in complex spinal conditions. My passion for helping patients regain their quality of life through advanced surgical techniques drives everything I do.
              </p>
              <p className="text-gray-600 leading-relaxed">
                After completing my residency at The Mount Sinai Hospital, I pursued advanced fellowship training in both Neurosurgery and Orthopaedic Spine Surgery at the world-renowned Cleveland Clinic. This unique background allows me to treat spinal deformities with a comprehensive understanding of biomechanics and neurological function.
              </p>
            </div>

            {/* Timeline */}
            <div id="credentials" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap /> Education & Training
              </h3>
              <div className="space-y-8 border-l-2 border-blue-100 ml-3 pl-8 relative">
                {[
                  {
                    title: "Fellowship",
                    inst: "Cleveland Clinic",
                    desc: "Combined Neurosurgery & Orthopaedic Spine Surgery. Specialized in robotic/minimally invasive techniques."
                  },
                  {
                    title: "Residency",
                    inst: "The Mount Sinai Hospital, NY",
                    desc: "Neurosurgical Residency & Functional Neurosurgery Fellowship."
                  },
                  {
                    title: "Medical School",
                    inst: "Albert Einstein College of Medicine",
                    desc: "Graduated with Distinction. Alpha Omega Alpha Honors (2012)."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] bg-secondary w-5 h-5 rounded-full border-4 border-white shadow-sm"></span>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-primary font-medium">{item.inst}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4 flex gap-4">
              <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer">
                <Button>Schedule Consultation</Button>
              </a>
              <Link to="/credentials">
                <Button variant="outline">View Full Credentials</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Media Carousel */}
      <MediaCarousel />
    </div>
  );
};

export default About;