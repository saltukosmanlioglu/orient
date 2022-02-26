import styled from 'styled-components'

export const ProductDetail = styled.div`
  margin-top: 20px;

  b {
    width: 80%;
    color: #465957;
    font-size: 17px;
    display: block;
  }

  p {
    margin-top: 8px;
    font-size: 13px;
  }
`

export const Detail = styled.div`
  width: 100%;
  border: 1px solid #3d5955;
  padding: 12px;
  position: relative;

  p {
    font-size: 13px;
  }

  &:nth-child(2) {
    margin-left: auto;
  }
`

export const Bar = styled.div`
  position: absolute;
  right: -2px;
  top: -2px;
  height: 90%;
  width: 3px;
  background-color: #fff;
  z-index: 1000;
`