import {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import {Color} from '../../helpers/storyblok.interface';
import {Sidenav} from '../sidenav';
import {Header} from '../header';
import {Footer} from '../footer';
import {HexSeparator} from '../hex-separator';

import {ILink} from './page.interface';
import styles from './page.module.css';

export interface PageProps {
  children: ReactNode;
  initialLinks: Array<ILink>;
}

export const Page: FC<PageProps> = ({children, initialLinks}) => {
    const router = useRouter();

    const [navigationExpanded, setNavigationExpanded] = useState<boolean>(false)
    const [links, setLinks] = useState<Array<ILink>>(initialLinks);


    useEffect(() => {
      const path = router.asPath;
      setLinks(links => links.map(link => {
          return (link.href === '/')
            ? {...link, active: link.href === path}
            : {...link, active: path.includes(link.href)}
        }),
      );
      setNavigationExpanded(false);
    }, [router.asPath])

    const onNavigationChange = useCallback((state: boolean) => {
      setNavigationExpanded(state);
    }, []);

    return (
      <div className={styles['page']}>
        {navigationExpanded && (
          <Sidenav
            links={links}
            onNavigationChange={onNavigationChange}/>
        )}

        <Header
          links={links}
          aria-hidden={navigationExpanded || undefined}
          onNavigationChange={onNavigationChange}
          navigationExpanded={navigationExpanded}/>

        <main className={styles['page__content']}
              aria-hidden={navigationExpanded || undefined}>
          {children}
        </main>

        <Footer links={links}
                aria-hidden={navigationExpanded || undefined}/>

        <div className={styles['page__decoration']}>
          <HexSeparator color={Color.DARK_MAGENTA}/>
        </div>

      </div>
    )
  }
;

