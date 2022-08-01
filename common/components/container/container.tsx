import {ComponentProps, FC, ReactNode} from 'react';
import styles from './container.module.css';
import clsx from 'clsx';

export interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({children, className, ...props}) => (
  <div className={clsx(styles['container'], className)} {...props}>
    {children}
  </div>
)
