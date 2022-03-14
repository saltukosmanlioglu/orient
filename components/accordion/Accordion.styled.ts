import styled from "styled-components";

export const Accordion = styled.div<{ color: string }>`
  width: 100% !important;
`;

export const Header = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  border-bottom: ${({ color }) => `3px solid ${color}`};

  p {
    margin-left: 4px;
    color: ${({ color }) => color};
    font-size: 16px;
  }
`;

export const Arrow = styled.div<{ isActive: boolean }>`
  transition: 0.3s all;
  transform: ${({ isActive }) =>
    isActive ? "rotate(540deg)" : "rotate(0deg)"};
`;

export const Detail = styled.div<{ px: number }>`
  padding: ${({ px }) => `12px ${px}px`};
`;
