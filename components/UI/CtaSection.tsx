"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const avatarImages = [
  "/images/png/cta-avatar-1.png",
  "/images/png/cta-avatar-2.png",
  "/images/png/cta-avatar-3.png",
];

export default function CtaSection() {
  return (
    <section className="w-full bg-[#fafafa] px-4 py-14 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] rounded-[32px] bg-[#1a2e05] p-6 text-white sm:rounded-[40px] sm:p-10 lg:p-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="w-full max-w-[536px]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/svg/cta-strategic-advisory-icon.svg"
                alt=""
                aria-hidden="true"
                width={22}
                height={22}
              />
              <p className="text-[16px] leading-[1.7] text-white">Strategic Advisory</p>
            </div>

            <h2
              className="mt-3 text-[44px] leading-[1.08] font-medium tracking-[-0.96px] text-white sm:text-[48px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Ready To Move
              <br />
              Forward With Clarity?
            </h2>

            <p
              className="mt-3 text-[17px] leading-7 text-[#dadce0] sm:text-[18px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Structured strategy, disciplined execution, and measurable performance everything
              you need to move from complexity to confident growth.
            </p>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="inline-flex">
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] leading-6 font-medium text-[#1a2e05]"
              >
                Schedule a Strategy Call
                <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                  <Image
                    src="/images/svg/icon-arrow-right.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                  />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <div className="grid w-full gap-2 sm:grid-cols-[1fr_auto] sm:items-stretch lg:max-w-[380px]">
            <motion.article
              className="flex min-h-[210px] flex-col justify-between rounded-3xl bg-white/10 px-7 py-6 backdrop-blur-[23.4px] sm:min-h-[240px]"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.25 }}
            >
              <div>
                <p
                  className="text-[44px] leading-none font-medium tracking-[-0.32px] text-white sm:text-[48px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  90<span className="text-white/60">%</span>
                </p>
                <p className="mt-2 text-[16px] leading-[1.7] text-white">improving efficiency</p>
              </div>
              <Image
                src="/images/svg/cta-efficiency-chart.svg"
                alt=""
                aria-hidden="true"
                width={188}
                height={98}
                className="mt-5 h-auto w-full max-w-[188px]"
              />
            </motion.article>

            <div className="flex flex-col gap-2">
              <motion.article
                className="rounded-3xl bg-white/10 p-6 backdrop-blur-[23.4px]"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center pr-2.5">
                  {avatarImages.map((avatar) => (
                    <div key={avatar} className="-mr-2.5 h-9 w-9">
                      <Image
                        src={avatar}
                        alt=""
                        aria-hidden="true"
                        width={36}
                        height={36}
                        className="h-full w-full rounded-full border-2 border-[#506033] object-cover"
                      />
                    </div>
                  ))}
                  <div className="-mr-2.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#506033] bg-[#84cc16]">
                    <Image src="/images/svg/icon-add.svg" alt="" aria-hidden="true" width={20} height={20} />
                  </div>
                </div>

                <p
                  className="mt-5 text-[44px] leading-none font-medium tracking-[-0.32px] text-white sm:text-[48px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  30k<span className="text-white/60">+</span>
                </p>
                <p
                  className="mt-1.5 text-[14px] leading-5 text-white"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Happy clients we have
                  <br />
                  world-wide.
                </p>
              </motion.article>

              <motion.article
                className="rounded-3xl bg-white/10 px-5 py-4"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <p
                  className="text-[44px] leading-none font-medium tracking-[-0.32px] text-white sm:text-[48px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  300<span className="text-white/60">+</span>
                </p>
                <p
                  className="mt-1.5 text-[14px] leading-5 text-white"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Business already join us!
                </p>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
