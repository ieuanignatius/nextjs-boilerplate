import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo-96x96.png" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Boilerplate" />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
          <meta name="theme-color" content="#90cdf4" />
          <meta name="author" content="ieuanignatius" />

          <link
            rel="preload"
            href={`${process.env.NEXT_PUBLIC_ENV_BASE_PATH || ''}/fonts/Rubik-Light.ttf`}
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/fonts/Rubik-Regular.ttf`}
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/fonts/Rubik-Medium.ttf`}
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
