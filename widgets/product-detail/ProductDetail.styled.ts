import styled from "styled-components";

export const ProductDetail = styled.div<{ color: string }>`
  margin-top: 36px;

  b {
    width: 80%;
    color: ${({ color }) => color};
    font-size: 17px;
    display: block;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const Detail = styled.div<{ color: string }>`
  width: 100%;
  border: 1px solid ${({ color }) => color};
  padding: 12px;
  position: relative;

  p {
    font-size: 17px;
    line-height: 2;
    font-family: mrsea-roman-italic;
    color: ${({ color }) => color};
  }
`;

export const Price = styled.p<{ color: string }>`
  text-align: right;
  font-size: 17px;
  font-family: mrsea-roman-italic;
  color: ${({ color }) => color};

  span {
    font-family: mrsea-roman-italic;
    color: ${({ color }) => color};
    font-size: 10px;
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
