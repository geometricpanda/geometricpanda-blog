import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {getStoryblokApi, StoryblokComponent, StoryData, useStoryblokState} from '@storyblok/react';
import {StoryParams} from 'storyblok-js-client';
import {StoryblokLink} from '../common/helpers/storyblok.interface';

interface PageProps {
  story: StoryData;
  preview: boolean;
}

export const getStaticProps: GetStaticProps<PageProps> = async ({params, preview}) => {

  const slug = params?.slug
    ? Array.isArray(params.slug)
      ? params.slug.join('/')
      : params.slug
    : 'home';

  const sbParams: StoryParams = {
    version: preview ? 'draft' : 'published',
  };

  const storyblokApi = getStoryblokApi();
  const {data} = await storyblokApi.getStory(slug, sbParams);

  return {
    notFound: !preview && !data.story,
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
    .filter(({is_folder, published}) => !is_folder && published)
    .map(({slug}) => slug.split('/'))
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
