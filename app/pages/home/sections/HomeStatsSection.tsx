type StatItem = {
  value: string;
  description: string;
};

const stats: StatItem[] = [
  {
    value: "27%",
    description: "Increase in operational efficiency in the first 90 days",
  },
  {
    value: "18%",
    description: "Reduction in avoidable operating costs",
  },
  {
    value: "32%",
    description: "Improvement in leadership decision alignment",
  },
];

function StatMarker() {
  return (
    <div className="flex h-[96px] w-[18px] justify-center">
      <div className="relative h-full w-px bg-[#e8eaed]">
        <span className="absolute -left-[4px] top-0 h-2 w-2 rounded-full bg-[#84cc16]" />
      </div>
    </div>
  );
}

export default function HomeStatsSection() {
  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <h2
          className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
          style={{ fontFamily: "var(--font-inter-tight)" }}
        >
          Measurable Results from Day One
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {stats.map((stat) => (
            <article key={stat.value} className="flex items-center gap-8">
              <StatMarker />
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <p
                  className="shrink-0 text-[48px] leading-[56px] font-medium tracking-[-0.96px] text-[#070a0f]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {stat.value.slice(0, -1)}
                  <span className="text-[#babdc2]">%</span>
                </p>
                <p className="text-[16px] leading-6 text-[#33373d]">{stat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
