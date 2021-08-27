import React from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">TESTE</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
