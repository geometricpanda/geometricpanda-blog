import {SbBlokData} from '@storyblok/js/dist/types/types';
import {storyblokEditable} from '@storyblok/react';

import {FC} from 'react';
import clsx from 'clsx';

import {LANGUAGE, syntaxHighlighter} from '../../../helpers/syntax-highlighter';
import {Container} from '../../container';

import 'prismjs/themes/prism-okaidia.css';
import styles from './index.module.css';


export interface SnippetBlokInterface extends SbBlokData {
  code: string;
  filename: string;
  language: LANGUAGE;
}

export interface SnippetBlokProps {
  blok: SnippetBlokInterface;
}

export const SnippetBlok: FC<SnippetBlokProps> = ({blok}) => {

  const snippet = syntaxHighlighter(blok.code, blok.language);

  return (
    <Container {...storyblokEditable(blok)}>
      <div className={styles['snippet-blok']}>
        <div className={styles['snippet-blok__decoration']}>
        </div>
        <div className={styles['snippet-blok__filename']}>
          {blok.filename}
        </div>
        <div className={styles['snippet-blok__language']}>
          {blok.language}
        </div>
        <pre className={clsx(styles['snippet-blok__snippet'], 'language-')}
             dangerouslySetInnerHTML={{__html: snippet}}/>

      </div>
    </Container>
  )
}
