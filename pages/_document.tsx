import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

if (
  !(
    "NEXT_PUBLIC_BONDE_API_GRAPHQL_URL" in process.env &&
    "CONTENT_API_GRAPHQL_URL" in process.env &&
    "STRIPE_SECRET_KEY" in process.env &&
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" in process.env &&
    "CONTENT_API_GRAPHQL_TOKEN" in process.env
  )
) {
  console.log(
    `CONTENT_API_GRAPHQL_URL, CONTENT_API_GRAPHQL_TOKEN, NEXT_PUBLIC_BONDE_API_GRAPHQL_URL must be defined`,
    process.env
  );
  process.exit();
}

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
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
