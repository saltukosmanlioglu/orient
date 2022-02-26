import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import GlobalStyles from '@/app/global/Global.styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/jpeg" href="/images/logo.png" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default MyApp
