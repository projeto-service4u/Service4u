import React, { useState } from 'react'

import { AppBar, Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { blue, red } from '@material-ui/core/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import Menu from '../src/components/menu'
import Login from './components/form-login/index'
import GlobalStyle from './styles/global'
// import theme from './styles/theme'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

const App: React.FC = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false)
  return (
    <MuiThemeProvider theme={theme}>
      {mostrarMenu && <Menu />}
      {!mostrarMenu && <Login />}

      <GlobalStyle />
    </MuiThemeProvider>
  )
}

export default App
