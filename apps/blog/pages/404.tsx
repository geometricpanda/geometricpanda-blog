import {
  Anchor,
  Container,
  H2,
  PageHeader,
} from '@geometricpanda/react-components';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Geometric Panda</title>
      </Head>
      <Container>
        <PageHeader>Error 404</PageHeader>
        <H2>Sorry, the page could not be found.</H2>
        <Link href="/" passHref>
          <Anchor>Take me back to home.</Anchor>
        </Link>
      </Container>
    </>
  );
};

export default Custom404;
