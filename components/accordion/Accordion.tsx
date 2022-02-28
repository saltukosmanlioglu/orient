import React, { useState } from 'react'
import HipchatChevronDownIcon from '@atlaskit/icon/glyph/hipchat/chevron-down'

import { AccordionProps } from './types'
import * as Styled from './Accordion.styled'

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  color,
  title,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <React.Fragment>
      <Styled.Accordion color={color} onClick={handleClick}>
        <Styled.Header color={color}>
          <Styled.Arrow isActive={isActive}>
            <HipchatChevronDownIcon label="chevron-down" primaryColor={color} size="medium" />
          </Styled.Arrow>
          <p>{title}</p>
        </Styled.Header>
      </Styled.Accordion>
      {isActive && (<Styled.Detail>{children}</Styled.Detail>)}
    </React.Fragment>
  )
}

export default Accordion
