import { ListaProdutos } from '../../produtos/tipos'

export interface ListaPadrao {
  uid?: string
  nome: string
  produtos: ListaProdutos[]
}
