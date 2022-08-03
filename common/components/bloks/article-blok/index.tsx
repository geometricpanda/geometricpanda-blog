import {FC} from 'react';
import {StoryblokComponent, storyblokEditable} from '@storyblok/react';
import type {SbBlokData} from '@storyblok/js/dist/types/types';

import styles from './index.module.css';
import Head from 'next/head';

export interface ArticleBlokInterface extends SbBlokData {
  title: string;
  description: string;
  body: Array<SbBlokData>
}

export interface ArticleBlokProps {
  blok: ArticleBlokInterface,
}

export const ArticleBlok: FC<ArticleBlokProps> = ({blok}) => (
  <>
    <Head>
      <title>{blok.title} • Geometric Panda</title>
      <meta name="description" content={blok.description}/>
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
