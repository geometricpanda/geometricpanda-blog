import { FC } from 'react';
import styles from './typography.module.css';
import { useClassNames } from '../utils/useClassNames';

interface H3Props {
  narrow?: boolean;
}

export const H3: FC<H3Props> = ({ narrow, children }) => (
  <h3
    className={useClassNames(
      [
        styles['u-type'],
        styles['u-type--h3'],
        { [styles['u-type--narrow']]: narrow },
      ],
      []
    )}
  >
    {children}
  </h3>
);
