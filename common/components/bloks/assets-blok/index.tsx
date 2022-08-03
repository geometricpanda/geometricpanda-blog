import {FC} from 'react';
import clsx from 'clsx';
import Image from 'next/future/image';
import {SbBlokData} from '@storyblok/js/dist/types/types';

import {Container} from '../../container';

import styles from './index.module.css';

export interface Asset {
  id: string;
  alt: string;
  copyright: string;
  fieldtype: 'asset',
  filename: string;
  focus: string,
  name: string;
  title: string;
}

export interface AssetsBlokInterface extends SbBlokData {
  images: Array<Asset>;
  videos: Array<Asset>;
}

export interface AssetsBlokProps {
  blok: AssetsBlokInterface;
}

const ImageAsset: FC<Asset> = ({filename, title, alt}) => {
  const segments = filename.split('/');
  const size = segments[5];
  const [width, height] = size.split('x');

  return (
    <a href={filename}
       title={title}
       rel={'noreferrer'}
       target={'_blank'}
       className={styles['asset']}>
      <Image
        className={styles['asset__media']}
        alt={alt}
        src={filename}
        width={width}
        height={height}/>
    </a>
  )
}
const VideoAsset: FC<Asset> = ({filename}) => (
  <div className={styles['asset']}>
    <video
      className={styles['asset__media']}
      controls={true}>
      <source src={filename}/>
    </video>
  </div>
)


export const AssetsBlok: FC<AssetsBlokProps> = ({blok}) => {
  const {images, videos} = blok;
  const count = images.length + videos.length;
  return (
    <Container className={clsx({
      [styles['assets']]: true,
      [styles['assets--multiple-2']]: count % 2 === 0,
      [styles['assets--multiple-3']]: count % 3 === 0,
      [styles['assets--multiple-4']]: count % 4 === 0,
    })}>
      {images.map(image => <ImageAsset key={image.id} {...image}/>)}
      {videos.map(image => <VideoAsset key={image.id} {...image}/>)}
    </Container>
  );
}




