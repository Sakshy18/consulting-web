import Image from "next/image";
import Link from "next/link";

type InsightItem = {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
};

const insightItems: InsightItem[] = [
  {
    title: "Why Most Growth Strategies Fail & How to Prevents It",
    date: "Jan 25, 2026",
    image: "/images/png/home-news-insight-1.png",
    imageAlt: "Consultant reviewing strategy notes in office",
  },
  {
    title: "From Vision to Execution Turning Business into Results",
    date: "Jan 23, 2026",
    image: "/images/png/home-news-insight-2.png",
    imageAlt: "Consultants discussing business strategy at a meeting",
  },
];

export default function HomeNewsInsightSection() {
  return (
    <section className="w-full px-4 pb-16 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
        <div className="flex w-full max-w-[264px] flex-col gap-20 lg:pt-7">
          <div>
            <h2
              className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#191c21]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              News &amp; Insight
            </h2>
            <p
              className="mt-1.5 text-[18px] leading-7 text-[#33373d]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Get great news and insight from our expert team.
            </p>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 self-start rounded-full py-3 pr-5 text-[16px] leading-6 font-medium text-[#1a2e05]"
          >
            Explore More
            <Image src="/images/svg/icon-arrow-right.svg" alt="" aria-hidden="true" width={20} height={20} />
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {insightItems.map((item) => (
            <article key={item.title} className="flex flex-col">
              <div className="relative h-[220px] overflow-hidden rounded-t-[32px] sm:h-[234px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="px-4 pb-5 pt-5">
                <h3
                  className="text-[34px] leading-[1.2] font-medium tracking-[-0.312px] text-[#191c21] sm:text-[24px] sm:leading-8"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-6 text-[14px] leading-5 font-medium text-[#33373d]"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
