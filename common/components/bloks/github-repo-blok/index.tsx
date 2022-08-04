import {FC} from 'react';
import {SbBlokData} from '@storyblok/js/dist/types/types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {Container} from '../../container';
import styles from './index.module.css';
import {storyblokEditable} from '@storyblok/react';

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

export const GithubRepoBlok: FC<GithubRepoBlokProps> = ({blok}) => (
  <Container>
    <div className={styles['github-blok']}>
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
