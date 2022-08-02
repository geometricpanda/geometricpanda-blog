import {FC} from 'react';
import {BlokResolverComponentProps} from '../block-resolver.interface';
import {SeparatorComponentBlok} from '../../../../helpers/bloks.interface';
import styles from './index.module.css';

export interface SeparatorBlokProps extends BlokResolverComponentProps<SeparatorComponentBlok> {

}

export const SeparatorBlok: FC<SeparatorBlokProps> = () => (
  <hr className={styles['separator']}/>
)

