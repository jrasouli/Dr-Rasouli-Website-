import { PHYSICIAN_ID, SITE_URL, WEBSITE_ID, physicianLd } from "../schema";

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface AboutTopic {
  type: string;
  name: string;
}

const SITE = SITE_URL;

/** MedicalWebPage + Physician, plus FAQPage when the page has an FAQ block. */
export function philosophySchema({
  path,
  title,
  description,
  about,
  faqs,
  published = "2026-11-08",
  modified = "2026-11-08",
}: {
  path: string;
  title: string;
  description: string;
  about?: AboutTopic | AboutTopic[];
  faqs?: FaqEntry[];
  published?: string;
  modified?: string;
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
    datePublished: published,
    dateModified: modified,
    lastReviewed: modified,
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": PHYSICIAN_ID },
    reviewedBy: { "@id": PHYSICIAN_ID },
    about: aboutNodes.length === 1 ? aboutNodes[0] : aboutNodes,
    specialty: { "@type": "MedicalSpecialty", name: "Spinal Neurosurgery" },
  };

  // Same @id and fields as the homepage Physician so crawlers treat this as one person.
  const scripts = [JSON.stringify(medicalWebPage), JSON.stringify(physicianLd())];

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
