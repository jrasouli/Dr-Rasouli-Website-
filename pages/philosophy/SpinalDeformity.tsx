import React from "react";
import {
  BulletList,
  ConsultBand,
  Disclaimer,
  FaqList,
  Figure,
  PhilosophyArticle,
  RelatedPages,
  STANDARD_DISCLAIMER,
  Section,
  Term,
} from "../../components/philosophy/ui";
import type { FaqEntry } from "../../components/philosophy/schema";

const SEO_TITLE = "Adult Scoliosis & Kyphosis Treatment | Dr. Rasouli";
const DESCRIPTION =
  "Adult scoliosis or a forward-stooping spine? Learn about symptoms, non-surgical care, and when deformity surgery is worth it, from Dr. Jonathan Rasouli.";

const FAQS: FaqEntry[] = [
  {
    question: "Can adults get scoliosis?",
    answer: "Yes. Some adults have curves from childhood, and others develop degenerative scoliosis later in life as discs and joints wear.",
  },
  {
    question: "Does every curve need surgery?",
    answer: "No. Most adults with scoliosis are managed without surgery. Surgery is considered when pain, disability, nerve symptoms, or progression justify the risks.",
  },
  {
    question: "How long is recovery from scoliosis surgery?",
    answer:
      "Recovery from larger deformity operations often takes several months to a year, with an early period of reduced activity followed by rehabilitation. Typical recovery and return-to-work or previous activity varies between surgeries and I will discuss all of these with you at the time of the visit.",
  },
  {
    question: "Will I be able to bend after a long fusion?",
    answer:
      "You'll lose motion in the fused segments, but most daily activities remain possible. Many patients say the gain in standing upright and walking outweighs the loss of flexibility.",
  },
];

const SpinalDeformity: React.FC = () => (
  <PhilosophyArticle
    seoTitle={SEO_TITLE}
    description={DESCRIPTION}
    path="/philosophy/spinal-deformity"
    crumb="Spinal deformity"
    h1="Adult Spinal Deformity: Scoliosis and Kyphosis Explained"
    about={{ type: "MedicalCondition", name: "Adult spinal deformity" }}
    faqs={FAQS}
  >
    <Section id="what-is-deformity" title="What is adult spinal deformity?" first>
      <p>Adult spinal deformity is an abnormal curve or alignment of the spine in adults.</p>
      <BulletList
        items={[
          <><Term>Adult scoliosis</Term> is a side-to-side curve. It may be left over from a curve that started in childhood, or it may develop later in life as discs and joints wear unevenly (degenerative scoliosis or from osteoporosis).</>,
          <><Term>Kyphosis</Term> is a forward rounding. In the lower back it often shows up as "flatback," where the normal inward curve is lost, so it becomes hard to stand up straight.</>,
        ]}
      />
      <Figure
        name="spine-normal-scoliosis-kyphosis"
        alt="Illustration comparing a normal spine with adult scoliosis and kyphosis"
        width={1400}
        height={898}
        mobileCaption="Normal, scoliosis, and kyphosis."
      />
      <p>
        Surgeons pay close attention to <Term>sagittal balance</Term>, meaning whether your head sits over your pelvis when viewed from the side. A spine that tips forward makes your muscles work harder all day and is closely linked to pain and disability.
      </p>
      <Figure
        name="sagittal-balance-plumb-line"
        alt="Diagram of sagittal balance showing a forward-leaning spine in adult spinal deformity"
        width={1400}
        height={898}
        mobileCaption="Balanced posture compared with sagittal imbalance."
      />
    </Section>

    <Section id="deformity-symptoms" title="What symptoms does it cause?">
      <BulletList
        items={[
          "Back pain and fatigue that get worse the longer you stand or walk",
          "Leaning forward or to the side, with difficulty standing upright",
          "Leg pain, numbness, or weakness when the curve also narrows the nerve passages (stenosis)",
          "Visible changes such as uneven shoulders or hips, or loss of height",
        ]}
      />
    </Section>

    <Section id="deformity-nonsurgical" title="When is non-surgical care enough?">
      <p>Many adults with scoliosis or kyphosis have mild symptoms and do well without surgery. Non-surgical care includes:</p>
      <BulletList
        items={[
          "Physical therapy focused on core and back-extensor strength, posture, and balance",
          "Staying active and maintaining a healthy weight",
          "Bone health evaluation and treatment of osteoporosis when needed",
          "Medications and, for nerve-related leg pain, targeted injections",
          "Periodic X-rays to see whether the curve is progressing",
        ]}
      />
      <p>A curve on an X-ray is not, on its own, a reason for surgery.</p>
    </Section>

    <Section id="deformity-surgery-when" title="When does surgery make sense?">
      <BulletList
        items={[
          "Pain and disability that significantly limit your life despite good non-surgical care",
          "Progressive deformity, or trouble standing upright and looking ahead",
          "Nerve compression causing leg pain or weakness that hasn't responded to treatment",
        ]}
      />
      <p>
        Deformity surgery can greatly improve pain and function for the right patient, but it is bigger surgery with higher complication rates and a longer recovery than most spine operations. That's why getting ready for it matters: optimizing bone health, quitting smoking, managing medical conditions, and having realistic expectations.
      </p>
    </Section>

    <Section id="deformity-surgical-options" title="What are the surgical options?">
      <p>Options range from smaller to larger, depending on what's actually causing your symptoms:</p>
      <BulletList
        items={[
          <><Term>Decompression or limited fusion:</Term> treats the specific levels pinching nerves, without correcting the whole curve</>,
          <><Term>Longer fusion with instrumentation:</Term> realigns and stabilizes the spine</>,
          <><Term>Osteotomies:</Term> reshape the bone to correct significant kyphosis and restore balance</>,
          <><Term>Minimally invasive and hybrid techniques:</Term> for selected patients such as direct lateral lumbar interbody fusion (XLIF, DLIF, LTP) or robotic-assisted techniques.</>,
        ]}
      />
      <Figure
        name="deformity-correction-before-after-illustration"
        alt="Illustrated example of adult scoliosis before and after spinal deformity correction surgery"
        width={1400}
        height={898}
        caption="Illustration only."
        mobileCaption="Before and after correction. Illustration only."
      />
    </Section>

    <Section id="deformity-decide" title="How I decide with you">
      <p>
        I evaluate your full-length standing X-rays, measure your alignment, and identify which problem is driving your symptoms: the curve, the imbalance, or nerve compression. Sometimes a focused, smaller operation is the right answer. Sometimes a full correction is. We weigh benefit against risk honestly, based on your goals and health.
      </p>
    </Section>

    <FaqList items={FAQS} />

    <ConsultBand title="Let's talk about your spine's alignment">
      <p>If you're leaning forward, losing height, or struggling to stand and walk, let's measure your alignment and talk through every option.</p>
    </ConsultBand>

    <RelatedPages
      links={[
        { href: "/philosophy/lumbar-stenosis", label: "Lumbar stenosis" },
        { href: "/philosophy/compression-fractures", label: "Compression fractures" },
        { href: "/philosophy/fusion-vs-disc-replacement", label: "Fusion vs. disc replacement" },
        { href: "/philosophy", label: "My Philosophy" },
      ]}
    />
    <Disclaimer>{STANDARD_DISCLAIMER}</Disclaimer>
  </PhilosophyArticle>
);

export default SpinalDeformity;
