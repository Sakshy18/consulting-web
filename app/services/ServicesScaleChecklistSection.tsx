import Image from "next/image";

const checklistItems = [
  { label: "Strategic Growth Roadmap", mobileLabel: "Growth Roadmap" },
  { label: "Ongoing Strategic Guidance", mobileLabel: "Strategic Guidance" },
  { label: "Operational Process Optimization", mobileLabel: "Operational Process" },
  { label: "Risk & Opportunity Assessment", mobileLabel: "Risk & Opportunity" },
  { label: "Performance Review", mobileLabel: "Review" },
  { label: "KPI & Reporting Frameworks", mobileLabel: "Reporting Frameworks" },
  { label: "Leadership Alignment Sessions", mobileLabel: "Leadership Alignment" },
  { label: "Clear Action Plans", mobileLabel: "Clear Action Plans" },
  { label: "Implementation Support", mobileLabel: "Implementation Support" },
];

export default function ServicesScaleChecklistSection() {
  return (
    <section className="w-full bg-[#ffffff] px-5 pb-10 pt-10 sm:px-8 sm:pb-14 lg:px-20 lg:pb-20 lg:pt-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 sm:gap-10">
        <header className="text-center">
          <h2
            className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#070a0f] sm:text-[40px] sm:leading-[48px] sm:tracking-[-1.2px]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            <span className="sm:hidden">
              Scale Without
              <br />
              Your Structure Fails
            </span>
            <span className="hidden sm:inline">Scale Without Structure Fails</span>
          </h2>
          <p className="mt-1.5 text-[18px] leading-7 text-[#1f1f1f]">
            Structured consulting support designed to deliver measurable business outcomes.
          </p>
        </header>

        <div className="flex w-full flex-wrap items-center justify-center gap-0.5 md:grid md:grid-cols-2 md:justify-items-center md:gap-[6px] xl:grid-cols-3">
          {checklistItems.map((item) => (
            <article
              key={item.label}
              className="my-0.5 flex w-fit max-w-full items-center gap-1.5 rounded-[53px] border border-[#f4f5f7] bg-[#fafafa] py-1 pl-1 pr-5 md:w-full md:gap-[10px] md:p-2 md:max-w-[347px]"
            >
              <div className="rounded-[36px] bg-white p-1.5 shadow-[0_0_4px_0_rgba(0,0,0,0.05)] md:p-3">
                <Image
                  src="/images/svg/icon-check-circle-green.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="h-5 w-5 md:h-8 md:w-8"
                />
              </div>
              <p
                className="min-w-0 whitespace-nowrap text-[12px] leading-4 font-medium text-[#3b3b3b] md:truncate md:text-[18px] md:leading-7"
                style={{ fontFamily: "var(--font-inter-tight)" }}
                title={item.label}
              >
                <span className="md:hidden">{item.mobileLabel}</span>
                <span className="hidden md:inline">{item.label}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
