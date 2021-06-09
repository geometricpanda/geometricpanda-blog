import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { Header, HeaderLinks, HeaderLink } from '@geometricpanda/react-components';

import './styles.css';
import Link from 'next/link';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Geometric Panda</title>
      </Head>
      <div className="app">
          <Header logo={'/logo.svg'}>
            <HeaderLinks>
              <Link href={'/'} passHref>
                <HeaderLink>Home</HeaderLink>
              </Link>
              <Link href={'/articles/2021/05/22/being-an-ally-to-women-in-tech'} passHref>
                <HeaderLink>Blog</HeaderLink>
              </Link>
              <Link href={'https://www.github.com/geometricpanda'} passHref>
                <HeaderLink target='_blank' rel={'noopener'} title={'Github (opens in new window'}>GitHub</HeaderLink>
              </Link>
            </HeaderLinks>
          </Header>
          <main className={'body'}>
            <Component {...pageProps} />
          </main>
      </div>
    </>
  );
}

export default App;
