import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { database, firebase } from '../../services/firebase'
import { ListaProdutos } from './../../pages/produtos/tipos'
import { Container } from './styles'
import { Column, PropsTable } from './tipos'

const useStyles = makeStyles({
  root: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: '14px'
  }
})
const Tabela: React.FC<PropsTable> = (props, ...rest) => {
  const classes = useStyles()
  const [produtos, setProdutos] = useState<ListaProdutos[]>(props.dados)

  const deletarProduto = uid => {
    try {
      database.ref(`produtos/${uid}`).remove()
      setProdutos([
        ...produtos.filter(produtos => produtos.uid !== uid)
      ] as ListaProdutos[])
      toast.success('Produto deletado com sucesso!')
    } catch (error) {
      toast.error('Erro ao deletar Produto!')
    }
    console.log(uid)
  }

  useEffect(() => {
    setProdutos(props.dados)
  }, [props.dados])

  return (
    <Paper className={classes.root}>
      <ToastContainer />

      <Table
        striped={true}
        bordered={true}
        borderless={true}
        hover={true}
        responsive="sm"
      >
        <thead>
          <tr>
            {props.cabecalho.map((index, key) => (
              <th key={key.toString()}>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {produtos.map((dados, id) => (
            <tr key={id + 1}>
              <td key={id + 2}>{dados.nome}</td>
              {dados.quantidade && <td key={id + 3}>{dados.quantidade}</td>}
              <td key={id}>{dados.medida}</td>
              {props.acoes && (
                <td key={id + 4}>
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => deletarProduto(dados.uid)}
                  >
                    Excluir
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

export default Tabela
