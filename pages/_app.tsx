import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faBlog} from '@fortawesome/free-solid-svg-icons/faBlog';
import {faLink} from '@fortawesome/free-solid-svg-icons/faLink';

import type {AppProps} from 'next/app'
import type {FC} from 'react';

import {ILink} from '../common/components/page/page.interface';
import {Page} from '../common/components/page';
import '../styles/globals.css'
import Head from 'next/head';

declare global {
  interface Window {
    StoryblokBridge: any;
  }
}

const initialLinks: Array<ILink> = [
  {href: '/', text: 'Home', active: false, icon: faHome},
  {href: '/blog', text: 'Blog', active: false, icon: faBlog},
  {href: '/news', text: 'News', active: false, icon: faNewspaper},
  {href: '/links', text: 'Links', active: false, icon: faLink},
]


const MyApp: FC<AppProps> = ({Component, pageProps, router}) => {
  if (router.isPreview && typeof window !== 'undefined') {
    const addPreviewEvents = () => {
      if (!window.StoryblokBridge) {
        setTimeout(addPreviewEvents, 100);
      }

      const bridge = new window.StoryblokBridge;
      bridge.on(['published', 'change', 'unpublished'],
        () => router.replace(router.asPath, undefined, {
          scroll: false,
          unstable_skipClientCache: true,
        }));
    }

    addPreviewEvents();
  }

  return (
    <>
      <Head>
        {router.isPreview && (
          <script src="//app.storyblok.com/f/storyblok-v2-latest.js"
                  type="text/javascript"
                  async/>)}
      </Head>
      <Page initialLinks={initialLinks}>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp
