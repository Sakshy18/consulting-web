"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { articles, featuredArticles } from "./articlesData";

const AUTO_ROTATE_MS = 6000;

export default function ArticlesInsightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const featured = useMemo(() => featuredArticles, []);
  const activeFeatured = featured[activeIndex];

  useEffect(() => {
    const startAt = Date.now();

    const tick = window.setInterval(() => {
      const elapsed = Date.now() - startAt;

      if (elapsed >= AUTO_ROTATE_MS) {
        window.clearInterval(tick);
        setProgress(0);
        setActiveIndex((previous) => (previous + 1) % featured.length);
        return;
      }

      const nextProgress = Math.min((elapsed / AUTO_ROTATE_MS) * 100, 100);
      setProgress(nextProgress);
    }, 60);

    return () => window.clearInterval(tick);
  }, [activeIndex, featured.length]);

  return (
    <section className="w-full bg-[#ffffff] px-4 py-12 sm:px-8 sm:py-14 lg:px-20 lg:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[14px] leading-5">
            <span className="text-[#334155]">Home</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e737a]" />
            <span className="font-medium text-[#020617]">Latest Articles</span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h1
              className="w-full max-w-[538px] text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Business
              <br />
              Strategy Insights
            </h1>
            <p className="w-full max-w-[530px] text-[18px] leading-7 text-[#4b5563]">
              Practical guidance, strategic thinking, and expert insights to help your
              organization grow with clarity and confidence.
            </p>
          </div>
        </div>

        <article className="relative rounded-[40px] bg-[#fafafa] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative min-h-[320px] w-full max-w-[469px]">
              {featured.map((article, index) => (
                <div
                  key={article.slug}
                  className={[
                    "absolute inset-0 flex flex-col justify-between transition-all duration-700 ease-in-out",
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0",
                  ].join(" ")}
                  aria-hidden={index !== activeIndex}
                >
                  <div>
                    <Link href={`/articles/${article.slug}`}>
                      <h2
                        className="text-[32px] leading-10 font-medium tracking-[-0.32px] text-[#070a0f]"
                        style={{ fontFamily: "var(--font-inter-tight)" }}
                      >
                        {article.title}
                      </h2>
                    </Link>
                    <p className="mt-2 max-w-[430px] text-[16px] leading-6 text-[#070a0f]">
                      {article.teaser}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2">
                      <Image
                        src="/images/svg/article-icon-calendar.svg"
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                      />
                      <span className="text-[16px] leading-6 font-medium text-[#6e737a]">{article.date}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2">
                    {featured.map((_, progressIndex) => (
                      <div
                        key={progressIndex}
                        className={[
                          "overflow-hidden rounded-full bg-[#dadce0] transition-all duration-300",
                          progressIndex === activeIndex ? "h-2.5 w-7" : "h-2.5 w-2.5",
                        ].join(" ")}
                      >
                        <div
                          className="h-full rounded-full bg-[#84cc16] transition-[width] duration-75 ease-linear"
                          style={{
                            width: progressIndex === activeIndex ? `${progress}%` : "0%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] sm:h-[405px] lg:max-w-[648px]">
              {featured.map((article, index) => (
                <div
                  key={article.slug}
                  className={[
                    "absolute inset-0 transition-opacity duration-700 ease-in-out",
                    index === activeIndex ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-hidden={index !== activeIndex}
                >
                  <Link href={`/articles/${article.slug}`} className="relative block h-full w-full">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 648px"
                    />
                    {article.heroOverlayImage ? (
                      <Image
                        src={article.heroOverlayImage}
                        alt=""
                        aria-hidden="true"
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 648px"
                      />
                    ) : null}
                  </Link>
                </div>
              ))}

              <div className="absolute bottom-4 right-4 rounded-full bg-white px-3.5 py-1.5 text-[16px] leading-[1.7] font-medium text-[#081717]">
                {activeFeatured.category}
              </div>
            </div>
          </div>
        </article>

        <div id="all-articles" className="grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-10 xl:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.title} className="w-full">
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="relative h-[98px] w-full overflow-hidden rounded-t-[16px] md:h-[234px] md:rounded-t-[32px]">
                  <Image
                    src={article.cardImage}
                    alt={article.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 50vw, 400px"
                  />
                </div>
                <div className="px-0 pt-3 md:px-3 md:pt-4">
                  <h3
                    className="text-[14px] leading-5 font-medium text-[#191c21] md:max-w-[330px] md:text-[24px] md:leading-8 md:tracking-[-0.312px]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-4 text-[#6e737a] md:text-[14px] md:leading-5 md:text-[#33373d]">
                    {article.date}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#all-articles"
            className="inline-flex items-center gap-2 rounded-full border border-[#e8eaed] px-5 py-3 text-center text-[16px] leading-6 font-medium text-[#070a0f] transition-colors hover:bg-white"
          >
            See More
            <Image src="/images/svg/icon-arrow-right.svg" alt="" aria-hidden="true" width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
