import { FC } from 'react';
import styles from './index.module.css';
import { useClassNames } from '../utils/useClassNames';

interface FreeTextProps {
  html?: string;
  narrow?: boolean;
  boldParagraph?: boolean
}

export const FreeText: FC<FreeTextProps> = ({ children, html, narrow, boldParagraph }) => {
  const className = useClassNames(
    [styles['c-free-text'],
      {
        [styles['c-free-text--narrow']]: narrow,
        [styles['c-free-text--bold-paragraph']]: boldParagraph
      }
    ],
    [narrow]
  );

  return html ? (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <div className={className}> {children}</div>
  );
};
