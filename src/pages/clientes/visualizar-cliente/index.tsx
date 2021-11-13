import { useState, useEffect } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory, useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'

import * as M from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'

import { database, firebase } from '../../../services/firebase'
import { ListaPadrao } from '../../listas/nova-lista-padrao/tipos'
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
  const [lista, setLista] = useState<ListaPadrao[]>([undefined])

  const [cliente, setCliente] = useState<Cliente>({} as Cliente)
  const [loading, setLoading] = useState(true)
  const listaPadrao = []

  // const cliente = {}

  const voltar = () => {
    history.goBack()
  }
  const novaLista = uid => {
    history.push(`/nova-lista/${uid}`)
  }

  const getCliente = () => {
    const clienteRef = database
      .ref(`clientes/${clienteId}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.val()
          snapshot.child('listaServicos').forEach(snapshot => {
            listaPadrao.push({
              uid: snapshot.key,
              date: snapshot.val().date,
              nome: snapshot.val().nome,
              produtos: snapshot.val().produtos
            })
          })
          setCliente({
            ...cliente,
            uid: snapshot.key,
            nome: snapshot.val().clienteNome,
            email: snapshot.val().clienteEmail,
            telefone: snapshot.val().clienteTelefone,
            listaServicos: listaPadrao
          })
          setLista(listaPadrao)
        } else {
          console.log('No data available')
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    getCliente()
  }, [])

  const visualizarLista = uid => {
    history.push(`/visualizar-lista/${uid}`)
  }

  const deletarLista = uid => {
    database.ref(`clientes/${clienteId}/listaServicos/${uid}`).remove()
    setLista(lista.filter(lista => lista.uid !== uid))
  }
  // useEffect(() => {

  //   // console.log('teste', obj)
  // }, [lista])

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
              onClick={() => novaLista(clienteId)}
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
          {/* <P.DivProdutosBotao>
            <Button variant="primary" size="lg">
              Salvar Edição
            </Button>
          </P.DivProdutosBotao> */}
        </P.ContainerProdutos>
        <P.ContainerTabela>
          <Paper className={classes.tabela}>
            {loading ? (
              <div>
                <Skeleton style={{ height: 100, width: '100%' }} />
                <Skeleton style={{ height: 100, width: '100%' }} />
              </div>
            ) : (
              <Table
                striped={true}
                bordered={true}
                borderless={true}
                hover={true}
                responsive="sm"
              >
                <thead>
                  <tr>
                    <th className="th-nome">Nome</th>
                    <th className="th-data">Data</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((dados, key) => (
                    <tr key={key}>
                      <td key={key}> {dados.nome} </td>
                      <td key={key + 2}> {dados.date} </td>
                      <td key={key + 1}>
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={() => visualizarLista(dados.uid)}
                        >
                          Visualizar
                        </Button>{' '}
                        <Button
                          variant="danger"
                          size="lg"
                          onClick={() => deletarLista(dados.uid)}
                        >
                          Excluir
                        </Button>{' '}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Paper>
        </P.ContainerTabela>
      </P.Container>
    </App>
  )
}
