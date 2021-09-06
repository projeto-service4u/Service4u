import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Menu from '../components/menu'

// import { Container } from './styles';
import Home from '../pages/home/index'
import { AuthProvider } from './../contexts/authContext'
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

const RotasInternas: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <Route path="/" component={Home} />
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RotasInternas
