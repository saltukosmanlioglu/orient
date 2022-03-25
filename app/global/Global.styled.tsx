import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: trajan;
    src: url(/font/TrajanTRUBold.ttf);
  }
  @font-face {
    font-family: mrsea-bold;
    src: url(/font/MrsEaves.Bold.ttf);
  }
  @font-face {
    font-family: mrsea-italic;
    src: url(/font/MrsEaves.Italic.ttf);
  }
  @font-face {
    font-family: mrsea-bold-italic;
    src: url(/font/MrsEaves.BoldItalic.ttf);
  }
  @font-face {
    font-family: mrsea-roman;
    src: url(/font/MrsEaves.Roman.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: trajan;
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

export default GlobalStyle
