import { ListaPadrao } from '../listas/nova-lista-padrao/tipos'

export interface Cliente {
  uid?: string
  nome: string
  email: string
  telefone: string
  dataUltimaLista?: Date
  listaServicos?: ListaPadrao[]
}
