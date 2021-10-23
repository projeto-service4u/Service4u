import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'

import * as M from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

// import { Container } from './styles';
import App from '../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'

const ListaPadrao: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()

  const novaLista = () => {
    history.push('/nova-lista-padrao')
  }

  return (
    <App>
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
          <Table
            striped={true}
            bordered={true}
            borderless={true}
            hover={true}
            responsive="sm"
          >
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Forward Marketing Technician</td>
                <td>
                  <Button variant="primary" size="lg">
                    Visualizar
                  </Button>{' '}
                  <Button variant="secondary" size="lg">
                    Imprimir
                  </Button>{' '}
                  <Button variant="danger" size="lg">
                    Excluir
                  </Button>{' '}
                </td>
              </tr>
              <tr>
                <td>Forward Marketing Technician</td>
                <td>
                  <Button variant="primary" size="lg">
                    Visualizar
                  </Button>{' '}
                  <Button variant="secondary" size="lg">
                    Imprimir
                  </Button>{' '}
                  <Button variant="danger" size="lg">
                    Excluir
                  </Button>{' '}
                </td>
              </tr>
              <tr>
                <td>Forward Marketing Technician</td>
                <td>
                  <Button variant="primary" size="lg">
                    Visualizar
                  </Button>{' '}
                  <Button variant="secondary" size="lg">
                    Imprimir
                  </Button>{' '}
                  <Button variant="danger" size="lg">
                    Excluir
                  </Button>{' '}
                </td>
              </tr>
              <tr>
                <td>Forward Marketing Technician</td>
                <td>
                  <Button variant="primary" size="lg">
                    Visualizar
                  </Button>{' '}
                  <Button variant="secondary" size="lg">
                    Imprimir
                  </Button>{' '}
                  <Button variant="danger" size="lg">
                    Excluir
                  </Button>{' '}
                </td>
              </tr>
            </tbody>
          </Table>
        </Paper>
      </P.Container>
    </App>
  )
}
export default ListaPadrao
