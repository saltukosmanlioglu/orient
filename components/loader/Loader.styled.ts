import styled from 'styled-components'

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(1) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin-bottom: 16px;
    }
  }
`