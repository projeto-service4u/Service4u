import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'

import * as M from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Skeleton from '@material-ui/lab/Skeleton'
import emailjs from 'emailjs-com'

import App from '../../../container/App'
import { database, firebase } from '../../../services/firebase'
import { ListaPadrao } from '../nova-lista-padrao/tipos'
import * as P from './styles'
import { useStyles } from './styles'

const ListasPadrao: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [lista, setLista] = useState<ListaPadrao[]>([])
  const [loading, setLoading] = useState(true)
  const listaPadrao = []

  const novaLista = () => {
    history.push('/nova-lista-padrao')
  }

  const getDadosFirebase = async () => {
    await database
      .ref('listaPadrao')
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key
            const data = childSnapshot.val()
            listaPadrao.push({
              uid: key,
              nome: data.nome,
              produtos: data.produtos
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
    await setLista(listaPadrao)
  }

  const visualizarLista = uid => {
    history.push(`/visualizar-lista/${uid}`)
  }

  const deletarLista = uid => {
    try {
      database.ref(`listaPadrao/${uid}`).remove()
      setLista([...lista.filter(lista => lista.uid !== uid)])
      toast.success('Lista deletada com sucesso!')
    } catch (error) {
      toast.error('Erro ao deletar lista')
    }
  }

  useEffect(() => {
    getDadosFirebase()
  }, [])
  useEffect(() => {
    getDadosFirebase()
  }, [lista])

  return (
    <App>
      <ToastContainer />

      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Lista Padrão</P.Titulo>
          <P.BotaoAdicionar>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
              startIcon={<AddCircleOutlineIcon />}
              onClick={novaLista}
            >
              Adicionar Nova lista
            </M.Button>
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
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {lista.map((dados, key) => (
                  <tr key={key}>
                    <td key={key}> {dados.nome} </td>
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
      </P.Container>
    </App>
  )
}
export default ListasPadrao
