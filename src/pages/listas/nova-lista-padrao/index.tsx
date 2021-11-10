import React, { useEffect, useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useHistory, useParams } from 'react-router'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'

import * as M from '@material-ui/core'

import { database, firebase } from '../../../services/firebase'
import { Cliente } from '../../clientes/tipos'
import { ListaProdutos } from '../../produtos/tipos'
import Tabela from './../../../components/Tabela/index'
import App from './../../../container/App'
import * as P from './styles'
import { useStyles } from './styles'
import { ListaPadrao } from './tipos'

type clienteParams = {
  uid: string
}

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
  const [produtoLista, setProdutoLista] = useState<ListaProdutos[]>([])
  const listagemProdutos = []
  const [cliente, setCliente] = useState<Cliente>({} as Cliente)

  const params = useParams<clienteParams>()

  const clienteId = params.uid

  const history = useHistory()

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
    if (clienteId) {
      getCliente()
    }
    getDadosFirebase()
  }, [])

  const handleChange = selectedOption => {
    setProduto(selectedOption.value)
    produtos.find(function (post, index) {
      if (post.nome == selectedOption.value) {
        setPreencheInputUnidade(post)
      }
    })
  }

  const adicionarProduto = () => {
    console.log(produto)
    setProdutoLista([
      ...produtoLista,
      {
        nome: produto,
        medida: preencheInputUnidade?.medida,
        quantidade: quantidade
      }
    ])
  }

  const criarLista = () => {
    if (clienteId) {
      const date = new Date()
      const data = date.toLocaleDateString('pt-BR')

      console.log('aqui', date.toLocaleDateString('pt-BR'))
      const listaPadrao: ListaPadrao = {
        date: data,
        nome: title,
        produtos: produtoLista
      }
      database
        .ref(`clientes/${clienteId}/listaServicos`)
        .push(listaPadrao)
        .then(() => {
          toast.success('Lista criada com sucesso!')
          setLista([])
          setProdutoLista([])
          setTitle('')
          setQuantidade('')
        })
        .catch(error => {
          toast.error('Erro ao criar lista!')
          console.error(error)
        })
    } else {
      try {
        const listaRef = database.ref('listaPadrao')
        listaRef.push({ nome: title, produtos: produtoLista })
        toast.success('Lista adicionada com sucesso', {
          icon: '🚀',
          theme: 'colored'
        })
        setLista([])
        setProdutoLista([])
        setTitle('')
        setQuantidade('')
      } catch (e) {
        toast.error('Erro ao adicionar lista, tente novamente!', {
          theme: 'colored'
        })
      }
    }
  }

  const voltar = () => {
    history.goBack()
  }

  return (
    <App>
      <ToastContainer />

      <P.Container>
        <P.ContainerAcoes>
          <P.Titulo>Nova Lista Padrão</P.Titulo>
          <P.NomeLista>
            <InputGroup size="lg">
              <InputGroup.Text>Nome da listaaaaaa</InputGroup.Text>
              <FormControl
                aria-label="First name"
                onChange={event => setTitle(event.target.value)}
                value={title}
              />
            </InputGroup>
          </P.NomeLista>
          <P.BotaoAdicionar>
            <M.Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.root}
              onClick={criarLista}
              disabled={!title}
            >
              Salvar lista
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
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
              classNamePrefix="mySelect"
            />
          </P.DivProdutos>
          <P.DivProdutos>
            <InputGroup size="lg">
              <InputGroup.Text>Quantidade</InputGroup.Text>
              <FormControl
                aria-label="First name"
                onChange={event => setQuantidade(event.target.value)}
                value={quantidade}
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
            <Button variant="primary" size="lg" onClick={adicionarProduto}>
              Adicionar
            </Button>
          </P.DivProdutosBotao>
        </P.ContainerProdutos>
        <P.ContainerTabela>
          <Tabela
            dados={produtoLista}
            cabecalho={['Nome', 'Quantidade', 'Unidade - Medida']}
          />
        </P.ContainerTabela>
      </P.Container>
    </App>
  )
}

export default NovaListaPadrao
