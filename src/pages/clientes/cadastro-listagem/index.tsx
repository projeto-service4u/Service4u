import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useRef
} from 'react'
import { Table } from 'react-bootstrap'
import ButtonB from 'react-bootstrap/Button'
import { useHistory } from 'react-router'

import { Button, makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Skeleton from '@material-ui/lab/Skeleton'

import App from '../../../container'
import { database, firebase } from '../../../services/firebase'
import ModalCadastro from '../modal-cadastro'
import { Cliente } from '../tipos'
import { useStyles } from './styles'
import * as P from './styles'

const Clientes: React.FC = () => {
  const history = useHistory()
  const [title, setTitle] = useState('default title')

  const classes = useStyles()
  const [modalShow, setModalShow] = useState(false)
  const [loading, setLoading] = useState(true)
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [contemNovosProdutos, setContemNovosProdutos] = useState<boolean>()
  const titleRef = useRef(null)

  const [darkMode, setDarkMode] = useState(false)

  const clientesLista = []

  const getDadosFirebase = () => {
    database
      .ref('clientes')
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
          snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key
            const data = childSnapshot.val()
            clientesLista.push({
              uid: key,
              nome: data.clienteNome,
              telefone: data.clienteTelefone,
              email: data.clienteEmail
            })
          })
        } else {
          console.log('No data available')
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
    setClientes(clientesLista)
    console.log(
      '🚀 ~ file: index.tsx ~ line 53 ~ getDadosFirebase ~ listaPadrao',
      clientesLista
    )
    console.log('primeiro')
  }

  const visualizarLista = uid => {
    history.push(`/visualizar-lista/${uid}`)
  }

  const deletarCliente = uid => {
    database.ref(`clientes/${uid}`).remove()
    setContemNovosProdutos(prev => !prev)
  }
  useEffect(() => {
    getDadosFirebase()
    return () => getDadosFirebase()
  }, [])
  // // useEffect(() => {
  // //   getDadosFirebase()
  // //   console.log('primeiro')
  // // }, [contemNovosProdutos])

  useEffect(() => {
    getDadosFirebase()
    console.log('segundo')
  }, [contemNovosProdutos])
  // const handleClick = () => setTitle(titleRef?.current?.value)
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
                  <th className="th-nome">Email</th>
                  <th className="th-nome">Telefone</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((dados, key) => (
                  <tr key={key}>
                    <td key={key + 2}> {dados.nome} </td>
                    <td key={key + 3}> {dados.email} </td>
                    <td key={key + 4}> {dados.telefone} </td>
                    <td key={key + 1}>
                      <ButtonB
                        variant="primary"
                        size="lg"
                        // onClick={() => visualizarLista(dados.uid)}
                      >
                        Visualizar
                      </ButtonB>{' '}
                      <ButtonB
                        variant="danger"
                        size="lg"
                        onClick={() => deletarCliente(dados.uid)}
                      >
                        Excluir
                      </ButtonB>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Paper>
      </P.Container>
      <ModalCadastro show={modalShow} onHide={() => setModalShow(false)} />
    </App>
  )
}

export default Clientes
