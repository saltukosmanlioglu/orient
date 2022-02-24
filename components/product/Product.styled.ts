import styled from 'styled-components'

export const Product = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
`

export const ProductName = styled.div`
  width: 80%;

  p {
    text-align: left;
  }
`

export const Price = styled.div`
  width: 20%;

  p {
    text-align: right;
  }
`