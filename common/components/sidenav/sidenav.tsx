import {FC, useRef} from 'react';
import ScrollLock from 'react-scrolllock';
import FocusTrap from 'focus-trap-react';
import {Options} from 'focus-trap';
import Link from 'next/link';
import clsx from 'clsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

import type {ILink} from '../page/page.interface';
import {VisuallyHidden} from '../visually-hidden';
import styles from './sidenav.module.css';

export interface SidenavProps {
  links: Array<ILink>;
  onNavigationChange: (state: boolean) => void;
}

export const Sidenav: FC<SidenavProps> = ({
  links,
  onNavigationChange,
}) => {

  const closeButton = useRef<HTMLButtonElement>(null);


  const options: Options = {
    preventScroll: true,
    allowOutsideClick: true,
  }

  return (
    <>
      <div onClick={() => onNavigationChange(false)}
           className={styles['sidenav-backdrop']}/>
      <FocusTrap focusTrapOptions={options}>
        <div>
          <ScrollLock accountForScrollbars={false}>
            <nav aria-describedby={'navigation-title'}
                 className={clsx({
                   [styles['sidenav']]: true,
                 })}>

              <VisuallyHidden id={'navigation-title'}>
                Main Menu
              </VisuallyHidden>

              <div className={styles['sidenav__close']}>
                <button
                  ref={closeButton}
                  className={styles['sidenav__close-button']}
                  aria-label={'Menu'}
                  aria-expanded={true}
                  onClick={() => onNavigationChange(false)}>
                  <FontAwesomeIcon icon={faTimes}/>
                </button>
              </div>

              <ul className={styles['sidenav__links']}>
                {links.map(link => (
                  <li className={styles['sidenav__link']}
                      key={link.text + link.href}>
                    <Link href={link.href} passHref>
                      <a
                        aria-current={link.active ? 'page' : undefined}
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
            </nav>
          </ScrollLock>
        </div>
      </FocusTrap>
    </>
  )
}



