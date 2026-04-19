import MotionSection from "@/components/MotionSection";
import PackageCard from "@/components/PackageCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import { COPY, DEMOGRAPHIC_STATS, PACKAGES } from "@/lib/constants";

export default function BrandsPage() {
  const mediaKitUrl =
    process.env.NEXT_PUBLIC_MEDIA_KIT_URL ??
    "https://docs.google.com/document/d/1SvU_TD-srtofw8wsRaPYvhd1ZrqKX-Lt/edit?usp=sharing&ouid=117544300330288993081&rtpof=true&sd=true";

  return (
    <div>
      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10 md:py-24">
        <h1 className="max-w-5xl font-display text-[2.9rem] italic leading-[0.95] text-white sm:text-[3.6rem] md:text-[5.5rem]">
          {COPY.brandsHeadline}
        </h1>
        <p className="mt-8 max-w-3xl text-base font-light text-silver-dim md:text-lg">{COPY.brandsSubheadline}</p>
      </MotionSection>

      <MotionSection className="bg-white py-20 text-black">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="font-display text-6xl italic sm:text-7xl">{COPY.engagementRateStat}</p>
          <p className="mt-3 text-[0.68rem] uppercase tracking-[0.25em]">{COPY.engagementRateLabel}</p>
          <p className="mt-6 max-w-3xl text-base text-black/75">{COPY.engagementRateContext}</p>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {DEMOGRAPHIC_STATS.map((item, index) => (
            <article
              key={`demo-${index}`}
              className="border border-border bg-surface p-8 transition-colors hover:border-border-hover"
            >
              <p className="font-display text-5xl italic text-white">{item.number}</p>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.23em] text-silver-dim">{item.label}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10">
        <SectionEyebrow text={COPY.packagesHeadline} />
        {COPY.packagesSubheadline ? (
          <p className="mt-6 max-w-3xl text-base font-light text-silver-dim">{COPY.packagesSubheadline}</p>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PACKAGES.map((pkg, index) => (
            <PackageCard key={`package-${index}`} {...pkg} />
          ))}
        </div>
        <div className="mt-6 border border-silver bg-surface p-8 font-display text-3xl italic text-white">
          {COPY.annualPartnershipBanner}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-[1440px] px-5 py-24 text-center md:px-10">
        <h2 className="font-display text-[2.5rem] italic text-white sm:text-[3rem] md:text-[4rem]">{COPY.brandsCtaHeadline}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base font-light text-silver-dim">{COPY.brandsCtaSubheadline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:rich@storagedreamsstudios.com" className="border border-white bg-white px-7 py-3 text-xs uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white">
            Email Us
          </a>
          <a
            href={mediaKitUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-silver px-7 py-3 text-xs uppercase tracking-[0.2em] text-silver hover:border-silver-light hover:text-silver-light"
          >
            Download Media Kit
          </a>
        </div>
      </MotionSection>
    </div>
  );
}
