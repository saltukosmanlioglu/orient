import styled from "styled-components";

export const ProductDetail = styled.div`
  margin-top: 36px;

  b {
    width: 80%;
    color: #465957;
    font-size: 17px;
    display: block;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const Detail = styled.div`
  width: 100%;
  border: 1px solid #3d5955;
  padding: 12px;
  position: relative;

  p {
    font-size: 17px;
    line-height: 2;
    font-family: mrsea-roman-italic;
  }
  
  p:nth-child(2) {
    text-align: right;
    font-size: 17px;
    font-family: mrsea-roman-italic;
    
    span {
      font-family: mrsea-roman-italic;
      font-size: 10px;
    }
  }
`;

export const Bar = styled.div`
  position: absolute;
  right: -2px;
  top: -2px;
  height: 70%;
  width: 3px;
  background-color: #fff;
  z-index: 1000;
`;
