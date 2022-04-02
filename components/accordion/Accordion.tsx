import React, { useState } from 'react'
import HipchatChevronDownIcon from '@atlaskit/icon/glyph/hipchat/chevron-down'

import { AccordionProps } from './types'
import * as Styled from './Accordion.styled'

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  color,
  px,
  subCategoryList,
  title,
}) => {
  const [isActive, setIsActive] = useState<boolean>(
    JSON.parse(
      sessionStorage.getItem('active-accordion-id-list') || '[]'
    ).includes(title) ||
      Boolean(
        (subCategoryList || []).filter((value) =>
          JSON.parse(
            sessionStorage.getItem('active-accordion-id-list') || '[]'
          ).includes(value)
        ).length
      )
  )

  const handleClick = () => {
    const activeAccordionIdList = JSON.parse(
      sessionStorage.getItem('active-accordion-id-list') || '[]'
    )
    if (!isActive) {
      activeAccordionIdList.push(title)
      sessionStorage.setItem(
        'active-accordion-id-list',
        JSON.stringify(activeAccordionIdList)
      )
      sessionStorage.setItem('scroll-position', window.pageYOffset.toString())
    } else {
      sessionStorage.setItem(
        'active-accordion-id-list',
        JSON.stringify(
          activeAccordionIdList.filter((value: string) => value !== title)
        )
      )
    }
    setIsActive(!isActive)
  }

  return (
    <React.Fragment>
      <Styled.Accordion color={color} onClick={handleClick}>
        <Styled.Header color={color}>
          <Styled.Arrow isActive={isActive}>
            <HipchatChevronDownIcon
              label="chevron-down"
              primaryColor={color}
              size="medium"
            />
          </Styled.Arrow>
          <p>{title}</p>
        </Styled.Header>
      </Styled.Accordion>
      {isActive && <Styled.Detail px={px}>{children}</Styled.Detail>}
    </React.Fragment>
  )
}

export default Accordion
