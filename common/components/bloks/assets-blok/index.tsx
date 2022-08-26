import {FC} from 'react';
import clsx from 'clsx';
import {SbBlokData} from '@storyblok/js/dist/types/types';

import {Container} from '../../container';
import {ImageAsset, VideoAsset, AssetInterface} from './asset';
import styles from './index.module.css';
import {storyblokEditable} from '@storyblok/react';


export interface AssetsBlokInterface extends SbBlokData {
  images: Array<AssetInterface>;
  videos: Array<AssetInterface>;
}

export interface AssetsBlokProps {
  blok: AssetsBlokInterface;
}


export const AssetsBlok: FC<AssetsBlokProps> = ({blok}) => {
  const {images, videos} = blok;
  const count = images.length + videos.length;
  return (
    <Container>
      <div className={clsx({
        [styles['assets']]: true,
        [styles['assets--single']]: count === 1,
        [styles['assets--multiple-2']]: count % 2 === 0,
        [styles['assets--multiple-3']]: count % 3 === 0,
        [styles['assets--multiple-4']]: count % 4 === 0,
      })}
           {...storyblokEditable(blok)}>
        {images.map(image => <ImageAsset key={image.id} asset={image}/>)}
        {videos.map(image => <VideoAsset key={image.id} asset={image}/>)}
      </div>
    </Container>
  );
}




