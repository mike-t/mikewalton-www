import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from '@vercel/analytics/react';
import "~/styles/globals.css";

const MyPortfolioApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  <Analytics />
};

export default MyPortfolioApp;
