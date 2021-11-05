import React, { useEffect } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'

import { useFormik } from 'formik'

import { database, firebase } from '../../../services/firebase'
import { formCadastroClienteSchema } from './schema'
import { Container } from './styles'

const ModalCadastro: React.FC<any> = props => {
  const initialValues = {
    nome: '',
    email: '',
    telefone: ''
  }

  const history = useHistory()

  useEffect(() => {
    formik.setValues({
      nome: '',
      email: '',
      telefone: ''
    })

    console.log()
  }, [])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formCadastroClienteSchema,
    onSubmit: (values, { resetForm }) => {
      const clientesRef = database.ref('/clientes')
      clientesRef.push({
        clienteNome: values.nome,
        clienteEmail: values.email,
        clienteTelefone: values.telefone
      })
      toast.success('Cliente criado com sucesso', {
        icon: '🚀',
        theme: 'colored'
      })
      resetForm()
    }
  })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ToastContainer />
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adicionar novo cliente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="Nome do cliente"
                    name="nome"
                    onChange={formik.handleChange}
                    value={formik.values.nome}
                  />
                </Col>
                <Col>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="E-mail do cliente"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Col>
                <Col>
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="Telefone do cliente"
                    name="telefone"
                    onChange={formik.handleChange}
                    value={formik.values.telefone}
                  />
                </Col>
                <Col
                  style={{ textAlign: 'center', alignSelf: 'flex-end' }}
                  xs
                  lg="2"
                >
                  <Button
                    size="lg"
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                  >
                    Salvar
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Fechar
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}

export default ModalCadastro
