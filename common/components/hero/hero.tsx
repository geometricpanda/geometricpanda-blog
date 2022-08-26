import {ComponentProps, FC} from 'react';
import clsx from 'clsx';

import {Container} from '../container';
import {HexSeparator} from '../hex-separator';
import {Color} from '../../helpers/storyblok.interface';

import styles from './hero.module.css';

export interface HeroProps extends ComponentProps<'div'> {
  colour: Color;
  title: string;
  subtitle?: string;
}

export const Hero: FC<HeroProps> = ({colour, title, subtitle, ...rest}) => (
  <div
    className={clsx({
      [styles['hero']]: true,
      [styles['hero--black']]: colour === Color.BLACK,
      [styles['hero--grey']]: colour === Color.GREY,
      [styles['hero--dark-blue']]: colour === Color.DARK_BLUE,
      [styles['hero--dark-magenta']]: colour === Color.DARK_MAGENTA,
      [styles['hero--dark-teal']]: colour === Color.DARK_TEAL,
      [styles['hero--dark-purple']]: colour === Color.DARK_PURPLE,
      [styles['hero--orange']]: colour === Color.ORANGE,
    })}
    {...rest}>
    <div className={styles['hero__wrapper']}>
      <HexSeparator color={Color.GREY}/>
      <Container className={styles['hero__content']}>
        <h1 className={styles['hero__title']}>
          {title}
        </h1>
        <p className={styles['hero__subtitle']}>
          {subtitle}
        </p>
      </Container>
    </div>
    <HexSeparator color={colour}/>
  </div>
);
