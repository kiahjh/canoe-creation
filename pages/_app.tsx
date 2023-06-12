import Script from 'next/script';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/597740db7b.js"></Script>
      <Component {...pageProps} />
    </div>
  );
}
