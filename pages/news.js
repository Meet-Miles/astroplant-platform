import FeaturedArticleCard from "../components/cards/FeaturedArticleCard";
import ArticleGrid from "../components/grids/ArticleGrid";
import MainLayout from "../components/layouts/MainLayout";
import { getArticles } from "../services/community";

export default function News({ featured, articles }) {
  return (
    <MainLayout
      pageTitle={"The latest updates!"}
      metaTitle={"News"}
      metaDescription={"All the official news and update about AstroPlant !"}
    >
      <FeaturedArticleCard featuredArticle={featured} />
      <ArticleGrid articles={articles} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const data = await getArticles();

  return {
    props: {
      articles: data.previews,
      featured: data.featured[0],
    },
    // regenerate every 2 seconds
    revalidate: 2,
  };
}
