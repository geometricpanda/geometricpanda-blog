import {NextApiRequest, NextApiResponse} from 'next';
import crypto from 'node:crypto'
import {Storyblok} from '../../common/helpers/storyblok-client';

const {STORYBLOCK_ACCESS_TOKEN} = process.env

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse) => {

  const storyBlokToken = req.query['_storyblok_tk[token]'];
  const storyBlokSpaceId = req.query['_storyblok_tk[space_id]'];
  const storyBlokTimestamp = req.query['_storyblok_tk[timestamp]'];

  if (!storyBlokToken || !storyBlokSpaceId || !storyBlokTimestamp) {
    return res
      .status(400)
      .json({message: 'Bad Request'})
  }

  if (+storyBlokTimestamp! < Math.floor(Date.now() / 1000) - 3600) {
    return res
      .status(401)
      .json({message: 'Invalid token'})
  }

  const validationString = [
    storyBlokSpaceId,
    STORYBLOCK_ACCESS_TOKEN,
    storyBlokTimestamp,
  ].join(':')

  const validationToken = crypto.createHash('sha1').update(validationString).digest('hex')

  if (storyBlokToken !== validationToken) {
    return res
      .status(401)
      .json({message: 'Invalid token'})
  }

  try {
    const post = await Storyblok.getStory(`${req.query.slug}`, {version: 'draft'})
    res.setHeader('Set-Cookie', 'SameSite=None;Secure');
    res.setPreviewData({});
    res.redirect(`/${post.data.story.full_slug}`);
  } catch (e) {
    console.log(e);
    return res.status(401).json({message: 'Invalid slug'})
  }
}

export default handler
