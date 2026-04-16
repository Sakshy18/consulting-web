import Image from "next/image";

const impactStats = [
  {
    value: "4",
    suffix: "x",
    description:
      "A multiplier that suggests double the performance when compared to the competition.",
  },
  {
    value: "97.5",
    suffix: "%",
    description: "Use a percentage number to suggest the increase in results to expect.",
  },
];

export default function CaseStudiesImpactSection() {
  return (
    <section className="w-full bg-[#fafafa] px-5 py-10 sm:px-8 sm:py-14 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="w-full max-w-[502px]">
          <h2
            className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#070a0f] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.2px]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            &ldquo;Our leadership now makes decisions with clarity and confidence.&rdquo;
          </h2>

          <div className="mt-8 flex items-center gap-3">
            <Image
              src="/images/png/case-studies-author-avatar.png"
              alt="XioFik Hasan profile photo"
              width={40}
              height={40}
              className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]"
            />
            <div>
              <p
                className="text-[16px] leading-6 font-medium text-[#070a0f] lg:text-[18px] lg:leading-7"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                XioFik Hasan
              </p>
              <p
                className="text-[12px] leading-4 text-[#484b52] lg:text-[14px] lg:leading-5"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-3 gap-y-20 lg:max-w-[645px] lg:gap-20">
          {impactStats.map((stat) => (
            <article key={stat.suffix} className="max-w-[294px]">
              <p
                className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f] lg:text-[62px] lg:leading-[72px] lg:tracking-[-1.24px]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {stat.value}
                <span className="text-[#95989e]">{stat.suffix}</span>
              </p>
              <p
                className="mt-2 text-[16px] leading-6 text-[#33373d] lg:text-[18px] lg:leading-7"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
