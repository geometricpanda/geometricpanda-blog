import { FC } from 'react';
import styles from './index.module.css';
import { useClassNames } from '../utils/useClassNames';

interface ContainerProps {
  layout?: 'single';
}

export const Container: FC<ContainerProps> = ({
  children,
  layout = 'single',
}) => {
  const classNames = useClassNames(
    [
      styles['c-container'],
      {
        [styles['c-container--layout-single']]: layout === 'single',
      },
    ],
    [layout]
  );

  return (
    <div className={classNames}>
      <div>{children}</div>
    </div>
  );
};
