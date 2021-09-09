import { createGlobalStyle } from 'styled-components'

import { Cores } from './cores'
import { theme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: ${Cores.FUNDO};
    color: '#29292e';
    margin: 0;
    font-size: 1.6rem;

  }

    h1, h2, h3, h4, h5, h6 {
    margin: 03.2rem;
  }


  body,
  input,
  button,
  textarea {
    font: 400 16px 'Poppins', sans-serif;
  }

   p {
    margin: 2.4rem 0;
  }

  ul, ol {
    margin: 2.4rem;
    padding: 2.4rem;
  }

  a {
    color: ${theme.colors.white};
    font-family: 'Poppins', sans-serif;
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`
