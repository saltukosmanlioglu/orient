import React from 'react'
import { css } from '@emotion/react'
import CircleLoader from 'react-spinners/CircleLoader'

import * as Styled from './Loader.styled'

const Loader: React.FunctionComponent = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `

  return (
    <Styled.Loader>
      <div>
        <p>Orient'e Hoş Geldiniz..</p>
        <CircleLoader color="#000" css={override} />
      </div>
    </Styled.Loader>
  )
}

export default Loader