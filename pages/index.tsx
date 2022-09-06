import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head';
import {getStoryblokApi, StoryData} from '@storyblok/react';
import {StoriesParams} from 'storyblok-js-client';

import {Container} from '../common/components/container';
import {Color} from '../common/helpers/storyblok.interface';
import {Grid} from '../common/components/grid';
import {ArticleBlokInterface} from '../common/components/bloks';
import {ArticleSummary} from '../common/components/article-summary';
import {Hero} from '../common/components/hero';
import {FreeText} from '../common/components/free-text';

import styles from './index.module.css';

interface HomeProps {
  latest: Array<StoryData<ArticleBlokInterface>>;
  featured: StoryData<ArticleBlokInterface>;
}

export const getStaticProps: GetStaticProps = async () => {

  const storyblokApi = getStoryblokApi();

  const latestArticle: StoriesParams = {
    sort_by: 'first_published_at:desc:int',
    per_page: 10,
  };

  const response = await storyblokApi.getStories(latestArticle);
  const {data} = response;

  const featured = data.stories.find(story => story.tag_list.includes('featured'));

  const latest = data.stories
    .filter(story => !story.tag_list.includes('featured'))
    .slice(0, 2);

  return {
    props: {
      featured,
      latest,
    },
  }
}

const Home: NextPage<HomeProps> = ({latest, featured}) => {
  return (
    <>

      <Head>
        <title>Home • Blog • Geometric Panda</title>
      </Head>

      <Hero colour={Color.DARK_BLUE}
            title={'Welcome to Geometric Panda'}
            subtitle={'A collection of thoughts and experiments'}/>
      <Container>
        <Grid layout={'2/1-r'} className={styles['home']}>
          <div>
            <FreeText className={styles['home__intro']}>
              <h2>About Me</h2>
              <p>
                Hi, I&apos;m Jim Drury - a software engineer specialising in UI technologies such as Angular,
                React, CSS, and HTML.
              </p>
              <p>I spend a lot of time researching how to do new and fun things with web
                technologies, with real passions towards Accessibility JamStack, Server Side Rendering, and CSS.
              </p>
              <p>
                By day I&apos;m Lead Application Architect for <a
                href={'https://www.virginmediao2.co.uk'}
                rel={'noreferrer noopener'}
                target={'_blank'}>Virgin Media O2</a> ,
                but after hours you&apos;ll find me on live streaming on <a
                href={'https://twitch.tv/geometricjim'}
                rel={'noreferrer noopener'}
                target={'_blank'}>twitch.tv/geometricjim</a>.
              </p>
              <p>
                I&apos;ve created Geometric Panda to help share my love and passion for the Web with the world, so
                please take a look around, hopefully you&apos;ll find something you like.</p>

              <p>If you&apos;ve got any questions, or thoughts for stuff you&apos;d like to see, please feel free to DM
                me at <a href={'twitter.com/jim_drury'}
                         rel={'noreferrer noopener'}
                         target={'_blank'}>twitter.com/jim_drury</a>.
              </p>
            </FreeText>

          </div>

          <div itemScope
               itemType="http://schema.org/Blog">

            <div className={styles['home__featured']}>

              <FreeText className={styles['home__featured-title']}>
                <h2>Featured</h2>
              </FreeText>

              <ArticleSummary
                index={0}
                story={featured}/>
            </div>

            <div className={styles['home__latest']}>

              <FreeText className={styles['home__latest-title']}>
                <h2>Latest</h2>
              </FreeText>

              <div className={styles['home__latest-articles']}>
                {latest.map((article, index) => (
                  <ArticleSummary
                    key={article.id}
                    index={index}
                    story={article}/>
                ))}
              </div>

            </div>
          </div>

        </Grid>

      </Container>

    </>
  )
}


export default Home
