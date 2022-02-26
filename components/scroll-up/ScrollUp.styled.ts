import styled from 'styled-components'

export const ScrollUp = styled.button<{ color: string }>`
  border: 1px solid ${({ color }) => color};
  background-color: #fff;
  position: fixed;
  bottom: 12px;
  right: 12px;
`