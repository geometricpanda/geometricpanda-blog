import {FC} from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document'

const MyDocument: FC<Document> = () => (
      <Html lang="en-gb">
      <Head>
          <base href='/'/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16.png"/>
          <link rel="icon" type="image/png" sizes="48x48" href="/favicons/48.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/favicons/192.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/favicons/167.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicons/180.png"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )

export default MyDocument
