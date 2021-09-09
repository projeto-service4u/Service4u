import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Home from '../pages/Home/index'
import Header from './../components/Header/index'
import { AuthProvider } from './../contexts/authContext'
import Teste from './../pages/teste/index'
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

const RotasInternas: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <MuiThemeProvider theme={theme}>
            {/* <Header /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/teste" component={Teste} />
          </MuiThemeProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default RotasInternas
