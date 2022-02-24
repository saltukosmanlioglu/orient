import React from 'react'
import Image from 'next/image'

import { HeaderProps } from './types'
import * as Styled from './Header.styled'

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Header>
      <Image src="/images/logo.jpeg" width={80} height={80} alt="Orient by G.K." />
    </Styled.Header>
  )
}

export default Header