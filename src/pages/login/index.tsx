import React, { useContext, useEffect } from 'react'

import { FormControl, InputAdornment, TextField } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  AccountCircle,
  AlternateEmail,
  AlternateEmailOutlined
} from '@material-ui/icons'
import clsx from 'clsx'
import { useFormik } from 'formik'

import s4uLogo from '../../assets/icones/s4uLogo.svg'
import Botao from '../../components/Botao'
import AuthContext from '../../contexts/authContext'
import { formSchema } from './schema'
import { Container } from './styles'
import { FormLogin } from './tipos'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      marginTop: theme.spacing(2)
    },
    withoutLabel: {
      marginTop: theme.spacing(2)
    },
    textField: {
      width: '25ch'
    }
  })
)

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
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                autoFocus
                className="inputEmail"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
