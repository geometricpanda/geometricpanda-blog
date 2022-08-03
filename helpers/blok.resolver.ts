import {Richtext} from 'storyblok-js-client';
import {Storyblok} from './storyblock-client';
import {BLOK, BlokComponent, SnippetComponentBlok, TextComponentBlok} from './bloks.interface';
import {syntaxHighlighter} from './syntax-highlighter';
import {sanitize} from './sanitizer';

export const textBlokResolver = (blok: TextComponentBlok): TextComponentBlok => {
  const rawBody = blok.body as unknown as Richtext;
  const htmlBody = Storyblok.richTextResolver.render(rawBody);
  const body = sanitize(htmlBody);
  return {
    ...blok,
    body,
  }
}

export const snippetBlokResolver = (blok: SnippetComponentBlok): SnippetComponentBlok => {
  const code = syntaxHighlighter(blok.code, blok.language)
  return {
    ...blok,
    code,
  }
}

export const blokResolver = (blok: BlokComponent): BlokComponent => {

  switch (blok.component) {
    case BLOK.TEXT:
      return textBlokResolver(blok);
    case BLOK.SNIPPET:
      return snippetBlokResolver(blok);
    case BLOK.ASSET:
    case BLOK.HERO:
    case BLOK.SEPARATOR:
    case BLOK.YOUTUBE:
      return blok;
    default:
      console.log(blok);
      throw new Error(`Unknown Blok ${blok}`);
  }
}
