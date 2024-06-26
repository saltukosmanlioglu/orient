import styled from "styled-components";
//calc(100vw - ${({ px }) => `${px}px`})
export const Product = styled.a<{ color: string; px: number }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid ${({ color }) => color};

  p {
    font-size: 13px;
    color: ${({ color }) => color};
  }
`;

export const Title = styled.div`
  width: 80%;

  p {
    text-align: left;
  }
`;

export const Price = styled.div`
  width: 20%;
  text-align: right;

  span {
    transform: rotate(-90deg);
  }
`;
