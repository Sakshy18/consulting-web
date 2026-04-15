import Image from "next/image";
import Link from "next/link";

export default function HomeGrowthSection() {
  return (
    <section className="w-full px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-[81px]">
        <article className="relative flex w-full flex-col justify-end gap-6 overflow-hidden rounded-[40px] p-6 sm:p-8 lg:max-w-[565px] lg:p-10">
          <Image
            src="/images/png/home-growth-feature-main.png"
            alt="Person working with laptop in office lounge"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 565px"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(206deg, rgba(132, 204, 22, 0) 41%, rgba(132, 204, 22, 1) 85%)",
            }}
          />

          <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white">
            <Image
              src="/images/svg/icon-clock-countdown-light.svg"
              alt=""
              aria-hidden="true"
              width={26}
              height={26}
            />
          </div>

          <div className="relative z-10 text-white">
            <h3
              className="text-[44px] leading-[1.08] font-medium tracking-[-0.96px] sm:text-[48px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Shaping Sustainable Business Growth
            </h3>
            <p className="mt-2 text-[18px] leading-7" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Long-term success isn&apos;t accidental. It&apos;s built through structured strategy,
              disciplined execution, and informed decision-making.
            </p>
          </div>
        </article>

        <article className="flex min-w-0 flex-1 flex-col justify-end gap-8 lg:gap-10">
          <div className="w-full lg:max-w-[640px]">
            <h2
              className="text-[40px] leading-[1.15] font-medium tracking-[-1.2px] text-[#070a0f]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Growth Without
              <br />
              Structure Creates Risk.
            </h2>
            <p className="mt-3 whitespace-pre-wrap text-[16px] leading-6 text-[#33373d]">
              Many businesses expand without a clear operational and financial framework. The
              result is inefficiency, inconsistent performance, and avoidable risk.
              {"\n\n"}
              We help organizations build structured systems that support confident decision-making
              and sustainable expansion.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full text-[16px] leading-6 font-medium text-[#1a2e05]"
            >
              Book a Strategy Call
              <Image src="/images/svg/icon-arrow-right.svg" alt="" aria-hidden="true" width={20} height={20} />
            </Link>
          </div>

          <div className="relative h-[230px] w-full overflow-hidden rounded-[40px] sm:h-[275px]">
            <Image
              src="/images/png/home-growth-feature-office.png"
              alt="Modern office meeting space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 634px"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
