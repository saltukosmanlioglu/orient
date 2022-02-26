import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { HeaderProps } from './types'
import * as Styled from './Header.styled'

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Header>
      <Link href="/home">
        <Image src="/images/logo.png" width={80} height={80} alt="Orient by G.K." />
      </Link>
      <Styled.SocialMedia>
        <Link href="https://www.facebook.com/">
          <a target="_blank">
            <img width="10" src="/images/facebook.png" alt="Facebook link" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/">
          <a target="_blank">
            <img width="20" src="/images/instagram.png" alt="Instagram link" />
          </a>
        </Link>
      </Styled.SocialMedia>
    </Styled.Header>
  )
}

export default Header