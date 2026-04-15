import Image from "next/image";

const strategyActions = [
  "Conducted operational process audit",
  "Built KPI-driven reporting frameworks",
  "Redesigned workflow structures",
  "Developed scalable growth roadmap",
];

export default function CaseStudiesStrategySection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 py-14 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[526px_minmax(0,567px)] lg:items-center lg:justify-between lg:gap-14">
        <div className="w-full">
          <h2
            className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            The Strategy Behind the Transformation
          </h2>

          <p
            className="mt-4 max-w-[491px] text-[18px] leading-7 text-[#33373d]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            We implemented a structured, multi-phase consulting approach focused on clarity,
            accountability, and execution discipline.
          </p>

          <div className="mt-10">
            <h3
              className="text-[18px] leading-7 font-semibold text-[#000000]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              What We Did
            </h3>

            <ul className="mt-4 space-y-4">
              {strategyActions.map((action) => (
                <li key={action} className="flex items-center gap-2.5">
                  <Image
                    src="/images/svg/icon-check-circle-green.svg"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                  />
                  <span
                    className="text-[18px] leading-7 text-[#0f0f0f]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {action}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] sm:h-[616px] sm:rounded-[40px]">
          <Image
            src="/images/png/case-studies-strategy-main.png"
            alt="Consultant focused on executing structured strategy"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 567px"
          />
        </div>
      </div>
    </section>
  );
}
