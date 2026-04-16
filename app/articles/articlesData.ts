export type ArticleBodyBlock =
  | {
      type: "intro";
      heading: string;
      text: string;
    }
  | {
      type: "section";
      heading: string;
      text?: string;
      bullets?: string[];
      closing?: string;
    }
  | {
      type: "image";
      image: string;
      alt: string;
    };

export type SidebarRelatedBlog = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export type ArticleData = {
  slug: string;
  title: string;
  pageTitle?: string;
  date: string;
  category: string;
  teaser: string;
  description: string;
  cardImage: string;
  heroImage: string;
  heroOverlayImage?: string;
  author: string;
  authorImage?: string;
  readTime: string;
  breadcrumbs: [string, string, string];
  topTags: string[];
  bottomTags: string[];
  bodyBlocks: ArticleBodyBlock[];
  relatedSidebarBlogs: SidebarRelatedBlog[];
  relatedSlugs: string[];
};

const sharedSidebarTopTags = [
  "Scalable Growth",
  "Leadership",
  "Revenue Growth",
  "Operations",
  "Performance Management",
  "Market Expansion",
];

const sharedSidebarBottomTags = [
  "Growth Strategy",
  "Finance",
  "Innovation",
  "Marketing",
  "Productivity",
  "Business",
];

export const articles: ArticleData[] = [
  {
    slug: "aligning-leadership-for-strategic-success",
    title: "Aligning Leadership for Strategic Success",
    pageTitle: "Building Scalable Growth Strategies For Business",
    date: "24 Aug 2026",
    category: "Business Strategy",
    teaser:
      "Discover how structured planning, operational discipline, and financial clarity create a foundation for long-term business growth.",
    description:
      "Sustainable business growth doesn't happen by chance. It requires intentional planning, efficient systems, and a long-term vision.",
    cardImage: "/images/png/articles-grid-1.png",
    heroImage: "/images/png/article-growth-hero.png",
    author: "Alex Morgan",
    authorImage: "/images/png/article-author-alex.png",
    readTime: "6 min read",
    breadcrumbs: ["Home", "Our Blogs", "Business Growth"],
    topTags: sharedSidebarTopTags,
    bottomTags: sharedSidebarBottomTags,
    bodyBlocks: [
      {
        type: "intro",
        heading: "Scalable Growth Fundamentals",
        text: "Sustainable business growth doesn't happen by chance. It requires intentional planning, efficient systems, and a long-term vision. Companies that scale successfully focus on building strong operational foundations and repeatable processes that support expansion without increasing complexity.",
      },
      {
        type: "section",
        heading: "Establish Clear Growth Systems",
        text: "Growth requires more than increased effort — it requires structure and scalability.",
        bullets: [
          "Document and standardize operational workflows",
          "Automate repetitive and manual tasks",
          "Implement scalable software and digital tools",
          "Define measurable KPIs across departments",
          "Create structured onboarding and internal training systems",
        ],
      },
      {
        type: "section",
        heading: "Avoid Growth Without Strategy",
        text: "Expanding without a clear roadmap can create instability and inefficiencies. Strategic growth ensures stability while scaling.",
        bullets: [
          "Set realistic, data-driven growth targets",
          "Monitor financial performance regularly",
          "Strengthen cash flow management",
          "Align leadership on long-term objectives",
          "Review and refine strategy quarterly",
        ],
      },
      {
        type: "image",
        image: "/images/png/article-growth-secondary.png",
        alt: "Professional reviewing growth metrics on laptop",
      },
      {
        type: "section",
        heading: "Optimize Resource Allocation and Investment",
        text: "How you allocate resources directly impacts your ability to scale successfully. Smart investment decisions ensure growth remains efficient and sustainable.",
        bullets: [
          "Prioritize high-return initiatives and core revenue drivers",
          "Reduce unnecessary operational expenses",
          "Invest in scalable technology and automation",
          "Allocate budget toward customer acquisition and retention",
          "Continuously evaluate ROI across departments",
        ],
        closing:
          "Strategic resource management strengthens profitability while supporting expansion.",
      },
      {
        type: "section",
        heading: "Final Thoughts",
        text: "Building scalable growth strategies requires clarity, discipline, and long-term vision. Businesses that focus on structured systems, financial stability, strong leadership, and data-driven decision-making position themselves for sustainable success.\n\nScaling isn't about rapid expansion alone — it's about creating a business model that can grow efficiently without sacrificing quality or performance.",
      },
    ],
    relatedSidebarBlogs: [
      {
        title: "How to Build a Scalable Business Model from Day One",
        date: "18 Feb 2026",
        image: "/images/png/article-related-1.png",
        href: "/articles/scaling-without-chaos-a-structured-approach",
      },
      {
        title: "5 Leadership Principles That Drive Sustainable Growth",
        date: "17 Feb 2026",
        image: "/images/png/article-related-2.png",
        href: "/articles/aligning-leadership-for-strategic-success",
      },
      {
        title: "Optimizing Operations for Rapid Business Expansion",
        date: "20 Feb 2026",
        image: "/images/png/article-related-3.png",
        href: "/articles/operational-efficiency-where-most-businesses",
      },
    ],
    relatedSlugs: [
      "turning-data-into-smarter-business-decisions",
      "financial-visibility-as-a-growth-lever",
      "scaling-without-chaos-a-structured-approach",
    ],
  },
  {
    slug: "turning-data-into-smarter-business-decisions",
    title: "Turning Data Into Smarter Business Decisions",
    date: "Jan 25, 2026",
    category: "Decision Intelligence",
    teaser: "Build better decisions with actionable data systems.",
    description:
      "Learn how to move from fragmented reports to high-signal decision frameworks that leadership teams can trust.",
    cardImage: "/images/png/articles-grid-2.png",
    heroImage: "/images/png/articles-grid-2.png",
    author: "Execora Analytics Practice",
    readTime: "7 min read",
    breadcrumbs: ["Home", "Our Blogs", "Decision Intelligence"],
    topTags: sharedSidebarTopTags,
    bottomTags: sharedSidebarBottomTags,
    bodyBlocks: [
      {
        type: "intro",
        heading: "From Metrics to Meaning",
        text: "Most organizations track plenty of numbers but still struggle to decide quickly. The missing piece is context: which numbers indicate progress and which ones are noise.",
      },
      {
        type: "section",
        heading: "Designing a Decision Framework",
        text: "Define a small set of leading indicators for each strategic objective and pair them with clear decision thresholds.",
        bullets: [
          "Map metrics directly to strategic objectives",
          "Set decision thresholds and ownership",
          "Review indicators on a regular cadence",
          "Automate alerts for threshold breaches",
        ],
      },
    ],
    relatedSidebarBlogs: [],
    relatedSlugs: [
      "operational-efficiency-where-most-businesses",
      "financial-visibility-as-a-growth-lever",
      "aligning-leadership-for-strategic-success",
    ],
  },
  {
    slug: "operational-efficiency-where-most-businesses",
    title: "Operational Efficiency: Where Most Businesses",
    date: "Jan 25, 2026",
    category: "Operations",
    teaser: "Find and fix hidden inefficiencies before they scale.",
    description:
      "A practical guide to identifying bottlenecks, reducing handoff friction, and improving execution velocity.",
    cardImage: "/images/png/articles-grid-3.png",
    heroImage: "/images/png/articles-grid-3.png",
    author: "Execora Operations Group",
    readTime: "5 min read",
    breadcrumbs: ["Home", "Our Blogs", "Operations"],
    topTags: sharedSidebarTopTags,
    bottomTags: sharedSidebarBottomTags,
    bodyBlocks: [
      {
        type: "intro",
        heading: "The Hidden Cost of Friction",
        text: "Operational friction often hides in recurring delays, approval loops, and unclear ownership between teams.",
      },
      {
        type: "section",
        heading: "Improvement Without Disruption",
        text: "Prioritize process fixes by impact and implementation effort. Start with repetitive high-volume workflows first.",
      },
    ],
    relatedSidebarBlogs: [],
    relatedSlugs: [
      "scaling-without-chaos-a-structured-approach",
      "aligning-leadership-for-strategic-success",
      "turning-data-into-smarter-business-decisions",
    ],
  },
  {
    slug: "scaling-without-chaos-a-structured-approach",
    title: "Scaling Without Chaos: A Structured Approach",
    date: "Jan 25, 2026",
    category: "Growth",
    teaser: "Scale systems and teams without losing control.",
    description:
      "How to design operating systems that support growth while preserving quality, accountability, and speed.",
    cardImage: "/images/png/articles-grid-4.png",
    heroImage: "/images/png/articles-grid-4.png",
    author: "Execora Growth Team",
    readTime: "8 min read",
    breadcrumbs: ["Home", "Our Blogs", "Growth"],
    topTags: sharedSidebarTopTags,
    bottomTags: sharedSidebarBottomTags,
    bodyBlocks: [
      {
        type: "intro",
        heading: "Structure Is a Growth Enabler",
        text: "Growth introduces complexity across people, processes, and priorities. Without structure, complexity becomes noise.",
      },
      {
        heading: "Practical Steps to Improve Alignment",
        type: "section",
        text: "Effective scale requires clear governance, role clarity, and lightweight operating rituals that evolve with team size.",
        bullets: [
          "Formalize planning cadence",
          "Set KPI ownership",
          "Create cross-functional decision forums",
          "Document scalable process patterns",
        ],
      },
    ],
    relatedSidebarBlogs: [],
    relatedSlugs: [
      "operational-efficiency-where-most-businesses",
      "financial-visibility-as-a-growth-lever",
      "from-vision-to-execution-implementing",
    ],
  },
  {
    slug: "financial-visibility-as-a-growth-lever",
    title: "Financial Visibility as a Growth Lever",
    date: "Jan 25, 2026",
    category: "Finance Strategy",
    teaser: "Turn financial clarity into strategic confidence.",
    description:
      "See how better financial visibility improves planning quality, risk management, and growth execution.",
    cardImage: "/images/png/articles-grid-5.png",
    heroImage: "/images/png/articles-grid-5.png",
    author: "Execora Finance Advisory",
    readTime: "6 min read",
    breadcrumbs: ["Home", "Our Blogs", "Finance Strategy"],
    topTags: sharedSidebarTopTags,
    bottomTags: sharedSidebarBottomTags,
    bodyBlocks: [
      {
        type: "intro",
        heading: "Visibility Before Velocity",
        text: "Many organizations push for growth before building reliable financial visibility. The result is misallocated spend and unclear profitability signals.",
      },
      {
        type: "section",
        heading: "The Right Financial Signals",
        text: "Focus on decision-grade metrics such as contribution margin by segment, cash conversion cycles, and forecast accuracy.",
      },
    ],
    relatedSidebarBlogs: [],
    relatedSlugs: [
      "operational-efficiency-where-most-businesses",
      "scaling-without-chaos-a-structured-approach",
      "aligning-leadership-for-strategic-success",
    ],
  },
  {
    slug: "from-vision-to-execution-implementing",
    title: "From Vision to Execution Implementing",
    date: "Jan 25, 2026",
    category: "Execution",
    teaser: "Bridge strategic vision with day-to-day delivery.",
    description:
      "A blueprint for turning strategic ambitions into executable roadmaps, ownership plans, and measurable outcomes.",
    cardImage: "/images/png/articles-grid-6.png",
    heroImage: "/images/png/articles-grid-6.png",
    author: "Execora Strategy Office",
    readTime: "7 min read",
    breadcrumbs: ["Home", "Our Blogs", "Execution"],
    topTags: sharedSidebarTopTags,
    bottomTags: sharedSidebarBottomTags,
    bodyBlocks: [
      {
        type: "intro",
        heading: "Execution Starts With Clarity",
        text: "Vision alone does not create progress. Teams need clear priorities, sequencing logic, and realistic constraints.",
      },
      {
        type: "section",
        heading: "Creating an Execution Engine",
        text: "Establish weekly progress reviews and monthly strategic checkpoints to keep teams aligned and accountable.",
      },
    ],
    relatedSidebarBlogs: [],
    relatedSlugs: [
      "scaling-without-chaos-a-structured-approach",
      "aligning-leadership-for-strategic-success",
      "operational-efficiency-where-most-businesses",
    ],
  },
];

export const featuredArticles: ArticleData[] = [
  {
    ...articles[0],
    title: "Building Scalable Growth Strategies for Business",
    teaser:
      "Discover how structured planning, operational discipline, and financial clarity create a foundation for long-term business growth.",
    heroImage: "/images/png/articles-feature-main.png",
    heroOverlayImage: "/images/png/articles-feature-overlay.png",
    category: "Growth Strategy",
    date: "18 Jul 2023",
  },
  articles[1],
  articles[2],
];

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesBySlugs(slugs: string[]): ArticleData[] {
  return slugs.map((slug) => getArticleBySlug(slug)).filter((article): article is ArticleData => Boolean(article));
}

