import React from 'react'
import { NextPage } from 'next'

import Accordion from '@/components/accordion'
import Product from '@/components/product'
import Main from '@/layout/main'

import * as Styled from './Home.styled'

const Home: NextPage = () => {
  return (
    <Main title="Orient by G.K.">
      <Styled.Gutter>
        <Accordion color="grey" title="SABAH">
          <Styled.Gutter>
            <Product productName="KAHVALTI TABAĞI" href="/food/kahvalti-tabagi" price="85" />
            <Product productName="FIT BRUNCH" href="/food/fit-brunch" price="98" />
            <Product productName="COLDPRESS JUICE COLLECTION" href="/food/coldpress-juice-collection" price="117" />
          </Styled.Gutter>
        </Accordion>
        <Accordion color="grey" title="SALATA"></Accordion>
        <Accordion color="grey" title="SUSHI"></Accordion>
        <Accordion color="grey" title="SOFT İÇECEKLER"></Accordion>
        <Accordion color="grey" title="TAZE İÇECEKLER"></Accordion>
        <Accordion color="grey" title="KOKTEYLLER"></Accordion>
        <Accordion color="grey" title="NARGİLE"></Accordion>
      </Styled.Gutter>
    </Main>
  )
}

export default Home