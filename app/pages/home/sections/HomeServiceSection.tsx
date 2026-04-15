import Image from "next/image";

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  mutedCard?: boolean;
};

const serviceItems: ServiceItem[] = [
  {
    title: "Business Strategy",
    description: "Define direction. Align leadership. Build long-term positioning.",
    icon: "/images/svg/icon-chess.svg",
    mutedCard: true,
  },
  {
    title: "Operations Optimization",
    description: "Reduce inefficiency. Improve execution. Strengthen control.",
    icon: "/images/svg/icon-clock-countdown.svg",
  },
  {
    title: "Growth & Scaling",
    description: "Expand responsibly. Protect stability. Increase performance.",
    icon: "/images/svg/icon-calendar.svg",
    mutedCard: true,
  },
];

export default function HomeServiceSection() {
  return (
    <section className="w-full px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-20 lg:pt-[60px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Scale Without Structure Fails
          </h2>
          <p className="mt-1.5 max-w-[680px] text-[18px] leading-7 font-normal text-[#33373d]">
            Practical consulting solutions that streamline operations and improve cost control.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[60px] lg:grid-cols-3">
          {serviceItems.map((item, index) => (
            <article
              key={item.title}
              className={[
                "flex min-h-[172px] flex-col items-start gap-12 rounded-[32px] p-8",
                item.mutedCard ? "bg-[#fafafa]" : "bg-transparent",
                index === 1 ? "md:col-span-2 lg:col-span-1" : "",
              ].join(" ")}
            >
              <div className="rounded-[56.579px] border border-[#fafafa] bg-white p-[11.842px]">
                <Image src={item.icon} alt="" aria-hidden="true" width={26} height={26} />
              </div>
              <div className="w-full">
                <h3
                  className="text-[20px] leading-7 font-medium tracking-[-0.2px] text-[#070a0f]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-6 font-normal text-[#33373d]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
