import type {ComponentProps, FC, ReactNode} from 'react';
import styles from './visually-hidden.module.css';
import clsx from 'clsx';

export interface VisuallyHiddenProps extends ComponentProps<'span'> {
  children: ReactNode;
}

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({
  children,
  className,
  ...props
}) => (
  <span
    className={clsx(styles['visually-hidden'], className)}
    {...props}
  >
    {children}
  </span>
)
