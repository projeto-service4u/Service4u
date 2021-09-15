import React, { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import { FormControl, TextField } from '@material-ui/core'
import clsx from 'clsx'
import { useFormik } from 'formik'

import s4uLogo from '../../assets/icones/s4uLogo.svg'
import Botao from '../../components/Botao'
import AuthContext from '../../contexts/authContext'
import { formSchema } from './schema'
import { Container, useStyles } from './styles'
import { FormLogin } from './tipos'

const Login: React.FC = () => {
  const context = useContext(AuthContext)

  const initialValues: FormLogin = {
    email: '',
    senha: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: values => {
      context.Login(values.email, values.senha)
    }
  })

  useEffect(() => {
    formik.setValues({
      email: '',
      senha: ''
    })
  }, [])

  const classes = useStyles()

  return (
    <Container>
      <div className="container-logo">
        <img src={s4uLogo} alt="Service4U" />
        <strong>Service 4U</strong>
        <ToastContainer />
      </div>
      <main>
        <div className="main-content">
          <form noValidate onSubmit={formik.handleSubmit}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              required
            >
              <TextField
                required
                size="medium"
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email && Boolean(formik.errors.email)
                }
                InputLabelProps={{
                  style: { fontSize: 14, fontFamily: 'Poppins' }
                }}
                InputProps={{
                  style: { fontSize: 14, fontFamily: 'Poppins' }
                }}
              />
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <TextField
                required
                type="password"
                id="senha"
                label="Senha"
                variant="outlined"
                name="senha"
                autoFocus
                className="inputSenha"
                onChange={formik.handleChange}
                value={formik.values.senha}
                error={formik.touched.senha && Boolean(formik.errors.senha)}
                helperText={formik.touched.senha && formik.errors.senha}
                InputLabelProps={{
                  style: { fontSize: 14, fontFamily: 'Poppins' }
                }}
                InputProps={{
                  style: { fontSize: 14, fontFamily: 'Poppins' }
                }}
              />
            </FormControl>
            <Botao type="submit" disabled={!(formik.isValid && formik.dirty)}>
              Login
            </Botao>
          </form>
        </div>
      </main>
    </Container>
  )
}

export default Login
