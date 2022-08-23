import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {getStoryblokApi, StoryblokComponent, StoryData, useStoryblokState} from '@storyblok/react';
import {StoryParams} from 'storyblok-js-client';
import {StoryblokLink} from '../../common/helpers/storyblok.interface';

interface PageProps {
  story: StoryData;
  preview: boolean;
}

export const getStaticProps: GetStaticProps<PageProps> = async ({params, preview}) => {

  const slug = params?.slug as string;

  const sbParams: StoryParams = {
    version: preview ? 'draft' : 'published',
  };

  const storyblokApi = getStoryblokApi();
  const {data} = await storyblokApi.getStory(`blog/${slug}`, sbParams);

  return {
    notFound: !preview && !data.story,
    revalidate: 120, // 2 minutes
    props: {
      story: data.story,
      key: data.story.id,
      preview: preview || false,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const {data} = await storyblokApi.get('cdn/links/');
  const links: Record<string, StoryblokLink> = data.links;

  const paths = Object.values(links)
    .filter(({published, slug}) => published && slug.includes('blog/'))
    .map(({slug}) => slug.replace('blog/', ''))
    .map((slug) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  }
}


const Page: NextPage<PageProps> = ({story, preview}) => {
  story = useStoryblokState(story, undefined, preview);
  return (
    <StoryblokComponent blok={story.content}/>
  )
}

export default Page;
