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

const SEO_TITLE = "Lumbar Spinal Stenosis Treatment | Dr.\u00A0Rasouli";
const DESCRIPTION =
  "Leg pain or heaviness when you walk or stand may be lumbar stenosis. Learn your non-surgical and surgical options and how Dr.\u00A0Rasouli helps you decide.";

const FAQS: FaqEntry[] = [
  {
    question: "Does lumbar spinal stenosis always get worse?",
    answer: "No. For many people, symptoms stay stable or improve over time with non-surgical care. Some do slowly progress.",
  },
  {
    question: "Why does leaning forward help my leg pain?",
    answer: "Bending forward opens up the spinal canal a little and takes pressure off the nerves. Standing straight or arching back narrows it.",
  },
  {
    question: "Will I need a fusion?",
    answer: "Not necessarily. Many patients with stenosis only need decompression. Fusion is usually considered when there is instability or certain types of slippage.",
  },
  {
    question: "How soon can I walk after surgery?",
    answer:
      "Most patients walk the same day or the next day. Typical recovery and return-to-work or previous activity varies between surgeries and I will discuss all of these with you at the time of the visit.",
  },
];

const LumbarStenosis: React.FC = () => (
  <PhilosophyArticle
    seoTitle={SEO_TITLE}
    description={DESCRIPTION}
    path="/philosophy/lumbar-stenosis"
    crumb="Lumbar spinal stenosis"
    h1="Lumbar Spinal Stenosis: Getting You Walking Again"
    about={{ type: "MedicalCondition", name: "Lumbar spinal stenosis" }}
    faqs={FAQS}
  >
    <Section id="what-is-lumbar-stenosis" title="What is lumbar spinal stenosis?" first>
      <p>
        Lumbar spinal stenosis is narrowing of the spinal canal in the lower back. It usually comes from age-related changes: bulging discs, enlarged facet joints, thickened ligaments, and sometimes one vertebra slipping forward over another (<Term>degenerative spondylolisthesis</Term>). The narrowing squeezes the nerves that run to your legs.
      </p>
      {/* Illustration slot for later, not rendered: axial cross-section of a normal lumbar canal beside a narrowed one. Proposed alt: "Cross-section illustration of lumbar spinal stenosis narrowing the spinal canal and compressing nerves" */}
    </Section>

    <Section id="lumbar-symptoms" title="What does it feel like?">
      <p>
        The classic symptom is <Term>neurogenic claudication</Term>: pain, aching, heaviness, numbness, or tingling in the buttocks and legs that comes on when you stand or walk and eases when you sit or bend forward. Many people notice they can walk farther leaning on a shopping cart. Some people also have low back pain. Less commonly, the leg weakness becomes significant.
      </p>
      <Figure
        name="lumbar-stenosis-shopping-cart-sign"
        alt="Leaning forward on a shopping cart relieves leg pain from lumbar spinal stenosis"
        width={1400}
        height={898}
        mobileCaption="Leaning forward often eases stenosis symptoms."
      />
    </Section>

    <Section id="lumbar-nonsurgical" title="When is non-surgical care enough?">
      <p>Many people with lumbar stenosis can manage their symptoms well without surgery, and for some the symptoms stay stable for years. Good non-surgical care can include:</p>
      <BulletList
        items={[
          "Physical therapy focused on core strength, flexibility, and walking tolerance",
          "Staying active, for example with a stationary bike, where leaning forward is comfortable",
          "Weight management and general conditioning",
          "Medications for pain or nerve symptoms, used carefully",
          "Epidural steroid injections for flare-ups, which can give temporary relief for some patients",
        ]}
      />
      <p>If you can do the things that matter to you, there is no rush to operate.</p>
    </Section>

    <Section id="lumbar-surgery-when" title="When does surgery make sense?">
      <BulletList
        items={[
          "Leg symptoms that keep you from walking, working, or enjoying your life despite a fair trial of non-surgical care",
          "Progressive leg weakness or foot drop",
          'Rarely, loss of bladder or bowel control or numbness in the "saddle" area. This is an emergency.',
        ]}
      />
      <p>
        Research, including large randomized trials, shows that for carefully selected patients with persistent symptoms, decompression surgery generally gives greater improvement in pain and function than continued non-surgical care. Non-surgical care is still a reasonable choice for many people. Age, activity goals, and overall medical health are important as well.
      </p>
    </Section>

    <Section id="lumbar-surgical-options" title="What are the surgical options?">
      <BulletList
        items={[
          <><Term>Decompression (laminectomy or laminotomy):</Term> removes the bone and ligament pressing on the nerves. It can often be done through small incisions with minimally invasive techniques.</>,
          <><Term>Decompression with fusion:</Term> added when the spine is unstable, for example with some spondylolisthesis, or when significant decompression would make it unstable.</>,
          <><Term>Other options in selected patients:</Term> sometimes a minimally-invasive, endoscopic foraminotomy/laminotomy is an option as well.</>,
        ]}
      />
      {/* Illustration slot for later, not rendered: decompression diagram. Proposed alt: "Annotated lumbar MRI showing spinal stenosis and the area removed during laminectomy decompression" */}
    </Section>

    <Section id="lumbar-decide" title="How I decide with you">
      <p>
        My first question is whether your symptoms really fit the narrowing on your MRI, since stenosis on a scan is common and doesn't always cause symptoms. I look at standing X-rays for slippage or instability, check for other causes such as hip arthritis or poor circulation, and talk with you about your goals. If surgery makes sense, I aim for the smallest operation that will reliably fix the problem. Fusion is used only when it's needed, such as spinal instability or deformity.
      </p>
    </Section>

    <FaqList items={FAQS} />

    <ConsultBand title="Ready to get back on your feet?">
      <p>If walking or standing has become a struggle, let's find out why and talk about the options, starting with the least invasive.</p>
    </ConsultBand>

    <RelatedPages
      links={[
        { href: "/philosophy/herniated-disc", label: "Herniated discs" },
        { href: "/philosophy/compression-fractures", label: "Compression fractures" },
        { href: "/philosophy/spinal-deformity", label: "Spinal deformity" },
        { href: "/philosophy/fusion-vs-disc-replacement", label: "Fusion vs. disc replacement" },
        { href: "/philosophy", label: "My Philosophy" },
      ]}
    />
    <Disclaimer>{STANDARD_DISCLAIMER}</Disclaimer>
  </PhilosophyArticle>
);

export default LumbarStenosis;
