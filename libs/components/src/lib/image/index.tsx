import { FC, useEffect, useState } from 'react';
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

const getFluidSrcUrl = (
  src: string,
  breakpoint: Breakpoint,
  width: number,
  height: number
): string => {
  const ratio = height / width;
  const w = breakpoint.toString();
  const h = Math.ceil(breakpoint * ratio).toString();

  const url = new URL(src);
  url.searchParams.set('w', w);
  url.searchParams.set('h', h);
  url.searchParams.set('f', 'faces');
  url.searchParams.set('fit', 'thumb');
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('q', '80');

  return url.toString();
};

const getFixedSrcUrl = (
  src: string,
  density: Density,
  width: number,
  height: number
): string => {
  const w = (width * density).toString();
  const h = (height * density).toString();

  const url = new URL(src);
  url.searchParams.set('w', w);
  url.searchParams.set('h', h);
  url.searchParams.set('f', 'faces');
  url.searchParams.set('fit', 'thumb');
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('q', '80');

  return url.toString();
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
  const [aspectRatio, setAspectRatio] = useState<string>('1 / 1');
  const [srcM1x, setSrcM1x] = useState<string>('');
  const [srcM2x, setSrcM2x] = useState<string>('');
  const [srcMW1x, setSrcMW1x] = useState<string>('');
  const [srcMW2x, setSrcMW2x] = useState<string>('');
  const [srcT1x, setSrcT1x] = useState<string>('');
  const [srcT2x, setSrcT2x] = useState<string>('');
  const [srcD1x, setSrcD1x] = useState<string>('');
  const [srcD2x, setSrcD2x] = useState<string>('');

  const pictureClassName = useClassNames(
    [
      styles['c-image'],
      {
        [styles['c-image--mb']]: mb,
        [styles['c-image--border-sm']]: border === 'sm',
        [styles['c-image--border-off']]: !border
      }
    ],
    [mb, border]
  );

  useEffect(() => {
    if (!src) {
      return;
    }
    if (fixed) {
      setSrcM1x(getFixedSrcUrl(src, Density.Standard, width, height));
      setSrcM2x(getFixedSrcUrl(src, Density.Double, width, height));
      setSrcMW1x(getFixedSrcUrl(src, Density.Standard, width, height));
      setSrcMW2x(getFixedSrcUrl(src, Density.Double, width, height));
      setSrcT1x(getFixedSrcUrl(src, Density.Standard, width, height));
      setSrcT2x(getFixedSrcUrl(src, Density.Double, width, height));
      setSrcD1x(getFixedSrcUrl(src, Density.Standard, width, height));
      setSrcD2x(getFixedSrcUrl(src, Density.Double, width, height));
    } else {
      setSrcM1x(getFluidSrcUrl(src, Breakpoint.Mobile, width, height));
      setSrcM2x(getFluidSrcUrl(src, Breakpoint.Mobile_Retina, width, height));
      setSrcMW1x(getFluidSrcUrl(src, Breakpoint.Mobile_Wide, width, height));
      setSrcMW2x(getFluidSrcUrl(src, Breakpoint.Mobile_Wide_Retina, width, height));
      setSrcT1x(getFluidSrcUrl(src, Breakpoint.Tablet, width, height));
      setSrcT2x(getFluidSrcUrl(src, Breakpoint.Tablet_Retina, width, height));
      setSrcD1x(getFluidSrcUrl(src, Breakpoint.Desktop, width, height));
      setSrcD2x(getFluidSrcUrl(src, Breakpoint.Desktop_Retina, width, height));
    }
  }, [src, width, height, alt, fixed]);

  useEffect(() => {
    const ratio = height / width;
    setAspectRatio(`1 / ${ratio}`);
  }, [width, height]);

  return (
    <picture className={pictureClassName} style={{ aspectRatio }}>

      {srcD1x && srcD2x && (
        <source
          media={`(min-width: ${Breakpoint.Desktop}px)`}
          srcSet={getSrcSet(srcD1x, srcD2x)} />
      )}

      {srcT1x && srcT2x && (
        <source
          media={`(min-width: ${Breakpoint.Tablet}px)`}
          srcSet={getSrcSet(srcT1x, srcT2x)} />
      )}

      {srcMW1x && srcMW2x && (
        <source
          media={`(min-width: ${Breakpoint.Mobile_Wide}px)`}
          srcSet={getSrcSet(srcMW1x, srcMW2x)} />
      )}

      {srcM1x && srcM2x && (
        <>
          <source srcSet={getSrcSet(srcM1x, srcM2x)} />
          <img className={styles['c-image__img']}
               width={width}
               height={height}
               src={srcM1x}
               alt={alt} />
        </>
      )}
    </picture>
  );
};

