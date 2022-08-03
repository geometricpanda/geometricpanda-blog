import {FC} from 'react';
import clsx from 'clsx';
import {storyblokEditable} from '@storyblok/react';
import type {SbBlokData} from '@storyblok/js/dist/types/types';

import {Color} from '../../../helpers/storyblok.interface';
import {HexSeparator} from '../../hex-separator';
import {Container} from '../../container';

import styles from './index.module.css';

export interface HeroBlokInterface extends SbBlokData {
  colour: Color;
  title: string;
  subtitle: string;
  published_date: boolean;
}

export interface HeroBlokProps {
  blok: HeroBlokInterface,
}

export const HeroBlok: FC<HeroBlokProps> = ({blok}) => (
  <div
    {...storyblokEditable(blok)}
    className={clsx({
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
      </Container>
    </div>
    <HexSeparator color={blok.colour}/>
  </div>
);
