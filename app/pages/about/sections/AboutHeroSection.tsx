import Image from "next/image";

type AboutGalleryItem = {
  src: string;
  alt: string;
  heightClass: string;
};

const aboutGalleryItems: AboutGalleryItem[] = [
  {
    src: "/images/png/about-hero-1.png",
    alt: "Team member portrait in office space",
    heightClass: "h-[512px]",
  },
  {
    src: "/images/png/about-hero-2.png",
    alt: "Modern office interior with collaborative workspace",
    heightClass: "h-[460px]",
  },
  {
    src: "/images/png/about-hero-3.png",
    alt: "Colleagues moving through a meeting room",
    heightClass: "h-[380px]",
  },
  {
    src: "/images/png/about-hero-4.png",
    alt: "Abstract office corridor background",
    heightClass: "h-[460px]",
  },
];

const aboutGalleryLoopItems = [...aboutGalleryItems, ...aboutGalleryItems];

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-white px-4 pb-14 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-[428px]">
            <div className="flex items-center gap-2">
              <Image src="/images/svg/icon-about-dot.svg" alt="" aria-hidden="true" width={8} height={8} />
              <p className="text-[16px] leading-6 text-[#6e737a]">About Us</p>
            </div>

            <h1
              className="mt-2 text-[44px] leading-[1.08] font-medium tracking-[-0.96px] text-[#070a0f] sm:text-[48px] sm:leading-[56px]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Empowering
              <br />
              Businesses To Thrive
            </h1>
          </div>

          <div className="w-full max-w-[528px]">
            <Image
              src="/images/svg/icon-quotes-about.svg"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="h-16 w-16 sm:h-20 sm:w-20"
            />
            <p
              className="mt-6 text-[20px] leading-7 font-medium tracking-[-0.2px] text-[#070a0f]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              We partner with growth-focused organizations to transform strategy into measurable
              performance.{" "}
              <span className="text-[#6e737a]">
                Through structured planning, operational clarity, and disciplined execution, we help
                businesses build sustainable success.
              </span>
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="about-gallery-carousel-track flex w-max items-start gap-5">
            {aboutGalleryLoopItems.map((item, index) => {
              const shouldEagerLoad = item.src === "/images/png/about-hero-1.png";

              return (
                <div
                  key={`${item.src}-${index}`}
                  className={`relative w-[300px] overflow-hidden rounded-[32px] sm:w-[340px] lg:w-[392px] ${item.heightClass}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading={shouldEagerLoad ? "eager" : "lazy"}
                    className="object-cover"
                    sizes="392px"
                  />
                </div>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white via-white/95 to-transparent sm:w-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white via-white/95 to-transparent sm:w-10"
          />
        </div>
      </div>
    </section>
  );
}
