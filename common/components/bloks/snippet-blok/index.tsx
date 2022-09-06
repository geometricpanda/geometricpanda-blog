import {SbBlokData} from '@storyblok/js/dist/types/types';
import {storyblokEditable} from '@storyblok/react';

import {FC, useId} from 'react';
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
  const id = useId();

  return (
    <Container {...storyblokEditable(blok)}>
      <div className={clsx({
        [styles['snippet-blok']]: true,
        [styles['snippet-blok--css']]: blok.language === LANGUAGE.CSS,
        [styles['snippet-blok--scss']]: blok.language === LANGUAGE.SCSS,
        [styles['snippet-blok--typescript']]: blok.language === LANGUAGE.TYPESCRIPT,
        [styles['snippet-blok--javascript']]: blok.language === LANGUAGE.JAVASCRIPT,
        [styles['snippet-blok--html']]: blok.language === LANGUAGE.HTML,
      })}>
        <div className={styles['snippet-blok__decoration']}/>
        <div className={styles['snippet-blok__filename']} id={id}>
          {blok.filename}
        </div>
        <div className={styles['snippet-blok__language']}>
          {blok.language}
        </div>
        <pre className={clsx(styles['snippet-blok__snippet'], 'language-')}
             tabIndex={0}
             aria-describedby={id}
             dangerouslySetInnerHTML={{__html: snippet}}/>
      </div>
    </Container>
  )
}
