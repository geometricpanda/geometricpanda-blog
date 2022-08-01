import {FC, MouseEventHandler, useCallback, useEffect, useRef} from 'react';
import {TextComponentBlok} from '../../../../helpers/bloks.interface';
import {BlockResolverComponentProps} from '../block-resolver.interface';

import styles from './index.module.css';
import {useEvent} from 'react-use';
import {useRouter} from 'next/router';
import {Container} from '../../container';

export interface TextBlokProps extends BlockResolverComponentProps<TextComponentBlok> {
}

export const TextBlok: FC<TextBlokProps> = ({blok}) => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(async ($event) => {
    if (($event.target as HTMLElement).tagName === 'A') {
      const target = $event.target as HTMLAnchorElement;
      const {pathname} = target;

      if (pathname.startsWith('/')) {
        $event.preventDefault();
        try {
          await router.push(pathname);
        } catch (e) {
          location.assign(pathname)
        }
      }

    }
  }, [router])

  return (
    <Container className={styles['text-blok']}>

      {blok.heading && (
        <h2 className={styles['text-blok__heading']}>
          {blok.heading}
        </h2>
      )}

      {blok.heading && blok.subheading && (
        <h3 className={styles['text-blok__subheading']}>
          {blok.subheading}
        </h3>
      )}

      <div
        onClick={onClick}
        className={styles['text-blok__content']}
        dangerouslySetInnerHTML={{__html: blok.body}}/>

    </Container>
  )
}
