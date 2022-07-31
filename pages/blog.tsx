import type {NextPage} from 'next'
import Head from 'next/head';
import {HexSeparator} from '../common/components/hex-separator';
import {Container} from '../common/components/container';

const Blog: NextPage = () => (
  <>
    <Head>
      <title>Blog • Blog • Geometric Panda</title>
    </Head>
    <HexSeparator hexColor={'grey'} bleedColor={'dark-teal'}/>
    <Container>
      <h1>Blog</h1>
    </Container>
  </>
)


export default Blog
