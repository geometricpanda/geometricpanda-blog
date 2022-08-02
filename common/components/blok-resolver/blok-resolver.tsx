import {FC, useCallback} from 'react';
import {BlokComponent, BLOK} from '../../../helpers/bloks.interface';
import {SnippetBlok} from './snippet-blok';
import {TextBlok} from './text-blok';
import {SeparatorBlok} from './separator-blok';
import {HeroBlok} from './hero-blok';

import styles from './blok-resolver.module.css';
import {StoryData} from 'storyblok-js-client';
import {Bloks} from '../../../helpers/static-props';

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
      default:
        return null;
    }
  }, [])

  return (
    <div className={styles['bloks']}>
      {content.body?.map(blok => blokResolver(blok))}
    </div>
  )
}
