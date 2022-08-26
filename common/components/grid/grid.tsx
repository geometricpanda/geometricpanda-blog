import {ComponentProps, FC, ReactNode} from 'react';
import clsx from 'clsx';

import styles from './grid.module.css';

export interface GridProps extends ComponentProps<'div'> {
  layout: '100' | '1/1' | '2/1' | '2/1-r' | '3/1' | '3/1-r',
  children: ReactNode;
}

export const Grid: FC<GridProps> = ({layout, children, className, ...props}) => (
  <div
    className={
      clsx(className, {
        [styles['grid']]: true,
        [styles['grid--1-1']]: layout === '1/1',
        [styles['grid--2-1']]: layout === '2/1',
        [styles['grid--2-1-r']]: layout === '2/1-r',
        [styles['grid--3-1']]: layout === '3/1',
        [styles['grid--3-1-r']]: layout === '3/1-r',
      })}
    {...props}>
    {children}
  </div>
)
