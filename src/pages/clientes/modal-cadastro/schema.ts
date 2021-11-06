import * as Yup from 'yup'

export const formCadastroClienteSchema = Yup.object().shape({
  nome: Yup.string().required('Obrigatório'),
  email: Yup.string().email().required('Obrigatório'),
  telefone: Yup.string()
    .matches(/^[0-9]+$/, 'Apenas números')
    .min(10, 'mínimo 10 dígitos ')
    .max(11, 'máximo 11 dígitos')
    .required('Obrigatório')
})
