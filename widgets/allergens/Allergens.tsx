import React from 'react'

import { AllergensProps } from './types'
import * as Styled from './Allergens.styled'

const Allergens: React.FunctionComponent<AllergensProps> = ({
  allerjens
}) => {
  return (
    <Styled.Allergens>
      <b>Alerjenler</b>
      <p>{allerjens}</p>
    </Styled.Allergens>
  )
}

export default Allergens