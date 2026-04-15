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
    <section className="w-full bg-[#fafafa] px-4 py-14 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="w-full max-w-[502px]">
          <h2
            className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            &ldquo;Our leadership now makes decisions with clarity and confidence.&rdquo;
          </h2>

          <div className="mt-8 flex items-center gap-3">
            <Image
              src="/images/png/case-studies-author-avatar.png"
              alt="XioFik Hasan profile photo"
              width={50}
              height={50}
              className="h-[50px] w-[50px]"
            />
            <div>
              <p
                className="text-[18px] leading-7 font-medium text-[#070a0f]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                XioFik Hasan
              </p>
              <p
                className="text-[14px] leading-5 text-[#484b52]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-[645px] lg:gap-20">
          {impactStats.map((stat) => (
            <article key={stat.suffix} className="max-w-[294px]">
              <p
                className="text-[62px] leading-[72px] font-medium tracking-[-1.24px] text-[#070a0f]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {stat.value}
                <span className="text-[#95989e]">{stat.suffix}</span>
              </p>
              <p
                className="mt-2 text-[18px] leading-7 text-[#33373d]"
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
