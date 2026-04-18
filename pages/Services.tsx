import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('deformity');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Surgical & Non-Surgical Treatments</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Dr. Rasouli provides expert treatment for a wide range of spine conditions, prioritizing conservative management whenever possible.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;
            return (
              <div key={service.id} className="border-b border-gray-100 last:border-0">
                <button 
                  onClick={() => toggle(service.id)}
                  className={`w-full text-left px-6 py-6 flex items-center justify-between transition-colors ${isOpen ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <service.icon size={24} />
                    </div>
                    <span className={`text-lg font-bold ${isOpen ? 'text-primary' : 'text-gray-900'}`}>{service.title}</span>
                  </div>
                  {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-8 pt-2 pl-[88px] pr-8 animate-fadeIn">
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Procedures & Conditions:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.details?.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 bg-white border border-gray-200 p-3 rounded shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                    
                    <a href="https://neurospineplus.com/contact-us/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="text-sm">Request Consultation for {service.title}</Button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Conservative Approach Note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
          <AlertCircle className="text-amber-600 shrink-0" size={24} />
          <div>
             <h3 className="font-bold text-amber-800 mb-2">Conservative First Approach</h3>
             <p className="text-amber-700 text-sm leading-relaxed">
               Dr. Rasouli believes spine surgery is not always the answer. We thoroughly explore non-surgical options including physical therapy, pain management, and lifestyle modifications before recommending surgical intervention.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;