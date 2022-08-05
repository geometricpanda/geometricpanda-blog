import {NextApiRequest, NextApiResponse} from 'next';
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'UM2LrADUyvXeTgEjKgAKCgtt',
});

const {
  CACHE_REVALIDATE_TOKEN,
} = process.env

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {

  if (req.query.secret !== CACHE_REVALIDATE_TOKEN) {
    return res.status(401).json({message: 'Invalid token'})
  }

  const {story_id} = req.body;

  try {
    const story = await Storyblok.getStory(story_id);
    const {full_slug} = story.data.story;
    await Storyblok.flushCache();
    await res.revalidate(`/${full_slug}`);
    await res.revalidate(`/blog/page/0`);
    return res.json({revalidated: true});
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .send('Error revalidating')
  }
}

export default handler;
