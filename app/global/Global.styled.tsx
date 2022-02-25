import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: myFirstFont;
    src: url(/font/TrajanTRUBold.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: myFirstFont;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export default GlobalStyle;
