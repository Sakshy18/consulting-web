import { notFound } from "next/navigation";
import ArticleDetailsPage from "@/app/pages/articles/ArticleDetailsPage";
import { articles, getArticleBySlug } from "@/app/pages/articles/data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Page({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailsPage article={article} />;
}
