import Image from "next/image";
import Link from "next/link";

const avatarImages = [
  "/images/png/services-guidance-avatar-1.png",
  "/images/png/services-guidance-avatar-2.png",
  "/images/png/services-guidance-avatar-3.png",
];

const guidanceFeatures = [
  {
    title: "Growth Frameworks",
    description:
      "Structured growth models aligned with your operational and financial capacity.",
    cta: "Explore Our Approach",
  },
  {
    title: "Performance & KPI",
    description:
      "Clear performance systems that improve accountability and decision-making.",
    cta: "View Our Methodology",
  },
];

export default function ServicesGuidanceSection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 pb-14 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] sm:h-[520px] lg:h-[659px] lg:w-[572px] lg:rounded-[40px]">
          <Image
          loading="eager"
            src="/images/png/services-guidance-main.png"
            alt="Consultant working at desk in office"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 572px"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(226deg, rgba(132,204,22,0) 54%, rgba(132,204,22,1) 100%)",
            }}
          />

          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <div className="rounded-[24px] bg-black/10 p-6 backdrop-blur-[23.4px]">
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
                  <Image
                    src="/images/svg/icon-add-light.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <p
                className="mt-4 text-[44px] leading-none font-medium tracking-[-0.32px] text-white sm:text-[48px]"
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
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[622px]">
          <div className="max-w-[600px]">
            <h2
              className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#1e1a1c]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Strategic Guidance to
              <br />
              Move Your Business Forward.
            </h2>
            <p
              className="mt-6 max-w-[487px] text-[18px] leading-7 text-[#363435]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              We provide structured consulting frameworks that help leadership teams clarify
              direction, optimize operations, and execute growth initiatives with confidence.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#e8eaed] px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f]"
            >
              Schedule a Strategy Call
              <Image
                src="/images/svg/icon-arrow-right.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <div className="mt-12 border-t border-[#f4f5f7] pt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {guidanceFeatures.map((feature) => (
                <article key={feature.title}>
                  <h3
                    className="text-[18px] leading-7 font-medium text-[#1e1a1c]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-6 text-[#363435]">{feature.description}</p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-[28px] leading-6 font-medium text-[#1a2e05] sm:text-[16px]"
                  >
                    {feature.cta}
                    <Image
                      src="/images/svg/icon-arrow-right.svg"
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={20}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
