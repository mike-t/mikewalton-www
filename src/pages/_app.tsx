import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import "~/styles/globals.css";

// app
function MyPortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>     
      <main className={`font-sans`}>
      <Component {...pageProps} />      
      </main>
      <Analytics />
    </>
  );
}

export default MyPortfolioApp;