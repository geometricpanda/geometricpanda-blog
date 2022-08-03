import StoryblokClient, {StoryData} from 'storyblok-js-client';

const {STORYBLOCK_ACCESS_TOKEN} = process.env;

if (!STORYBLOCK_ACCESS_TOKEN) {
  throw new Error('Storyblock access token not found in env');
}

export const Storyblok = new StoryblokClient({
  accessToken: STORYBLOCK_ACCESS_TOKEN,
  // cache: {
  //   clear: 'auto',
  //   type: 'memory',
  // },
})



export const getAllStories = async (
  acc: Array<StoryData>,
  {
    starts_with = '',
    version = 'draft',
    per_page = 100,
    page = 1,
  },
): Promise<Array<StoryData>> => {

  const resp = await Storyblok.get('cdn/stories', {
    per_page,
    starts_with,
    page,
  });

  const newAcc = [...acc, ...resp.data.stories];

  return (+resp.headers['total'] > page)
    ? getAllStories(newAcc,
      {
        starts_with,
        version,
        per_page,
        page: page + 1,
      })
    : newAcc
}
