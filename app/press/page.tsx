import MotionSection from "@/components/MotionSection";
import { COPY, PRESS_CHANNELS } from "@/lib/constants";

function PressIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
      <rect x="4" y="4" width="22" height="22" stroke="#C0C0C0" strokeWidth="1" />
      <path d="M9 11H21" stroke="#C0C0C0" strokeWidth="1" />
      <path d="M9 15H21" stroke="#C0C0C0" strokeWidth="1" />
      <path d="M9 19H17" stroke="#C0C0C0" strokeWidth="1" />
    </svg>
  );
}

export default function PressPage() {
  return (
    <div>
      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10 md:py-24">
        <h1 className="max-w-4xl font-display text-[2.9rem] italic leading-[0.95] text-white sm:text-[3.6rem] md:text-[5.5rem]">{COPY.pressHeadline}</h1>
      </MotionSection>

      <MotionSection className="mx-auto grid w-full max-w-[1440px] gap-6 px-5 py-8 md:grid-cols-3 md:px-10">
        {PRESS_CHANNELS.map((channel, index) => (
          <article
            key={`press-channel-${index}`}
            className="border border-border bg-surface p-8 transition-colors hover:border-border-hover"
          >
            <PressIcon />
            <h2 className="mt-6 font-display text-3xl italic text-white">{channel.title}</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-silver-dim">{channel.body}</p>
          </article>
        ))}
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-10">
        <div className="border border-border bg-black p-10 md:p-14">
          <h2 className="font-display text-[2.4rem] italic text-white md:text-[3.8rem]">{COPY.pressEnquiriesHeadline}</h2>
          <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-silver-dim">{COPY.pressEnquiriesBody}</p>
          <a href="mailto:rich@storagedreamsstudios.com" className="mt-10 inline-flex border border-silver px-7 py-3 text-xs uppercase tracking-[0.2em] text-silver hover:border-silver-light hover:text-silver-light">
            Send Press Enquiry
          </a>
        </div>
      </MotionSection>
    </div>
  );
}
