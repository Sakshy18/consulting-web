"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/articles" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Reviews", href: "/case-studies" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/images/svg/icon-instagram.svg",
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: "/images/svg/icon-twitter.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/images/svg/icon-facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "/images/svg/icon-linkedin.svg",
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-white px-3 pb-3 pt-5 sm:px-5 sm:pb-5 sm:pt-5">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 rounded-[24px] bg-[#070a0f] px-4 pb-8 pt-6 text-white sm:px-10 sm:pt-14 lg:gap-[92px] lg:rounded-[40px] lg:px-[60px] lg:pb-[42px] lg:pt-[60px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-8">
          <div className="order-2 flex max-w-[560px] flex-col gap-8 lg:order-1 lg:gap-[60px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <Image
                  src="/images/svg/execora-logo-mark.svg"
                  alt=""
                  aria-hidden="true"
                  width={62}
                  height={62}
                  className="h-[35px] w-[35px] lg:h-[62px] lg:w-[62px]"
                />
                <span className="font-[var(--font-inter-tight)] text-[26px] leading-[1.33] font-semibold text-white lg:text-[46px] lg:leading-[1.1]">
                  Execora
                </span>
              </div>
              <p className="max-w-[521px] font-[var(--font-inter-tight)] text-[16px] leading-6 text-[#aaaaaa] lg:text-[18px] lg:leading-7">
                Helping business with structured strategy, disciplined execution,
                and measurable growth.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.div key={social.label} whileHover={{ y: -2, scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#373737] p-2.5 transition-colors hover:bg-[#151a22]"
                  >
                    <Image src={social.icon} alt="" aria-hidden="true" width={20} height={20} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 flex w-full items-start justify-between gap-6 lg:order-2 lg:w-auto lg:gap-[60px]">
            <div className="flex w-[108px] flex-col gap-3 lg:min-w-[108px] lg:gap-4">
              <h2 className="font-[var(--font-inter-tight)] text-[16px] leading-6 font-medium tracking-[-0.2px] text-white lg:text-[20px] lg:leading-7">
                Quick Links
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }} className="inline-flex">
                      <Link
                        href={item.href}
                        className="font-[var(--font-inter-tight)] text-[14px] leading-5 text-[#babdc2] transition-colors hover:text-white lg:text-[18px] lg:leading-7"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-[92px] flex-col gap-3 lg:min-w-[108px] lg:gap-4">
              <h2 className="font-[var(--font-inter-tight)] text-[16px] leading-6 font-medium tracking-[-0.2px] text-white lg:text-[20px] lg:leading-7">
                Company
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }} className="inline-flex">
                      <Link
                        href={item.href}
                        className="font-[var(--font-inter-tight)] text-[14px] leading-5 text-[#babdc2] transition-colors hover:text-white lg:text-[18px] lg:leading-7"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[108px] lg:max-w-[224px]">
              <h2 className="mb-3 font-[var(--font-inter-tight)] text-[16px] leading-6 font-medium tracking-[-0.2px] text-white lg:mb-4 lg:text-[20px] lg:leading-7">
                Address
              </h2>
              <p className="font-[var(--font-inter-tight)] text-[14px] leading-5 text-[#babdc2] lg:text-[18px] lg:leading-7">
                123 Innovation Drive, Tech City, CA 94016, USA
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.12)] py-4 lg:py-6">
          <div className="flex flex-col gap-6 text-[14px] leading-5 text-[#95989e] sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-[16px] sm:leading-6">
            <p className="order-2 sm:order-1">Copyright © 2026 Execora. All Rights Reserved.</p>
            <div className="order-1 flex items-center gap-8 sm:order-2 sm:gap-6">
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Link href="/privacy-policy" className="text-white transition-colors hover:text-[#d6d9de]">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Link href="/terms-conditions" className="text-white transition-colors hover:text-[#d6d9de]">
                  Terms &amp; Conditions
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
