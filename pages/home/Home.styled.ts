import styled from 'styled-components'

export const Gutter = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const Lang = styled.section`
  margin: 12px 0px;
  padding: 8px 12px;
`

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  b {
    color: #465956;
  }
`

export const Langs = styled.div`
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  p {
    font-size: 13px;
  }
`

export const Arrow = styled.div<{ isActive: boolean; }>`
  transition: .3s all;
  transform: ${({ isActive }) => isActive ? 'rotate(540deg)' : 'rotate(0deg)'};
`

export const Dropdown = styled.div`
  position: absolute;
  right: 0px;
  bottom: -100%;
  width: calc(100% + 1px);
  height: 100%;
`

export const LangButton = styled.button`
  background-color: #d3d3d3;
  width: calc(100% + 1px);
  padding: 4px;
  height: 100%;
  color: #000;
`