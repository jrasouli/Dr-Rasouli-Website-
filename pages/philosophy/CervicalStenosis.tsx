import React from "react";
import {
  BulletList,
  ConsultBand,
  Disclaimer,
  FaqList,
  Figure,
  IllustrationSlot,
  InlineLink,
  PhilosophyArticle,
  RelatedPages,
  STANDARD_DISCLAIMER,
  Section,
  Term,
} from "../../components/philosophy/ui";
import type { FaqEntry } from "../../components/philosophy/schema";

const SEO_TITLE = "Cervical Spinal Stenosis Treatment | Dr. Rasouli";
const DESCRIPTION =
  "Neck stenosis can pinch nerves or the spinal cord. Learn symptoms, when non-surgical care works, and when surgery makes sense, from Dr. Jonathan Rasouli.";

const FAQS: FaqEntry[] = [
  {
    question: "Can cervical stenosis get better without surgery?",
    answer:
      "Pinched-nerve symptoms often improve with non-surgical care. The narrowing itself doesn't go away, but symptoms can settle. Spinal cord compression (myelopathy) is different: it usually doesn't improve on its own and needs closer evaluation. When myelopathy is causing real symptoms, most patients will need surgery.",
  },
  {
    question: "Is cervical myelopathy an emergency?",
    answer:
      "It is usually not an emergency, but it shouldn't be ignored. Rapidly worsening weakness, trouble walking, or new bladder or bowel problems need urgent medical attention.",
  },
  {
    question: "Will I lose motion in my neck after surgery?",
    answer:
      "That depends on the procedure. A fusion stops motion at the treated level. Most people barely notice this after a one- or two-level fusion. Disc replacement is designed to keep motion at that level.",
  },
  {
    question: "How long is recovery after cervical spine surgery?",
    answer:
      "Many people go home the same day or the next day after a one- or two-level anterior surgery. Recovery from larger posterior operations takes longer. Typical recovery and return-to-work or previous activity varies between surgeries and I will discuss all of these with you at the time of the visit.",
  },
];

