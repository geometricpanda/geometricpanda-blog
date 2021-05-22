import { FC } from 'react';
import { useClassNames } from '../utils/useClassNames';
import styles from './index.module.css';

interface ButtonLinkProps {
  href: string;
  secondary?: boolean;
  target?: string;
  rel?: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  secondary,
  children,
  ...props
}) => {
  const classNames = useClassNames(
    [
      {
        [styles['c-button-link']]: true,
        [styles['c-button-link--secondary']]: secondary,
      },
    ],
    [secondary]
  );

  return (
    <a className={classNames} {...props}>
      <span className={styles['c-button-link__text']}>{children}</span>
    </a>
  );
};
