"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 bg-black/88 backdrop-blur-[16px] transition-colors ${scrolled ? "border-b border-border" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-5 px-5 md:px-10">
        <Link href="/" className="font-display text-2xl font-semibold italic text-white transition-colors hover:text-silver-light">
          Rich Rosales
        </Link>
        <button
          type="button"
          className="inline-flex border border-border px-3 py-2 text-[0.62rem] uppercase tracking-[0.22em] text-silver transition-colors hover:border-border-hover hover:text-silver-light md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          Menu
        </button>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.72rem] uppercase tracking-[0.18em] text-silver-dim transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.72rem] uppercase tracking-[0.18em] text-silver-dim transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <Link href="/brands" className="hidden border border-silver px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver transition-colors hover:bg-white hover:text-black md:inline-flex">
          Partner With Rich
        </Link>
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          height: menuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden border-t border-border md:hidden"
      >
        <nav className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block py-2 text-[0.72rem] uppercase tracking-[0.2em] text-silver-dim transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-[0.72rem] uppercase tracking-[0.2em] text-silver-dim transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/brands"
            className="mt-3 inline-flex border border-silver px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver transition-colors hover:bg-white hover:text-black"
          >
            Partner With Rich
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
