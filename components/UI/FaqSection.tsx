"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Who do you typically work with?",
    answer:
      "We typically partner with growth-stage and established businesses that need clearer operational structure and decision support.",
  },
  {
    question: "How long does a consulting engagement last?",
    answer:
      "Most engagements range from three to six months, depending on scope and business complexity.",
  },
  {
    question: "Do you offer customized consulting plans?",
    answer:
      "Yes. Every engagement is tailored to your business goals, operating model, and leadership priorities.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across services, technology, operations-heavy businesses, and founder-led organizations.",
  },
  {
    question: "What results can we expect?",
    answer:
      "Clients usually see improved operational clarity, stronger decision alignment, and measurable execution gains.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex w-full max-w-[506px] flex-col justify-between">
          <div>
            <h2
              className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#191715]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="mt-2 max-w-[459px] text-[18px] leading-7 text-[#373a46]/80">
              Here are answers to common questions about us.
            </p>
          </div>

          <div className="mt-14 max-w-[421px] lg:mt-[96px]">
            <h3
              className="text-[24px] leading-8 font-medium tracking-[-0.312px] text-[#191715]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Still have questions?
            </h3>
            <p className="mt-2 text-[16px] leading-6 text-[#373a46]/90">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team!
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 text-[24px] leading-6 font-medium text-[#1a2e05] sm:text-[16px]"
            >
              Schedule a Call
              <Image src="/images/svg/icon-arrow-right.svg" alt="" aria-hidden="true" width={20} height={20} />
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[608px]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="w-full border-b border-[#f4f5f7] px-6 py-6 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <p
                    className="text-[18px] leading-7 font-medium text-[#070a0f]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {item.question}
                  </p>
                  <span className="text-[24px] leading-none text-[#191715]">{isOpen ? "−" : "+"}</span>
                </div>

                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <p className="overflow-hidden pr-10 text-[16px] leading-6 text-[#33373d]">{item.answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
