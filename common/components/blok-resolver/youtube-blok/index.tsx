import {FC} from 'react';
import {BlokResolverComponentProps} from '../block-resolver.interface';
import {YouTubeComponentBlok} from '../../../../helpers/bloks.interface';
import {Container} from '../../container';

import styles from './index.module.css';

export interface YouTubeBlokProps extends BlokResolverComponentProps<YouTubeComponentBlok> {
}

export const YouTubeBlok: FC<YouTubeBlokProps> =
  ({blok}) => {
    const src = new URL(`https://www.youtube-nocookie.com/embed/${blok.video_id}`);
    !blok.controls && src.searchParams.set('controls', '0')

    return (
      <Container className={styles['youtube-blok']}>
        <iframe width="100%"
                height="100%"
                src={src.toString()}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </Container>
    )
  }
