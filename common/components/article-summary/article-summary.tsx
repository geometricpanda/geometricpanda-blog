import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {StoryData} from '@storyblok/react';
import Image from 'next/future/image';
import {format} from 'date-fns';
import Link from 'next/link';
import {FC} from 'react';
import clsx from 'clsx';

import {useResizedImage} from '../../helpers/useResizedImage';
import {ArticleBlokInterface} from '../bloks';

import styles from './article-summary.module.css';

export interface ArticleSummaryProps {
  story: StoryData<ArticleBlokInterface>;
  index: number;
  featured?: boolean;
}

export const ArticleSummary: FC<ArticleSummaryProps> = ({story, featured, index}) => {
  const isFeature = featured !== undefined
    ? featured
    : story.tag_list.includes('featured');

  return (
    <Link href={`/${story.full_slug}`} passHref>
      <a className={clsx({
        [styles['article']]: true,
        [styles['article--featured']]: isFeature,
      })}>
        <div className={styles['article__wrapper']}>
          <Image
            className={styles['article__image']}
            alt={story.content.seo_image.alt}
            src={useResizedImage(story.content.seo_image.filename, 720, 720)}
            width={720}
            height={720}
            priority={index < 4}
          />
          <div className={styles['article__content']}>
            <p className={styles['article__title']}>
              {story.content.seo_title}
            </p>
            {isFeature && (
              <p className={styles['article__description']}>
                {story.content.seo_description}
              </p>
            )}
            <div className={styles['article__date']}>
              <FontAwesomeIcon
                aria-label={'Date published'}
                aria-hidden={undefined}
                className={styles['article__date-icon']}
                icon={faCalendarAlt}/>
              {format(story.first_published_at
                  ? new Date(story.first_published_at)
                  : new Date(),
                'do LLL yyyy')}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
  ;
}
