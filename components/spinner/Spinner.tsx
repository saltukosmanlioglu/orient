import React from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

import { SpinnerProps } from "./types";
import * as Styled from "./Spinner.styled";

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  message = "Yükleniyor..",
}) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <Styled.Spinner>
      <div>
        <CircleLoader color="#000" css={override} />
        {message && <p>{message}</p>}
      </div>
    </Styled.Spinner>
  );
};

export default Spinner;
