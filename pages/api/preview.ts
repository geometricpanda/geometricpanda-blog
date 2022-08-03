import {NextApiRequest, NextApiResponse} from 'next';
import crypto from 'node:crypto'

const {STORYBLOCK_ACCESS_TOKEN} = process.env

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse) => {

  const storyBlokToken = req.query['_storyblok_tk[token]'];
  const storyBlokSpaceId = req.query['_storyblok_tk[space_id]'];
  const storyBlokTimestamp = req.query['_storyblok_tk[timestamp]'];
  const storyBlokPublished = req.query['_storyblok_published'];

  if (storyBlokPublished) {
    res.clearPreviewData();
    return res.redirect(`/${req.query.slug}`);
  }

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
    res.setHeader('Set-Cookie', 'SameSite=None;Secure');
    res.setPreviewData({});
    res.redirect(`/${req.query.slug}`);
  } catch (e) {
    console.log(e);
    return res.status(401).json({message: 'Invalid slug'})
  }
}

export default handler
