import type {NextPage} from 'next'
import Head from 'next/head';
import {HexSeparator} from '../common/components/hex-separator';
import {Container} from '../common/components/container';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home • Blog • Geometric Panda</title>
    </Head>
    <HexSeparator hexColor={'grey'} bleedColor={'dark-teal'}/>
    <Container>
      <h1>Home</h1>
    </Container>
  </>
)


export default Home
