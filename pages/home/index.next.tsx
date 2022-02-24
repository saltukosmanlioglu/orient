import React from 'react'
import { NextPage } from 'next'

import Accordion from '@/components/accordion'
import Product from '@/components/product'
import Main from '@/layout/main'
import Carousel from '@/widgets/carousel'
import Links from '@/widgets/links'

import * as Styled from './Home.styled'

const Home: NextPage = () => {
  return (
    <Main title="Orient by G.K.">
      <Carousel />
      <Links />
      <Styled.Gutter>
        <Accordion color="#465956" title="SABAH">
          <Styled.Gutter>
            <Product productName="KAHVALTI TABAĞI" href="/product/kahvalti-tabagi" price="85" />
            <Product productName="FIT BRUNCH" href="/product/fit-brunch" price="98" />
            <Product productName="COLDPRESS JUICE COLLECTION" href="/product/coldpress-juice-collection" price="117" />
          </Styled.Gutter>
        </Accordion>
        <Accordion color="#465956" title="SALATA"></Accordion>
        <Accordion color="#465956" title="SUSHI"></Accordion>
        <Accordion color="#a29d2f" title="SOFT İÇECEKLER"></Accordion>
        <Accordion color="#a29d2f" title="TAZE İÇECEKLER"></Accordion>
        <Accordion color="#d15335" title="KOKTEYLLER"></Accordion>
        <Accordion color="#d15335" title="VERMUT"></Accordion>
        <Accordion color="#998575" title="NARGİLE"></Accordion>
      </Styled.Gutter>
    </Main>
  )
}

export default Home