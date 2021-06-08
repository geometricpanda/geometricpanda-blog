import { FC } from 'react';
import styles from './index.module.css';
import { useClassNames } from '../utils/useClassNames';

interface ImageProps {
  height: number;
  width: number;
  alt: string;
  src: string;
  mb?: boolean;
  border?: boolean | 'sm';
  fixed?: boolean;
}

enum Breakpoint {
  Mobile = 400,
  Mobile_Retina = 800,
  Mobile_Wide = 600,
  Mobile_Wide_Retina = 1200,
  Tablet = 768,
  Tablet_Retina = 1536,
  Desktop = 1000,
  Desktop_Retina = 2000,
}

enum Density {
  Standard = 1,
  Double = 2,
}

const constructUrl =
  (src: string, width: string, height: string): string => {
    const url = new URL(src);
    url.searchParams.set('w', width);
    url.searchParams.set('h', height);
    url.searchParams.set('f', 'faces');
    url.searchParams.set('fit', 'thumb');
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('q', '80');
    return url.toString();
  };

const getFluidSrcUrl = (
  src: string,
  breakpoint: Breakpoint,
  width: number,
  height: number,
  ratio: number
): string => {
  const w = breakpoint.toString();
  const h = Math.ceil(breakpoint * ratio).toString();
  return constructUrl(src, w, h);
};

const getFixedSrcUrl = (
  src: string,
  density: Density,
  width: number,
  height: number
): string => {
  const w = (width * density).toString();
  const h = (height * density).toString();
  return constructUrl(src, w, h);
};

const getSrcSet = (img1x: string, img2x: string): string =>
  `${img1x}, ${img2x} 2x`;

export const Image: FC<ImageProps> = ({
                                        src,
                                        width,
                                        height,
                                        alt,
                                        mb,
                                        fixed,
                                        border = true
                                      }) => {


  const ratio = height / width;
  const aspectRatio = `1 / ${ratio}`;

  const srcM1x = fixed
    ? getFixedSrcUrl(src, Density.Standard, width, height)
    : getFluidSrcUrl(src, Breakpoint.Mobile, width, height, ratio);

  const srcM2x = fixed
    ? getFixedSrcUrl(src, Density.Double, width, height)
    : getFluidSrcUrl(src, Breakpoint.Mobile_Retina, width, height, ratio);

  const srcMW1x = fixed
    ? getFixedSrcUrl(src, Density.Standard, width, height)
    : getFluidSrcUrl(src, Breakpoint.Mobile_Wide, width, height, ratio);

  const srcMW2x = fixed
    ? getFixedSrcUrl(src, Density.Double, width, height)
    : getFluidSrcUrl(src, Breakpoint.Mobile_Wide_Retina, width, height, ratio);

  const srcT1x = fixed
    ? getFixedSrcUrl(src, Density.Standard, width, height)
    : getFluidSrcUrl(src, Breakpoint.Tablet, width, height, ratio);

  const srcT2x = fixed
    ? getFixedSrcUrl(src, Density.Double, width, height)
    : getFluidSrcUrl(src, Breakpoint.Tablet_Retina, width, height, ratio);

  const srcD1x = fixed
    ? getFixedSrcUrl(src, Density.Standard, width, height)
    : getFluidSrcUrl(src, Breakpoint.Desktop, width, height, ratio);

  const srcD2x = fixed
    ? getFixedSrcUrl(src, Density.Double, width, height)
    : getFluidSrcUrl(src, Breakpoint.Desktop_Retina, width, height, ratio);

  const pictureClassName = useClassNames([{
    [styles['c-image']]: true,
    [styles['c-image--mb']]: mb,
    [styles['c-image--border-sm']]: border === 'sm',
    [styles['c-image--border-off']]: !border
  }], [mb, border]);

  return (
    <picture className={pictureClassName} style={{ aspectRatio }}>

      <source
        media={`(min-width: ${Breakpoint.Desktop}px)`}
        srcSet={getSrcSet(srcD1x, srcD2x)} />

      <source
        media={`(min-width: ${Breakpoint.Tablet}px)`}
        srcSet={getSrcSet(srcT1x, srcT2x)} />

      <source
        media={`(min-width: ${Breakpoint.Mobile_Wide}px)`}
        srcSet={getSrcSet(srcMW1x, srcMW2x)} />

      <source srcSet={getSrcSet(srcM1x, srcM2x)} />

      <img className={styles['c-image__img']}
           width={width}
           height={height}
           src={srcM1x}
           alt={alt} />

    </picture>
  );
};

