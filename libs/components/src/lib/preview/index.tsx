import { FC } from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { Image } from '../image';
import { H3 } from '../typography';
import { FreeText } from '../free-text';

import styles from './index.module.css';

interface PreviewProps {
  title: string;
  preview: Document;
  imageUrl: string;
  imageAlt: string;
}

export const Preview: FC<PreviewProps> = ({
  title,
  imageAlt,
  imageUrl,
  preview,
}) => (
  <div className={styles['c-preview']}>
    <div>
      <Image height={100} width={100} alt={imageAlt} src={imageUrl} mb />
    </div>
    <div>
      <H3 narrow>{title}</H3>
      <FreeText html={documentToHtmlString(preview)} narrow />
    </div>
  </div>
);
