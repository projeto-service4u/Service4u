import { ListaProdutos } from '../../Produtos/tipos'

export interface ListaPadrao {
  uid: string
  nome: string
  produtos: ListaProdutos[]
}
