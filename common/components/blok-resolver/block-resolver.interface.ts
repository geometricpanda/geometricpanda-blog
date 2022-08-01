import {StoryData} from 'storyblok-js-client';

export interface BlockResolverComponentProps<T> {
  blok: T;
  story: StoryData<any>;
}
