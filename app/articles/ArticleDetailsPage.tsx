import Image from "next/image";
import Link from "next/link";
import ArticleFavoriteButton from "./ArticleFavoriteButton";
import { ArticleData, getArticlesBySlugs } from "./articlesData";

type ArticleDetailsPageProps = {
  article: ArticleData;
};

type SocialIconType = "instagram" | "x" | "facebook" | "linkedin" | "share";

function SocialMediaIcon({ type }: { type: SocialIconType }) {
  const iconMap: Record<SocialIconType, string> = {
    instagram: "/images/png/instagram.png",
    x: "/images/svg/article-social-x.svg",
    facebook: "/images/svg/article-social-facebook.svg",
    linkedin: "/images/png/linkedin.png",
    share: "/images/svg/article-social-share.svg",
  };

  return <Image src={iconMap[type]} alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5" />;
}

export default function ArticleDetailsPage({ article }: ArticleDetailsPageProps) {
  const displayTitle = article.pageTitle ?? article.title;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://execora.com").replace(/\/$/, "");
  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const shareLinks: Record<SocialIconType, string> = {
    instagram: "https://www.instagram.com/",
    x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(displayTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    share: `mailto:?subject=${encodeURIComponent(displayTitle)}&body=${encodeURIComponent(`Check out this article: ${articleUrl}`)}`,
  };
  const shareLabels: Record<SocialIconType, string> = {
    instagram: "Open Instagram",
    x: "Share on X",
    facebook: "Share on Facebook",
    linkedin: "Share on LinkedIn",
    share: "Share by email",
  };
  const relatedSidebarBlogs =
    article.relatedSidebarBlogs.length > 0
      ? article.relatedSidebarBlogs
      : getArticlesBySlugs(article.relatedSlugs).slice(0, 3).map((item) => ({
          title: item.title,
          date: item.date,
          image: item.cardImage,
          href: `/articles/${item.slug}`,
        }));

  return (
    <main className="flex w-full flex-1 flex-col bg-[#ffffff] px-4 pb-10 pt-8 sm:px-8 lg:px-20 lg:pb-16 lg:pt-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
        <article className="w-full min-w-0 flex-1">
          <div className="flex items-center gap-3 text-[14px] leading-5 text-[#334155]">
            <Link href="/" className="hover:text-[#020617]">
              {article.breadcrumbs[0]}
            </Link>
            <span className="h-1 w-1 rounded-full bg-[#c7c9cc]" />
            <Link href="/articles" className="hover:text-[#020617]">
              {article.breadcrumbs[1]}
            </Link>
            <span className="h-1 w-1 rounded-full bg-[#c7c9cc]" />
            <span className="font-medium text-[#020617]">{article.breadcrumbs[2]}</span>
          </div>

          <h1 className="mt-4 text-[42px] leading-[54px] font-medium tracking-[-2.4px] text-[#020617]">
            {displayTitle}
          </h1>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#f1f5f9] bg-[#f8fafc] py-2 pl-2 pr-4">
                <div className="relative h-5 w-5 overflow-hidden rounded-full">
                  <Image
                    src={article.authorImage ?? "/images/png/article-author-alex.png"}
                    alt={article.author}
                    fill
                    className="object-cover"
                    sizes="20px"
                  />
                </div>
                <span className="text-[14px] leading-[18px] font-medium text-[#334155]">{article.author}</span>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#f1f5f9] bg-[#f8fafc] px-4 py-2 text-[14px] leading-[18px] font-medium text-[#334155]">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f1f5f9] bg-[#f8fafc] px-3 py-2 text-[14px] leading-[18px] font-medium text-[#484b52]">
                <Image src="/images/svg/article-icon-clock.svg" alt="" aria-hidden="true" width={20} height={20} />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f1f5f9] bg-[#f8fafc] px-3 py-2 text-[14px] leading-[18px] font-medium text-[#334155]">
                <Image src="/images/svg/article-icon-calendar.svg" alt="" aria-hidden="true" width={20} height={20} />
                {article.date}
              </span>
            </div>

            <ArticleFavoriteButton slug={article.slug} />
          </div>

          <div className="relative mt-4 h-[280px] w-full overflow-hidden rounded-[28px] sm:h-[480px] sm:rounded-[40px]">
            <Image
              src={article.heroImage}
              alt={displayTitle}
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 888px"
            />
            {article.heroOverlayImage ? (
              <Image
                src={article.heroOverlayImage}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 888px"
              />
            ) : null}
          </div>

          <div className="space-y-1">
            {article.bodyBlocks.map((block, index) => {
              if (block.type === "image") {
                return (
                  <div
                    key={`${block.type}-${index}`}
                    className="relative mt-4 h-[260px] w-full overflow-hidden rounded-[28px] sm:h-[399px] sm:rounded-[40px]"
                  >
                    <Image
                      src={block.image}
                      alt={block.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 888px"
                    />
                  </div>
                );
              }

              const headingClass =
                block.type === "intro"
                  ? "text-[42px] leading-10 tracking-[-1.28px] sm:text-[32px]"
                  : "text-[30px] leading-8 tracking-[-0.792px] sm:text-[24px]";

              return (
                <section key={`${block.type}-${block.heading}-${index}`} className="py-5">
                  <h2 className={`${headingClass} font-medium text-[#020617]`}>{block.heading}</h2>
                  <div className="mt-2 space-y-3 text-[16px] leading-6 text-[#1e293b]">
                    {block.text
                      ?.split("\n\n")
                      .map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {block.type === "section" && block.bullets ? (
                      <ul className="list-disc space-y-2 pl-5">
                        {block.bullets.map((bullet) => (
                          <li key={bullet} className="text-[16px] leading-6 font-medium text-[#1e293b]">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {block.type === "section" && block.closing ? <p>{block.closing}</p> : null}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-2 h-px w-full bg-[#e8eaed]" />
        </article>

        <aside className="w-full rounded-2xl bg-[#fafafa] lg:sticky lg:top-24 lg:w-[332px]">
          <div className="border-b border-[#f4f5f7] p-6">
            <p className="text-[14px] leading-5 text-[#0f172a]">Share on Social Media</p>
            <div className="mt-4 flex items-center justify-between">
              {(["instagram", "x", "facebook", "linkedin", "share"] as const).map((type) => (
                <Link
                  key={type}
                  href={shareLinks[type]}
                  aria-label={shareLabels[type]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#fafafa] bg-white"
                >
                  <SocialMediaIcon type={type} />
                </Link>
              ))}
            </div>
          </div>

          <div className="border-b border-black/4 p-6">
            <p className="text-[14px] leading-5 text-[#334155]">All Tags</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.topTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-[46px] bg-white px-4 py-2 text-[16px] leading-6 text-[#020617]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6">
            <p className="text-[14px] leading-5 text-[#334155]">Related Blogs</p>
            <div className="mt-4 space-y-4">
              {relatedSidebarBlogs.map((blog, index) => (
                <div key={blog.title}>
                  <Link href={blog.href} className="flex items-center gap-4">
                    <div className="relative h-[61px] w-[85px] overflow-hidden rounded-xl">
                      <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="85px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="inline-flex items-center gap-1.5 text-[12px] leading-4 font-medium text-[#3f3f46]">
                        <Image src="/images/svg/article-icon-calendar-sm.svg" alt="" aria-hidden="true" width={16} height={16} />
                        {blog.date}
                      </div>
                      <p className="mt-2 text-[14px] leading-5 font-medium tracking-[-0.6px] text-[#081717]">
                        {blog.title}
                      </p>
                    </div>
                  </Link>
                  {index < relatedSidebarBlogs.length - 1 ? <div className="mt-4 h-px w-full bg-[#e8eaed]" /> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-black/4 p-6">
            <p className="text-[14px] leading-5 text-[#334155]">All Tags</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.bottomTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-[10px] bg-white px-4 py-2 text-[16px] leading-6 text-[#020617]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-[32px] leading-10 font-medium tracking-[-1.28px] text-[#020617]">
              Join Our Newsletter
            </h3>
            <p className="mt-1.5 text-[16px] leading-6 text-[#334155]">
              Get expert insights on business strategy, growth frameworks, leadership, and
              performance delivered to your inbox.
            </p>

            <form
              className="mt-6"
              action="mailto:newsletter@execora.com"
              method="post"
              encType="text/plain"
            >
              <label className="text-[14px] leading-5 font-medium text-[#191c21]" htmlFor="newsletter-email">
                Email
              </label>
              <div className="mt-1.5 flex h-[52px] items-center gap-2 rounded-2xl border border-[#f4f5f7] bg-white px-5">
                <Image src="/images/svg/article-icon-mail.svg" alt="" aria-hidden="true" width={20} height={20} />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="example@yourmail.com"
                  required
                  className="w-full bg-transparent text-[14px] leading-5 text-[#6e737a] outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#e8eaed] bg-white px-5 py-3 text-[16px] leading-6 font-medium text-[#070a0f]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
