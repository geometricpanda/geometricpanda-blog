import {FC} from 'react';
import clsx from 'clsx';

import {SnippetComponentBlok} from '../../../../helpers/bloks.interface';
import {BlokResolverComponentProps} from '../block-resolver.interface';
import {Container} from '../../container';

import 'prismjs/themes/prism-okaidia.css';
import styles from './index.module.css';

export interface SnippetBlokProps extends BlokResolverComponentProps<SnippetComponentBlok> {
}

export const SnippetBlok: FC<SnippetBlokProps> = ({blok}) => (
  <Container>
    <div className={styles['snippet-blok']}>
      <div className={styles['snippet-blok__contents']}>
        <div className={styles['snippet-blok__filename']}>
          {blok.filename}
        </div>
        <div className={styles['snippet-blok__language']}>
          {blok.language}
        </div>
        <pre className={clsx(styles['snippet-blok__snippet'], 'language-')}
             dangerouslySetInnerHTML={{__html: blok.code}}/>
      </div>
    </div>
  </Container>
)
