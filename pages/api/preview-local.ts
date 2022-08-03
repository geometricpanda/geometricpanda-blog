import {NextApiRequest, NextApiResponse} from 'next';
import crypto from 'node:crypto'
import {Storyblok} from '../../helpers/storyblock-client';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse) => {

  if (process.env.NODE_ENV === 'production') {
    res
      .status(404)
      .send('Not Found')
  }

  res.setPreviewData({});
  res.redirect(`/`);

}

export default handler
