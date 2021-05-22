import { FC } from 'react';
import styles from './index.module.css';

export const FreeText: FC = ({ children }) => (
  <div className={styles['c-free-text']}>{children}</div>
);
