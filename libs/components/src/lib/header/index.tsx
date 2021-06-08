import { FC } from 'react';
import styles from './index.module.css';
import { Container } from '../container';

interface HeaderProps {
  logo: string;
}

export const Header: FC<HeaderProps> = ({ logo, children }) => {
  return (
    <header className={styles['c-header']}>
      <div className={styles['c-header__masthead']} />

      <Container>
        <div className={styles['c-header__body']}>
          <div className={styles['c-header__logo']}>
            <img
              height={150}
              width={150}
              alt={'Geometric Panda Logo'}
              src={logo}
            />
          </div>
          <div className={styles['c-header__links']}>{children}</div>
        </div>
      </Container>
    </header>
  );
};
