import type {NextPage} from 'next'
import Head from 'next/head';
import {Container} from '../common/components/container';
import {Color} from '../common/helpers/storyblok.interface';
import {Hero} from '../common/components/hero';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home • Blog • Geometric Panda</title>
    </Head>
    <Hero
      colour={Color.DARK_PURPLE}
      title={'Welcome to Geometric Panda'}
      subtitle={'A collection of thoughts and hacks'}/>
    <Container>
      <h1> Home</h1>
    </Container>
  </>
)


export default Home
