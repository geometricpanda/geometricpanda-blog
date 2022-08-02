import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {useStoryblokBridge} from '@storyblok/js';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';

import {BlogStaticProps, getBlogStaticProps} from '../../../../../helpers/static-props';
import {BlokResolver} from '../../../../../common/components/blok-resolver';
import {getBlogStaticPaths} from '../../../../../helpers/static-paths';


interface BlogPage {
  story: BlogStaticProps;
  preview: boolean;
}

interface StaticParams extends ParsedUrlQuery {
  year: string;
  month: string;
  day: string;
  slug: string;
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const paths = await getBlogStaticPaths();
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export const getStaticProps: GetStaticProps<BlogPage> = async ({params, preview}) => {
  const slug = params!.slug as string;
  const year = params!.year as string;
  const month = params!.month as string;
  const day = params!.day as string;
  const story = await getBlogStaticProps(`${year}/${month}/${day}/${slug}`, preview);

  return {
    props: {
      story,
      preview: !!preview,
    },
  }
}


export const page: NextPage<BlogPage> = ({story, preview}) => {

  if (preview) {
    /* eslint-disable react-hooks/rules-of-hooks */
    const router = useRouter();
    useStoryblokBridge(story.id, () => router.reload());
    /* eslint-enable react-hooks/rules-of-hooks */
  }

  const title = `${story.content.title} • Blog • Geometric Panda`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <BlokResolver story={story}/>
    </>
  )
}

export default page;
