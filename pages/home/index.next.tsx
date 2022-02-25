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
        <Accordion color="#465956" title="Sabah">
          <Styled.Gutter>
            <Product productName="KAHVALTI TABAĞI" href="/product/kahvalti-tabagi" price="85" />
            <Product productName="FIT BRUNCH" href="/product/fit-brunch" price="98" />
            <Product productName="COLDPRESS JUICE COLLECTION" href="/product/coldpress-juice-collection" price="117" />
          </Styled.Gutter>
        </Accordion>
        <Accordion color="#465956" title="Salata"></Accordion>
        <Accordion color="#465956" title="Sushi"></Accordion>
        <Accordion color="#a29d2f" title="Soft İçecekler"></Accordion>
        <Accordion color="#a29d2f" title="Taze İçecekler"></Accordion>
        <Accordion color="#d15335" title="Kokteyller"></Accordion>
        <Accordion color="#d15335" title="Vermut"></Accordion>
        <Accordion color="#998575" title="Nargile"></Accordion>
      </Styled.Gutter>
    </Main>
  )
}

export default Home