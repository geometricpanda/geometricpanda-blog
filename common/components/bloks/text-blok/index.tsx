import {FC, MouseEventHandler, useCallback} from 'react';
import {Richtext, SbBlokData} from '@storyblok/js/dist/types/types';
import {storyblokEditable} from '@storyblok/react';
import {renderRichText} from '@storyblok/js';

import styles from './index.module.css';

import {useRouter} from 'next/router';
import {Container} from '../../container';

export interface TextBlokInterface extends SbBlokData {
  heading: string;
  subheading: string;
  body: Richtext;
}

export interface TextBlokProps {
  blok: TextBlokInterface;
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
    <Container className={styles['text-blok']}
               {...storyblokEditable(blok)}>

      {blok.heading && (
        <h2 className={styles['text-blok__heading']}>
          {blok.heading}
        </h2>
      )}

      {blok.subheading && (
        <h3 className={styles['text-blok__subheading']}>
          {blok.subheading}
        </h3>
      )}

      <div
        onClick={onClick}
        className={styles['text-blok__content']}
        dangerouslySetInnerHTML={{__html: renderRichText(blok.body)}}/>

    </Container>
  )
}
