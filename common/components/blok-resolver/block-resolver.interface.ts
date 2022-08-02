import {StoryData} from 'storyblok-js-client';

export interface BlokResolverComponentProps<T> {
  blok: T;
  story: StoryData<any>;
}
