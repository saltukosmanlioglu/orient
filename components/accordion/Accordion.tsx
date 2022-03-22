import React, { useState } from "react";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";

import { AccordionProps } from "./types";
import * as Styled from "./Accordion.styled";

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  color,
  px,
  subCategoryList,
  title,
}) => {
  const [isActive, setIsActive] = useState<boolean>(
    localStorage.getItem("active-accordion-id") === title ||
      Boolean(
        subCategoryList?.includes?.(
          localStorage.getItem("active-accordion-id") || ""
        )
      )
  );

  const handleClick = () => {
    if (!isActive) {
      localStorage.setItem("active-accordion-id", title);
      sessionStorage.setItem("scroll-position", window.pageYOffset.toString());
    }
    setIsActive(!isActive);
  };

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
  );
};

export default Accordion;
