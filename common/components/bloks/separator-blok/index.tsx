import {storyblokEditable} from '@storyblok/react';
import type {SbBlokData} from '@storyblok/js/dist/types/types';
import type {FC} from 'react';

import {Container} from '../../container';
import styles from './index.module.css';

export interface SeparatorBlokInterface extends SbBlokData {
}

export interface SeparatorBlokProps {
  blok: SeparatorBlokInterface;
}

export const SeparatorBlok: FC<SeparatorBlokProps> = ({blok}) => (
  <Container {...storyblokEditable(blok)}>
    <hr className={styles['separator']}/>
  </Container>
)

