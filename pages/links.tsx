import type {NextPage} from 'next'
import Head from 'next/head';
import {HexSeparator} from '../common/components/hex-separator';
import {Container} from '../common/components/container';

const Links: NextPage = () => (
  <>
    <Head>
      <title>Links • Blog • Geometric Panda</title>
    </Head>
    <HexSeparator hexColor={'grey'} bleedColor={'dark-teal'}/>
    <Container>
      <h1>Links</h1>
    </Container>
  </>
)


export default Links
