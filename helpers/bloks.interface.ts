import {StoryblokComponent} from 'storyblok-js-client';
import {LANGUAGE} from './syntax-highlighter';
import exp from 'constants';

export enum BLOK {
  TEXT = 'text',
  SEPARATOR = 'separator',
  ASSET = 'asset',
  SNIPPET = 'snippet',
  HERO = 'hero',
  YOUTUBE = 'youtube',
}

export interface Asset {
  id: string;
  alt: string;
  copyright: string;
  fieldtype: 'asset',
  filename: string;
  focus: string,
  name: string;
  title: string;
}

export interface YouTubeComponentBlok extends StoryblokComponent<BLOK.YOUTUBE> {
  video_id: string;
  controls: boolean;
}

export interface AssetComponentBlok extends StoryblokComponent<BLOK.ASSET> {
  images: Array<Asset>;
  videos: Array<Asset>;
}

export interface SnippetComponentBlok extends StoryblokComponent<BLOK.SNIPPET> {
  code: string;
  filename: string;
  language: LANGUAGE;
}

export interface SeparatorComponentBlok extends StoryblokComponent<BLOK.SEPARATOR> {
}

export enum Color {
  BLACK = 'black',
  GREY = 'grey',
  DARK_BLUE = 'dark-blue',
  DARK_TEAL = 'dark-teal',
  DARK_MAGENTA = 'dark-magenta'
}

export interface HeroComponentBlok extends StoryblokComponent<BLOK.HERO> {
  colour: Color;
  title: string;
  subtitle: string;
  published_date: boolean;
}

export interface TextComponentBlok extends StoryblokComponent<BLOK.TEXT> {
  heading?: string;
  subheading?: string;
  body: string;
}


export type BlokComponent =
  | TextComponentBlok
  | SeparatorComponentBlok
  | AssetComponentBlok
  | SnippetComponentBlok
  | HeroComponentBlok
  | YouTubeComponentBlok;
