import { FC } from 'react';
import { useClassNames } from '../utils/useClassNames';

import styles from './index.module.css';

interface ButtonProps {
  secondary?: boolean;
}

export const Button: FC<ButtonProps> = ({ secondary, children }) => {
  const classNames = useClassNames(
    [
      {
        [styles['c-button']]: true,
        [styles['c-button--secondary']]: secondary,
      },
    ],
    [secondary]
  );

  return (
    <button className={classNames}>
      <span className={styles['c-button__text']}>{children}</span>
    </button>
  );
};
