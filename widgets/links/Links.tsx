import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as Styled from './Links.styled'

const Links: React.FunctionComponent = () => {
  return (
    <Styled.Links>
      <Styled.Detail>
        <Link href="/home">Menü</Link>
        <Styled.Lang>
          
        </Styled.Lang>
      </Styled.Detail>
    </Styled.Links>
  )
}

export default Links