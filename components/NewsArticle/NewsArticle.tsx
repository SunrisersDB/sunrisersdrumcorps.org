import Link from "next/link";
import React, { Fragment } from "react";
import { paginateText } from "../../lib/utils";

export type NewsArticleProps = {
  id: number;
  title: string;
  slug: string | null;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  author: {
    id: number;
    email: string;
    name: string | null;
  } | null;
};

const NewsArticle: React.FC<{
  article: NewsArticleProps;
  displayAllContent: boolean;
}> = (props) => {
  const content = props.displayAllContent
    ? props.article.content
    : paginateText(props.article.content, 100);

  return (
    <Fragment>
      <Link href={`/news/${props.article.slug}`}>
        <h2>{props.article.title}</h2>
      </Link>

      <p>{content}</p>
    </Fragment>
  );
};

export default NewsArticle;
