"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = {
  number: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
};

function parseCount(value: string) {
  const numeric = Number(value.replace(/[^\d]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function StatItem({ number, label }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const shouldAnimate = /^\d+$/.test(number.trim());
  const target = shouldAnimate ? parseCount(number) : 0;

  useEffect(() => {
    if (!inView || target <= 0) return;
    const controls = animate(count, target, { duration: 1.5, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, target]);

  return (
    <div ref={ref} className="border-b border-border px-4 py-8 text-center md:border-b-0 md:border-r last:md:border-r-0">
      {shouldAnimate && target > 0 ? (
        <motion.p className="font-display text-5xl leading-none text-white">{rounded}</motion.p>
      ) : (
        <p className="font-display text-5xl leading-none text-white">{number}</p>
      )}
      <p className="mt-3 text-[0.68rem] uppercase tracking-[0.25em] text-silver-dim">{label}</p>
    </div>
  );
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="border-y border-border bg-silver/5">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem key={`stat-${index}`} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
