import { addDays, format, parse } from 'date-fns';
import {
  Container,
  PageHeader,
  Preview,
} from '@geometricpanda/react-components';

import {
  getArticlesForRange,
  getArticleSlugs,
} from '../../../../../contentful/articles';
import { getFullDateSlugFromArticle } from '../../../../../lib/get-full-date-slug-from-articles';

export async function getStaticPaths() {
  const articleSlugs = await getArticleSlugs();

  const paths = articleSlugs.reduce(
    (acc, article) => acc.add(getFullDateSlugFromArticle(article)),
    new Set<string>()
  );

  return {
    paths: [...paths],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year, month, day } = params;
  const from = `${year}-${month}-${day}`;
  const fromDate = parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date());
  const toDate = addDays(fromDate, 1);
  const to = format(toDate, 'yyyy-MM-dd');

  const friendlyDate = format(fromDate, 'do MMMM yyyy');

  const articles = await getArticlesForRange(from, to);
  return {
    props: {
      articles,
      friendlyDate,
    },
  };
}

const Page = ({ articles, friendlyDate }) => {
  return (
    <Container>
      <PageHeader>{friendlyDate}</PageHeader>
      {articles.map((article) => (
        <Preview
          key={article.slug}
          title={article.title}
          imageUrl={article.hero.url}
          imageAlt={article.hero.title}
          preview={article.intro.json}
        />
      ))}
    </Container>
  );
};

export default Page;
