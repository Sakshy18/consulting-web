"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTO_ROTATE_MS = 6000;

type Testimonial = {
  company: string;
  companyMark: string;
  companyText: string;
  quotePrimary: string;
  quoteSecondary: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
  markWidth: number;
  textWidth: number;
};

const testimonials: Testimonial[] = [
  {
    company: "Ephemeral",
    companyMark: "/images/svg/partner-ephemeral-mark.svg",
    companyText: "/images/svg/partner-ephemeral-text.svg",
    quotePrimary: "“The engagement brought discipline to our operations and clarity to our financial oversight.",
    quoteSecondary: " We’re now making data-driven decisions with stronger alignment across departments.”",
    author: "Jessica Lubahn",
    role: "Product Manager",
    image: "/images/png/home-testimonial-1.png",
    imageAlt: "Portrait of a client in office environment",
    markWidth: 56,
    textWidth: 149,
  },
  {
    company: "Europa",
    companyMark: "/images/svg/partner-europa-mark.svg",
    companyText: "/images/svg/partner-europa-text.svg",
    quotePrimary: "“Execora helped us convert scattered priorities into a clear operating rhythm.",
    quoteSecondary: " Our teams execute faster, and leadership decisions are now grounded in shared metrics.”",
    author: "Daniel Carter",
    role: "Chief Operations Officer",
    image: "/images/svg/home-hero-main.svg",
    imageAlt: "Client portrait with crossed arms",
    markWidth: 56,
    textWidth: 128,
  },
  {
    company: "Fourpoints",
    companyMark: "/images/svg/partner-fourpoints-mark.svg",
    companyText: "/images/svg/partner-fourpoints-text.svg",
    quotePrimary: "“Their approach gave us structure without slowing momentum.",
    quoteSecondary: " We now track progress clearly, reduce rework, and execute with far more confidence.”",
    author: "Maya Henderson",
    role: "Strategy Director",
    image: "/images/png/home-team-4.png",
    imageAlt: "Portrait of a client executive smiling",
    markWidth: 34,
    textWidth: 152,
  },
];

export default function HomeTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startAt = Date.now();

    const tick = window.setInterval(() => {
      const elapsed = Date.now() - startAt;

      if (elapsed >= AUTO_ROTATE_MS) {
        window.clearInterval(tick);
        setProgress(0);
        setActiveIndex((previous) => (previous + 1) % testimonials.length);
        return;
      }

      const nextProgress = Math.min((elapsed / AUTO_ROTATE_MS) * 100, 100);
      setProgress(nextProgress);
    }, 60);

    return () => window.clearInterval(tick);
  }, [activeIndex]);

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
        <header className="text-center">
          <h2
            className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            What Clients Say
          </h2>
          <p className="mt-1.5 text-[16px] leading-6 text-[#1f1f1f]">
            Results grounded in strategy and execution.
          </p>
        </header>

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="relative w-full max-w-[600px] min-h-[360px] lg:min-h-[442px]">
            {testimonials.map((item, index) => (
              <article
                key={item.author}
                className={[
                  "absolute inset-0 flex flex-col justify-between transition-all duration-700 ease-in-out",
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0",
                ].join(" ")}
                aria-hidden={index !== activeIndex}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.companyMark}
                      alt=""
                      aria-hidden="true"
                      width={item.markWidth}
                      height={56}
                      className="h-14 w-auto"
                    />
                    <Image
                      src={item.companyText}
                      alt={item.company}
                      width={item.textWidth}
                      height={56}
                      className="h-14 w-auto"
                    />
                  </div>

                  <p
                    className="mt-8 text-[24px] leading-8 font-medium tracking-[-0.312px] text-[#070a0f]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    <span>{item.quotePrimary}</span>
                    <span className="text-[#6e737a]">{item.quoteSecondary}</span>
                  </p>
                </div>

                <div>
                  <p className="text-[20px] leading-[1.6] font-medium tracking-[-0.5px] text-[#0a0915]">
                    {item.author}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-normal tracking-[-0.2px] text-[#52525a]">
                    {item.role}
                  </p>

                  <div className="mt-7 flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={[
                          "overflow-hidden rounded-full bg-[#dadce0] transition-all duration-300",
                          index === activeIndex ? "h-2 w-[30px]" : "h-2 w-2",
                        ].join(" ")}
                      >
                        <div
                          className="h-full rounded-full bg-[#84cc16] transition-[width] duration-75 ease-linear"
                          style={{
                            width: index === activeIndex ? `${progress}%` : "0%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative h-[360px] w-full overflow-hidden rounded-[32px] sm:h-[420px] lg:h-[442px] lg:w-[442px]">
            {testimonials.map((item, index) => (
              <Image
                key={item.image + item.author}
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 442px"
                className={[
                  "absolute inset-0 object-cover transition-opacity duration-700 ease-in-out",
                  index === activeIndex ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
