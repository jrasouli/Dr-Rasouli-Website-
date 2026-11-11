import React from "react";
import {
  BulletList,
  ConsultBand,
  Disclaimer,
  FUSION_DISCLAIMER,
  FaqList,
  Figure,
  InlineLink,
  PhilosophyArticle,
  REDISCOVER_ARTICLE_URL,
  RelatedPages,
  Section,
  Term,
} from "../../components/philosophy/ui";
import type { FaqEntry } from "../../components/philosophy/schema";

const SEO_TITLE = "Spinal Fusion vs. Disc Replacement | Dr.\u00A0Rasouli";
const DESCRIPTION =
  "ACDF fusion or artificial disc replacement? Dr.\u00A0Jonathan\u00A0Rasouli explains how each works, who is a good candidate, and how to choose the right option.";

const FAQS: FaqEntry[] = [
  {
    question: "Is disc replacement better than fusion?",
    answer:
      "Neither is better for everyone. Disc replacement preserves motion and some studies show faster recovery, but its indications are narrower. ACDF is the proven gold standard that works for the widest range of patients.",
  },
  {
    question: "What is adjacent segment disease?",
    answer:
      "It's wear and tear at the discs next to a fused level. Most people who develop it have no symptoms. A small percentage need more surgery in the future.",
  },
  {
    question: "Am I a candidate for cervical disc replacement?",
    answer:
      "Ideal candidates are generally healthy, have arm symptoms from degenerative disease at one or two levels, and have normal neck alignment with no instability. Only an evaluation by your spine surgeon can confirm it.",
  },
  {
    question: "How long do artificial discs last?",
    answer:
      "Long-term studies of the FDA-approved cervical discs now have close to 20 years of follow-up data showing durable results, and research continues.",
  },
];

const COMPARISON_ROWS = [
  ["Motion", "Level is fused (no motion)", "Motion preserved at that level"],
  ["Track record", "Gold standard, 50+ years", "Close to 20 years of follow-up data"],
  ["Who it fits", "Broad range of patients", "Narrower: healthy patients, 1–2 levels"],
  ["Recovery", "Predictable", "Some studies show faster return to work"],
];

