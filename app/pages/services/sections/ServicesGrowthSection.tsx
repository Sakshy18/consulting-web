import Image from "next/image";

type ServicesFeature = {
  title: string;
  description: string;
  icon: string;
};

const servicesFeatures: ServicesFeature[] = [
  {
    title: "Strategic Growth Planning",
    description:
      "We define structured roadmaps aligned with market realities, financial capacity, and long-term business objectives.",
    icon: "/images/svg/icon-chess.svg",
  },
  {
    title: "Operational & Performance",
    description:
      "We improve internal processes, align KPIs, and build accountability systems that drive measurable results.",
    icon: "/images/svg/icon-clock-countdown.svg",
  },
];

export default function ServicesGrowthSection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 py-10 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full max-w-[540px]">
            <div className="flex items-center gap-2">
              <Image src="/images/svg/icon-about-dot.svg" alt="" aria-hidden="true" width={8} height={8} />
              <p className="text-[16px] leading-6 text-[#6e737a]">Our Services</p>
            </div>
            <h1
              className="mt-2 text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Growth &amp; Scaling Strategy
            </h1>
          </div>

          <p className="w-full max-w-[577px] text-[18px] leading-7 text-[#33373d]">
            We partner with leadership teams to design scalable growth frameworks, strengthen
            operational foundations, and implement systems that support sustainable expansion.
          </p>
        </div>

        <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] sm:h-[380px] lg:h-[439px]">
          <Image
            src="/images/png/services-growth-hero.png"
            alt="Business leaders shaking hands during team meeting"
            fill
            loading="eager"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
        </div>

        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-2">
          {servicesFeatures.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-start gap-10 rounded-[32px] bg-[#fafafa] p-10 lg:min-h-[234px]"
            >
              <div className="inline-flex rounded-[56.579px] border border-[#fafafa] bg-white p-[11.842px]">
                <Image src={feature.icon} alt="" aria-hidden="true" width={26} height={26} className="h-[26px] w-[26px]" />
              </div>
              <div>
                <h2
                  className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#070a0f]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {feature.title}
                </h2>
                <p
                  className="mt-3 text-[18px] leading-7 text-[#33373d]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
