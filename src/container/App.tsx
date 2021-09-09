import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import ContainerApp from '.'
import AuthContext, { AuthProvider } from '../contexts/authContext'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

const App: React.FC = ({ children }) => {
  const { signed } = useContext(AuthContext)
  return (
    <AuthProvider>
      {/* <MuiThemeProvider theme={theme}> */}
      <ContainerApp>{children}</ContainerApp>
      {/* </MuiThemeProvider> */}
      {/* <GlobalStyle /> */}
    </AuthProvider>
  )
}

export default App
