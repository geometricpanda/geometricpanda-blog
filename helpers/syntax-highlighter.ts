import Prism from 'prismjs';

export enum LANGUAGE {
  HTML = 'html',
  JAVASCRIPT = 'js',
  JSX = 'jsx',
  TYPESCRIPT = 'ts',
  TSX = 'tsx',
  CSS = 'css',
  SCSS = 'scss',
  JSON = 'json',
  BASH = 'bash',
}

export const syntaxHighlighter = (code: string, language: LANGUAGE) => {
  switch (language) {
    case LANGUAGE.JSON:
      return Prism.highlight(code, Prism.languages.javascript, 'json');
    case LANGUAGE.JAVASCRIPT:
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    case LANGUAGE.TYPESCRIPT:
      return Prism.highlight(code, Prism.languages.javascript, 'typescript');
    case LANGUAGE.TSX:
      return Prism.highlight(code, Prism.languages.javascript, 'tsx');
    case LANGUAGE.JSX:
      return Prism.highlight(code, Prism.languages.javascript, 'jsx');
    case LANGUAGE.CSS:
      return Prism.highlight(code, Prism.languages.css, 'css');
    case LANGUAGE.SCSS:
      return Prism.highlight(code, Prism.languages.css, 'scss');
    case LANGUAGE.HTML:
      return Prism.highlight(code, Prism.languages.html, 'html');
    case LANGUAGE.BASH:
      return Prism.highlight(code, Prism.languages.bash, 'bash');
    default:
      throw new Error(`Unknown language ${language}`)
  }
}

