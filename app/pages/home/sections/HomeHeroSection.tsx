import Image from "next/image";
import Link from "next/link";

const avatars = [
  "/images/png/home-avatar-1.png",
  "/images/png/home-avatar-2.png",
  "/images/png/home-avatar-3.png",
];

export default function HomeHeroSection() {
  return (
    <section className="w-full px-4 pb-8 pt-4 sm:px-8 lg:px-8">
      <div className="relative mx-auto h-[760px] w-full max-w-[1376px] overflow-hidden rounded-[34px] sm:h-[680px] lg:h-[712px] lg:rounded-[42px]">
        <Image
          src="/images/png/home-hero-main.png"
          alt="Consultant smiling in office"
          fill
          priority
          className="object-cover object-[center_12%] sm:object-[center_18%]"
          sizes="(max-width: 640px) 100vw, 1376px"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(205deg, rgba(132,204,22,0) 54%, rgba(132,204,22,1) 100%), linear-gradient(217deg, rgba(104,154,3,0) 58%, rgba(104,154,3,0.4) 69%, rgba(104,154,3,1) 100%)",
          }}
        />

        <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
          <div className="max-w-[640px]">
            <h1 className="font-[var(--font-inter-tight)] text-[44px] leading-[1.04] font-medium tracking-[-1.24px] text-white sm:text-[62px] sm:leading-[1.02]">
              Strategic Clarity
              <br />
              Sustainable Growth.
            </h1>
            <p className="mt-2 max-w-[620px] font-[var(--font-inter-tight)] text-[18px] leading-7 text-[#dadce0]">
              We help businesses refine strategy, strengthen operations, scale with confidence
              through data-driven consulting and practical execution.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] leading-6 font-medium text-[#1a2e05]"
            >
              Book a Call
              <Image
                src="/images/svg/icon-arrow-right.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[380px] left-5 rounded-3xl bg-black/20 p-3 backdrop-blur-[23px] sm:bottom-10 sm:left-auto sm:right-10 sm:bg-black/10 sm:p-6">
          <div className="flex items-center pr-2.5">
            {avatars.map((avatar, index) => (
              <div key={avatar} className={`relative h-9 w-9 ${index > 0 ? "-ml-2.5" : ""}`}>
                <Image
                  src={avatar}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="rounded-full border-2 border-white object-cover"
                  sizes="36px"
                />
              </div>
            ))}
            <div className="-ml-2.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#84cc16]">
              <Image src="/images/svg/icon-add.svg" alt="" aria-hidden="true" width={20} height={20} />
            </div>
          </div>
          <div className="mt-2.5 flex items-start gap-2 sm:mt-4 sm:block">
            <p className="text-[32px] leading-none font-medium tracking-[-0.32px] text-white sm:text-[44px]">
              30k<span className="text-white/60">+</span>
            </p>
            <p className="mt-0.5 font-[var(--font-inter-tight)] text-[14px] leading-5 text-white sm:mt-1.5">
              Happy clients we have
              <br />
              world-wide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
