import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/BebasNeue/BebasNeue-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BebasNeue/BebasNeue-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/BebasNeue/BebasNeue-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link href="/styles/globals.css" rel="stylesheet" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-7R11G6KBCH"
          ></script>
          <script>
            dangerouslySetInnerHTML=
            {{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-7R11G6KBCH');
              `,
            }}
          </script>
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
