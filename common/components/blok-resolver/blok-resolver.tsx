import {FC, useCallback} from 'react';
import {StoryData} from 'storyblok-js-client';

import {BLOK, BlokComponent} from '../../../helpers/bloks.interface';
import {Bloks} from '../../../helpers/static-props';
import {SeparatorBlok} from './separator-blok';
import {SnippetBlok} from './snippet-blok';
import {AssetsBlok} from './assets-blok';
import {TextBlok} from './text-blok';
import {HeroBlok} from './hero-blok';

import styles from './blok-resolver.module.css';
import {YouTubeBlok} from './youtube-blok';

interface BlockResolverProps {
  story: StoryData<Bloks>,
}

export const BlokResolver: FC<BlockResolverProps> = ({story}) => {
  const {content} = story;

  const blokResolver = useCallback((blok: BlokComponent) => {
    switch (blok.component) {
      case BLOK.TEXT:
        return <TextBlok key={blok._uid} story={story} blok={blok}/>
      case BLOK.SNIPPET:
        return <SnippetBlok key={blok._uid} story={story} blok={blok}/>
      case BLOK.SEPARATOR:
        return <SeparatorBlok key={blok._uid} story={story} blok={blok}/>
      case BLOK.HERO:
        return <HeroBlok key={blok._uid} story={story} blok={blok}/>
      case BLOK.ASSET:
        return <AssetsBlok key={blok._uid} blok={blok} story={story}/>
      case BLOK.YOUTUBE:
        return <YouTubeBlok key={blok._uid} blok={blok} story={story}/>
      default:
        return null;
    }
  }, [story])

  return (
    <div className={styles['bloks']}>
      {content.body?.map(blok => blokResolver(blok))}
    </div>
  )
}
