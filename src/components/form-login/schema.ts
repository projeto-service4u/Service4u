import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  senha: Yup.string().required('Obrigatório')
})
