import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import ContainerApp from '.'
import GlobalStyle from '../assets/styles/global'
import Header from '../components/header/index'
import AuthContext, { AuthProvider } from '../contexts/authContext'
import Routes from '../routes/index'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

const App: React.FC = ({ children }) => {
  const { signed } = useContext(AuthContext)
  return signed ? (
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <ContainerApp>{children}</ContainerApp>
        <GlobalStyle />
      </MuiThemeProvider>
    </AuthProvider>
  ) : (
    <BrowserRouter>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
