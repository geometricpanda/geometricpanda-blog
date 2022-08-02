import {FC} from 'react';
import {format} from 'date-fns';
import clsx from 'clsx';


import {BlokResolverComponentProps} from '../block-resolver.interface';
import {Color, HeroComponentBlok} from '../../../../helpers/bloks.interface';
import styles from './index.module.css';
import {HexSeparator} from '../../hex-separator';
import {Container} from '../../container';

export interface HeroBlokProps extends BlokResolverComponentProps<HeroComponentBlok> {
}

export const HeroBlok: FC<HeroBlokProps> = ({blok, story}) => {
  const firstPublishedAt =
    story.first_published_at
      ? format(new Date(story.first_published_at), 'do LLLL yyyy')
      : null

  const firstPublishedAtStamp =
    story.first_published_at
      ? format(new Date(story.first_published_at), 'yyyy-MM-dd HH:ii')
      : null

  return (
    <div className={clsx({
      [styles['hero-blok']]: true,
      [styles['hero-blok--black']]: blok.colour === Color.BLACK,
      [styles['hero-blok--grey']]: blok.colour === Color.GREY,
      [styles['hero-blok--dark-blue']]: blok.colour === Color.DARK_BLUE,
      [styles['hero-blok--dark-magenta']]: blok.colour === Color.DARK_MAGENTA,
      [styles['hero-blok--dark-teal']]: blok.colour === Color.DARK_TEAL,
    })}>

      <div className={styles['hero-blok__wrapper']}>
        <HexSeparator color={Color.GREY}/>
        <Container className={styles['hero-blok__content']}>
          <h1 className={styles['hero-block__title']}>
            {blok.title}
          </h1>
          <p className={styles['hero-block__subtitle']}>
            {blok.subtitle}
          </p>
          {story.first_published_at && firstPublishedAt && firstPublishedAtStamp && (
            <p className={styles['hero-block__date']}>
              First Published: <time dateTime={firstPublishedAtStamp}>{firstPublishedAt}</time>
            </p>
          )}
        </Container>
      </div>

      <HexSeparator color={blok.colour}/>
    </div>
  )
}
