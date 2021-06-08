import { FC } from 'react';
import { useClassNames } from '../utils/useClassNames';
import styles from './index.module.css';
import { useRouter } from 'next/router';

interface HeaderLinkProps {
  title?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const HeaderLink: FC<HeaderLinkProps> =
  ({ children, href, ...props }) => {
    const router = useRouter();
    const { asPath } = router;

    const isActive = (href === '/')
      ? (asPath === href)
      : asPath.includes(href);

    const linkClassNames = useClassNames([{
      [styles['c-header-link']]: true,
      [styles['c-header-link--active']]: isActive
    }], [isActive]);

    const linkItemClassNames = useClassNames([{
      [styles['c-header-link__item']]: true,
      [styles['c-header-link__item--active']]: isActive
    }], [isActive]);

    return (
      <li className={linkClassNames}>
        <a className={linkItemClassNames} href={href} {...props}>
          <span className={styles['c-header-link__text']}>{children}</span>
        </a>
      </li>
    );
  };

export const HeaderLinks: FC = ({ children }) => (
  <ul className={styles['c-header-links']}>{children}</ul>
);
