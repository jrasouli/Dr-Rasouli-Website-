import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { APPOINTMENT_URL, CONTACT_INFO } from "../../constants";
import { ButtonLink, Container, Eyebrow, PageHeader, Picture } from "../ui";
import SEO from "../SEO";
import { philosophySchema, type AboutTopic, type FaqEntry } from "./schema";

export const CONSULT_URL = APPOINTMENT_URL;
export const CONSULT_LABEL = "Schedule a consult with Dr.\u00A0Rasouli at NeuroSpine Plus";
export const CONSULT_PHONE_DISPLAY = CONTACT_INFO.phone;
export const CONSULT_PHONE_TEL = CONTACT_INFO.phoneTel;
export const REDISCOVER_ARTICLE_URL = "https://rediscovermylife.org/reads.php?p=20";

export const STANDARD_DISCLAIMER =
  "This information is for general education only and is not medical advice. Only your doctor can determine whether a specific treatment is right for you.";

export const FUSION_DISCLAIMER =
  "The patient information presented is for general education purposes only. As with any spine surgery, there are potential benefits, complications, and risks associated with disc replacement and spinal fusion procedures. Individual results may vary. Only your doctor can determine whether you are a suitable candidate for a specific surgical procedure.";

const linkClass =
  "font-semibold text-teal-800 underline decoration-teal-700/30 underline-offset-[3px] hover:decoration-teal-800";

