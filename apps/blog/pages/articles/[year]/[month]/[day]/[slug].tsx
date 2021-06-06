import React, { FC, useEffect, useState } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import {
  Container,
  FreeText,
  Image,
  PageHeader,
} from '@geometricpanda/react-components';
import { formatISO, parse } from 'date-fns';

import {
  getArticle,
  getArticleSlugs,
} from '../../../../../contentful/articles';
import { getFullSlugFromArticle } from '../../../../../lib/get-full-slug-from-article';

import type { Article } from '../../../../../contentful/interface';
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
  const [publishedDate, setPublishedDate] = useState<Date>();
  const [preview, setPreview] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [heroImg, setHeroImg] = useState<string>('');
  const [heroAlt, setHeroAlt] = useState<string>('');

  useEffect(() => {
    setTitle(article.title);
    setPublishedDate(new Date(article.sys.firstPublishedAt));
    setPreview(documentToHtmlString(article.intro.json));
    setContent(documentToHtmlString(article.content.json));
    setHeroAlt(article.hero.title);
    setHeroImg(article.hero.url);
  }, [article]);

  return (
    <>
      <Head>
        <title>{title} | Geometric Panda</title>
      </Head>
      <Container>
        <article>
          <PageHeader date={publishedDate}>{title}</PageHeader>
          <Image height={150} width={300} alt={heroAlt} src={heroImg} mb />
          <FreeText html={`${preview}${content}`} />
        </article>
      </Container>
    </>
  );
};

export default Page;
