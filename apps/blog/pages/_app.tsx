import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider, Header } from '@geometricpanda/react-components';

import './styles.css';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Geometric Panda</title>
      </Head>
      <div className="app">
        <ThemeProvider>
          <Header logo={'/logo.svg'} />
          <main className={'body'}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
