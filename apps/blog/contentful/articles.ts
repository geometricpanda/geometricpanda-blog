import { callContentful } from './api';
import {
  Article,
  ArticleCollection,
  ArticleCollectionTotal,
  ArticlePreviews,
  ArticleSlugs,
} from './interface';

async function getArticleCount(): Promise<number> {
  const query = `
    {
      blogPostCollection {
        total
      }
    }
  `;

  const response = await callContentful<ArticleCollectionTotal>(query);
  return response.data.blogPostCollection.total || 0;
}

export async function getArticleSlugs() {
  const query = `{
    blogPostCollection {
      items {
        sys {
          firstPublishedAt
        }
        slug,
      }
    }
  }`;

  const response = await callContentful<ArticleSlugs>(query);
  return response.data.blogPostCollection.items;
}

export async function getArticlesForRange(from, to) {
  const query = `{
    blogPostCollection (
      where: {
        sys: {
          firstPublishedAt_gte: "${from}",
          firstPublishedAt_lt: "${to}",
        }
      },
    ) {
      items {
        sys {
          firstPublishedAt
        },
        hero {
          title,
          url,
        },
        title,
        slug,
        intro {
          json,
        },
      }
    }
  }`;

  const response = await callContentful<ArticlePreviews>(query);
  return response.data.blogPostCollection.items;
}

export async function getArticle(date, slug): Promise<Article> {
  const query = `{
    blogPostCollection(
      where: {
        slug: "${slug}"
        sys: {
          firstPublishedAt_gte: "${date.toString()}"
        }
      },
      limit: 1
      ) {
      items {
        sys {
          firstPublishedAt
        },
        hero {
          title,
          url,
        },
        title,
        slug,
        intro {
          json
        },
        content{
          json,
        }
      }
    }
  }`;

  const response = await callContentful<ArticleCollection>(query);
  return response.data.blogPostCollection.items[0];
}
