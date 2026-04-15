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
  return (
    <section className="w-full bg-[#fafafa] px-4 py-10 sm:px-8 lg:px-[120px] lg:py-[46px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-[350px]">
          <h3
            className="text-[24px] leading-8 font-medium tracking-[-0.312px] text-[#070a0f]"
            style={{ fontFamily: "var(--font-inter-tight)" }}
          >
            Successful Partner
          </h3>
          <p className="mt-1.5 text-[16px] leading-6 text-[#33373d]">
            We guarantee to provide affordable business consulting.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:max-w-[820px] lg:gap-x-[52px]">
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
    </section>
  );
}
