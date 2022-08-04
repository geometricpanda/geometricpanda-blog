import {FC} from 'react';
import {storyblokEditable} from '@storyblok/react';
import type {SbBlokData} from '@storyblok/js/dist/types/types';

import {Color} from '../../../helpers/storyblok.interface';
import {Hero} from '../../hero';

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
  <Hero
    colour={blok.colour}
    title={blok.title}
    subtitle={blok.subtitle}
    {...storyblokEditable(blok)}
  />
);
