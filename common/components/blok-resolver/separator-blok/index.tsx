import {FC} from 'react';
import {BlockResolverComponentProps} from '../block-resolver.interface';
import {SeparatorComponentBlok} from '../../../../helpers/bloks.interface';
import styles from './index.module.css';

export interface SeparatorBlokProps extends BlockResolverComponentProps<SeparatorComponentBlok> {

}

export const SeparatorBlok: FC<SeparatorBlokProps> = () => (
  <hr className={styles['separator']}/>
)

