import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CONDITION_PAGES } from "../../constants";
import SEO from "../../components/SEO";
import { Container, Eyebrow, Picture } from "../../components/ui";
import { philosophySchema } from "../../components/philosophy/schema";
import {
  ConsultBand,
  Disclaimer,
  STANDARD_DISCLAIMER,
  Term,
} from "../../components/philosophy/ui";

const SEO_TITLE = "My Philosophy on Spine Care | Jonathan Rasouli, MD";
const DESCRIPTION =
  "Conservative care first, shared decisions, and surgery only when it will truly help. How spine neurosurgeon Dr.\u00A0Jonathan\u00A0Rasouli approaches your care.";

const PRINCIPLES_ALT =
  "Dr.\u00A0Rasouli's three principles of spine care: conservative care first, shared decisions, surgery only when it helps";

const PRINCIPLES = [
  { href: "#conservative-care", label: "Conservative care first" },
  { href: "#we-decide-together", label: "We decide together" },
  { href: "#surgery-when-it-helps", label: "Surgery only when it helps" },
];

const HERO_ALT = "Dr.\u00A0Jonathan\u00A0Rasouli explaining a spine MRI to a patient using a spine model";

/** Full graphic from the lg breakpoint, where the bitmap labels stay readable.
 *  Narrower screens crop to the three icons and set the labels in HTML. */
const PrinciplesRow: React.FC = () => (
  <figure className="mt-8">
    <Picture
      name="philosophy-three-principles-icons"
      alt={PRINCIPLES_ALT}
      width={1400}
      height={540}
      eager
      className="hidden lg:block"
      imgClassName="h-auto w-full rounded-2xl"
    />
    <div className="lg:hidden">
      <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "1400 / 400" }}>
        <picture>
          <source srcSet="/images/philosophy-three-principles-icons.webp" type="image/webp" />
          <img
            src="/images/philosophy-three-principles-icons.jpg"
            alt=""
            width={1400}
            height={540}
            className="h-auto w-full max-w-none"
            style={{ marginTop: "-2.857%" }}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
      <ul aria-label={PRINCIPLES_ALT} className="mt-3 grid grid-cols-3 gap-2 text-center">
        {PRINCIPLES.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="block rounded-lg px-1 py-1 text-sm font-semibold leading-snug text-navy-800 hover:text-teal-800">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </figure>
);