export const InlineLink: React.FC<{ to: string; children: React.ReactNode; external?: boolean }> = ({ to, children, external }) => {
  if (external) {
    return (
      <a href={to} className={linkClass} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return <Link to={to} className={linkClass}>{children}</Link>;
};

export const Section: React.FC<{ id: string; title: string; first?: boolean; children: React.ReactNode }> = ({ id, title, first = false, children }) => (
  <section aria-labelledby={id} className={first ? "" : "mt-12 md:mt-16"}>
    <h2 id={id} className="scroll-mt-28 text-2xl font-semibold leading-tight text-navy-800 md:text-[2rem]">{title}</h2>
    <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">{children}</div>
  </section>
);

export const BulletList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex gap-3">
        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const Term: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

interface FigureProps {
  name: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  eager?: boolean;
  /** Repeats in-image labels for narrow screens, where the bitmap text shrinks. */
  mobileCaption?: string;
  framed?: boolean;
  /** Portrait scans stay fully visible without stretching the column. */
  contain?: boolean;
}

export const Figure: React.FC<FigureProps> = ({
  name,
  alt,
  width,
  height,
  caption,
  eager = false,
  mobileCaption,
  framed = true,
  contain = false,
}) => {
  const frame = framed ? "rounded-xl border border-sand-200 bg-white" : "rounded-2xl shadow-[0_16px_40px_-20px_rgba(15,42,74,0.45)]";
  const fit = contain ? "mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain" : "h-auto w-full";

  return (
    <figure className="my-2">
      <Picture
        name={name}
        alt={alt}
        width={width}
        height={height}
        eager={eager}
        priority={eager}
        className={contain ? "flex justify-center" : "block"}
        imgClassName={`${fit} ${frame}`}
      />
      {mobileCaption && (
        <p className="mt-2 text-center text-sm font-medium text-navy-800 sm:hidden" aria-hidden="true">{mobileCaption}</p>
      )}
      {caption && <figcaption className="mt-2 text-sm leading-relaxed text-slate-500">{caption}</figcaption>}
    </figure>
  );
};

/** Placeholder for an illustration that is still being revised.
 * `proposedAlt` is the approved alt text to use when the final file is dropped in.
 */
export const IllustrationSlot: React.FC<{ proposedAlt: string }> = ({ proposedAlt }) => (
  <figure
    className="my-2 overflow-hidden rounded-xl border border-dashed border-teal-700/35 bg-gradient-to-b from-teal-50 to-white"
    data-illustration-slot=""
    data-proposed-alt={proposedAlt}
  >
    <div className="flex flex-col items-center px-6 py-8 text-center">
      <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true" className="text-teal-700">
        <circle cx="28" cy="28" r="27" fill="currentColor" fillOpacity="0.1" />
        <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          <path d="M22 14h12M20 22h16M20 30h16M22 38h12" />
          <path d="M28 11v34" strokeOpacity="0.45" />
        </g>
      </svg>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Illustration coming soon</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-800">{proposedAlt}</p>
    </div>
  </figure>
);

export const FaqList: React.FC<{ items: FaqEntry[] }> = ({ items }) => (
  <section aria-labelledby="faq-heading" className="mt-12 md:mt-16">
    <h2 id="faq-heading" className="scroll-mt-28 text-2xl font-semibold leading-tight text-navy-800 md:text-[2rem]">Frequently asked questions</h2>
    <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item) => (
        <div key={item.question} className="py-5">
          <dt className="font-serif text-xl font-semibold text-navy-800">{item.question}</dt>
          <dd className="mt-2 text-lg leading-relaxed text-slate-700">{item.answer}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export const ConsultBand: React.FC<{ title: string; showPhone?: boolean; children: React.ReactNode }> = ({ title, showPhone = false, children }) => (
  <section aria-labelledby="consult-cta" className="mt-14 rounded-2xl bg-navy-800 px-6 py-8 text-white md:px-10 md:py-10">
    <h2 id="consult-cta" className="text-2xl font-semibold leading-tight text-white md:text-3xl">{title}</h2>
    <div className="mt-3 max-w-2xl text-lg leading-relaxed text-navy-100/90">{children}</div>
    <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
      <ButtonLink href={CONSULT_URL} className="w-full text-center sm:w-auto">{CONSULT_LABEL}</ButtonLink>
      {showPhone && (
        <a href={CONSULT_PHONE_TEL} className="inline-flex items-center justify-center gap-2 text-lg font-semibold text-white hover:text-teal-300 sm:justify-start">
          <Phone size={18} className="text-teal-300" /> {CONSULT_PHONE_DISPLAY}
        </a>
      )}
    </div>
  </section>
);

export interface RelatedLink {
  href: string;
  label: string;
  external?: boolean;
}

export const RelatedPages: React.FC<{ links: RelatedLink[] }> = ({ links }) => (
  <nav aria-label="Related pages" className="mt-12 border-t border-slate-200 pt-8">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Related pages</p>
    <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
      {links.map((link) => (
        <li key={link.href + link.label}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-sand-200 bg-sand px-4 py-2 text-[0.9375rem] font-semibold text-navy-800 hover:border-teal-700/40 hover:text-teal-800"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link
              to={link.href}
              className="inline-flex items-center rounded-full border border-sand-200 bg-sand px-4 py-2 text-[0.9375rem] font-semibold text-navy-800 hover:border-teal-700/40 hover:text-teal-800"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export const Disclaimer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-8 text-sm leading-relaxed text-slate-500">
    <span className="font-semibold text-slate-600">Disclaimer: </span>
    {children}
  </p>
);

interface ArticleProps {
  seoTitle: string;
  description: string;
  path: string;
  crumb: string;
  h1: string;
  about?: AboutTopic | AboutTopic[];
  faqs?: FaqEntry[];
  published?: string;
  modified?: string;
  /** Rendered directly under the H1, inside the page header. */
  hero?: React.ReactNode;
  children: React.ReactNode;
}

export const PhilosophyArticle: React.FC<ArticleProps> = ({
  seoTitle,
  description,
  path,
  crumb,
  h1,
  about,
  faqs,
  published,
  modified,
  hero,
  children,
}) => {
  const schema = philosophySchema({ path, title: seoTitle, description, about, faqs, published, modified });
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "My Philosophy", item: "/philosophy" },
    { name: crumb, item: path },
  ];

  return (
    <div className="bg-white">
      <SEO title={seoTitle} description={description} canonicalPath={path} schema={schema} breadcrumbs={breadcrumbs} />
      {hero ? (
        <header className="border-b border-sand-200 bg-sand">
          <Container className="py-12 md:py-16">
            <Eyebrow className="mb-3">My Philosophy</Eyebrow>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] text-navy-800 md:text-5xl [text-wrap:balance]">{h1}</h1>
            <div className="mt-8 max-w-3xl">{hero}</div>
          </Container>
        </header>
      ) : (
        <PageHeader eyebrow="My Philosophy" title={h1} />
      )}
      <Container className="py-12 md:py-16">
        <article className="mx-auto max-w-3xl">{children}</article>
      </Container>
    </div>
  );
};