const ComparisonTable: React.FC = () => (
  <div className="my-2 overflow-x-auto md:hidden">
    <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
      <caption className="sr-only">Comparison of ACDF fusion and cervical disc replacement on motion, track record, who it fits, and recovery</caption>
      <thead>
        <tr className="bg-navy-800 text-white">
          <th scope="col" className="p-3 font-semibold"> </th>
          <th scope="col" className="p-3 font-semibold">ACDF (fusion)</th>
          <th scope="col" className="p-3 font-semibold">Cervical disc replacement</th>
        </tr>
      </thead>
      <tbody>
        {COMPARISON_ROWS.map(([label, fusion, replacement], index) => (
          <tr key={label} className={index % 2 === 0 ? "bg-teal-50" : "bg-white"}>
            <th scope="row" className="p-3 font-semibold text-navy-800">{label}</th>
            <td className="p-3 text-ink">{fusion}</td>
            <td className="p-3 text-ink">{replacement}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FusionVsDisc: React.FC = () => (
  <PhilosophyArticle
    seoTitle={SEO_TITLE}
    description={DESCRIPTION}
    path="/philosophy/fusion-vs-disc-replacement"
    crumb="Fusion vs. disc replacement"
    h1="Spinal Fusion vs. Disc Replacement: Which One Is Right for You?"
    about={[
      { type: "MedicalProcedure", name: "Anterior cervical discectomy and fusion" },
      { type: "MedicalProcedure", name: "Cervical disc replacement" },
    ]}
    faqs={FAQS}
    hero={
      <Figure
        name="cervical-fusion-cage-vs-disc-replacement"
        alt="Cervical fusion cage vs. artificial disc replacement implant compared side by side"
        width={1000}
        height={512}
        caption="Image courtesy of Centinel Spine."
        eager
        framed={false}
      />
    }
  >
    <p className="text-lg leading-relaxed text-slate-700">
      This is one of the most common questions I'm asked, and one of the biggest sources of confusion for patients. I've written about it before in{" "}
      <InlineLink to={REDISCOVER_ARTICLE_URL} external>
        "Cervical Spinal Fusion vs Total Disc Replacement: Which One Should I Choose?"
      </InlineLink>{" "}
      for Centinel Spine's rediscover patient education site. Here is the short version.
    </p>

    <Section id="two-options" title="What are the two options?">
      <p>Both operations remove a damaged disc that is pinching a nerve or the spinal cord. They differ in what goes back into the space.</p>
      <BulletList
        items={[
          <><Term>Anterior cervical discectomy and fusion (ACDF):</Term> a spacer is placed and the two vertebrae grow together (fuse) into one solid segment. That level no longer moves.</>,
          <><Term>Total disc replacement (TDR), also called arthroplasty or an artificial disc:</Term> a motion-preserving implant is placed, so the level keeps moving.</>,
        ]}
      />
      <Figure
        name="c6-7-disc-herniation-mri"
        alt="MRI showing a large C6-7 cervical disc herniation."
        width={1086}
        height={1600}
        caption="MRI showing a large C6-7 cervical disc herniation."
        contain
      />
    </Section>

    <Section id="case-for-disc-replacement" title="The case for disc replacement">
      <p>
        Total disc replacement is an accepted alternative to ACDF for neck and arm pain caused by a cervical disc herniation. Because it doesn't fuse the bones, it preserves motion, and it is thought to restore more natural movement of the neck and help prevent faster wear at the levels above and below. Several studies suggest patients who have TDR have less pain after surgery and return to work faster than with ACDF.
      </p>
      <p>
        The ideal candidate has arm symptoms from a pinched nerve (<Term>cervical radiculopathy</Term>) caused by degenerative disc disease, a normal curve of the neck, and no abnormal movement between the vertebrae on flexion-extension (bending) X-rays. In general, I reserve disc replacement for patients who are healthy and have degenerative disc disease at no more than two levels.
      </p>
    </Section>

    <Section id="case-for-fusion" title="The case for fusion">
      <p>
        ACDF has been the "gold standard" for cervical radiculopathy and myelopathy (spinal cord compression) for more than 50 years. It is safe and effective, and its results are predictable. Because a fusion removes motion at that segment, some studies show it changes the forces on the discs above and below, which can speed up wear there later in life. This is called <Term>adjacent segment disease</Term>. Most people who develop it never have symptoms, but a small percentage need another surgery in the future.
      </p>
      <Figure
        name="cervical-fusion-before-after-xray"
        alt="Cervical spine X-ray before and after anterior cervical discectomy and fusion"
        width={1600}
        height={1600}
        caption="Lateral cervical X-rays before and after anterior cervical fusion."
        contain
      />
      <p>
        The indications for disc replacement are narrower. The vast majority of patients with cervical disc disease are good candidates for ACDF, which is why it is still the more commonly performed procedure in the United States.
      </p>
      {/* The graphic's type is too small to read on a phone, so narrow screens get the same cells as text. */}
      <ComparisonTable />
      <div className="hidden md:block">
        <Figure
          name="fusion-vs-disc-comparison-table"
          alt="Comparison table of cervical fusion and disc replacement. Motion: ACDF fusion, the level does not move; disc replacement preserves motion. Track record: fusion is the gold standard for more than 50 years; disc replacement has close to 20 years of follow-up. Who it fits: fusion suits a broad range of patients; disc replacement is narrower, for healthy patients at one or two levels. Recovery: fusion is predictable; some studies show a faster return to work after disc replacement."
          width={1400}
          height={640}
        />
      </div>
    </Section>

    <Section id="lower-back" title="What about the lower back?">
      <p>
        Lumbar disc replacement exists and is FDA-approved for carefully selected patients with disc disease at one or two levels, but the selection criteria are stricter and it's used much less often than lumbar fusion.
      </p>
    </Section>

    <Section id="not-a-candidate" title="Who might not be a good disc replacement candidate?">
      <p>
        Things that often point toward fusion include instability or abnormal motion between vertebrae, significant arthritis of the facet joints, abnormal neck alignment such as kyphosis, poor bone quality (osteoporosis), infection, and disease at more than two levels. Your surgeon makes the final call based on your imaging and exam.
      </p>
    </Section>

    <Section id="fusion-decide" title="How I decide with you">
      <p>
        Which procedure is best for you? It comes down to your specific anatomy, symptoms, and health. I review your MRI, CT, and bending X-rays with you, explain which option is safest and most likely to work, and why. If you are healthy and have disease at one or two levels, it's worth asking whether you are a disc replacement candidate.
      </p>
    </Section>

    <FaqList items={FAQS} />

    <ConsultBand title="Talk to me about your options">
      <p>
        If you've been told you need neck surgery and want to know whether fusion or disc replacement is right for you, I'm happy to review your imaging and talk it through.
      </p>
    </ConsultBand>

    <RelatedPages
      links={[
        { href: "/philosophy/herniated-disc", label: "Herniated discs" },
        { href: "/philosophy/cervical-stenosis", label: "Cervical stenosis" },
        { href: "/philosophy/spinal-deformity", label: "Spinal deformity" },
        { href: "/philosophy", label: "My Philosophy" },
        { href: REDISCOVER_ARTICLE_URL, label: "Original article on rediscovermylife.org", external: true },
      ]}
    />
    <Disclaimer>{FUSION_DISCLAIMER}</Disclaimer>
  </PhilosophyArticle>
);

export default FusionVsDisc;
