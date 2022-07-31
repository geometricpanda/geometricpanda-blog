import {FC, ReactNode} from 'react';
import styles from './container.module.css';
import clsx from 'clsx';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({children, className}) => (
  <div className={clsx(styles['container'], className)}>
    {children}
  </div>
)
