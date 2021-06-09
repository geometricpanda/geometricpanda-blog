import React, { FC } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { formatISO, parse } from 'date-fns';

import {
  Container,
  FreeText,
  Image,
  PageHeader,
} from '@geometricpanda/react-components';

import type { Article } from '../../../../../contentful/interface';

import {
  getArticle,
  getArticleSlugs,
} from '../../../../../contentful/articles';

import { getFullSlugFromArticle } from '../../../../../lib/get-full-slug-from-article';

import Head from 'next/head';

export async function getStaticProps({ params }) {
  const { year, month, day, slug } = params;
  const date = parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date());
  const isoDate = formatISO(date);
  const article = await getArticle(isoDate, slug);

  return {
    props: {
      article: article,
    },
  };
}

export async function getStaticPaths() {
  const articleSlugs = await getArticleSlugs();
  return {
    paths: articleSlugs.map((item) => getFullSlugFromArticle(item)),
    fallback: false,
  };
}

interface PageProps {
  article: Article;
}

const Page: FC<PageProps> = ({ article }) => {
  const publishedDate = new Date(article.sys.firstPublishedAt);
  const preview = documentToHtmlString(article.intro.json);
  const content = documentToHtmlString(article.content.json);
  const title = article.title;
  const heroImg = article.hero.url;
  const heroAlt = article.hero.title;

  return (
    <>
      <Head>
        <title>{title} | Geometric Panda</title>
      </Head>
      <Container>
        <article>
          <PageHeader date={publishedDate}>{title}</PageHeader>
          <Image height={150} width={300} alt={heroAlt} src={heroImg} mb />
          <FreeText boldParagraph html={`${preview}${content}`} />
        </article>
      </Container>
    </>
  );
};

export default Page;
