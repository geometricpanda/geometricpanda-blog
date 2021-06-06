import { format } from 'date-fns';

export const getFullSlugFromArticle = (item): string => {
  const parsedDate = new Date(item.sys.firstPublishedAt);
  const friendlyDate = format(parsedDate, 'yyyy/MM/dd');
  return `/articles/${friendlyDate}/${item.slug}`;
};
