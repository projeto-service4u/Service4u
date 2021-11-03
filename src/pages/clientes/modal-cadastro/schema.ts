import * as Yup from 'yup'

export const formCadastroClienteSchema = Yup.object().shape({
  nome: Yup.string().required('Obrigatório'),
  email: Yup.string().email().required('Obrigatório'),
  telefone: Yup.string().required('Obrigatório')
})
