import ContactForm from "@/components/ContactForm";
import MotionSection from "@/components/MotionSection";
import { COPY, DROPDOWN_OPTIONS } from "@/lib/constants";

export default function ContactPage() {
  const details = [
    { label: COPY.contactDetailOneLabel, value: COPY.contactDetailOneValue },
    { label: COPY.contactDetailTwoLabel, value: COPY.contactDetailTwoValue },
    { label: COPY.contactDetailThreeLabel, value: COPY.contactDetailThreeValue },
    { label: COPY.contactDetailFourLabel, value: COPY.contactDetailFourValue },
  ];

  return (
    <MotionSection className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-16 sm:px-5 sm:py-20 md:grid-cols-2 md:px-10 md:py-24">
      <div>
        <h1 className="max-w-xl font-display text-[2.9rem] italic leading-[0.95] text-white sm:text-[3.4rem] md:text-[5rem]">{COPY.contactHeadline}</h1>
        <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-silver-dim">{COPY.contactSubheadline}</p>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {details.map((detail, index) => (
            <div key={`contact-detail-${index}`} className="grid grid-cols-1 gap-2 py-4 text-sm sm:grid-cols-2 sm:gap-4">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-silver">{detail.label}</p>
              <p className="text-silver-dim">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactForm options={DROPDOWN_OPTIONS} />
    </MotionSection>
  );
}
