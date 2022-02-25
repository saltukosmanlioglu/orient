import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { HeaderProps } from './types'
import * as Styled from './Header.styled'

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Header>
      <Link href="/home">
        <Image src="/images/logo.jpeg" width={80} height={80} alt="Orient by G.K." />
      </Link>
      <Styled.SocialMedia>
        <Link href="https://www.facebook.com/">
          <a target="_blank">
            <Image width="30" height="30" src="/favicon.ico" alt="Facebook link" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/">
          <a target="_blank">
            <Image width="30" height="30" src="/favicon.ico" alt="Instagram link" />
          </a>
        </Link>
      </Styled.SocialMedia>
    </Styled.Header>
  )
}

export default Header