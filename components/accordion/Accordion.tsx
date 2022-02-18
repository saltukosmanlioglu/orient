import React from "react";

import * as Styled from "./Accordion.styled";
import { AccordionProps } from "./types";

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  title,
}) => {
  return (
    <Styled.Accordion>
      <p>Accordion</p>
    </Styled.Accordion>
  );
};

export default Accordion;
