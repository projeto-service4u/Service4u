import React, { useEffect, useRef, useState } from 'react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'

import { Button, makeStyles } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import { database, firebase } from '../../../services/firebase'
import { ListaPadrao } from '../nova-lista-padrao/tipos'
import Tabela from './../../../components/Tabela/index'
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'

type ListaParams = {
  uid: string
}

const VisualizarLista: React.FC = () => {
  const classes = useStyles()
  const params = useParams<ListaParams>()
  const [lista, setLista] = useState<ListaPadrao>({} as ListaPadrao)
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  const listaPadrao = []

  const listaId = params.uid

  const getDadosFirebase = async () => {
    await database
      .ref(`listaPadrao/${listaId}`)
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot
          const key = snapshot.key
          const data = snapshot.val()
          console.log(
            '🚀 ~ file: index.tsx ~ line 37 ~ getDadosFirebase ~ data',
            data
          )

          setLista(data)
          // listaPadrao.push({
          //   nome: data.nome,
          //   produtos: data.produtos
          // })
        } else {
          console.log('No data available')
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
    console.log(
      '🚀 ~ file: index.tsx ~ line 53 ~ getDadosFirebase ~ lista',
      lista
    )
  }

  useEffect(() => {
    getDadosFirebase()
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const voltar = () => {
    history.goBack()
  }

  return (
    <PrintProvider>
      <NoPrint>
        <App>
          <P.Container>
            <P.ContainerAcoes>
              <Print name="titulo">
                <P.Titulo>{lista?.nome}</P.Titulo>
              </Print>

              <P.BotaoAdicionar>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.root}
                  onClick={handlePrint}
                >
                  Imprimir lista
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.voltar}
                  onClick={voltar}
                >
                  Voltar
                </Button>
              </P.BotaoAdicionar>
            </P.ContainerAcoes>
            {loading ? (
              <div>
                <Skeleton style={{ height: 100, width: '100%' }} />
                <Skeleton style={{ height: 100, width: '100%' }} />
              </div>
            ) : (
              <Print name="titulo">
                <Tabela
                  dados={lista?.produtos}
                  cabecalho={['Nome', 'Quantidade', 'Unidade - Medida']}
                />
              </Print>
            )}
          </P.Container>
        </App>
      </NoPrint>
    </PrintProvider>
  )
}

export default VisualizarLista
