import {FC, useEffect, useRef} from 'react';
import clsx from 'clsx';
import Image from 'next/future/image';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

import type {ILink} from '../page/page.interface';
import {Container} from '../container';
import styles from './header.module.css';

export interface HeaderProps {
  navigationExpanded: boolean;
  onNavigationChange: (boolean: true) => void,
  links: Array<ILink>;
  'aria-hidden': true | undefined;
}

export const Header: FC<HeaderProps> = ({
  links,
  navigationExpanded,
  onNavigationChange,
  'aria-hidden': ariaHidden,
}) => {
  const hamburger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!navigationExpanded) {
      hamburger.current?.focus();
    }
  }, [navigationExpanded])

  return (
    <nav aria-hidden={ariaHidden} className={styles['header']}>
      <Container className={styles['header__container']}>

        <div className={styles['header__hamburger']}>
          <button
            ref={hamburger}
            className={styles['header__hamburger-button']}
            aria-label={'Open Menu'}
            aria-expanded={navigationExpanded}
            onClick={() => onNavigationChange(true)}>
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>

        <ul className={styles['header__links']}>
          {links.map(link => (
            <li className={styles['header__link']}
                key={link.text + link.href}>
              <Link href={link.href} passHref>
                <a aria-current={link.active ? 'page' : undefined}
                   className={clsx({
                     [styles['link']]: true,
                     [styles['link--active']]: link.active,
                   })}>
                  <FontAwesomeIcon className={styles['link__icon']} icon={link.icon} aria-hidden={true}/>
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles['header__logo']}>
          <Link href="/" passHref>
            <a className={clsx(styles['link'], styles['link--img'])}>
              <Image src="/logo.svg"
                     width={75}
                     height={75}
                     alt={'Geometric Panda Logo'}
                     priority
              />
            </a>
          </Link>
        </div>
      </Container>
    </nav>
  )
}
