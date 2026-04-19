"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionSection({ children, className }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
