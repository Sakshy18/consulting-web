import { notFound } from "next/navigation";
import ArticleDetailsPage from "@/app/articles/ArticleDetailsPage";
import { articles, getArticleBySlug } from "@/app/articles/articlesData";

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
