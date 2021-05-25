import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { init as initApm } from "@elastic/apm-rum";
import * as pkgInfo from "../package.json";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    initApm({
      // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
      serviceName: `Nossas New Webpage`,
      // Set custom APM Server URL (default: http://localhost:8200)
      serverUrl:
        "https://421ca5e3d4c44a04a7f832f08aefbcda.apm.us-east-1.aws.cloud.es.io:443",
      // Set the service version (required for source map feature)
      serviceVersion: pkgInfo.version,
      // Set the service environment
      environment: "production",
    });

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
