import * as Yup from 'yup'

export const formProdutoSchema = Yup.object().shape({
  produto: Yup.string().required('Obrigatório'),
  medida: Yup.string().required('Obrigatório')
})
