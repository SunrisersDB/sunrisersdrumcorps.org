import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout";
import NewsArticle, {
  NewsArticleProps,
} from "../../components/NewsArticle/NewsArticle";
import prisma from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.newsArticle.findMany({
    where: { published: true },
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
      feed: JSON.parse(JSON.stringify(feed)),
    },
  };
};

type NewsProps = {
  feed: NewsArticleProps[];
};

const News: React.FC<NewsProps> = (props) => {
  return (
    <Layout>
      <Header>
        
      </Header>
      <h1>News</h1>

      <main>
        {props.feed.map((article) => {
          return (
            <div key={article.id}>
              <NewsArticle article={article} displayAllContent={true} />
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export default News;
