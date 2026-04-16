"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  hasChevron?: boolean;
};

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/services", hasChevron: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Articles", href: "/articles" },
];

export default function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eaecf0]/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 pb-3 pt-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Execora homepage"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/images/svg/execora-logo-mark.svg"
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            priority
          />
          <span className="font-[var(--font-inter-tight)] text-[24px] leading-8 font-semibold text-[#1f1f1f]">
            Execora
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <motion.div key={item.label} whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link
                href={item.href}
                onClick={handleCloseMenu}
                className="flex items-center justify-center gap-1.5 rounded-md px-4 py-2 text-[16px] leading-6 font-medium text-[#484b52] transition-colors hover:text-[#070a0f]"
              >
                <span>{item.label}</span>
                {item.hasChevron ? (
                  <motion.span whileHover={{ rotate: 180 }} transition={{ duration: 0.25 }}>
                    <Image
                      src="/images/svg/icon-chevron-down.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                    />
                  </motion.span>
                ) : null}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center justify-end gap-2 md:flex">
          <motion.div whileHover={{ y: -1, scale: 1.01 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#e8eaed] px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f] transition-colors hover:bg-[#f6f7f8]"
            >
              Contact Us
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1, rotate: 8 }} transition={{ duration: 0.2 }}>
            <Link
              href="tel:+1234567890"
              aria-label="Call Execora"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e8eaed] transition-colors hover:bg-[#f6f7f8]"
            >
              <Image
                src="/images/svg/icon-call.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={handleToggleMenu}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#eef0f3] bg-white md:hidden"
        >
          <span className="flex flex-col gap-1">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 rounded-full bg-[#5b616a]"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -3, width: 16, marginLeft: 0 } : { rotate: 0, y: 0, width: 12, marginLeft: 4 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 rounded-full bg-[#5b616a]"
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="border-t border-[#eaecf0]/80 bg-white px-4 pb-5 pt-4 sm:px-8">
              <nav
                aria-label="Mobile primary"
                className="rounded-[24px] border border-[#eaecf0] bg-[#fbfbfc] p-3"
              >
                <p className="px-3 pb-2 text-[12px] leading-4 font-medium tracking-[0.08em] text-[#8b9097] uppercase">
                  Navigation
                </p>
                <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className="flex items-center justify-between rounded-[14px] px-3 py-2.5 text-[16px] leading-6 font-medium text-[#484b52] transition-colors hover:bg-white hover:text-[#070a0f]"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-[#a2a7af]">
                        &rarr;
                      </span>
                    </Link>
                  </motion.div>
                ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.12 }}>
                  <Link
                    href="/contact"
                    onClick={handleCloseMenu}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#84cc16] px-5 py-3 text-center text-[16px] leading-6 font-semibold text-white transition-colors hover:bg-[#78b814]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.15 }}>
                  <Link
                    href="tel:+1234567890"
                    onClick={handleCloseMenu}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#dfe3e8] bg-white px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f] transition-colors hover:bg-[#f6f7f8]"
                  >
                    <Image
                      src="/images/svg/icon-call.svg"
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                    />
                    Call Us
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
