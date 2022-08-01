import {getAllStories} from './storyblock-client';


export const getBlogStaticPaths = async () => {
  const articles = await getAllStories([], {starts_with: 'blog/'})

  return articles.map(({
    full_slug,
    slug,
  }) => {

    const params = full_slug.split('/')
    const [, year, month, day] = params;

    return {
      params: {
        slug,
        year,
        month,
        day,
      },
    }

  });


}
