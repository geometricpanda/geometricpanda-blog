import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faBlog} from '@fortawesome/free-solid-svg-icons/faBlog';
import {faLink} from '@fortawesome/free-solid-svg-icons/faLink';

import type {AppProps} from 'next/app'
import type {FC} from 'react';
import {ILink} from '../common/components/page/page.interface';
import {Page} from '../common/components/page';
import '../styles/globals.css'
import {StoryblokBridge} from '../common/components/storyblok-bridge';

const initialLinks: Array<ILink> = [
  {href: '/', text: 'Home', active: false, icon: faHome},
  {href: '/blog', text: 'Blog', active: false, icon: faBlog},
  {href: '/news', text: 'News', active: false, icon: faNewspaper},
  {href: '/links', text: 'Links', active: false, icon: faLink},
]


const MyApp: FC<AppProps> = ({Component, pageProps, router}) => (
  <Page initialLinks={initialLinks}>
    {router.isPreview && <StoryblokBridge/>}
    <Component {...pageProps} />
  </Page>
)

export default MyApp
