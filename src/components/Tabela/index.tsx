import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { ModalProdutos } from '../../pages/produtos/modal/index'
import { ListaProdutos } from '../../pages/produtos/tipos'
import { database, firebase } from '../../services/firebase'
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
  const [modalShow, setModalShow] = useState(false)

  const [produtos, setProdutos] = useState<ListaProdutos[]>(props.dados)
  const [editaprodutos, setEditaProdutos] = useState<ListaProdutos>(undefined)
  const [editar, setEditar] = useState(false)
  const [alterado, setAlterado] = useState(false)

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

  const editarProduto = (uid, nome, medida) => {
    setEditaProdutos({
      uid: uid,
      nome: nome,
      medida: medida
    })
    setEditar(true)
    setModalShow(true)
  }

  useEffect(() => {
    setProdutos(props.dados)
  }, [props.dados])

  const produtoAlterado = alterado => {
    props.alterado(alterado)
  }

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
                    variant="primary"
                    size="lg"
                    onClick={() =>
                      editarProduto(dados.uid, dados.nome, dados.medida)
                    }
                  >
                    Editar
                  </Button>{' '}
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
      <ModalProdutos
        editar={editar}
        dadosProduto={editaprodutos}
        show={modalShow}
        onHide={() => setModalShow(false)}
        alterado={produtoAlterado}
      />
    </Paper>
  )
}

export default Tabela
