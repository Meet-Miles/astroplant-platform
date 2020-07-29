import styled from "styled-components";
import Article from "../../components/Article";
import ArticleInfos from "../../components/ArticleInfos";
import ArticleCard from "../../components/cards/ArticleCard";
import Card from "../../components/cards/Card";
import Grid from "../../components/grids/Grid";
import PageLayout from "../../components/layouts/PageLayout";
import { getFullArticle } from "../../services/community";

const AuthorCard = styled(Card)`
  && {
    height: unset;
    margin: 2rem 0;
  }
`;

const RelatedArticle = styled(ArticleCard)`
  && {
    height: 420px;
    margin: 1rem 0;
  }
`;

export default function ArticlePage({ article, related }) {
  return (
    <PageLayout metaTitle={article.title} metaDescription={article.preview}>
      <Grid>
        <Article article={article} />
        <div>
          <h3>Author</h3>
          <AuthorCard>
            <ArticleInfos author={article.author} date={article.published_at} />
          </AuthorCard>
          <h3>Related Article</h3>
          {related.map((a) => (
            <RelatedArticle key={a.id} article={a} />
          ))}
        </div>
      </Grid>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const data = await getFullArticle(context.params.slug);

  return {
    props: {
      article: data.main_article[0],
      related: data.related_articles,
    },
  };
}