const CervicalStenosis: React.FC = () => (
  <PhilosophyArticle
    seoTitle={SEO_TITLE}
    description={DESCRIPTION}
    path="/philosophy/cervical-stenosis"
    crumb="Cervical spinal stenosis"
    h1="Cervical Spinal Stenosis: When to Watch, When to Treat"
    about={{ type: "MedicalCondition", name: "Cervical spinal stenosis" }}
    faqs={FAQS}
  >
    <Section id="what-is-cervical-stenosis" title="What is cervical spinal stenosis?" first>
      <p>
        "Stenosis" means narrowing. In the cervical spine (your neck), the canal that holds the spinal cord, or the openings where nerves exit, can narrow over time. The usual causes are worn discs, bone spurs, and thickened ligaments, the normal wear and tear of aging. When the narrowing presses on a nerve root it is called <Term>radiculopathy</Term>. When it presses on the spinal cord itself it is called <Term>myelopathy</Term>, and that distinction matters a great deal for treatment.
      </p>
      {/* Proposed alt text: Illustration comparing a normal cervical spinal canal with cervical spinal stenosis compressing the spinal cord */}
      <IllustrationSlot proposedAlt="Illustration comparing a normal cervical spinal canal with cervical spinal stenosis compressing the spinal cord" />
    </Section>

    <Section id="cervical-symptoms" title="What symptoms does it cause?">
      <BulletList
        items={[
          <><Term>Nerve root compression (radiculopathy):</Term> pain, numbness, tingling, or weakness that runs from the neck into the shoulder, arm, or hand.</>,
          <><Term>Spinal cord compression (myelopathy):</Term> clumsy hands, trouble with buttons or handwriting, dropping things, balance problems or an unsteady walk, and sometimes electric-shock feelings down the spine when you bend your neck.</>,
          <>Neck pain and stiffness, although many people with stenosis have little neck pain at all.</>,
        ]}
      />
      <p>Myelopathy can start subtly. People often blame it on age, which is why a careful exam matters.</p>
      <Figure
        name="cervical-stenosis-mri-illustration"
        alt="Annotated MRI of the neck showing cervical spinal stenosis and spinal cord compression"
        width={1400}
        height={898}
        caption="Illustration, not an actual patient scan."
      />
    </Section>

    <Section id="cervical-nonsurgical" title="When is non-surgical care enough?">
      <p>
        If you mostly have neck pain or arm symptoms from a pinched nerve, and no signs of spinal cord compression, non-surgical care is usually the right place to start. That can include physical therapy, posture and activity changes, anti-inflammatory or nerve-pain medication, and in some cases an epidural steroid injection. Many people improve over weeks to months. Narrowing that shows up on an MRI but causes no symptoms often needs nothing more than monitoring.
      </p>
    </Section>

    <Section id="cervical-surgery-when" title="When does surgery make sense?">
      <BulletList
        items={[
          <><Term>Myelopathy with real symptoms.</Term> Spinal cord compression tends to get worse over time, and lost cord function may not fully return. International guidelines generally recommend surgery for moderate or severe myelopathy. For mild cases, surgery or closely supervised non-surgical care can both be reasonable.</>,
          <><Term>Progressive or significant weakness</Term> in the arm or hand.</>,
          <><Term>Arm pain from a pinched nerve that hasn't improved</Term> after a good trial of non-surgical care and still limits your life.</>,
        ]}
      />
      <p>
        I always let a patient's symptoms and clinical picture dictate care before findings on an MRI scan. "We treat the patient, not the picture".
      </p>
    </Section>

    <Section id="cervical-surgical-options" title="What are the surgical options?">
      <BulletList
        items={[
          <><Term>Anterior cervical discectomy and fusion (ACDF):</Term> removes the disc and bone spurs through the front of the neck and places a small metal spacer to stop abnormal motion at the level.</>,
          <><Term>Cervical disc replacement (arthroplasty):</Term> relieves pressure the same way but keeps the level moving. Good for selected patients. See <InlineLink to="/philosophy/fusion-vs-disc-replacement">Fusion vs. Disc Replacement</InlineLink>.</>,
          <><Term>Posterior approaches:</Term> laminoplasty, or laminectomy with fusion, to open the canal from the back of the neck, often when several levels are involved.</>,
          <><Term>Posterior foraminotomy:</Term> a smaller operation to free a single pinched nerve, often with a small incision.</>,
        ]}
      />
      {/* Proposed alt text: Diagram of cervical stenosis surgery options: anterior cervical discectomy and fusion and laminoplasty */}
      <IllustrationSlot proposedAlt="Diagram of cervical stenosis surgery options: anterior cervical discectomy and fusion and laminoplasty" />
    </Section>

    <Section id="cervical-decide" title="How I decide with you">
      <p>
        I match your symptoms and exam to your imaging. Is the narrowing that shows on MRI really the cause of what you feel? I also look at how many levels are involved, the curve (alignment) of your neck, whether the spine is stable, and your goals and overall health. Then I go through the options, including continued watchful care, with you.
      </p>
    </Section>

    <FaqList items={FAQS} />

    <ConsultBand title="Ready to talk about your neck?">
      <p>If you have neck pain, arm symptoms, or changes in hand coordination or balance, let's look at it together.</p>
    </ConsultBand>

    <RelatedPages
      links={[
        { href: "/philosophy/herniated-disc", label: "Herniated discs" },
        { href: "/philosophy/fusion-vs-disc-replacement", label: "Fusion vs. disc replacement" },
        { href: "/philosophy", label: "My Philosophy" },
      ]}
    />
    <Disclaimer>{STANDARD_DISCLAIMER}</Disclaimer>
  </PhilosophyArticle>
);

export default CervicalStenosis;
