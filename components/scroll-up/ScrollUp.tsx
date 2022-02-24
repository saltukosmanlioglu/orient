import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import * as Styled from './ScrollUp.styled'

const ScrollUp: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = () => {
    window.scrollTo({
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
      <Image src="/favicon.ico" alt="Scroll Up" width={30} height={30} />
    </Styled.ScrollUp>
  ) : null
}

export default ScrollUp