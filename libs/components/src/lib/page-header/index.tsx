import { FC } from 'react';
import { format, formatISO } from 'date-fns';

import styles from './index.module.css';

export interface HeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  date?: Date;
}

export const PageHeader: FC<HeadingProps> = ({
  level: Element = 'h1',
  date,
  children,
}) => {
  const dateStr = date ? format(date, 'do MMMM yyyy') : null;

  const dateIso = date ? formatISO(date) : null;

  return (
    <div className={styles['c-heading']}>
      <div className={styles['c-heading__text-container']}>
        <Element className={styles['c-heading__text']}>{children}</Element>
      </div>
      {date && (
        <div className={styles['c-heading__time-container']}>
          <time className={styles['c-heading__time']} dateTime={dateIso}>
            {dateStr}
          </time>
        </div>
      )}
    </div>
  );
};
