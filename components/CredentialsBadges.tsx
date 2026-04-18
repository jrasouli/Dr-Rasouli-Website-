import React from 'react';

const CredentialsBadges: React.FC = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[#0066CC] to-[#20B2AA]"></div>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Scrollable container with flex-nowrap to absolutely prevent wrapping */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 xl:overflow-visible xl:pb-0 xl:px-0">
            <div className="flex flex-nowrap gap-4 min-w-[1100px] xl:w-full xl:min-w-0">

            {/* Badge 1: Castle Connolly */}
            <div className="flex-1 bg-white rounded-xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-t-4 border-[#C9A961] flex flex-col items-center h-full min-h-[240px]">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFF8E7] to-[#FFEFD5] shrink-0">
                <svg className="w-8 h-8 text-[#C9A961]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                </svg>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-primary mb-4 leading-tight">Castle Connolly<br/>Top Doctor 2026</h3>
                
                <a href="https://www.castleconnolly.com/top-doctors/jonathan-j-rasouli-neurological-surgery" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-5 py-2.5 bg-gradient-to-br from-[#C9A961] to-[#DAA520] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all mt-auto">
                View Profile →
                </a>
            </div>

            {/* Badge 2: Fellowship */}
            <div className="flex-1 bg-white rounded-xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-t-4 border-primary flex flex-col items-center h-full min-h-[240px]">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 shrink-0">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2 leading-tight">Fellowship-Trained</h3>
                <p className="text-gray-600 text-base flex-grow font-medium">World Renowned Cleveland Clinic</p>
            </div>

            {/* Badge 3: Board Certified */}
            <div className="flex-1 bg-white rounded-xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-t-4 border-[#28A745] flex flex-col items-center h-full min-h-[240px]">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-50 shrink-0">
                <svg className="w-8 h-8 text-[#28A745]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2 leading-tight">Board Certified</h3>
                <p className="text-gray-600 text-base flex-grow font-medium">Neurological Surgery</p>
            </div>

            {/* Badge 4: Academic Faculty */}
            <div className="flex-1 bg-white rounded-xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-t-4 border-[#0066CC] flex flex-col items-center h-full min-h-[240px]">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 shrink-0">
                <svg className="w-8 h-8 text-[#0066CC]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2 leading-tight">Academic Faculty</h3>
            </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsBadges;