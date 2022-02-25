import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HipchatChevronUpIcon from '@atlaskit/icon/glyph/hipchat/chevron-up'

import * as Styled from './ScrollUp.styled'

const ScrollUp: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = () => {
    window.scroll({
      behavior: 'smooth',
      top: 0
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window && window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return visible ? (
    <Styled.ScrollUp onClick={handleClick}>
      <HipchatChevronUpIcon label="chevron-down" primaryColor="#2f5143" size="xlarge" />
    </Styled.ScrollUp>
  ) : null
}

export default ScrollUp