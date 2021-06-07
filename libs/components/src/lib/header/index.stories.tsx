import { Header } from './index';

import logo from './logo.svg';

import { HeaderLink, HeaderLinks } from '../header-links';

export default {
  title: 'Layout / Header',
};

export const AppHeader = () => (
  <Header logo={logo}>
    <HeaderLinks>
      <HeaderLink href={'/'}>Home</HeaderLink>
      <HeaderLink href={'/articles'}>Blog</HeaderLink>
      <HeaderLink href={'https://www.github.com/geometricpanda'}>
        GitHub
      </HeaderLink>
    </HeaderLinks>
  </Header>
);
