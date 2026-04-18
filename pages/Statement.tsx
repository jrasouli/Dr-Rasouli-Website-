import React from 'react';

const Statement: React.FC = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0A192F]">
            A Surgeon's Promise
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#FF6B35] font-medium italic leading-relaxed">
            "My commitment is to treat every patient with the same level of care, precision, and compassion I would want for my own family."
          </p>
          
          <p className="text-lg md:text-xl text-[#0A192F] leading-relaxed">
            My path to becoming a neurosurgeon began with a deep-seated desire to make a tangible difference in people's lives. I believe that you, the patient, are the most important member of the care team, and my philosophy is rooted in a partnership where decisions are made together. While I am trained in complex surgical reconstruction, I am a staunch advocate for conservative care, leveraging the latest advancements in minimally invasive techniques and robotic assistance only when necessary. It is the trust my patients place in me that drives me to be better every single day, and I am honored to be a part of your journey to recovery.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-[350px] rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="/590D0DD2-B6B2-4446-BDA5-B36F8F23E8EF.JPG" 
              alt="Dr. Rasouli" 
              className="w-full h-auto object-cover scale-[1.3] origin-[center_20%] -translate-x-[3%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;