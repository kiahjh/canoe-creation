import { Html, Head, Main, NextScript } from "next/document";

const Document: React.FC = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
