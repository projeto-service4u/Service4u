import { ListaProdutos } from '../../produtos/tipos'

export interface ListaPadrao {
  uid?: string
  date?: string
  nome: string
  produtos: ListaProdutos[]
}
