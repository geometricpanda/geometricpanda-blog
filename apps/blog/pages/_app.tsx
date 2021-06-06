import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider, Header } from '@geometricpanda/react-components';

import './styles.css';

const logo =
  'https://images.ctfassets.net/b2wulskpf6cd/5YHEZFCqAzvEGC3peipE1z/0dd8348eb2acb22b9d7a0742e74cc33d/geometric-panda-logo.jpg';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Geometric Panda</title>
      </Head>
      <div className="app">
        <ThemeProvider>
          <Header logo={logo} />
          <main className={'body'}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
