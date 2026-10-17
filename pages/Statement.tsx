import React from 'react';
import SEO from '../components/SEO';
import { Container, PageHeader, ButtonLink, Picture } from '../components/ui';
import { APPOINTMENT_URL } from '../constants';

const Statement: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Dr. Jonathan Rasouli | Philosophy & Approach | Spine Neurosurgeon NJ"
        description="Learn about Dr. Jonathan Rasouli's patient-first philosophy and commitment to treating every patient with precision and compassion. Board-certified neurosurgeon serving New Jersey and Staten Island."
        canonicalPath="/statement"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Dr. Rasouli", item: "/about" },
          { name: "Statement", item: "/statement" }
        ]}
      />
      <PageHeader eyebrow="Personal Statement" title="A Surgeon's Promise" />
      <Container className="py-14 md:py-20">
        <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-12">
          <div className="md:col-span-7 space-y-8">
            <blockquote className="border-l-2 border-teal-700 pl-6">
              <p className="font-serif text-2xl md:text-3xl text-navy-800 leading-snug">
                &ldquo;My commitment is to treat every patient with the same level of care, precision, and compassion I would want for my own family.&rdquo;
              </p>
            </blockquote>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              My path to becoming a neurosurgeon began with a deep-seated desire to make a tangible difference in people's lives. I believe that you, the patient, are the most important member of the care team, and my philosophy is rooted in a partnership where decisions are made together. While I am trained in complex surgical reconstruction, I am a staunch advocate for conservative care, leveraging the latest advancements in minimally invasive techniques and robotic assistance only when necessary. It is the trust my patients place in me that drives me to be better every single day, and I am honored to be a part of your journey to recovery.
            </p>
            <p className="font-serif text-xl text-navy-800">&mdash; Jonathan J. Rasouli, MD</p>
            <ButtonLink href={APPOINTMENT_URL}>Request an Appointment</ButtonLink>
          </div>
          <div className="md:col-span-5">
            <Picture
              name="dr-rasouli-statement"
              alt="Dr. Jonathan J. Rasouli, MD, in a navy suit"
              width={1000}
              height={1500}
              className="block"
              imgClassName="w-full max-w-[380px] mx-auto rounded-xl shadow-lg object-cover aspect-[4/5] object-[center_top]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statement;
