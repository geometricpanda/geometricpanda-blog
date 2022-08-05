import {FC} from 'react';
import clsx from 'clsx';

import {Color} from '../../helpers/storyblok.interface';
import styles from './hex-separator.module.css';

export interface HexSeparatorProps {
  color: Color;
}

export const HexSeparator: FC<HexSeparatorProps> = ({color}) => (
  <div className={clsx({
    [styles['hex-separator']]: true,
    [styles['hex-separator--color-black']]: color === Color.BLACK,
    [styles['hex-separator--color-dark-blue']]: color === Color.DARK_BLUE,
    [styles['hex-separator--color-dark-magenta']]: color === Color.DARK_MAGENTA,
    [styles['hex-separator--color-dark-teal']]: color === Color.DARK_TEAL,
    [styles['hex-separator--color-grey']]: color === Color.GREY,
    [styles['hex-separator--color-dark-purple']]: color === Color.DARK_PURPLE,
  })}/>
)
