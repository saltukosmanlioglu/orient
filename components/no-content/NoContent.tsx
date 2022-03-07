import React from "react";
import WarningIcon from "@atlaskit/icon/glyph/warning";

import { NoContentProps } from "./types";
import * as Styled from "./NoContent.styled";

const NoContent: React.FunctionComponent<NoContentProps> = ({
  message
}) => {
  return (
    <Styled.NoContent>
      <div>
        <WarningIcon label="warning" primaryColor="#ffd800" size="xlarge" />
        <p>{message}</p>
      </div>
    </Styled.NoContent>
  );
};

export default NoContent;
