import { FC } from 'react';
import styles from './typography.module.css';
import { useClassNames } from '../utils/useClassNames';

interface H2Props {
  narrow?: boolean;
}

export const H2: FC<H2Props> = ({ narrow, children }) => (
  <h2
    className={useClassNames(
      [
        styles['u-type'],
        styles['u-type--h2'],
        { [styles['u-type--narrow']]: narrow },
      ],
      []
    )}
  >
    {children}
  </h2>
);
