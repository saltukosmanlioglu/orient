import React from 'react'
import Link from 'next/link'

import { ProductProps } from './types'
import * as Styled from './Product.styled'

const Product: React.FunctionComponent<ProductProps> = ({
  href,
  price,
  productName
}) => {
  return (
    <Link href={href}>
      <Styled.Product>
        <Styled.ProductName style={{ width: '80%' }}>
          <p>{productName}</p>
        </Styled.ProductName>
        <Styled.Price>
          <p>{price} ₺</p>
        </Styled.Price>
      </Styled.Product>
    </Link>
  )
}

export default Product