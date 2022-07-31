import {FC, useEffect, useRef} from 'react';
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
  navigationId: string;
  navigationExpanded: boolean;
  onNavigationChange: (state: boolean) => void;
  'aria-hidden': true | undefined;
}

export const Sidenav: FC<SidenavProps> = ({
  links,
  navigationId,
  navigationExpanded,
  onNavigationChange,
  'aria-hidden': ariaHidden,
}) => {

  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (navigationExpanded) {
      closeButton.current?.focus();
    }
  }, [navigationExpanded]);

  const options: Options = {
    preventScroll: true,
    allowOutsideClick: true,
  }

  return (
    <>
      <div onClick={() => onNavigationChange(false)}
           className={clsx({
             [styles['sidenav-backdrop']]: true,
             [styles['sidenav-backdrop--expanded']]: navigationExpanded,
           })}/>

      <FocusTrap active={navigationExpanded} focusTrapOptions={options}>
        <div>
          <ScrollLock>

            <nav id={navigationId}
                 aria-hidden={ariaHidden}
                 aria-describedby={'navigation-title'}
                 className={clsx({
                   [styles['sidenav']]: true,
                   [styles['sidenav--expanded']]: navigationExpanded,
                 })}>

              <VisuallyHidden id={'navigation-title'}>
                Main Menu
              </VisuallyHidden>

              <div className={styles['sidenav__close']}>
                <button
                  tabIndex={navigationExpanded ? undefined : -1}
                  ref={closeButton}
                  className={styles['sidenav__close-button']}
                  aria-label={'Close Menu'}
                  aria-controls={navigationId}
                  aria-expanded={navigationExpanded}
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
                        tabIndex={navigationExpanded ? undefined : -1}
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



