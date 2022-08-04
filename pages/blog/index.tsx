import {GetStaticProps, NextPage} from 'next';
import {StoriesParams} from 'storyblok-js-client';
import {getStoryblokApi, StoryData} from '@storyblok/react';
import {ListArticleSummary} from '../../common/components/list-article-summary';
import {ArticleBlokInterface} from '../../common/components/bloks';
import {Container} from '../../common/components/container';
import {HexSeparator} from '../../common/components/hex-separator';
import {Color} from '../../common/helpers/storyblok.interface';

import styles from './blog.module.css';

interface PageProps {
  data: {
    stories: Array<StoryData<ArticleBlokInterface>>
  },
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {

  const storyblokApi = getStoryblokApi();
  const options: StoriesParams = {
    sort_by: 'published_at:desc:int',
    page: '0',
    per_page: 8,
  };

  const response = await storyblokApi.getStories(options);
  const stories = response.data.stories as PageProps['data']['stories'];

  return {
    props: {
      data: {
        stories,
      },
    },
  }
}

const Page: NextPage<PageProps> = ({data}) => {
  return (
    <>
      <HexSeparator color={Color.GREY}/>
      <Container className={styles.articles}>
        {data.stories.map((story) => (
          <ListArticleSummary
            key={story.id}
            story={story}/>
        ))}
      </Container>
    </>
  )
}

export default Page;
