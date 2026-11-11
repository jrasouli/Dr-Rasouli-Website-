export interface FaqEntry {
  question: string;
  answer: string;
}

export interface AboutTopic {
  type: string;
  name: string;
}

const SITE = "https://rasouli-md.com";
const PHYSICIAN_ID = `${SITE}/#physician`;

/** MedicalWebPage + Physician, plus FAQPage when the page has an FAQ block. */
export function philosophySchema({
  path,
  title,
  description,
  about,
  faqs,
}: {
  path: string;
  title: string;
  description: string;
  about?: AboutTopic | AboutTopic[];
  faqs?: FaqEntry[];
}): string[] {
  const url = `${SITE}${path}`;
  const topics = about ? (Array.isArray(about) ? about : [about]) : [{ type: "MedicalSpecialty", name: "Spinal Neurosurgery" }];
  const aboutNodes = topics.map((topic) => ({ "@type": topic.type, name: topic.name }));

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-US",
    datePublished: "2026-11-08",
    dateModified: "2026-11-08",
    lastReviewed: "2026-11-08",
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    isPartOf: { "@type": "WebSite", name: "Jonathan J. Rasouli, MD", url: SITE },
    author: { "@id": PHYSICIAN_ID },
    reviewedBy: { "@id": PHYSICIAN_ID },
    about: aboutNodes.length === 1 ? aboutNodes[0] : aboutNodes,
    specialty: { "@type": "MedicalSpecialty", name: "Spinal Neurosurgery" },
  };

  // Same @id as the homepage Physician so crawlers treat this as one person.
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: "Dr.\u00A0Jonathan\u00A0J.\u00A0Rasouli, MD",
    url: SITE,
    image: `${SITE}/images/dr-rasouli-headshot-2026.jpg`,
    telephone: "+1-201-399-3388",
    medicalSpecialty: [
      "https://schema.org/Neurology",
      { "@type": "MedicalSpecialty", name: "Spinal Neurosurgery" },
    ],
    affiliation: {
      "@type": "MedicalOrganization",
      name: "NeuroSpine Plus",
      url: "https://neurospineplus.com",
    },
  };

  const scripts = [JSON.stringify(medicalWebPage), JSON.stringify(physician)];

  if (faqs && faqs.length > 0) {
    scripts.push(JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }));
  }

  return scripts;
}
