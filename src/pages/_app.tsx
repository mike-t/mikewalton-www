import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyPortfolioApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyPortfolioApp;
