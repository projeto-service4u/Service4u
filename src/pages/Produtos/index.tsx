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

import Tabela from '../../components/Tabela'
import App from '../../container/App'
import { database, firebase } from '../../services/firebase'
import { ModalProdutos } from './Modal'
import * as P from './styles'
import { useStyles } from './styles'
import { ListaProdutos } from './tipos'

const Produtos: React.FC = () => {
  const classes = useStyles()
  const [modalShow, setModalShow] = useState(false)
  const [produtos, setProdutos] = useState<ListaProdutos[]>([])
  const [loading, setLoading] = useState(true)
  const [contemNovosProdutos, setContemNovosProdutos] = useState(false)
  const produtosLista = []

  const getDadosFirebase = () => {
    database
      .ref('produtos')
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key
            const data = childSnapshot.val()
            produtosLista.push({
              uid: key,
              medida: data.produtoMedida,
              nome: data.produtoNome
            })
            // ...
          })
        } else {
          console.log('No data available')
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
    setProdutos(produtosLista)
    console.log(produtos.length / 2)
  }

  useEffect(() => {
    getDadosFirebase()

    return () => getDadosFirebase()
  }, [])

  useEffect(() => {
    setContemNovosProdutos(true)
  }, [modalShow])

  useMemo(() => {
    database.ref('produtos').on('child_added', data => {
      produtosLista.push({
        uid: data.key,
        medida: data.val().produtoMedida,
        nome: data.val().produtoNome
      })
      setProdutos(produtosLista)
    })
  }, [contemNovosProdutos])

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
        {loading ? (
          <div>
            <Skeleton style={{ height: 100, width: '100%' }} />
            <Skeleton style={{ height: 100, width: '100%' }} />
          </div>
        ) : (
          <Tabela dados={produtos} cabecalho={['Nome', 'Unidade/Medida']} />
        )}
      </P.Container>
      <ModalProdutos show={modalShow} onHide={() => setModalShow(false)} />
    </App>
  )
}

export default Produtos
