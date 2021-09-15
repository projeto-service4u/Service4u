import React from 'react'

import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import Tabela from '../../components/Tabela'
import App from '../../container/App'
import * as P from './styles'
import { useStyles } from './styles'

const Produtos: React.FC = () => {
  const classes = useStyles()

  return (
    <App>
      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Produtos</P.Titulo>
          <P.BotaoAdicionar>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
              startIcon={<AddCircleOutlineIcon />}
            >
              Adicionar Item
            </Button>
          </P.BotaoAdicionar>
        </P.ContainerAcoes>
        <Tabela cabecalho={['Nome', 'Telefone', 'email', 'endereco']} />
      </P.Container>
    </App>
  )
}

export default Produtos
