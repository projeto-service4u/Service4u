import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Home from '../pages/Home/index'
import Produtos from '../pages/Produtos/index'
import { AuthProvider } from './../contexts/authContext'
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
            <Route path="/" exact component={Home} />
            <Route path="/produtos" exact component={Produtos} />
            <Redirect path="*" to="/" />

            {/* <Route exact path="*" component={Teste} /> */}
          </MuiThemeProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default RotasInternas
