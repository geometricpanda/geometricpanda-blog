import styles from './hex-separator.module.css';
import {FC} from 'react';
import clsx from 'clsx';

export interface HexSeparatorProps {
  hexColor: 'black' | 'grey' | 'dark-blue' | 'dark-teal' | 'dark-magenta';
  bleedColor?: 'black' | 'dark-blue' | 'dark-teal' | 'dark-magenta'
}

export const HexSeparator: FC<HexSeparatorProps> = ({hexColor, bleedColor}) => (
  <div className={clsx({
    [styles['hex-separator']]: true,
    [styles['hex-separator--color-black']]: hexColor === 'black',
    [styles['hex-separator--color-dark-blue']]: hexColor === 'dark-blue',
    [styles['hex-separator--color-dark-magenta']]: hexColor === 'dark-magenta',
    [styles['hex-separator--color-dark-teal']]: hexColor === 'dark-teal',
    [styles['hex-separator--color-grey']]: hexColor === 'grey',
    [styles['hex-separator--bleed-dark-blue']]: bleedColor === 'dark-blue',
    [styles['hex-separator--bleed-dark-magenta']]: bleedColor === 'dark-magenta',
    [styles['hex-separator--bleed-deal-teal']]: bleedColor === 'dark-teal',
    [styles['hex-separator--bleed-black']]: bleedColor === 'black',
  })}/>
)
