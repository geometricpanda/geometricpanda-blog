import {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import {ILink} from './page.interface';
import {Sidenav} from '../sidenav';
import {Header} from '../header';
import {Footer} from '../footer';
import {HexSeparator} from '../hex-separator';

import styles from './page.module.css';

export interface PageProps {
  children: ReactNode;
  initialLinks: Array<ILink>;
}

export const Page: FC<PageProps> = ({children, initialLinks}) => {
    const router = useRouter();

    const [navigationExpanded, setNavigationExpanded] = useState<boolean>(false)
    const [navigationId] = useState<string>('navigation-container');
    const [links, setLinks] = useState<Array<ILink>>(initialLinks);


    useEffect(() => {
      const path = router.asPath;

      setLinks(links => links.map(link =>
        (path === '/')
          ? {...link, active: link.href === path}
          : {
            ...link, active: link.href.includes(path),
          }),
      );

      setNavigationExpanded(false);
    }, [router.asPath])

    const onNavigationChange = useCallback((state: boolean) => {
      setNavigationExpanded(state);
    }, []);

    return (
      <div className={styles['page']}>
        <Sidenav
          links={links}
          aria-hidden={!navigationExpanded || undefined}
          onNavigationChange={onNavigationChange}
          navigationExpanded={navigationExpanded}
          navigationId={navigationId}/>

        <Header
          links={links}
          aria-hidden={navigationExpanded || undefined}
          onNavigationChange={onNavigationChange}
          navigationId={navigationId}
          navigationExpanded={navigationExpanded}/>

        <main className={styles['page__body']}
              aria-hidden={navigationExpanded || undefined}>
          {children}
        </main>


        <div className={styles['page__footer']}>
          <HexSeparator hexColor={'dark-teal'} bleedColor={'dark-magenta'}/>
          <Footer links={links}
                  aria-hidden={navigationExpanded || undefined}/>

          <HexSeparator hexColor={'dark-magenta'}/>
        </div>

      </div>
    )
  }
;

