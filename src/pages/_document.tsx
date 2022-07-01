import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <meta charSet='utf-8' />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>SLOT GAME</title>
        <meta name='description' content='遊びで作ったスロットゲームです。' />
      </Head>
      <body>
        <Main />
        <div id='portal' />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
