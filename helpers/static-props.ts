import {StoryData} from 'storyblok-js-client';
import {Storyblok} from './storyblock-client';
import {blokResolver} from './blok.resolver';
import {BlokComponent} from './bloks.interface';

export interface Bloks {
  body?: Array<BlokComponent>;
}

export interface BlogProps extends Bloks {
  title: string;
  description: string;
}

export type BlogStaticProps = StoryData<BlogProps>;
export const getBlogStaticProps = async (slug: string, preview = false): Promise<BlogStaticProps> => {
  const version = preview ? 'draft' : 'published';
  const {data} = await Storyblok.getStory(`blog/${slug}`, {version})
  const story = data.story as unknown as BlogStaticProps;
  const body = story.content.body?.map((blok: BlokComponent) => blokResolver(blok));
  return {
    ...story,
    content: {
      ...story.content,
      body,
    },
  }
}
