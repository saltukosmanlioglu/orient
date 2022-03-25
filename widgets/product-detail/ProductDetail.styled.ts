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
  border-right: 0;
  padding: 12px;
  position: relative;

  p {
    font-size: 17px;
    line-height: 1.5;
    font-family: mrsea-italic;
    color: ${({ color }) => color};
  }
`;

export const Price = styled.p<{ color: string }>`
  text-align: right;
  font-size: 17px;
  font-family: mrsea-roman !important;
  color: ${({ color }) => color};

  span {
    font-family: mrsea-roman !important;
    color: ${({ color }) => color};
    font-size: 10px;
  }
`;

export const Bar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 45px;
  width: 1px;
  background-color: #000;
  z-index: 1000;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -22px;

  b {
    margin-top: 4.5px;
  }
`;

export const GoBack = styled.div`
  transform: rotate(90deg);
  z-index: 10000;
  position: absolute;
  left: -16px;
`;
