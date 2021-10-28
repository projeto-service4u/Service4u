import React, { useEffect, useState } from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

import * as M from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { useAsyncEffect } from '@react-hook/async'

import { database, firebase } from '../../../services/firebase'
import { ListaProdutos } from '../../Produtos/tipos'
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'
import { ListaPadrao } from './tipos'

const NovaListaPadrao: React.FC = () => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [produtos, setProdutos] = useState<ListaProdutos[]>([])
  const [lista, setLista] = useState<ListaPadrao[]>([])
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState()
  const [medida, setMedida] = useState('')
  const [preencheInputUnidade, setPreencheInputUnidade] = useState(null)
  const [loading, setLoading] = useState(true)
  const produtosLista = []
  const produtoLista = []

  const getDadosFirebase = () => {
    database
      .ref('produtos')
      .once('value')

      .then(snapshot => {
        if (snapshot.exists()) {
          snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key
            const data = childSnapshot.val()
            produtosLista.push({
              uid: key,
              medida: data.produtoMedida,
              nome: data.produtoNome
            })
            options.push({
              value: data.produtoNome,
              label: data.produtoNome
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

    setProdutos(produtosLista)
  }

  useEffect(() => {
    getDadosFirebase()
  }, [])

  const handleChange = selectedOption => {
    setProduto(selectedOption.value)
    produtos.find(function (post, index) {
      if (post.nome == selectedOption.value) {
        setPreencheInputUnidade(post)
        console.log(preencheInputUnidade)
      }
    })
  }

  const teste = () => {
    produtoLista.push({
      nome: produto,
      medida: preencheInputUnidade?.medida,
      quantidade: quantidade
    })

    lista.push({
      nome: title,
      produtos: produtoLista
    })

    setLista(lista)
  }
  useEffect(() => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 90 ~ teste ~ produtoLista',
      produtoLista
    )
    console.log(lista)
  }, [lista])

  return (
    <App>
      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Nova Lista Padrão</P.Titulo>
          <P.NomeLista>
            <InputGroup size="lg">
              <InputGroup.Text>Nome da lista</InputGroup.Text>
              <FormControl
                aria-label="First name"
                onChange={event => setTitle(event.target.value)}
              />
            </InputGroup>
          </P.NomeLista>
          <P.BotaoAdicionar>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
              onClick={teste}
            >
              Salvar lista
            </M.Button>
          </P.BotaoAdicionar>
        </P.ContainerAcoes>
        <P.ContainerProdutos>
          <P.DivProdutos>
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
            />
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Quantidade</InputGroup.Text>
              <FormControl
                aria-label="First name"
                onChange={event => setQuantidade(event.target.value)}
              />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Unidade/Medida</InputGroup.Text>
              <FormControl
                value={preencheInputUnidade?.medida}
                aria-label="First name"
                onChange={event => setMedida(preencheInputUnidade?.medida)}
                readOnly
              />
            </InputGroup>
          </P.DivProdutos>
          <P.DivProdutosBotao>
            <Button variant="primary" size="lg" onClick={teste}>
              Adicionar
            </Button>
          </P.DivProdutosBotao>
        </P.ContainerProdutos>
      </P.Container>
    </App>
  )
}

export default NovaListaPadrao
