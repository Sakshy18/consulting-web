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
    mobileCta: "Our Approach",
  },
  {
    title: "Performance & KPI",
    description:
      "Clear performance systems that improve accountability and decision-making.",
    cta: "View Our Methodology",
    mobileCta: "Our Methodology",
  },
];

export default function ServicesGuidanceSection() {
  return (
    <section className="w-full bg-[#ffffff] px-5 pb-8 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-20 lg:pb-20 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="order-2 relative h-[264px] w-full overflow-hidden rounded-[20px] sm:h-[420px] sm:rounded-[32px] lg:order-1 lg:h-[659px] lg:w-[572px] lg:rounded-[40px]">
          <Image
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

          <div className="absolute bottom-0 left-0 p-8 sm:p-6 lg:p-8">
            <div className="flex items-center gap-2 rounded-[24px] bg-transparent p-0 backdrop-blur-0 sm:bg-black/10 sm:p-6 sm:backdrop-blur-[23.4px] lg:block">
              <div className="flex items-center pr-2.5 sm:pr-2.5">
                {avatarImages.map((avatar) => (
                  <div key={avatar} className="-mr-2.5 h-8 w-8 sm:h-9 sm:w-9">
                    <Image
                      src={avatar}
                      alt=""
                      aria-hidden="true"
                      width={32}
                      height={32}
                      className="h-full w-full rounded-full border border-[#506033] object-cover sm:border-2"
                    />
                  </div>
                ))}
                <div className="-mr-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#506033] bg-[#84cc16] sm:h-9 sm:w-9 sm:border-2">
                  <Image
                    src="/images/svg/icon-add-light.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
              </div>
              <div className="pb-1">
                <p
                  className="text-[20px] leading-7 font-medium tracking-[-0.2px] text-white sm:mt-4 sm:text-[44px] sm:leading-none sm:tracking-[-0.32px] lg:text-[48px]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  30k<span className="text-white/60">+</span>
                </p>
                <p
                  className="text-[12px] leading-4 text-white sm:mt-1.5 sm:text-[14px] sm:leading-5"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  <span className="sm:hidden">Happy clients world-wide.</span>
                  <span className="hidden sm:inline">
                    Happy clients we have
                    <br />
                    world-wide.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 w-full lg:order-2 lg:max-w-[622px]">
          <div className="max-w-[600px]">
            <h2
              className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#1e1a1c] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.2px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Strategic Guidance to
              <br />
              Move Your Business Forward.
            </h2>
            <p
              className="mt-4 max-w-[487px] text-[16px] leading-6 text-[#363435] lg:mt-6 lg:text-[18px] lg:leading-7"
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

          <div className="mt-8 border-t-0 pt-0 lg:mt-12 lg:border-t lg:border-[#f4f5f7] lg:pt-10">
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-10">
              {guidanceFeatures.map((feature) => (
                <article key={feature.title}>
                  <h3
                    className="text-[16px] leading-6 font-medium text-[#1e1a1c] lg:text-[18px] lg:leading-7"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-5 text-[#363435] lg:text-[16px] lg:leading-6">
                    {feature.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-[14px] leading-5 font-medium text-[#1a2e05] lg:text-[16px] lg:leading-6"
                  >
                    <span className="sm:hidden">{feature.mobileCta}</span>
                    <span className="hidden sm:inline">{feature.cta}</span>
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
