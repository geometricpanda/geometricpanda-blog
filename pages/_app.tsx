import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faBlog} from '@fortawesome/free-solid-svg-icons/faBlog';
import {faLink} from '@fortawesome/free-solid-svg-icons/faLink';
import {apiPlugin, storyblokInit} from '@storyblok/react';

import type {AppProps} from 'next/app'
import type {FC} from 'react';

import {StoryblokBridge} from '../common/components/storyblok-bridge';

import {
  ArticleBlok, AssetsBlok,
  HeroBlok,
  SeparatorBlok,
  SnippetBlok,
  TextBlok,
} from '../common/components/bloks';

import {ILink} from '../common/components/page/page.interface';
import {Page} from '../common/components/page';
import '../styles/globals.css'
import {GithubRepoBlok} from '../common/components/bloks/github-repo-blok';


storyblokInit({
  accessToken: 'UM2LrADUyvXeTgEjKgAKCgtt',
  use: [apiPlugin],
  components: {
    article: ArticleBlok,
    asset: AssetsBlok,
    hero: HeroBlok,
    text: TextBlok,
    separator: SeparatorBlok,
    snippet: SnippetBlok,
    github_repo: GithubRepoBlok,
  },
});

const initialLinks: Array<ILink> = [
  {href: '/', text: 'Home', active: false, icon: faHome},
  {href: '/blog', text: 'Blog', active: false, icon: faBlog},
  // {href: '/news', text: 'News', active: false, icon: faNewspaper},
  {href: '/links', text: 'Links', active: false, icon: faLink},
];

const MyApp: FC<AppProps> = ({Component, pageProps, router}) => (
  <Page initialLinks={initialLinks}>
    {router.isPreview && <StoryblokBridge/>}
    <Component {...pageProps} />
  </Page>
)

export default MyApp
