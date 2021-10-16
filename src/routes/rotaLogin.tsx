import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import GlobalStyle from '../../src/assets/styles/global'
import Login from '../pages/login'
import { AuthProvider } from './../contexts/authContext'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})
const RotaLogin: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Route path="/login" component={Login} />
          <Redirect path="*" to="/login" />
          <GlobalStyle />
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RotaLogin
