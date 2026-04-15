import Image from "next/image";

const checklistItems = [
  "Strategic Growth Roadmap",
  "Operational Process Optimization",
  "Performance Review",
  "KPI & Reporting Frameworks",
  "Leadership Alignment Sessions",
  "Risk & Opportunity Assessment",
  "Implementation Support",
  "Clear Action Plans",
  "Ongoing Strategic Guidance",
];

export default function ServicesScaleChecklistSection() {
  return (
    <section className="w-full bg-[#ffffff] px-4 pb-14 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
        <header className="text-center">
          <h2
            className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Scale Without Structure Fails
          </h2>
          <p className="mt-1.5 text-[18px] leading-7 text-[#1f1f1f]">
            Structured consulting support designed to deliver measurable business outcomes.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 justify-items-center gap-[6px] md:grid-cols-2 xl:grid-cols-3">
          {checklistItems.map((item) => (
            <article
              key={item}
              className="flex w-full items-center gap-[10px] rounded-[53px] border border-[#f4f5f7] bg-[#fafafa] p-2 md:max-w-[347px]"
            >
              <div className="rounded-[36px] bg-white p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.05)]">
                <Image
                  src="/images/svg/icon-check-circle-green.svg"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <p
                className="min-w-0 truncate text-[18px] leading-7 font-medium text-[#3b3b3b]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
                title={item}
              >
                {item}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
