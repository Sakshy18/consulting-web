import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesOverviewSection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 py-14 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-[46px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full max-w-[540px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c7c9cc]" />
              <p className="text-[16px] leading-6 text-[#6e737a]">Case Study</p>
            </div>
            <h1
              className="mt-3 text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Driving Measurable
              <br />
              Growth for your Business
            </h1>
          </div>
          <p className="w-full max-w-[583px] text-[18px] leading-7 text-[#1f1f1f]">
            This case study highlights how we partnered with a mid-sized organization to
            strengthen operational systems, improve financial visibility, and implement a
            scalable growth framework.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[565px_minmax(0,1fr)] lg:gap-14">
          <article className="relative flex h-[520px] flex-col justify-end gap-4 overflow-hidden rounded-[32px] p-6 sm:h-[612px] sm:gap-6 sm:rounded-[40px] sm:p-10">
            <Image
              src="/images/png/case-studies-growth-main.png"
              alt="Consulting team shaking hands after strategy session"
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 565px"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(202.71deg, rgba(132, 204, 22, 0) 41.12%, rgba(132, 204, 22, 1) 85.44%)",
              }}
            />

            <div className="relative z-10 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/80 sm:h-[50px] sm:w-[50px]">
              <Image
                src="/images/svg/icon-clock-countdown-figma.svg"
                alt=""
                aria-hidden="true"
                width={26}
                height={26}
              />
            </div>

            <div className="relative z-10 text-white">
              <h2
                className="text-[38px] leading-[42px] font-medium tracking-[-0.96px] sm:text-[48px] sm:leading-[56px]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Shaping Sustainable
                <br />
                Business Growth
              </h2>
              <p
                className="mt-2 max-w-[460px] text-[16px] leading-6 sm:text-[18px] sm:leading-7"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Long-term success isn&apos;t accidental. It&apos;s built through structured
                strategy, disciplined execution, and informed decision-making.
              </p>
            </div>
          </article>

          <article className="flex h-full flex-col justify-between gap-10 lg:min-h-[612px]">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[32px] sm:h-[302px] sm:rounded-[40px]">
              <Image
                src="/images/png/case-studies-office-scene.png"
                alt="Professional reviewing laptop during focused planning session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 658px"
              />
            </div>

            <div className="flex flex-col gap-10">
              <p
                className="text-[18px] leading-7 text-[#070a0f]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                The client faced operational inefficiencies, inconsistent performance metrics, and
                unclear growth direction. Through a structured consulting engagement, we aligned
                leadership priorities and implemented measurable performance systems.
              </p>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e8eaed] bg-white px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f] transition-colors hover:bg-[#f6f7f8]"
              >
                Book a Strategy Call
                <Image
                  src="/images/svg/icon-arrow-right.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
