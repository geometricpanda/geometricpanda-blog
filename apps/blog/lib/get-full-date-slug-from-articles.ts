import { format } from 'date-fns';
import { Article } from '../contentful/interface';

export const getFullDateSlugFromArticle = (
  item: Pick<Article, 'sys' | 'slug'>
): string => {
  const parsedDate = new Date(item.sys.firstPublishedAt);
  const friendlyDate = format(parsedDate, 'yyyy/MM/dd');
  return `/articles/${friendlyDate}`;
};
