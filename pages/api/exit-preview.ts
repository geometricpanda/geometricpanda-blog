import {NextApiRequest, NextApiResponse} from 'next';

const exitPreview = async (
  req: NextApiRequest,
  res: NextApiResponse) => {
  const {slug = ''} = req.query;

  res.clearPreviewData();
  res.removeHeader('Set-Cookie');

  res.redirect(`/${slug}`);
}

export default exitPreview