const Landing: React.FC = () => {
  const schema = philosophySchema({
    path: "/philosophy",
    title: SEO_TITLE,
    description: DESCRIPTION,
    about: { type: "MedicalSpecialty", name: "Spinal Neurosurgery" },
  });

  return (
    <div className="bg-white">
      <SEO
        title={SEO_TITLE}
        description={DESCRIPTION}
        canonicalPath="/philosophy"
        schema={schema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "My Philosophy", item: "/philosophy" },
        ]}
      />

      <header className="border-b border-sand-200 bg-sand">
        <Container className="py-12 md:py-16">
          <Eyebrow className="mb-3">My Philosophy</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] text-navy-800 md:text-5xl [text-wrap:balance]">
            My Philosophy: The Right Treatment, Not the Most Treatment
          </h1>
          <PrinciplesRow />
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Many of my patients arrive worried that seeing a spine surgeon means they will end up having surgery. Most of the time it doesn't. My job is to figure out exactly what is causing your pain, numbness, or weakness, explain it in plain language, and help you choose the best treatment that's most likely to get you back to the life you want.
          </p>
        </Container>
      </header>

      <Container className="py-12 md:py-16">
        <figure className="overflow-hidden rounded-2xl shadow-[0_16px_40px_-20px_rgba(15,42,74,0.45)]">
          <picture className="block sm:hidden">
            <source srcSet="/images/dr-rasouli-mri-consult-mobile.webp" type="image/webp" />
            <img
              src="/images/dr-rasouli-mri-consult-mobile.jpg"
              alt={HERO_ALT}
              width={880}
              height={760}
              className="h-auto w-full"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <picture className="hidden sm:block">
            <source srcSet="/images/dr-rasouli-mri-consult.webp" type="image/webp" />
            <img
              src="/images/dr-rasouli-mri-consult.jpg"
              alt={HERO_ALT}
              width={1420}
              height={740}
              className="h-auto w-full"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </figure>

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <section aria-labelledby="conservative-care">
            <h2 id="conservative-care" className="scroll-mt-28 text-2xl font-semibold leading-tight text-navy-800 md:text-[2rem]">
              Conservative care comes first
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                Many spine problems, including most disc herniations and spinal stenosis, get better or become manageable with time, physical therapy, activity changes, medication, and sometimes targeted injections. When that path is safe and has a real chance of working, we start there.
              </p>
              <blockquote className="rounded-r-xl border-l-2 border-teal-700 bg-teal-50/80 px-5 py-4 text-navy-800">
                <p>
                  <Term>I strongly believe in a conservative-first approach for all my patients — as the large majority of my patients will have some improvement in their symptoms with therapy and some lifestyle changes.</Term>
                </p>
              </blockquote>
            </div>
          </section>

          <section aria-labelledby="we-decide-together" className="mt-12 md:mt-16">
            <h2 id="we-decide-together" className="scroll-mt-28 text-2xl font-semibold leading-tight text-navy-800 md:text-[2rem]">
              We decide together
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                You know your goals, your job, your family, and how much your symptoms limit you. I know the anatomy, the evidence, and what each option can and can't do. Good decisions need both. I'll show you your imaging, walk you through what I see, set out the realistic options, and give you an honest recommendation. Then we decide together. At a typical consult, we'll review your MRI scans together, discuss possible treatment options, and come up with a plan that works for you. I encourage all my patients to invite family members at the visit and get second (or even third) opinions afterwards.
              </p>
              <figure className="overflow-hidden rounded-2xl shadow-[0_16px_40px_-20px_rgba(15,42,74,0.45)]">
                <picture className="block sm:hidden">
                  <source srcSet="/images/dr-rasouli-or-xray-review-mobile.webp" type="image/webp" />
                  <img
                    src="/images/dr-rasouli-or-xray-review-mobile.jpg"
                    alt={"Dr.\u00A0Jonathan\u00A0Rasouli reviewing a spine X-ray with his surgical team in the operating room"}
                    width={1020}
                    height={1280}
                    className="h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <picture className="hidden sm:block">
                  <source srcSet="/images/dr-rasouli-or-xray-review.webp" type="image/webp" />
                  <img
                    src="/images/dr-rasouli-or-xray-review.jpg"
                    alt={"Dr.\u00A0Jonathan\u00A0Rasouli reviewing a spine X-ray with his surgical team in the operating room"}
                    width={1600}
                    height={1067}
                    className="h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </figure>
            </div>
          </section>

          <section aria-labelledby="surgery-when-it-helps" className="mt-12 md:mt-16">
            <h2 id="surgery-when-it-helps" className="scroll-mt-28 text-2xl font-semibold leading-tight text-navy-800 md:text-[2rem]">
              Surgery only when it will meaningfully help
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Sometimes surgery is clearly the best choice, for example when a nerve or the spinal cord is being pinched and function is being lost, or when months of good non-surgical care haven't worked and the problem on imaging matches your symptoms. In those cases I recommend the procedure that best fits your anatomy and your goals, not one technique for everyone. That might be a small decompression, a fusion, or a motion-preserving disc replacement.
            </p>
          </section>
        </div>

        <section aria-labelledby="specific-conditions" className="mx-auto mt-12 max-w-3xl md:mt-16">
          <h2 id="specific-conditions" className="scroll-mt-28 text-2xl font-semibold leading-tight text-navy-800 md:text-[2rem]">
            Learn more about specific conditions
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITION_PAGES.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-teal-700/40 hover:bg-sand"
                >
                  <span className="font-serif text-lg font-semibold leading-snug text-navy-800 group-hover:text-teal-800">{item.label}</span>
                  <ChevronRight className="shrink-0 text-teal-700" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mx-auto max-w-3xl">
          <ConsultBand title="Schedule a consultation" showPhone>
            <p>
              If you are living with neck pain, back pain, or symptoms in your arms or legs, I'd be glad to look at your situation and talk through your options, starting with the least invasive ones.
            </p>
          </ConsultBand>
          <Disclaimer>{STANDARD_DISCLAIMER}</Disclaimer>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
