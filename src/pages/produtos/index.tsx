import React, { useEffect, useState } from 'react'

import { Button, makeStyles } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Skeleton from '@material-ui/lab/Skeleton'

import Tabela from '../../components/Tabela'
import App from '../../container/App'
import { database, firebase } from '../../services/firebase'
import { ModalProdutos } from './modal'
import * as P from './styles'
import { useStyles } from './styles'
import { ListaProdutos } from './tipos'

const Produtos: React.FC = () => {
  const classes = useStyles()
  const [modalShow, setModalShow] = useState(false)
  const [produtos, setProdutos] = useState<ListaProdutos[]>([])
  const [loading, setLoading] = useState(true)
  const [alteradoProduto, setAlterado] = useState<boolean>()

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
  }

  useEffect(() => {
    getDadosFirebase()

    // return () => getDadosFirebase()
  }, [])

  const produtoAlterado = async alterado => {
    setAlterado(alterado)
    console.log('🚀 ~ file: index.tsx ~ line 60 ~ alterado', alterado)

    if (alterado) {
      await novoProduto()
    }

    console.log(alterado)
  }

  const novoProduto = async () => {
    await database.ref('produtos').on('child_added', async data => {
      produtosLista.push({
        uid: data.key,
        medida: data.val().produtoMedida,
        nome: data.val().produtoNome
      })
      setProdutos(produtos => [...produtosLista])
    })
  }

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
          <Tabela
            dados={produtos}
            cabecalho={['Nome', 'Unidade - Medida', 'Ações']}
            acoes={true}
            alterado={produtoAlterado}
          />
        )}
      </P.Container>
      <ModalProdutos
        show={modalShow}
        onHide={() => setModalShow(false)}
        onExit={() => novoProduto()}
      />
    </App>
  )
}

export default Produtos
