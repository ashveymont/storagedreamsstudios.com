import MotionSection from "@/components/MotionSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import { COPY } from "@/lib/constants";

export default function AboutPage() {
  const paragraphs = [
    COPY.aboutBioParagraphOne,
    COPY.aboutBioParagraphTwo,
    COPY.aboutBioParagraphThree,
    COPY.aboutBioParagraphFour,
    COPY.aboutBioParagraphFive,
  ];

  return (
    <div>
      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10 md:py-24">
        {COPY.aboutEyebrow ? <SectionEyebrow text={COPY.aboutEyebrow} /> : null}
        <h1 className="mt-6 max-w-5xl font-display text-[2.9rem] italic leading-[0.95] text-white sm:text-[3.6rem] md:text-[5.5rem]">
          {COPY.aboutHeadline}
        </h1>
        <p className="mt-8 max-w-3xl text-base font-light text-silver-dim md:text-lg">{COPY.aboutSubheadline}</p>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 pb-24 md:px-10">
        <div className="max-w-4xl space-y-6">
          {paragraphs.filter(Boolean).map((paragraph, index) => (
            <p key={`bio-${index}`} className="text-base font-light leading-relaxed text-silver-dim">
              {paragraph}
            </p>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
