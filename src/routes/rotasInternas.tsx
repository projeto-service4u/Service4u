import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Clientes from '../pages/clientes/cadastro-listagem/index'
import ListasPadrao from '../pages/listas/lista-padrao'
import NovaListaPadrao from '../pages/listas/nova-lista-padrao'
import VisualizarLista from '../pages/listas/visualizar-lista'
import Produtos from '../pages/produtos/index'
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
            <Route path="/" exact component={Clientes} />
            <Route path="/produtos" exact component={Produtos} />
            <Route path="/lista-padrao" exact component={ListasPadrao} />
            <Route
              path="/nova-lista-padrao"
              exact
              component={NovaListaPadrao}
            />
            <Route
              path="/visualizar-lista/:uid"
              exact
              component={VisualizarLista}
            />
            <Redirect path="*" to="/" />

            {/* <Route exact path="*" component={Teste} /> */}
          </MuiThemeProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default RotasInternas
