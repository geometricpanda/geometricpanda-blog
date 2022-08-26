import {ComponentProps, FC} from 'react';
import clsx from 'clsx';
import styles from './free-text.module.css';

export interface FreeTextProps extends ComponentProps<'div'> {
}


export const FreeText: FC<FreeTextProps> = ({className, ...props}) => (
  <div className={clsx(styles['free-text'], className)} {...props}/>
)
