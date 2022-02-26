import React, { useEffect, useState } from 'react'
import HipchatChevronUpIcon from '@atlaskit/icon/glyph/hipchat/chevron-up'

import { ScrollUpProps } from './types'
import * as Styled from './ScrollUp.styled'

const ScrollUp: React.FunctionComponent<ScrollUpProps> = ({
  color,
}) => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window && window.scrollY > 350) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return visible ? (
    <Styled.ScrollUp color={color} onClick={handleClick}>
      <HipchatChevronUpIcon label="chevron-down" primaryColor={color} size="xlarge" />
    </Styled.ScrollUp>
  ) : null
}

export default ScrollUp