import React from 'react'

import { AllergensProps } from './types'
import * as Styled from './Allergens.styled'

const Allergens: React.FunctionComponent<AllergensProps> = ({
  allergens
}) => {
  return (
    <Styled.Allergens>
      <b>Alerjenler</b>
      <p>{allergens}</p>
    </Styled.Allergens>
  )
}

export default Allergens