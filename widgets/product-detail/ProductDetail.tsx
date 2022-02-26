import React from 'react'

import { ProductDetailProps } from './types'
import * as Styled from './ProductDetail.styled'

const ProductDetail: React.FunctionComponent<ProductDetailProps> = ({
  description,
  price,
  title
}) => {
  return (
    <Styled.ProductDetail>
      <b>{title}</b>
      <Styled.Detail>
        <p>{description}</p>
        <p style={{ textAlign: 'right' }}>{price}.<span style={{ fontSize: 11 }}>00 TL</span> </p>
        <Styled.Bar />
      </Styled.Detail>
    </Styled.ProductDetail>
  )
}

export default ProductDetail