import {FC} from 'react';
import Head from 'next/head';
import {StoryblokComponent, storyblokEditable} from '@storyblok/react';
import type {SbBlokData} from '@storyblok/js/dist/types/types';

import styles from './index.module.css';
import {AssetInterface} from '../assets-blok/asset';

export interface ArticleBlokInterface extends SbBlokData {
  seo_title: string;
  seo_description: string;
  seo_image: AssetInterface;
  body: Array<SbBlokData>
}

export interface ArticleBlokProps {
  blok: ArticleBlokInterface,
}

export const ArticleBlok: FC<ArticleBlokProps> = ({blok}) => (
  <>
    <Head>
      <title>{`${blok.seo_title} • Geometric Panda`}</title>
      <meta name="description" content={blok.seo_description}/>
    </Head>
    <div className={styles['article']} {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent
          key={nestedBlok._uid}
          blok={nestedBlok}/>
      ))}
    </div>
  </>
)
