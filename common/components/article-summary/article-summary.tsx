import {StoryData} from '@storyblok/react';
import Image from 'next/future/image';
import {format} from 'date-fns';
import Link from 'next/link';
import {FC} from 'react';
import clsx from 'clsx';

import {ArticleBlokInterface} from '../bloks';
import {useResizedImage} from '../../helpers/useResizedImage';
import styles from './list-article-summary.module.css';
import {VisuallyHidden} from '../visually-hidden';

export interface ArticleSummaryProps {
  story: StoryData<ArticleBlokInterface>;
}

export const ArticleSummary: FC<ArticleSummaryProps> = ({story}) => (
  <div className={clsx({
    [styles['article']]: true,
    [styles['article--featured']]: story.tag_list.includes('featured'),
  })}>
    <div className={styles['article__wrapper']}>
      <Image className={styles['article__image']}
             alt={story.content.seo_image.alt}
             src={useResizedImage(story.content.seo_image.filename, 720, 720)}
             width={720}
             height={720}/>
      <div className={styles['article__content']}>
        <Link href={`/${story.full_slug}`} passHref>
          <a className={styles['article__title']}>
            {story.content.seo_title}
          </a>
        </Link>
        <div className={styles['article__description']}>
          {story.content.seo_description}
        </div>
        <Link href={`/${story.full_slug}`} passHref>
          <a className={styles['article__link']}>
            Read full article
            <VisuallyHidden>: {story.content.seo_title}</VisuallyHidden>
          </a>
        </Link>
        <div className={styles['article__date']}>
          Updated: {format(story.published_at
            ? new Date(story.published_at)
            : new Date(),
          'do LLL yyyy')}
        </div>
        <div className={styles['article__tags']}>
          {story.tag_list
            .sort()
            .filter(tag => tag !== 'featured')
            .map(tag => (
              <div className={styles['article__tag']} key={tag}>
                {tag}
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);
