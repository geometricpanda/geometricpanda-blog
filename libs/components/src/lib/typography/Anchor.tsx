import { FC, forwardRef, Ref } from 'react';
import styles from './typography.module.css';
import { useClassNames } from '../utils/useClassNames';

interface AnchorProps {
  ref?: Ref<HTMLAnchorElement>;
  href?: string;
  onClick?: any;
}

export const Anchor: FC<AnchorProps> = forwardRef(
  ({ children, href, onClick }, ref) => (
    <a
      ref={ref}
      className={useClassNames([styles['u-type'], styles['u-type--link']], [])}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  )
);
