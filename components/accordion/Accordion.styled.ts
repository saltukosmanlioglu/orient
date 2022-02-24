import Image from 'next/image'
import styled from 'styled-components'

export const Accordion = styled.button<{ color: string }>`
  width: 100%;
`

export const Header = styled.div<{ color: string; }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  border-bottom: ${({ color }) => `3px solid ${color}`};

  p {
    margin-left: 12px;
    color: ${({ color }) => color};
  }
`

export const Arrow = styled(Image) <{ isActive: boolean; }>`
  transition: .3s all;
  transform: ${({ isActive }) => isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export const Detail = styled.div`
  padding: 12px;
`