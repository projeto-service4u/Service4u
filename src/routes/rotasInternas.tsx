import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Home from '../pages/home/index'
<<<<<<< HEAD
<<<<<<< HEAD
import ListasPadrao from '../pages/listas/lista-padrao'
=======
import ListaPadrao from '../pages/listas/lista-padrao'
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
import ListasPadrao from '../pages/listas/lista-padrao'
>>>>>>> 389df1d (✨ #S4U-24 | Finalizacao de lista padrao)
import NovaListaPadrao from '../pages/listas/nova-lista-padrao'
import Produtos from '../pages/Produtos/index'
import { AuthProvider } from './../contexts/authContext'
import VisualizarLista from './../pages/listas/visualizar-lista/index'
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
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/lista-padrao" exact component={ListasPadrao} />
=======
            <Route path="/lista-padrao" exact component={ListaPadrao} />
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
            <Route path="/lista-padrao" exact component={ListasPadrao} />
>>>>>>> 389df1d (✨ #S4U-24 | Finalizacao de lista padrao)
            <Route
              path="/nova-lista-padrao"
              exact
              component={NovaListaPadrao}
            />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 389df1d (✨ #S4U-24 | Finalizacao de lista padrao)
            <Route
              path="/visualizar-lista/:uid"
              exact
              component={VisualizarLista}
            />
<<<<<<< HEAD
=======
>>>>>>> 987a9d3 (🚧 #S4U-24 | Retornando dados do firebase e populando select)
=======
>>>>>>> 389df1d (✨ #S4U-24 | Finalizacao de lista padrao)
            <Redirect path="*" to="/" />

            {/* <Route exact path="*" component={Teste} /> */}
          </MuiThemeProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default RotasInternas
