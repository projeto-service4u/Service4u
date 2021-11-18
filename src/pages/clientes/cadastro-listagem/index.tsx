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
import { ToastContainer, toast } from 'react-toastify'

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

  const classes = useStyles()
  const [modalShow, setModalShow] = useState(false)
  const [loading, setLoading] = useState(true)
  const [clientes, setClientes] = useState<Cliente[]>([])
  const clientesLista = []

  const getDadosFirebase = () => {
    database
      .ref('clientes')
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
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
  }

  const visualizarCliente = uid => {
    history.push(`/visualizar-cliente/${uid}`)
  }

  const deletarCliente = uid => {
    try {
      database.ref(`clientes/${uid}`).remove()
      setClientes([
        ...clientes.filter(cliente => cliente.uid !== uid)
      ] as Cliente[])
      toast.success('Cliente deletado com sucesso!')
    } catch (error) {
      toast.error('Erro ao deletar cliente!')
    }
  }
  useEffect(() => {
    getDadosFirebase()
  }, [])

  const novoCliente = () => {
    database.ref('clientes').on('child_added', data => {
      clientesLista.push({
        uid: data.key,
        nome: data.val().clienteNome,
        email: data.val().clienteEmail,
        telefone: data.val().clienteTelefone
      })
      setClientes([...clientesLista])
    })
  }

  return (
    <App>
      <ToastContainer />
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
                        onClick={() => visualizarCliente(dados.uid)}
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
      <ModalCadastro
        show={modalShow}
        onHide={() => setModalShow(false)}
        onExit={() => novoCliente()}
      />
    </App>
  )
}

export default Clientes
