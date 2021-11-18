import React, { useEffect, useRef, useState } from 'react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'

import { Button, makeStyles } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import emailjs from 'emailjs-com'

import { database, firebase } from '../../../services/firebase'
import { ListaPadrao } from '../nova-lista-padrao/tipos'
import Tabela from './../../../components/Tabela/index'
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'

type ListaParams = {
  uidCliente?: string
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
  const clienteUid = params.uidCliente

  const getDadosFirebase = async () => {
    if (clienteUid) {
      await database
        .ref(`clientes/${clienteUid}/listaServicos/${listaId}`)
        .once('value')

        .then(snapshot => {
          if (snapshot.exists()) {
            snapshot
            const key = snapshot.key
            const data = snapshot.val()

            setLista(data)
          } else {
            console.log('No data available')
          }
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      await database
        .ref(`listaPadrao/${listaId}`)
        .once('value')

        .then(snapshot => {
          if (snapshot.exists()) {
            snapshot
            const key = snapshot.key
            const data = snapshot.val()

            setLista(data)
          } else {
            console.log('No data available')
          }
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  useEffect(() => {
    getDadosFirebase()
  }, [])

  const envioEmail = () => {
    console.log('enviar lista')

    emailjs
      .send(
        '',
        '',
        {
          email_cliente: '',
          nome_user: '',
          message: lista.produtos
            .map(
              produto =>
                `${produto.nome} - ${produto.medida} - ${produto.quantidade} `
            )
            .join(
              '&nbsp;&nbsp;&nbsp;          |              &nbsp;&nbsp;&nbsp;'
            )
        },
        ''
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
  }

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
                  className={classes.root}
                  onClick={() => envioEmail()}
                >
                  Enviar lista
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
                  acoes={false}
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
