import React from 'react'

import { AppBar, Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { blue, red } from '@material-ui/core/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
// import theme from './styles/theme'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>amarelo</Toolbar>
        </AppBar>
      </React.Fragment>

      <GlobalStyle />
    </MuiThemeProvider>
  )
}

export default App
