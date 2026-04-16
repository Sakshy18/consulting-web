import Image from "next/image";

type Partner = {
  name: string;
  mark: string;
  text: string;
  markWidth: number;
  textWidth: number;
};

const partners: Partner[] = [
  {
    name: "Europa",
    mark: "/images/svg/partner-europa-mark.svg",
    text: "/images/svg/partner-europa-text.svg",
    markWidth: 37,
    textWidth: 84,
  },
  {
    name: "Epicurious",
    mark: "/images/svg/partner-epicurious-mark.svg",
    text: "/images/svg/partner-epicurious-text.svg",
    markWidth: 37,
    textWidth: 117,
  },
  {
    name: "Fourpoints",
    mark: "/images/svg/partner-fourpoints-mark.svg",
    text: "/images/svg/partner-fourpoints-text.svg",
    markWidth: 26,
    textWidth: 119,
  },
  {
    name: "Ephemeral",
    mark: "/images/svg/partner-ephemeral-mark.svg",
    text: "/images/svg/partner-ephemeral-text.svg",
    markWidth: 44,
    textWidth: 117,
  },
];

export default function TrustedPartnersSection() {
  const mobileLoopPartners = [...partners, ...partners];

  return (
    <section className="w-full bg-[#fafafa] px-5 py-10 sm:px-8 lg:px-[120px] lg:py-[46px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-[350px]">
          <h3
            className="text-[18px] leading-7 font-medium text-[#070a0f] lg:text-[24px] lg:leading-8 lg:tracking-[-0.312px]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Successful Partner
          </h3>
          <p className="mt-1.5 text-[14px] leading-5 text-[#33373d] lg:text-[16px] lg:leading-6">
            We guarantee to provide affordable business consulting.
          </p>
        </div>

        <div className="w-full overflow-hidden lg:overflow-visible">
          <div className="trusted-partners-carousel-track flex w-max items-center gap-8 lg:hidden">
            {mobileLoopPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex items-center gap-[6.7px] text-[#6e737a]">
                <Image
                  src={partner.mark}
                  alt=""
                  aria-hidden="true"
                  width={partner.markWidth}
                  height={32}
                  className="h-8 w-auto"
                />
                <Image
                  src={partner.text}
                  alt={partner.name}
                  width={partner.textWidth}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>

          <div className="hidden w-full grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid lg:max-w-[820px] lg:gap-x-[52px]">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-[9px] text-[#6e737a]">
                <Image
                  src={partner.mark}
                  alt=""
                  aria-hidden="true"
                  width={partner.markWidth}
                  height={44}
                  className="h-11 w-auto"
                />
                <Image
                  src={partner.text}
                  alt={partner.name}
                  width={partner.textWidth}
                  height={44}
                  className="h-11 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
