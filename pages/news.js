import ArticleGrid from "../components/ArticleGrid";
import NewsCard from "../components/Cards/NewsCard";
import Layout from "../components/Layout";
import { getArticlesPreview } from "../lib/community";

export default function News({ articles }) {
  return (
    <div className="container">
      <Layout title={"The latest updates!"}>
        <ArticleGrid>
          {articles.map((article) => (
            <NewsCard
              article={article}
              key={article.id}
              href={"/news/[slug]"}
              as={"/news/" + article.slug}
            />
          ))}
        </ArticleGrid>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      articles: await getArticlesPreview(),
    },
  };
}