import {FC} from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './pagination.module.css';
import {useRouter} from 'next/router';
import {VisuallyHidden} from '../visually-hidden';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseSlug: string;
  baseHome: string;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  baseSlug,
  baseHome,
}) => {

  const router = useRouter();

  const links = new Array(totalPages)
    .fill('')
    .map((_, index) => index + 1)
    .map((page) => {

      const href = page === 1
        ? baseHome
        : `${baseSlug}/${page}`

      const isCurrent = router.asPath === href || router.asPath === `${baseSlug}/${page}`;

      return (
        <Link
          key={`${baseSlug}/${page}`}
          href={href}
          passHref>
          <a
            aria-label={`Go to Page ${page}`}
            aria-current={isCurrent ? 'page' : undefined}
            className={clsx({
              [styles['pagination__link']]: true,
              [styles['pagination__link--current']]: isCurrent,
            })}>
            {page}
          </a>
        </Link>
      )
    })

  return (
    <nav role={'navigation'}
         className={styles['pagination']}
         aria-label={'Pagination Navigation'}>

      <div className={clsx({
        [styles['pagination__links']]: true,
        [styles['pagination__links--previous']]: true,
      })}>
        <Link href={`${baseSlug}/${currentPage - 1}`}>
          <a
            aria-label={'Go to Previous Page'}
            className={clsx({
              [styles['pagination__link']]: true,
              [styles['pagination__link--previous']]: true,
              [styles['pagination__link--hide']]: currentPage === 1,
            })}>
            <FontAwesomeIcon
              className={styles['pagination__link-icon']}
              icon={faChevronLeft}/>
            Previous
          </a>
        </Link>
      </div>

      <div className={clsx({
        [styles['pagination__links']]: true,
        [styles['pagination__links--trail']]: true,
      })}>
        {links}
      </div>

      <div className={clsx({
        [styles['pagination__links']]: true,
        [styles['pagination__links--next']]: true,
      })}>
        <Link href={`${baseSlug}/${currentPage + 1}`}>
          <a
            aria-label={'Go to Next Page'}
            className={clsx({
              [styles['pagination__link']]: true,
              [styles['pagination__link--next']]: true,
              [styles['pagination__link--hide']]: currentPage === totalPages,
            })}>
            Next
            <FontAwesomeIcon
              className={styles['pagination__link-icon']}
              icon={faChevronRight}/>
          </a>
        </Link>
      </div>
    </nav>
  )
}
