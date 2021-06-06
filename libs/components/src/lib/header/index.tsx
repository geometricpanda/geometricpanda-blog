import { FC } from 'react';
import styles from './index.module.css';

import { Image } from '../image';

interface HeaderProps {
  logo: string;
}

export const Header: FC<HeaderProps> = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__masthead} />
      <div className={styles.header__body}>
        <div className={styles.header__logo}>
          <Image
            height={150}
            width={150}
            alt={'logo'}
            src={logo}
            border={false}
            fixed
          />
        </div>
        <div className={styles.header__links}></div>
      </div>
    </header>
  );
};
