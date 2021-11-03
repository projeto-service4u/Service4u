import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo
} from 'react'

import { Button, makeStyles } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Skeleton from '@material-ui/lab/Skeleton'

import App from '../../../container'
import ModalCadastro from '../modal-cadastro'
import * as P from './styles'
import { useStyles } from './styles'

const Clientes: React.FC = () => {
  const classes = useStyles()
  const [modalShow, setModalShow] = useState(false)
  const [loading, setLoading] = useState(true)
  const clientesLista = []

  return (
    <App>
      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Clientes</P.Titulo>
          <P.BotaoAdicionar>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => setModalShow(true)}
            >
              Novo Cliente
            </Button>
          </P.BotaoAdicionar>
        </P.ContainerAcoes>
        {/* {loading ? (
          <div>
            <Skeleton style={{ height: 100, width: '100%' }} />
            <Skeleton style={{ height: 100, width: '100%' }} />
          </div>
        ) : (
          <Tabela dados={produtos} cabecalho={['Nome', 'Unidade - Medida']} />
        )} */}
      </P.Container>
      <ModalCadastro show={modalShow} onHide={() => setModalShow(false)} />
    </App>
  )
}

export default Clientes
