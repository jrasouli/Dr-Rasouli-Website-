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

const SEO_TITLE = "Herniated Disc Treatment: Neck & Back | Dr.\u00A0Rasouli";
const DESCRIPTION =
  "Most herniated discs heal without surgery. Learn the symptoms, warning signs, and when surgery makes sense for neck or back disc herniations.";

const FAQS: FaqEntry[] = [
  {
    question: "Can a herniated disc heal on its own?",
    answer: "Often, yes. Many herniations shrink and symptoms improve within weeks to a few months.",
  },
  {
    question: "Should I rest in bed?",
    answer: "Short rest during a bad flare is fine. Generally, staying gently active helps recovery more than prolonged bed rest.",
  },
  {
    question: "Can a disc herniate again after surgery?",
    answer: "Yes, a small percentage of patients can have a re-herniation at the same level. If this happens, it may require an additional procedure to correct.",
  },
  {
    question: "When is a herniated disc an emergency?",
    answer: "New bladder or bowel problems, numbness in the groin or saddle area, or rapidly worsening weakness. Go to an emergency department right away.",
  },
];

const HerniatedDisc: React.FC = () => (
  <PhilosophyArticle
    seoTitle={SEO_TITLE}
    description={DESCRIPTION}
    path="/philosophy/herniated-disc"
    crumb="Herniated discs"
    h1="Herniated Discs: Most Heal on Their Own. Here's When They Don't"
    about={{ type: "MedicalCondition", name: "Herniated disc" }}
    faqs={FAQS}
  >
    <Section id="what-is-herniated-disc" title="What is a herniated disc?" first>
      <p>
        Between the bones of your spine are discs, rubbery cushions with a tough outer ring and a softer, gel-like center. When the outer ring tears, some of the center can push out (herniate) and press on a nearby nerve. It happens most often in the lower back (lumbar spine) and the neck (cervical spine).
      </p>
      <Figure
        name="l5-s1-disc-herniation-mri"
        alt="MRI showing a large L5-S1 lumbar disc herniation."
        width={1010}
        height={1426}
        caption="MRI showing a large L5-S1 lumbar disc herniation."
        contain
      />
    </Section>

    <Section id="herniated-symptoms" title="What symptoms does it cause?">
      <BulletList
        items={[
          <><Term>Lower back (lumbar):</Term> sciatica, meaning sharp, shooting pain from the buttock down the leg, often below the knee, sometimes with numbness, tingling, or weakness in the leg or foot.</>,
          <><Term>Neck (cervical):</Term> pain radiating into the shoulder, arm, or hand, with possible numbness, tingling, or weakness. A large cervical herniation can occasionally press on the spinal cord and cause hand clumsiness or balance problems.</>,
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
      <Figure
        name="sciatica-and-arm-pain-map"
        alt="Pain map showing sciatica from a lumbar herniated disc and arm pain from a cervical herniated disc"
        width={1400}
        height={898}
        mobileCaption="Arm pain (cervical radiculopathy) and leg pain (sciatica)."
      />
      <p>The leg or arm pain is often worse than the back or neck pain.</p>
    </Section>

    <Section id="herniated-nonsurgical" title="When is non-surgical care enough?">
      <p>For most people the answer is: most of the time. Many disc herniations improve substantially within about 6 to 12 weeks, and the herniated material often shrinks as the body reabsorbs it. Non-surgical care includes:</p>
      <BulletList
        items={[
          "Staying as active as you comfortably can. Prolonged bed rest isn't recommended.",
          "Physical therapy",
          "Anti-inflammatory or nerve-pain medication",
          "An epidural steroid injection for severe pain that isn't settling",
        ]}
      />
    </Section>

    <Section id="herniated-surgery-when" title="When does surgery make sense?">
      <BulletList
        items={[
          <><Term>Emergency:</Term> new loss of bladder or bowel control, or numbness in the groin or "saddle" area (possible cauda equina syndrome). Seek care immediately.</>,
          "Significant or worsening weakness, such as foot drop or a weak grip",
          "Signs of spinal cord compression from a cervical herniation",
          "Severe arm or leg pain that hasn't improved after about 6 weeks or more of good non-surgical care and is keeping you from living your life",
        ]}
      />
      <p>
        For lasting sciatica, surgery usually relieves leg pain faster. Over the long run, many surgical and non-surgical patients end up doing similarly well, so timing is often your choice. When sciatica persists, surgery often provides faster pain relief than continuing non-surgical treatment.
      </p>
    </Section>

    <Section id="herniated-surgical-options" title="What are the surgical options?">
      <BulletList
        items={[
          <><Term>Lumbar microdiscectomy:</Term> removes only the herniated fragment through a small incision. It is one of the most common and successful spine operations.</>,
          <><Term>Cervical options:</Term> anterior cervical discectomy and fusion (ACDF), cervical disc replacement, or posterior cervical foraminotomy, depending on where the herniation sits and the health of the rest of your neck.</>,
        ]}
      />
      {/* Illustration slot for later, not rendered: lumbar microdiscectomy diagram. Proposed alt: "Illustration of lumbar microdiscectomy removing a herniated disc fragment to relieve nerve pressure" */}
    </Section>

    <Section id="herniated-decide" title="How I decide with you">
      <p>
        I want to be sure the herniation on your MRI is what's causing your symptoms, so I match your pain pattern and exam findings to the image. Then I look at your timeline, your strength, and how much the pain is limiting you, and we decide together whether to keep giving non-surgical care time to work.
      </p>
    </Section>

    <FaqList items={FAQS} />

    <ConsultBand title="Let's find the cause of your pain">
      <p>If arm or leg pain isn't getting better, or you're noticing weakness, let's look at it together.</p>
    </ConsultBand>

    <RelatedPages
      links={[
        { href: "/philosophy/cervical-stenosis", label: "Cervical stenosis" },
        { href: "/philosophy/lumbar-stenosis", label: "Lumbar stenosis" },
        { href: "/philosophy/fusion-vs-disc-replacement", label: "Fusion vs. disc replacement" },
        { href: "/philosophy", label: "My Philosophy" },
      ]}
    />
    <Disclaimer>{STANDARD_DISCLAIMER}</Disclaimer>
  </PhilosophyArticle>
);

export default HerniatedDisc;
