import { FC } from 'react';
import styles from './index.module.css';
import { useClassNames } from '../utils/useClassNames';

interface ContainerProps {
  layout?: 'single' | 'full';
}

export const Container: FC<ContainerProps> = ({
                                                children,
                                                layout = 'single'
                                              }) => {
  const leftClassNames = useClassNames([{
    [styles['c-container__layout-single']]: layout === 'single'
  }], [layout]);

  return (
    <div className={styles['c-container']}>
      <div className={leftClassNames}>{children}</div>
    </div>
  );
};
