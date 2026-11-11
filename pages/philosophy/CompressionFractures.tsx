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

const SEO_TITLE = "Osteoporotic Compression Fractures & Vertebral Augmentation | Dr. Rasouli";
const DESCRIPTION =
  "A weakened vertebra can collapse and cause sudden back pain. Learn when bracing and osteoporosis care are enough, and when vertebral augmentation may help, from Dr. Jonathan Rasouli.";

const FAQS: FaqEntry[] = [
  {
    question: "Can a compression fracture heal without surgery?",
    answer:
      "Often, yes. Many people improve with time, a brace, pain control, and activity. The bone can heal even if the vertebra stays somewhat collapsed.",
  },
  {
    question: "Is vertebral augmentation the same as a fusion?",
    answer:
      "No. Augmentation stabilizes the fractured vertebra with bone cement. It does not place screws and rods or fuse motion segments together.",
  },
  {
    question: "Will I still need treatment for osteoporosis?",
    answer:
      "Yes. Stabilizing one fracture does not strengthen the rest of the skeleton. A bone-health evaluation, and treatment when it is needed, is part of the plan so another fracture is less likely.",
  },
  {
    question: "How long is recovery after vertebral augmentation?",
    answer:
      "Many people go home the same day. Soreness at the small incision is expected. How quickly the back pain eases varies, and I will go over activity, bracing, and follow-up for your situation at the visit.",
  },
];

const CompressionFractures: React.FC = () => (
  <PhilosophyArticle
    seoTitle={SEO_TITLE}
    description={DESCRIPTION}
    path="/philosophy/compression-fractures"
    crumb="Compression fractures"
    h1="Osteoporotic Compression Fractures: Bracing, Bone Health, and When Augmentation Helps"
    about={{ type: "MedicalCondition", name: "Osteoporotic vertebral compression fracture" }}
    faqs={FAQS}
  >
    <Section id="what-is-compression-fracture" title="What is an osteoporotic compression fracture?" first>
      <p>
        Osteoporosis thins the bone inside a vertebra. A compression fracture, sometimes called a fragility fracture, is when that weakened bone collapses, often into a wedge. It can follow a fall, but it can also happen during ordinary activity, such as lifting, bending, or even a cough. The collapse is in the bone of the vertebra itself. It is different from a disc herniation, which is soft disc material pressing on a nerve, and different from a fracture caused by a major accident.
      </p>
    </Section>

    <Section id="compression-symptoms" title="What symptoms does it cause?">
      <BulletList
        items={[
          "Sudden mid or low back pain, often worse when you stand or walk and easier when you lie down",
          "Pain that came on after a minor strain, or sometimes with no clear injury",
          "Loss of height, or a more rounded, forward-stooped posture if several vertebrae have collapsed",
          "Some fractures are found on an X-ray or MRI and cause only mild pain",
        ]}
      />
      <p>Severe pain, new weakness in the legs, or trouble controlling the bladder or bowel needs urgent medical attention.</p>
    </Section>

    <Section id="compression-nonsurgical" title="When is non-surgical care enough?">
      <p>
        Many compression fractures are treated without a procedure. Pain often settles over several weeks as the bone heals, though the vertebra may stay somewhat shorter. Care usually includes:
      </p>
      <BulletList
        items={[
          "A brace for comfort when you are up, if it helps you move",
          "Pain medicine, used carefully",
          "Staying as active as you comfortably can. Long bed rest can weaken bone and muscle further.",
          "A bone-health evaluation. Treating osteoporosis is part of treating the fracture, because the goal is also to lower the chance of the next one.",
        ]}
      />
      <p>If your pain is manageable and you are getting around, there is no rush to do a procedure.</p>
    </Section>

    <Section id="compression-when-augmentation" title="When does vertebral augmentation make sense?">
      <p>Vertebral augmentation, most often <Term>kyphoplasty</Term>, is considered when:</p>
      <BulletList
        items={[
          "Pain is still severe after a fair trial of bracing, medicine, and time, and it is keeping you from walking or living your usual life",
          "An MRI or other study shows the fracture is the likely source of that pain, and the fracture is still active rather than an old, healed collapse",
          "You are well enough for a short procedure",
        ]}
      />
      <p>
        It is not the right choice for every fracture. An old, settled fracture, pain coming from somewhere else, or an infection are reasons to hold off. I match the scan to your symptoms before recommending it.
      </p>
    </Section>

    <Section id="how-augmentation-works" title="How does vertebral augmentation work?">
      <p>
        Kyphoplasty is usually done through a small opening in the back, with X-ray guidance, while you are comfortable. A needle is placed into the fractured vertebra. A small balloon may be inflated inside the bone to make a space and, in some cases, to restore a little of the lost height. Bone cement is then placed into that space to stabilize the fracture. Many people go home the same day. The cement stabilizes that vertebra. It does not fuse the rest of the spine, and it does not treat osteoporosis by itself.
      </p>
      <Figure
        name="vertebral-augmentation-before-during"
        alt="Fluoroscopy before and during vertebral augmentation for an osteoporotic compression fracture."
        width={1204}
        height={1184}
        caption="Before and during vertebral augmentation for an osteoporotic compression fracture."
        contain
      />
    </Section>

    <Section id="compression-decide" title="How I decide with you">
      <p>
        I look at how the pain started, how long it has lasted, what makes it better or worse, and whether your exam fits a fracture. Then we look at the images together. If non-surgical care still has a real chance, we continue it and follow the bone-health plan. If the pain is not improving and the fracture explains it, we talk through augmentation, including what it can and cannot do, and decide together.
      </p>
    </Section>

    <FaqList items={FAQS} />

    <ConsultBand title="Let's look at the cause of this pain" showPhone>
      <p>
        If back pain started suddenly, or you are losing height and struggling to stand, let's look at the images and talk through bracing, bone health, and whether augmentation has a role.
      </p>
    </ConsultBand>

    <RelatedPages
      links={[
        { href: "/philosophy/lumbar-stenosis", label: "Lumbar stenosis" },
        { href: "/philosophy/spinal-deformity", label: "Spinal deformity" },
        { href: "/philosophy/herniated-disc", label: "Herniated discs" },
        { href: "/philosophy", label: "My Philosophy" },
      ]}
    />
    <Disclaimer>{STANDARD_DISCLAIMER}</Disclaimer>
  </PhilosophyArticle>
);

export default CompressionFractures;
