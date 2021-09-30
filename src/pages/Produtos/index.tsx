import React, { useState } from 'react'

import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import Tabela from '../../components/Tabela'
import App from '../../container/App'
import { ModalProdutos } from './Modal'
import * as P from './styles'
import { useStyles } from './styles'

const Produtos: React.FC = () => {
  const classes = useStyles()
  const [modalShow, setModalShow] = useState(false)

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
              onClick={() => setModalShow(true)}
            >
              Adicionar Item
            </Button>
          </P.BotaoAdicionar>
        </P.ContainerAcoes>
        <Tabela cabecalho={['Nome', 'Telefone', 'email', 'endereco']} />
      </P.Container>
      <ModalProdutos show={modalShow} onHide={() => setModalShow(false)} />
    </App>
  )
}

export default Produtos
