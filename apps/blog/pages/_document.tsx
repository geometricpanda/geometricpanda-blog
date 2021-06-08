import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider } from '@geometricpanda/react-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ThemeProvider>
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
