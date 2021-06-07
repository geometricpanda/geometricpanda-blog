import { FC, forwardRef, useEffect, useState } from 'react';
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

    const [isActive, setIsActive] = useState<boolean>(false);
    const router = useRouter();

    const linkClassNames = useClassNames([
      styles['c-header-link'],
      {
        [styles['c-header-link--active']]: isActive
      }
    ], [isActive]);

    const linkItemClassNames = useClassNames([
      styles['c-header-link__item'],
      {
        [styles['c-header-link__item--active']]: isActive
      }
    ], [isActive]);

    useEffect(() => {
      const { asPath } = router;
      if (href === '/') {
        setIsActive(asPath === href);
      } else {
        setIsActive(asPath.includes(href));
      }
    }, [router, href]);


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
