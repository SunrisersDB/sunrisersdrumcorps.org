import { GetServerSideProps, GetStaticProps } from "next";
import Layout from "../../components/layout";
import { NewsArticleProps } from "../../components/NewsArticle/NewsArticle";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params.slug);

  const article = await prisma.newsArticle.findUnique({
    where: {
      slug: String(params.slug) ?? "",
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  // NOTE -- NextJS does not like Date objects, so we have to parse things.
  // https://simplernerd.com/next-js-error-serializing-date-returned-from-getserversideprops/
  // https://github.com/vercel/next.js/issues/13209#issuecomment-633149650
  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
    },
  };
};

type NewsArticlePageProps = {
  article: NewsArticleProps;
};

const NewsArticle: React.FC<NewsArticlePageProps> = (props) => {
  return (
    <Layout>
      <main>
        <h1>{props.article.title}</h1>
        <p>{props.article.content}</p>
      </main>
    </Layout>
  );
};

export default NewsArticle;
