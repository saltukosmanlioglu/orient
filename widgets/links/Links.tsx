import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as Styled from './Links.styled'

const Links: React.FunctionComponent = () => {
  return (
    <Styled.Links>
      <Styled.Detail>
        <Link href="/home">MENU</Link>
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
      </Styled.Detail>
    </Styled.Links>
  )
}

export default Links