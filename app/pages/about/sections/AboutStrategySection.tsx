import Image from "next/image";
import Link from "next/link";

type AboutPrinciple = {
  title: string;
  description: string;
};

const aboutPrinciples: AboutPrinciple[] = [
  {
    title: "Our Vision",
    description:
      "To become a trusted strategic partner for growth-focused organizations, helping businesses build resilient systems that scale with confidence.",
  },
  {
    title: "Our Mission",
    description:
      "To provide structured, data-driven consulting that strengthens leadership decisions, optimizes operations, and supports sustainable expansion.",
  },
  {
    title: "Our Commitment",
    description:
      "We focus on alignment, performance, and sustainable growth not short-term fixes.",
  },
];

export default function AboutStrategySection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 pb-16 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full lg:max-w-[416px]">
          <h2
            className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#182226]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Strategic Thinking.
            <br />
            Sustainable Growth.
          </h2>
          <p
            className="mt-2 text-[18px] leading-7 text-[#3e4447]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            We are a business consulting firm dedicated to helping organizations move from
            uncertainty to structured performance. Our work combines strategic clarity, operational
            discipline, and measurable execution to drive long-term success.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#e8eaed] px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f]"
          >
            Contact Us
            <Image src="/images/svg/icon-arrow-right.svg" alt="" aria-hidden="true" width={20} height={20} />
          </Link>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] sm:h-[510px] lg:w-[416px] lg:rounded-[40px]">
          <Image
            src="/images/png/about-strategic-main.png"
            alt="Consultant leaning on a desk in workspace"
            fill
            loading="eager"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 416px"
          />
        </div>

        <div className="w-full space-y-10 lg:max-w-[378px] lg:space-y-16">
          {aboutPrinciples.map((principle) => (
            <article key={principle.title}>
              <h3
                className="text-[36px] leading-[1.2] font-medium tracking-[-0.2px] text-[#182226] sm:text-[20px] sm:leading-7"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {principle.title}
              </h3>
              <p className="mt-3 text-[16px] leading-6 text-[#3e4447]">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
