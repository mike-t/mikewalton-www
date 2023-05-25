import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import "~/styles/globals.css";

function MyPortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyPortfolioApp;