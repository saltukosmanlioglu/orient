import React, { useState } from 'react'

import * as Styled from './Accordion.styled'
import { AccordionProps } from './types'

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
    <Styled.Accordion color={color} onClick={handleClick}>
      <Styled.Header color={color}>
        <Styled.Arrow
          alt="Accordion arrow"
          className="arrow"
          height={20}
          isActive={isActive}
          src="/favicon.ico"
          width={20}
        />
        <p>{title}</p>
      </Styled.Header>
      {isActive && (
        <Styled.Detail>
          {children}
        </Styled.Detail>
      )}
    </Styled.Accordion>
  )
}

export default Accordion;
