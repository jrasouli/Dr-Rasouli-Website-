import React from 'react';
import { Award, GraduationCap, Building2, Download } from 'lucide-react';
import Button from '../components/Button';

const Credentials: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-neutral-light py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             <div>
                <h1 className="text-4xl font-heading font-bold text-primary mb-2">Curriculum Vitae</h1>
                <p className="text-xl text-gray-600">Jonathan J. Rasouli, MD, FAANS</p>
             </div>
             <a href="/JRasouli_CV.pdf" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" className="flex items-center gap-2">
                 <Download size={18} />
                 View/Download Full CV
               </Button>
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Professional Summary */}
        <section>
           <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Professional Summary</h2>
           <p className="text-gray-700 leading-relaxed text-lg">
             Dr. Jonathan J. Rasouli is a board-certified spinal neurosurgeon specializing in complex spinal deformity, minimally invasive spine surgery, and robotic-assisted techniques. He is dedicated to providing comprehensive, patient-centered care, utilizing the latest advancements in neurosurgery to achieve optimal outcomes.
           </p>
        </section>

        {/* Education & Training */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-secondary" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Education & Training</h2>
          </div>
          <div className="space-y-8 pl-4 border-l-2 border-gray-100 ml-3">
             <div className="relative">
               <span className="absolute -left-[25px] bg-gray-300 w-4 h-4 rounded-full mt-1.5 ring-4 ring-white"></span>
               <h3 className="font-bold text-lg text-gray-900">Cleveland Clinic Foundation</h3>
               <p className="text-gray-900 font-medium">Complex & Adult Reconstructive Spinal Surgery Fellowship</p>
               <p className="text-gray-500 text-sm">2019 - 2020 | Cleveland, OH</p>
             </div>
              <div className="relative">
               <span className="absolute -left-[25px] bg-gray-300 w-4 h-4 rounded-full mt-1.5 ring-4 ring-white"></span>
               <h3 className="font-bold text-lg text-gray-900">The Mount Sinai Hospital</h3>
               <p className="text-gray-800 font-medium">Neurological Surgery Residency</p>
               <p className="text-gray-500 text-sm">2013 - 2019 | New York, NY</p>
             </div>
             <div className="relative">
               <span className="absolute -left-[25px] bg-gray-300 w-4 h-4 rounded-full mt-1.5 ring-4 ring-white"></span>
               <h3 className="font-bold text-lg text-gray-900">Albert Einstein College of Medicine</h3>
               <p className="text-gray-800 font-medium">Doctor of Medicine (M.D.)</p>
               <p className="text-gray-500 text-sm">2007 - 2012 | Bronx, NY</p>
               <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                  <li>Alpha Omega Alpha (AOA) Medical Honor Society (2012)</li>
                  <li>Research Distinction in Neurosurgery</li>
               </ul>
             </div>
          </div>
        </section>

        {/* Academic Appointments */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-secondary" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Former Academic Appointments & Hospital Affiliations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-2">Former Positions</h3>
               <ul className="space-y-3 text-gray-700">
                 <li><strong>Assistant Professor of Neurosurgery</strong><br/><span className="text-sm">Donald and Barbara Zucker School of Medicine at Hofstra/Northwell</span></li>
                 <li><strong>Neurosurgeon</strong><br/><span className="text-sm">Northwell Health</span></li>
               </ul>
             </div>
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Hospital Affiliations</h3>
                <ul className="space-y-2 text-gray-700">
                   <li>Northwell Health</li>
                   <li>Mather Hospital</li>
                   <li>Hudson Regional Health</li>
                </ul>
             </div>
          </div>
        </section>

        {/* Honors & Awards */}
        <section className="bg-primary text-white p-8 rounded-2xl">
           <div className="flex items-center gap-3 mb-6">
            <Award className="text-accent" size={28} />
            <h2 className="text-2xl font-bold">Honors & Awards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2026</div>
               <div>
                 <h4 className="font-bold text-lg">Top Doctor</h4>
                 <p className="text-blue-200 text-sm">Castle Connolly</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2025</div>
               <div>
                 <h4 className="font-bold text-lg">Top Doctor</h4>
                 <p className="text-blue-200 text-sm">Castle Connolly</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2024</div>
               <div>
                 <h4 className="font-bold text-lg">Top Doctor</h4>
                 <p className="text-blue-200 text-sm">New York Magazine</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2023</div>
               <div>
                 <h4 className="font-bold text-lg">Rising Star in Spine Surgery</h4>
                 <p className="text-blue-200 text-sm">Becker's Spine Review</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2022</div>
               <div>
                 <h4 className="font-bold text-lg">Patient's Choice Award</h4>
                 <p className="text-blue-200 text-sm">Vitals.com</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2021</div>
               <div>
                 <h4 className="font-bold text-lg">Excellence in Teaching Award</h4>
                 <p className="text-blue-200 text-sm">Mount Sinai Health System</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="text-accent font-bold text-xl">2012</div>
               <div>
                 <h4 className="font-bold text-lg">Alpha Omega Alpha (AOA)</h4>
                 <p className="text-blue-200 text-sm">Honor Medical Society Inductee</p>
               </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Credentials;