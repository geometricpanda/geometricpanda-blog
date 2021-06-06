import type { Document } from '@contentful/rich-text-types';

export interface ContentfulResponse<T> {
  data: T;
}

export interface Article {
  sys: {
    firstPublishedAt: string;
  };
  title: string;
  slug: string;
  intro: {
    json: Document;
  };
  hero: {
    title: string;
    url: string;
  };
  content: {
    json: Document;
  };
}

export interface ArticleCollectionTotal {
  blogPostCollection: {
    total: number;
  };
}

export interface ArticleSlugs {
  blogPostCollection: {
    items: Array<Pick<Article, 'sys' | 'slug'>>;
  };
}

export interface ArticlePreviews {
  blogPostCollection: {
    items: Array<Pick<Article, 'sys' | 'slug' | 'intro' | 'title' | 'hero'>>;
  };
}

export interface ArticleCollection {
  blogPostCollection: {
    items: Array<Article>;
  };
}
