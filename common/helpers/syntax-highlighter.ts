import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

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
  switch (language.toLowerCase()) {
    case LANGUAGE.JSON:
      return Prism.highlight(code, Prism.languages.json, 'json');
    case LANGUAGE.JAVASCRIPT:
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    case LANGUAGE.TYPESCRIPT:
      return Prism.highlight(code, Prism.languages.typescript, 'typescript');
    case LANGUAGE.TSX:
      return Prism.highlight(code, Prism.languages.tsx, 'tsx');
    case LANGUAGE.JSX:
      return Prism.highlight(code, Prism.languages.jsx, 'jsx');
    case LANGUAGE.CSS:
      return Prism.highlight(code, Prism.languages.css, 'css');
    case LANGUAGE.SCSS:
      return Prism.highlight(code, Prism.languages.scss, 'scss');
    case LANGUAGE.HTML:
      return Prism.highlight(code, Prism.languages.html, 'html');
    case LANGUAGE.BASH:
      return Prism.highlight(code, Prism.languages.bash, 'bash');
    default:
      return code;
  }
}

