import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AppBar, Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { blue, red } from '@material-ui/core/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import Menu from './components/menu'
import AuthContext, { AuthProvider } from './contexts/authContext'
import Login from './pages/login/index'
import Routes from './routes/index'
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
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </MuiThemeProvider>
    </AuthProvider>
  )
}

export default App
