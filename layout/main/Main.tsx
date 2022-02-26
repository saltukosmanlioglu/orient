import React from 'react'
import Head from 'next/head'

import Footer from '@/components/footer'
import Header from '@/components/header'

import { MainProps } from './types'

const Main: React.FunctionComponent<MainProps> = ({
  children,
  title
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <section style={{ marginBottom: 40 }}>
        {children}
      </section>
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Main