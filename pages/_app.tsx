import React from "react";
import type { AppProps } from "next/app";

import GlobalStyles from "../app/global/Global.styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default MyApp;
