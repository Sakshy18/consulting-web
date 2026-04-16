import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesCtaSection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 pb-14 sm:px-8 lg:px-20 lg:pb-20">
      <div className="mx-auto w-full max-w-[1280px] rounded-[32px] bg-[#f7fee7] p-4 sm:rounded-[40px] sm:p-8 lg:p-0">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px]">
          <div className="absolute inset-0">
            <Image
              src="/images/png/case-studies-cta-base.png"
              alt=""
              aria-hidden="true"
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <Image
              src="/images/png/case-studies-cta-overlay.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(203.28deg, rgba(132, 204, 22, 0) 42.04%, rgba(132, 204, 22, 0.65) 59.22%, rgba(132, 204, 22, 1) 74.89%)",
              }}
            />
          </div>

          <div className="relative z-10 flex min-h-[420px] items-center px-5 py-10 sm:min-h-[506px] sm:px-14 sm:py-14 lg:px-14 lg:py-20">
            <div className="max-w-[461px] text-white">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/svg/cta-strategic-advisory-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                />
                <p className="text-[16px] leading-[1.7]">Strategic Advisory</p>
              </div>

              <h2
                className="mt-3 text-[44px] leading-[1.08] font-medium tracking-[-0.96px] sm:text-[48px]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Facing Similar Challenges?
              </h2>

              <p className="mt-3 text-[18px] leading-7">
                If your organization is navigating growth complexity, we&apos;re ready to help
                you build a structured, measurable path forward.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#e8eaed] bg-[#84cc16] px-5 py-3 text-[16px] leading-6 font-medium text-white transition-colors hover:bg-[#74b514]"
              >
                Request a Consultation
                <Image
                  src="/images/svg/icon-arrow-right.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
