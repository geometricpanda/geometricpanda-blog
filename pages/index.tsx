import type {NextPage} from 'next'
import Head from 'next/head';
import {HexSeparator} from '../common/components/hex-separator';
import {Container} from '../common/components/container';
import {Color} from '../common/helpers/storyblok.interface';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home • Blog • Geometric Panda</title>
    </Head>
    <HexSeparator color={Color.GREY}/>
    <Container>
      <h1>Home</h1>
    </Container>
  </>
)


export default Home
