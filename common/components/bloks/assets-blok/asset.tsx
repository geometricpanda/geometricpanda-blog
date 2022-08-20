import {FC} from 'react';
import styles from './index.module.css';
import Image from 'next/future/image';

export interface AssetInterface {
  id: string;
  alt: string;
  copyright: string;
  fieldtype: 'asset',
  filename: string;
  focus: string,
  name: string;
  title: string;
}

export interface AssetProps {
  asset: AssetInterface,
}


export const ImageAsset: FC<AssetProps> = ({asset}) => {
  const {filename, title, alt, ...rest} = asset;
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


export const VideoAsset: FC<AssetProps> = ({asset}) => {
  const {filename, title, alt} = asset;
  return (
    <div className={styles['asset']}>
      <video
        className={styles['asset__media']}
        controls={true}>
        <source src={filename}/>
      </video>
    </div>
  )
}

