import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {StoriesParams} from 'storyblok-js-client';
import {getStoryblokApi, StoryData} from '@storyblok/react';

import {ArticleSummary} from '../../../common/components/article-summary';
import {ArticleBlokInterface} from '../../../common/components/bloks';
import {Color} from '../../../common/helpers/storyblok.interface';
import {Container} from '../../../common/components/container';
import {Hero} from '../../../common/components/hero';
import {Pagination} from '../../../common/components/pagination';

import styles from './page.module.css';
import Head from 'next/head';

const per_page = 10;

interface PageProps {
  data: {
    stories: Array<StoryData<ArticleBlokInterface>>
  },
  total: number,
  page: number,
}

export const getStaticProps: GetStaticProps<PageProps> = async ({params}) => {

  const page = params?.page
      ? +params.page
      : 1,

    storyblokApi = getStoryblokApi();

  const options: StoriesParams = {
    page: page.toString(),
    per_page,
    sort_by: 'published_at:desc:int',
  };

  const response = await storyblokApi.getStories(options);
  const {total, data} = response;

  const stories = data.stories as PageProps['data']['stories'];
  const page_total = Math.ceil(total / per_page);

  return {
    props: {
      page: +page,
      total: page_total,
      data: {
        stories,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const storyblokApi = getStoryblokApi();
  const options: StoriesParams = {per_page};
  const response = await storyblokApi.getStories(options);

  const {total} = response;
  const pages = Math.ceil(total / per_page);

  const paths = new Array(pages)
    .fill('')
    .map((_, page) => (page + 1).toString())
    .map((page) => ({params: {page}}));

  return {
    paths,
    fallback: false,
  }
}

const Page: NextPage<PageProps> = ({data, page, total}) => {
  return (
    <>
      <Head>
        <title>{`Page ${page} of ${total} • Blog • Geometric Panda`}</title>
      </Head>
      <Hero colour={Color.DARK_PURPLE}
            title={'Blog Articles'}
            subtitle={`Page ${page} of ${total}`}
      />
      <Container>

        <div className={styles.articles}>
          {data.stories.map((story) => (
            <ArticleSummary
              key={story.id}
              story={story}/>
          ))}
        </div>

        <Pagination totalPages={total}
                    currentPage={page}
                    baseSlug={'/blog/page'}
                    baseHome={'/blog'}/>
      </Container>
    </>
  )
}

export default Page;
