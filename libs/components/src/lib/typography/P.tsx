import { FC } from 'react';
import styles from './typography.module.css';
import { useClassNames } from '../utils/useClassNames';

export const P: FC = ({ children }) => (
  <p className={useClassNames([styles['u-type']], [])}>{children}</p>
);
