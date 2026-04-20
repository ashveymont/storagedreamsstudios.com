"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionSection from "@/components/MotionSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import StatsBar from "@/components/StatsBar";
import CharacterCard from "@/components/CharacterCard";
import { CHARACTER_CARDS, COPY } from "@/lib/constants";

export default function Home() {
  const stats = [
    { number: COPY.statOneNumber, label: COPY.statOneLabel },
    { number: COPY.statTwoNumber, label: COPY.statTwoLabel },
    { number: COPY.statThreeNumber, label: COPY.statThreeLabel },
    { number: COPY.statFourNumber, label: COPY.statFourLabel },
  ];

  return (
    <div>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 sm:px-5 md:px-10">
        <div className="pointer-events-none absolute -right-10 top-10 font-display text-[28vw] italic leading-none text-white/5">
          R
        </div>
        <motion.div
          className="mx-auto w-full max-w-[1440px]"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {COPY.heroEyebrow ? (
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <SectionEyebrow text={COPY.heroEyebrow} />
            </motion.div>
          ) : null}
          <motion.h1 className="mt-6 max-w-5xl font-display text-[3rem] italic leading-[0.95] text-white sm:text-[3.6rem] md:text-[6.5rem]" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
            {COPY.heroHeadline} <em className="text-silver">{COPY.heroHeadlineAccent}</em>
          </motion.h1>
          <motion.p className="mt-8 max-w-xl text-[1rem] font-light leading-relaxed text-silver-dim md:text-[1.1rem]" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
            {COPY.heroSubheadline}
          </motion.p>
          <motion.div className="mt-12 flex flex-wrap gap-4" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Link href="/brands" className="border border-white bg-white px-7 py-3 text-xs uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white">
              Work With Us
            </Link>
            <a href="https://www.tiktok.com/@richtrosales" target="_blank" rel="noreferrer" className="border border-silver px-7 py-3 text-xs uppercase tracking-[0.2em] text-silver hover:border-silver-light hover:text-silver-light">
              Watch the Content ↗
            </a>
          </motion.div>
        </motion.div>
      </section>

      <StatsBar stats={stats} />

      <section className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-16 sm:gap-12 sm:px-5 sm:py-20 md:grid-cols-5 md:gap-14 md:px-10 md:py-24">
        <motion.div
          className="space-y-6 md:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {COPY.whoIsRichEyebrow ? <SectionEyebrow text={COPY.whoIsRichEyebrow} /> : null}
          <h2 className="font-display text-[2.45rem] italic leading-tight text-white sm:text-[3rem] md:text-[4.2rem]">{COPY.whoIsRichHeadline}</h2>
          <p className="max-w-3xl text-base font-light leading-relaxed text-silver-dim">{COPY.whoIsRichBodyParagraphOne}</p>
          <p className="max-w-3xl text-base font-light leading-relaxed text-silver-dim">{COPY.whoIsRichBodyParagraphTwo}</p>
          <Link href="/about" className="inline-block text-sm uppercase tracking-[0.2em] text-silver hover:text-silver-light">
            Read the full story →
          </Link>
        </motion.div>
        <div className="flex h-full flex-col gap-8 md:col-span-2">
          <motion.blockquote
            className="border-l-2 border-silver pl-5 font-display text-[1.2rem] italic leading-relaxed text-white sm:pl-8 sm:text-[1.35rem] md:text-[1.45rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {COPY.whoIsRichPullQuote}
          </motion.blockquote>
          <div className="relative min-h-[220px] flex-1 sm:min-h-[260px] md:min-h-[320px]">
            <Image
              src="/RichRosalesFaviPNG2.png"
              alt="Rich Rosales portrait"
              fill
              priority
              fetchPriority="high"
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 480px"
            />
          </div>
        </div>
      </section>

      <MotionSection className="bg-black py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-5 md:px-10">
          {COPY.characterEyebrow ? <SectionEyebrow text={COPY.characterEyebrow} /> : null}
          <h2 className="mt-6 max-w-4xl font-display text-[2.4rem] italic text-white sm:text-[3rem] md:text-[4rem]">{COPY.characterHeadline}</h2>
          <p className="mt-6 max-w-3xl text-base font-light text-silver-dim">{COPY.characterSubheadline}</p>
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {CHARACTER_CARDS.map((card, index) => (
              <motion.div key={`character-${index}`} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <CharacterCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="bg-carbon py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-5 md:px-10">
          <p className="text-[0.75rem] uppercase tracking-[0.3em] text-silver-light md:text-sm">{COPY.whyBrandsEyebrow}</p>
          <blockquote className="mt-8 font-display text-[2rem] italic leading-tight text-white md:text-[2.2rem]">
            {COPY.whyBrandsQuote}
          </blockquote>
          <p className="mt-5 text-[0.72rem] uppercase tracking-[0.2em] text-silver-dim">{COPY.whyBrandsAttribution}</p>
          <Link href="/brands" className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-silver hover:text-silver-light">
            See Partnership Options →
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
