import {FC, useRef} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SbBlokData} from '@storyblok/js/dist/types/types';
import {storyblokEditable} from '@storyblok/react';
import {useIntersection} from 'react-use';
import clsx from 'clsx';

import {Container} from '../../container';
import styles from './index.module.css';

export interface GithubRepoBlokInterface extends SbBlokData {
  title: string;
  intro: string;
  url: {
    cached_url: string;
    id: string;
    linktype: 'url';
    url: string;
  }
}

export interface GithubRepoBlokProps {
  blok: GithubRepoBlokInterface;
}

export const GithubRepoBlok: FC<GithubRepoBlokProps> = ({blok}) => {

  const blokRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(blokRef, {root: null, rootMargin: '-100px -100px', threshold: 0.01});

  return (
    <Container>
      <div ref={blokRef} className={clsx({
        [styles['github-blok']]: true,
        [styles['github-blok--intersected']]: intersection?.isIntersecting,
      })}>
        <div className={styles['github-blok__decoration']}/>
        <div className={styles['github-blok__content']}
             {...storyblokEditable(blok)}>
          <div className={styles['github-blok__icon']}>
            <FontAwesomeIcon
              icon={faGithub}
              className={styles['github-blok__fontawesome']}
            />
          </div>
          <div className={styles['github-blok__details']}>
            {blok.intro && (
              <p className={styles['github-blok__intro']}>
                {blok.intro}
              </p>
            )}

            <a href={blok.url.url}
               target={'_blank'}
               rel="noreferrer"
               className={styles['github-blok__link']}>
              {blok.title}
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}
