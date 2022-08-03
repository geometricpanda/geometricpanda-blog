import {FC} from 'react';
import {StoryblokComponent, storyblokEditable} from '@storyblok/react';
import type {SbBlokData} from '@storyblok/js/dist/types/types';

import styles from './index.module.css';

export interface ArticleBlokInterface extends SbBlokData {
  title: string;
  description: string;
  body: Array<SbBlokData>
}

export interface ArticleBlokProps {
  blok: ArticleBlokInterface,
}

export const ArticleBlok: FC<ArticleBlokProps> = ({blok}) => (
  <main className={styles['article']} {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent
        key={nestedBlok._uid}
        blok={nestedBlok}/>
    ))}
  </main>
)
