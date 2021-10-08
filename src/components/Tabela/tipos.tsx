export interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

export interface Dados {
  name: string
  code: string
  population: number
  size: number
  density: number
}

export interface PropsTable {
  cabecalho: String[]
  dados?: any
}
