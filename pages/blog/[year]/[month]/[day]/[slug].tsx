import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {ParsedUrlQuery} from 'querystring';

import {BlogStaticProps, getBlogStaticProps} from '../../../../../helpers/static-props';
import {BlokResolver} from '../../../../../common/components/blok-resolver';
import {getBlogStaticPaths} from '../../../../../helpers/static-paths';

import Head from 'next/head';

interface BlogPage {
  blog: BlogStaticProps;
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


export const getStaticProps: GetStaticProps<BlogPage> = async ({params}) => {
  const slug = params!.slug as string;
  const year = params!.year as string;
  const month = params!.month as string;
  const day = params!.day as string;
  const blog = await getBlogStaticProps(`${year}/${month}/${day}/${slug}`);
  return {
    props: {
      blog,
    },
  }
}


export const page: NextPage<BlogPage> = ({blog}) => {
  const title = `${blog.content.title} • Blog • Geometric Panda`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <BlokResolver story={blog}/>
    </>
  )
}

export default page;
