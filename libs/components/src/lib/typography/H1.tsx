import { FC } from 'react';
import styles from './typography.module.css';
import { useClassNames } from '../utils/useClassNames';

interface H1Props {
  narrow?: boolean;
}

export const H1: FC<H1Props> = ({ narrow, children }) => (
  <h1
    className={useClassNames(
      [
        styles['u-type'],
        styles['u-type--h1'],
        { [styles['u-type--narrow']]: narrow },
      ],
      []
    )}
  >
    {children}
  </h1>
);
