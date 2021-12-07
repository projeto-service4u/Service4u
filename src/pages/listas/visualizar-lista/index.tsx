import React, { useEffect, useRef, useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import PrintProvider, { Print, NoPrint } from 'react-easy-print'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

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
  const [emailCliente, setEmailCliente] = useState('')
  const [renderizaInput, setRenderizaInput] = useState(true)
  const teste = process.env.SERVICE_ID

  const listaPadrao = []

  const listaId = params.uid
  const clienteUid = params.uidCliente

  const getDadosFirebase = async () => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 40 ~ getDadosFirebase ~ clienteUid',
      clienteUid
    )
    if (clienteUid) {
      setRenderizaInput(false)
      database
        .ref(`clientes/${clienteUid}`)
        .once('value')
        .then(snapshot => {
          setEmailCliente(snapshot.val().clienteEmail)
        })
        .catch(error => {
          console.error(error)
        })
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
    console.log('Enviando email', lista.nome)
    console.log('Email', emailCliente)
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          email_cliente: emailCliente,
          nome_user: '',
          nome_lista: lista.nome,
          message: lista.produtos
            .map(
              produto =>
                `${produto.nome}  - ${produto.quantidade} - ${produto.medida} `
            )
            .join(
              '&nbsp;&nbsp;&nbsp;          |              &nbsp;&nbsp;&nbsp;'
            )
        },
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          toast.success('Email enviado com sucesso!')
        },
        function (error) {
          console.log('FAILED...', error)
          toast.error('Erro ao enviar Email!')
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
          <ToastContainer />
          <P.Container>
            <P.ContainerAcoes>
              <Print name="titulo">
                <P.Titulo>{lista?.nome}</P.Titulo>
              </Print>
              {renderizaInput && (
                <P.DivProdutos>
                  <InputGroup size="lg">
                    <InputGroup.Text>Email Cliente</InputGroup.Text>
                    <FormControl
                      aria-label="Email"
                      onChange={event => setEmailCliente(event.target.value)}
                    />
                  </InputGroup>
                </P.DivProdutos>
              )}

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
                {'  '}
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.root}
                  onClick={() => envioEmail()}
                >
                  Enviar lista
                </Button>{' '}
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
