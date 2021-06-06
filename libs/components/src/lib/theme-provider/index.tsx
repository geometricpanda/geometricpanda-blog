import { FC } from 'react';
import styles from './index.module.css';

export const ThemeProvider: FC = ({ children }) => (
  <div className={styles['theme']}>{children}</div>
);
