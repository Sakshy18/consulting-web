"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const avatarImages = [
  "/images/png/cta-avatar-1.png",
  "/images/png/cta-avatar-2.png",
  "/images/png/cta-avatar-3.png",
];

export default function AboutCtaSection() {
  return (
    <section className="w-full bg-[#fafafa] px-5 py-10 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] rounded-[20px] bg-[#1a2e05] p-4 text-white sm:rounded-[40px] sm:p-10 lg:p-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="order-2 w-full max-w-[536px] lg:order-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/svg/cta-strategic-advisory-icon.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
              <p className="text-[14px] leading-5 text-white lg:text-[16px] lg:leading-[1.7]">
                Strategic Advisory
              </p>
            </div>

            <h2
              className="mt-4 text-[32px] leading-10 font-medium tracking-[-0.32px] text-white lg:mt-3 lg:text-[44px] lg:leading-[1.08] lg:tracking-[-0.96px] xl:text-[48px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Ready To Move
              <br />
              Forward With Clarity?
            </h2>

            <p
              className="mt-3 text-[16px] leading-6 text-[#dadce0] lg:text-[17px] lg:leading-7 xl:text-[18px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Structured strategy, disciplined execution, and measurable performance everything
              you need to move from complexity to confident growth.
            </p>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="inline-flex">
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] leading-6 font-medium text-[#1a2e05] lg:mt-10"
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

          <div className="order-1 grid w-full grid-cols-[minmax(0,1fr)_minmax(0,134px)] gap-2 lg:order-2 lg:max-w-[380px] lg:grid-cols-[1fr_auto]">
            <motion.article
              className="flex min-h-[159px] flex-col justify-between rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-[23.4px] lg:min-h-[240px] lg:rounded-3xl lg:px-7 lg:py-6"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.25 }}
            >
              <div>
                <p
                  className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-white lg:text-[44px] lg:leading-none"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  90<span className="text-white/60">%</span>
                </p>
                <p className="mt-1 text-[14px] leading-5 text-[#babdc2] lg:mt-2 lg:text-[16px] lg:leading-[1.7] lg:text-white">
                  improving efficiency
                </p>
              </div>
              <Image
                src="/images/svg/cta-efficiency-chart.svg"
                alt=""
                aria-hidden="true"
                width={160}
                height={84}
                className="mt-3 h-auto w-full max-w-[160px] lg:mt-5 lg:max-w-[188px]"
              />
            </motion.article>

            <div className="flex flex-col gap-2">
              <motion.article
                className="rounded-2xl bg-white/10 p-3 backdrop-blur-[23.4px] lg:rounded-3xl lg:p-6"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center pr-2.5">
                  {avatarImages.map((avatar) => (
                    <div key={avatar} className="-mr-2.5 h-8 w-8 lg:h-9 lg:w-9">
                      <Image
                        src={avatar}
                        alt=""
                        aria-hidden="true"
                        width={32}
                        height={32}
                        className="h-full w-full rounded-full border border-[#506033] object-cover lg:border-2"
                      />
                    </div>
                  ))}
                  <div className="-mr-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#506033] bg-[#84cc16] lg:h-9 lg:w-9 lg:border-2">
                    <Image src="/images/svg/icon-add.svg" alt="" aria-hidden="true" width={20} height={20} />
                  </div>
                </div>

                <p
                  className="mt-4 text-[32px] leading-10 font-medium tracking-[-0.2px] text-white lg:mt-5 lg:text-[44px] lg:leading-none lg:tracking-[-0.32px] xl:text-[48px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  30k<span className="text-white/60">+</span>
                </p>
                <p
                  className="mt-1 text-[12px] leading-4 text-[#babdc2] lg:mt-1.5 lg:text-[14px] lg:leading-5 lg:text-white"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  <span className="lg:hidden">Happy clients we have world-wide.</span>
                  <span className="hidden lg:inline">
                    Happy clients we have
                    <br />
                    world-wide.
                  </span>
                </p>
              </motion.article>

              <motion.article
                className="rounded-2xl bg-white/10 px-4 py-3 lg:rounded-3xl lg:px-5 lg:py-4"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <p
                  className="text-[32px] leading-10 font-medium tracking-[-0.2px] text-white lg:text-[44px] lg:leading-none lg:tracking-[-0.32px] xl:text-[48px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  300<span className="text-white/60">+</span>
                </p>
                <p
                  className="mt-1 text-[12px] leading-4 text-[#babdc2] lg:mt-1.5 lg:text-[14px] lg:leading-5 lg:text-white"
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
