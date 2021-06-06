import { Image } from './index';

const src =
  'https://images.ctfassets.net/b2wulskpf6cd/3G7F3uoCGinHNLk2C0eqXS/e8e1000a2813bf0ba5822d33094921e7/pexels-canva-studio-3153198.jpg';
export default {
  title: 'Media / Responsive Image',
  component: Image,
};

export const Default = () => (
  <Image height={160} width={320} alt={'Generic Image'} src={src} />
);
