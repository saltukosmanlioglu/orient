import React from 'react'
import Link from 'next/link'

import { ProductProps } from './types'
import * as Styled from './Product.styled'

const Product: React.FunctionComponent<ProductProps> = ({
  color,
  href,
  price,
  title
}) => {
  return (
    <Link href={href} passHref>
      <Styled.Product color={color}>
        <Styled.Title style={{ width: '80%' }}>
          <p>{title}</p>
        </Styled.Title>
        <Styled.Price>
          <p>{price} ₺</p>
        </Styled.Price>
      </Styled.Product>
    </Link>
  )
}

export default Product