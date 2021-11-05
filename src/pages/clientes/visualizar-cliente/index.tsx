import { useState, useEffect } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory, useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'

import * as M from '@material-ui/core'

import { database, firebase } from '../../../services/firebase'
import { Cliente } from '../tipos'
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'

type clienteParams = {
  uid: string
}
export const VisualizarCLiente: React.FC = () => {
  const classes = useStyles()
  const params = useParams<clienteParams>()
  const history = useHistory()
  const clienteId = params.uid
  const [cliente, setCliente] = useState<Cliente>({} as Cliente)
  const [loading, setLoading] = useState(true)

  // const cliente = {}

  const voltar = () => {
    history.goBack()
  }

  const getCliente = async () => {
    const clienteRef = await database
      .ref(`clientes/${clienteId}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.val()
          setCliente({
            ...cliente,
            uid: snapshot.key,
            nome: snapshot.val().clienteNome,
            email: snapshot.val().clienteEmail,
            telefone: snapshot.val().clienteTelefone
          })
          console.log(cliente)
        } else {
          console.log('No data available')
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })

    console.log(cliente)
  }

  useEffect(() => {
    getCliente()
  }, [])

  // useEffect(() => {
  //   console.log('🚀 ~ file: index.tsx ~ line 42 ~ useEffect ~ cliente', cliente)
  // }, [cliente])

  return (
    <App>
      <ToastContainer />

      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Cliente</P.Titulo>
          {/* <P.NomeLista>
            <InputGroup size="lg">
              <InputGroup.Text>Nome da lista</InputGroup.Text>
              <FormControl aria-label="First name" />
            </InputGroup>
          </P.NomeLista> */}
          <P.BotaoAdicionar>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
            >
              Nova Lista
            </M.Button>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.voltar}
              onClick={voltar}
            >
              Voltar
            </M.Button>
          </P.BotaoAdicionar>
        </P.ContainerAcoes>
        <P.ContainerProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Nome</InputGroup.Text>
              <FormControl aria-label="Nome" value={cliente?.nome} />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Email</InputGroup.Text>
              <FormControl aria-label="Email" value={cliente?.email} />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Telefone</InputGroup.Text>
              <FormControl aria-label="Telefone" value={cliente?.telefone} />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutosBotao>
            <Button variant="primary" size="lg">
              Salvar Edição
            </Button>
          </P.DivProdutosBotao>
        </P.ContainerProdutos>
        <P.ContainerTabela>
          {/* <Tabela
            dados={produtoLista}
            cabecalho={['Nome', 'Quantidade', 'Unidade - Medida']}
          /> */}
        </P.ContainerTabela>
      </P.Container>
    </App>
  )
}
