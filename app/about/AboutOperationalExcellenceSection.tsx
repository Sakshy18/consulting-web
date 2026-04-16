import Image from "next/image";
import Link from "next/link";

function SailboatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 text-[#84cc16]" fill="none">
      <path
        d="M10.1 3.2v8.1m0 0H4.8m5.3 0h5.1M5 14.1c1.3-1 2.9-1.6 5-1.6s3.7.6 5 1.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m10.1 3.2 3.2 3.1H10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutOperationalExcellenceSection() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 lg:px-20 lg:py-[62px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 lg:gap-[46px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="w-full max-w-[540px] text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#070a0f] lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            From Strategic Vision to Operational Excellence
          </h2>
          <p className="w-full max-w-[460px] text-[16px] leading-6 text-[#1f1f1f]">
            We help organizations navigate complexity, strengthen decision-making, and build
            structured systems that support sustainable growth.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[567px_minmax(0,1fr)] lg:items-stretch lg:gap-5">
          <div className="order-1 relative h-[212px] w-full overflow-hidden rounded-[20px] lg:order-2 lg:h-auto lg:min-h-[481px] lg:rounded-[32px]">
            <Image
              src="/images/png/services-growth-hero.png"
              alt="Business leaders shaking hands in office"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 693px"
            />
          </div>

          <article className="order-2 rounded-[20px] bg-[#fafafa] p-5 lg:order-1 lg:rounded-[32px] lg:p-10">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fafafa] bg-white lg:h-14 lg:w-14 lg:p-3">
              <SailboatIcon />
            </div>

            <div className="mt-8 flex flex-col gap-5 lg:gap-8">
              <div className="space-y-2">
                <h3
                  className="text-[24px] leading-8 font-medium tracking-[-0.312px] text-[#070a0f] lg:text-[32px] lg:leading-10 lg:tracking-[-0.32px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Structured Thinking with Disciplined Execution.
                </h3>
                <p className="text-[16px] leading-6 text-[#33373d]">
                  Our experienced consultants work alongside leadership teams to diagnose
                  operational challenges, uncover growth opportunities, and implement practical
                  strategies that deliver measurable results.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e8eaed] px-5 py-3 text-[16px] leading-6 font-medium text-[#070a0f]"
              >
                Start a Strategic Conversation
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
