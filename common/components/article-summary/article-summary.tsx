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

    <div itemProp="blogPosts"
         itemScope
         itemType="http://schema.org/BlogPosting"
         className={clsx({
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
          itemProp="image"
        />
        <div className={styles['article__content']}>
          <div className={styles['article__date']}
               itemProp="datePublished">
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
          <div>
            <Link href={`/${story.full_slug}`} passHref>
              <a className={styles['article__title']} itemProp="url">
                <span itemProp="name">{story.content.seo_title}</span>
              </a>
            </Link>
          </div>
          {isFeature && (
            <p className={styles['article__description']} itemProp="description">
              {story.content.seo_description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
    ;
}
