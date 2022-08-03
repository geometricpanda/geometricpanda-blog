import {FC} from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import {Color} from '../../helpers/storyblok.interface';
import {VisuallyHidden} from '../visually-hidden';
import {HexSeparator} from '../hex-separator';
import {ILink} from '../page/page.interface';
import {Container} from '../container';

import styles from './footer.module.css';

export interface FooterProps {
  links: Array<ILink>;
  'aria-hidden': true | undefined;
}

export const Footer: FC<FooterProps> = ({
  links,
  'aria-hidden': ariaHidden,
}) => (
  <footer
    className={styles['footer']}
    aria-hidden={ariaHidden}>
    <HexSeparator color={Color.DARK_TEAL}/>

    <Container>
      <nav className={styles['footer__nav']}>
        <VisuallyHidden>Site Links</VisuallyHidden>
        <ul className={styles['footer__links']}>
          {links.map((link) => (
            <li key={link.text + link.href} className={styles['footer__link']}>
              <Link href={link.href}>
                <a aria-current={link.active ? 'page' : undefined}
                   className={clsx({
                     [styles['link']]: true,
                     [styles['link--active']]: link.active,
                   })}>
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles['footer__legals']}>
        &copy; Jim Drury {new Date().getFullYear()}. All Rights Reserved
      </div>

    </Container>

  </footer>
)
